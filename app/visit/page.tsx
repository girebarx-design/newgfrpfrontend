import { Spread } from "@/components/Spread";
import { Jsonld, breadcrumb } from "@/components/Jsonld";
import { VISIT, CT_CONTACT, OUR_ADDRESS } from "@/content/site";
import EnquiryForm from "@/components/EnquiryForm";
import { WHATSAPP_NUMBER, WHATSAPP_TEXT } from "@/lib/site";

export const metadata = {
  title: "Visit the plant in Pithampur",
  description:
    "Come and watch four hours of continuous GFRP rebar production at Pithampur, Madhya Pradesh. Bring a stopwatch and a weighing scale.",
  alternates: { canonical: "/visit" },
};

export default function Visit() {
  const wa = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_TEXT)}`;
  return (
    <>
      <Jsonld data={breadcrumb([["Home","/"],["Visit us","/visit"]])} />
      <Spread
        here="/visit" eyebrow="Visit"
        title="Come and stand next to it."
        answer="Four hours of continuous production, your diameter. We would rather you measured than took our word for it."
        img="/img/store.jpg" alt="Raw material store at the Pithampur plant"
        cap="Raw material store · Pithampur"
      >
        <div className="lst">
          {VISIT.map(([lab, t, d]) => (
            <div key={t} style={{ display: "contents" }}>
              <span className="sec">{lab}</span>
              <div className="itm"><strong>{t}</strong><span>{d}</span></div>
            </div>
          ))}
        </div>

        <a className="wa" href={wa} target="_blank" rel="noopener">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
            <path d="M12 2A10 10 0 0 0 3.5 17.2L2 22l4.9-1.5A10 10 0 1 0 12 2zm0 18.2c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3 .9.9-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2z" />
            <path d="M17.5 14.4c-.3-.2-1.8-.9-2-1-.3-.1-.5-.2-.7.1s-.8 1-.9 1.2c-.2.2-.3.2-.6.1a8 8 0 0 1-2.4-1.5 9 9 0 0 1-1.7-2.1c-.2-.3 0-.5.1-.6l.5-.6.3-.5v-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4 0-.2-.2-.2-.5-.4z" />
          </svg>
          <span>Message us on WhatsApp</span>
          <em>{WHATSAPP_NUMBER.slice(2)}</em>
        </a>

        <div style={{ marginTop: 46, maxWidth: "44rem" }}>
          <h2 className="grp">Or tell us where you are</h2>
          <p style={{ fontSize: 15, color: "var(--dim)", fontWeight: 300 }}>
            Five fields. It tells us enough to send you something useful rather than a brochure.
          </p>
          <EnquiryForm />
        </div>

        <div style={{ marginTop: 46, maxWidth: "44rem" }}>
          <h2 className="grp">Where we are</h2>
          <address className="addr" style={{ fontStyle: "normal" }}>
            {OUR_ADDRESS.map((l) => <span key={l} style={{ display: "block" }}>{l}</span>)}
          </address>
        </div>

        <div style={{ marginTop: 46, maxWidth: "44rem" }}>
          <h2 className="grp">Don’t take our word for it. Ring the factory.</h2>
          <p style={{ fontSize: 15, color: "var(--dim)", fontWeight: 300, marginBottom: 18 }}>
            Composite-Tech are in Moldova and they answer. Ask them whatever you would ask us,
            including what they think of us.
          </p>
          <div className="specs">
            {CT_CONTACT.map(([l, v]) => (
              <div className="spec" key={l}><b style={{ fontSize: 13.5 }}>{v}</b><span>{l}</span></div>
            ))}
          </div>
          <p style={{ fontSize: 12.5, color: "#6C7079", fontWeight: 300, marginTop: 10 }}>
            Published by Composite-Tech at composite-tech.com/contacts
          </p>
        </div>
      </Spread>
    </>
  );
}
