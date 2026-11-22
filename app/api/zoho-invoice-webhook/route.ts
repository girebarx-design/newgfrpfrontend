import { NextResponse } from "next/server";

const ERPNEXT_HOST = process.env.ERPNEXT_HOST || "https://rebarx.erpnext.space";
const ERPNEXT_API_KEY = process.env.ERPNEXT_API_KEY || "f2565987a03f434";
const ERPNEXT_API_SECRET = process.env.ERPNEXT_API_SECRET || "06047453e83318e";
const WEBHOOK_SECRET = process.env.ZOHO_WEBHOOK_SECRET || "rebarx_sync_sec_9a8f27b14";

const DEFAULT_HEADERS = {
  Authorization: `token ${ERPNEXT_API_KEY}:${ERPNEXT_API_SECRET}`,
  "Content-Type": "application/json",
  "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko)",
};

interface ZohoLineItem {
  name?: string;
  item_name?: string;
  description?: string;
  quantity?: number | string;
  qty?: number | string;
  rate?: number | string;
  price?: number | string;
  item_price?: number | string;
}

interface ZohoInvoicePayload {
  invoice_number?: string;
  INVOICE_NUMBER?: string;
  number?: string;
  customer_name?: string;
  CUSTOMER_NAME?: string;
  gst_no?: string;
  gstin?: string;
  GSTIN?: string;
  date?: string;
  DATE?: string;
  due_date?: string;
  DUE_DATE?: string;
  eway_bill_number?: string;
  ewaybill?: string;
  CF?: { E_WAY_BILL_NO?: string };
  place_of_supply?: string;
  PLACE_OF_SUPPLY?: string;
  total?: number | string;
  TOTAL?: number | string;
  line_items?: ZohoLineItem[] | string;
  items?: ZohoLineItem[] | string;
  item_details?: ZohoLineItem[] | string;
  invoice?: ZohoInvoicePayload;
  JSONString?: string;
}

function mapItemCode(name: string, desc: string): string {
  const text = `${name} ${desc}`.toLowerCase();
  if (text.includes("12mm") || text.includes("12 mm")) return "GFRP-REBAR-12MM";
  if (text.includes("10mm") || text.includes("10 mm")) return "GFRP-REBAR-10MM";
  if (text.includes("7mm") || text.includes("7 mm")) return "GFRP-REBAR-7MM";
  if (text.includes("14mm") && text.includes("5ft")) return "FRP-ROD-14MM-5FT";
  if (text.includes("14mm") && text.includes("6ft")) return "FRP-ROD-14MM-6FT";
  if (text.includes("14mm") || text.includes("14 mm")) return "FRP-ROD-14MM-5FT";
  if (text.includes("16mm") || text.includes("16 mm")) return "FRP-ROD-16MM-6FT";
  if (text.includes("8mm") || text.includes("8 mm")) return "GFRP-REBAR-8MM";
  if (text.includes("transport") || text.includes("freight") || text.includes("shipping")) {
    return "Transport Charges";
  }
  return "GFRP-REBAR-12MM";
}

async function ensureCustomer(customerName: string, gstin?: string): Promise<string> {
  if (!customerName) return "Standard Customer";
  try {
    const encName = encodeURIComponent(customerName.trim());
    const checkRes = await fetch(`${ERPNEXT_HOST}/api/resource/Customer/${encName}`, {
      headers: DEFAULT_HEADERS,
    });
    if (checkRes.ok) return customerName.trim();

    // Create Customer
    const createRes = await fetch(`${ERPNEXT_HOST}/api/resource/Customer`, {
      method: "POST",
      headers: DEFAULT_HEADERS,
      body: JSON.stringify({
        doctype: "Customer",
        customer_name: customerName.trim(),
        customer_group: "Commercial",
        territory: "India",
        customer_type: "Company",
        gstin: gstin || "",
        gst_category: gstin ? "Registered Regular" : "Unregistered",
      }),
    });
    if (createRes.ok) {
      const data = await createRes.json();
      return data.data.name;
    }
  } catch (err) {
    console.error("Error ensuring customer:", err);
  }
  return customerName.trim();
}

export async function POST(req: Request) {
  const url = new URL(req.url);
  const token = url.searchParams.get("secret") || req.headers.get("x-webhook-secret");

  if (token !== WEBHOOK_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let body: ZohoInvoicePayload;
  try {
    const contentType = req.headers.get("content-type") || "";
    if (contentType.includes("application/json")) {
      body = await req.json();
    } else {
      const text = await req.text();
      try {
        body = JSON.parse(text);
      } catch {
        const formData = new URLSearchParams(text);
        const parsed: Record<string, string> = Object.fromEntries(formData.entries());
        if (parsed.JSONString) {
          try {
            body = JSON.parse(parsed.JSONString);
          } catch {
            body = parsed;
          }
        } else {
          body = parsed;
        }
      }
    }
  } catch {
    return NextResponse.json({ error: "Malformed request payload" }, { status: 400 });
  }

  // Support both wrapped invoice objects (body.invoice) and flat payloads
  const inv = body.invoice || body;

  const invoiceNumber = (inv.invoice_number || inv.INVOICE_NUMBER || inv.number || "").trim();
  if (!invoiceNumber) {
    return NextResponse.json({ error: "invoice_number is required" }, { status: 400 });
  }

  // Idempotency: Check if already exists in ERPNext
  try {
    const encInv = encodeURIComponent(invoiceNumber);
    const existing = await fetch(`${ERPNEXT_HOST}/api/resource/Sales%20Invoice/${encInv}`, {
      headers: DEFAULT_HEADERS,
    });
    if (existing.ok) {
      const data = await existing.json();
      return NextResponse.json({
        status: "already_exists",
        message: `Invoice ${invoiceNumber} already exists in ERPNext`,
        docstatus: data.data.docstatus,
      });
    }
  } catch (err) {
    console.error("Idempotency check error:", err);
  }

  const customerName = inv.customer_name || inv.CUSTOMER_NAME || "Cash Customer";
  const gstin = inv.gst_no || inv.gstin || inv.GSTIN || "";
  const finalCustomer = await ensureCustomer(customerName, gstin);

  const postingDate = inv.date || inv.DATE || new Date().toISOString().split("T")[0];
  const dueDate = inv.due_date || inv.DUE_DATE || postingDate;
  const ewaybill = inv.eway_bill_number || inv.ewaybill || inv.CF?.E_WAY_BILL_NO || "";
  const placeOfSupply = inv.place_of_supply || inv.PLACE_OF_SUPPLY || "23-Madhya Pradesh";

  const isMP =
    placeOfSupply.startsWith("23") ||
    placeOfSupply.toLowerCase().includes("madhya pradesh") ||
    placeOfSupply.toLowerCase().includes("mp");

  const taxesTemplate = isMP
    ? "Output GST In-State - 18% - CVPL"
    : "Output GST Out-State - 18% - CVPL";

  const taxes = isMP
    ? [
        {
          charge_type: "On Net Total",
          account_head: "Output Tax CGST - CVPL",
          rate: 9,
          description: "Output Tax CGST - CVPL",
        },
        {
          charge_type: "On Net Total",
          account_head: "Output Tax SGST - CVPL",
          rate: 9,
          description: "Output Tax SGST - CVPL",
        },
      ]
    : [
        {
          charge_type: "On Net Total",
          account_head: "Output Tax IGST - CVPL",
          rate: 18,
          description: "IGST @ 18%",
        },
      ];

  // Parse Line Items
  let rawItems = inv.line_items || inv.items || inv.item_details || [];
  if (typeof rawItems === "string") {
    try {
      rawItems = JSON.parse(rawItems);
    } catch {
      rawItems = [];
    }
  }

  const items = (Array.isArray(rawItems) ? rawItems : []).map((i: ZohoLineItem) => {
    const itemName = i.name || i.item_name || i.description || "GFRP Rebar";
    const itemDesc = i.description || i.item_name || itemName;
    const qty = parseFloat(String(i.quantity || i.qty || 1));
    const rate = parseFloat(String(i.rate || i.price || i.item_price || 0));
    const itemCode = mapItemCode(itemName, itemDesc);

    return {
      item_code: itemCode,
      item_name: itemName,
      description: itemDesc,
      qty,
      rate,
      uom: "Kg",
      stock_uom: "Kg",
      conversion_factor: 1,
      warehouse: "Finished Goods - CVPL",
      income_account: "Sales - CVPL",
    };
  });

  const totalAmount = parseFloat(String(inv.total || inv.TOTAL || 0));

  const doc = {
    doctype: "Sales Invoice",
    __newname: invoiceNumber,
    customer: finalCustomer,
    set_posting_time: 1,
    posting_date: postingDate,
    posting_time: "12:00:00",
    due_date: dueDate,
    ewaybill,
    company: "Credific Ventures Private Limited",
    company_address: "CREDIFIC VENTURES PRIVATE LIMITED-Billing",
    update_stock: 1,
    set_warehouse: "Finished Goods - CVPL",
    taxes_and_charges: taxesTemplate,
    tc_name: "Standard Sales Terms - GFRP Products",
    items: items.length > 0 ? items : [
      {
        item_code: "GFRP-REBAR-12MM",
        qty: 1,
        rate: 100,
        warehouse: "Finished Goods - CVPL",
        income_account: "Sales - CVPL",
      }
    ],
    taxes,
    payment_schedule: [
      {
        due_date: dueDate,
        invoice_portion: 100,
        payment_amount: totalAmount > 0 ? totalAmount : undefined,
      },
    ],
  };

  try {
    const createRes = await fetch(`${ERPNEXT_HOST}/api/resource/Sales%20Invoice`, {
      method: "POST",
      headers: DEFAULT_HEADERS,
      body: JSON.stringify(doc),
    });

    if (!createRes.ok) {
      const errText = await createRes.text();
      return NextResponse.json(
        { error: "ERPNext creation failed", details: errText },
        { status: 502 }
      );
    }

    const createdData = await createRes.json();
    return NextResponse.json({
      status: "success",
      erpnext_invoice: createdData.data.name,
      docstatus: createdData.data.docstatus, // 0 = Draft
      message: `Invoice ${createdData.data.name} created as DRAFT in ERPNext.`,
    });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    return NextResponse.json(
      { error: "Internal error syncing to ERPNext", message: msg },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    status: "ok",
    service: "RebarX Zoho Books to ERPNext Invoicing Webhook Bridge",
    endpoint: "/api/zoho-invoice-webhook",
    auth: "query param ?secret=... required",
  });
}
