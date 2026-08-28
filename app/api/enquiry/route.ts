import { NextResponse } from "next/server";
import { CMS_URL } from "@/lib/site";

/**
 * Lead capture.
 *
 * The old form posted straight to Payload, and the notification email was sent
 * by an afterChange hook on that collection — so when the database went down,
 * the save failed, the hook never fired, and eleven days of enquiries vanished
 * with nothing to show for them.
 *
 * Here the lead is written to the CMS if it is reachable, and the response
 * tells the visitor it arrived either way. A failed save is logged loudly
 * rather than swallowed, and the page always offers WhatsApp as the route that
 * cannot break.
 */
export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Malformed request" }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const phone = String(body.phone ?? "").trim();
  const email = String(body.email ?? "").trim();
  if (!name || !phone || !email) {
    return NextResponse.json({ error: "Name, mobile and email are required" }, { status: 400 });
  }

  const [first, ...rest] = name.split(/\s+/);
  const payload = {
    first_name: first,
    last_name: rest.join(" ") || "-",
    email_address: email,
    phone,
    city: String(body.business ?? "").slice(0, 120),
    message: [
      `Business: ${body.business ?? "-"}`,
      `Stage: ${body.purpose ?? "-"}`,
      String(body.message ?? "").trim(),
    ].filter(Boolean).join("\n"),
  };

  try {
    const res = await fetch(`${CMS_URL}/api/contact-submissions`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      cache: "no-store",
    });
    if (!res.ok) {
      console.error("ENQUIRY NOT SAVED", res.status, JSON.stringify(payload));
      return NextResponse.json({ ok: true, stored: false });
    }
  } catch (err) {
    console.error("ENQUIRY NOT SAVED", err, JSON.stringify(payload));
    return NextResponse.json({ ok: true, stored: false });
  }

  return NextResponse.json({ ok: true, stored: true });
}
