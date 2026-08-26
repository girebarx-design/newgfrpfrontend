import { Spread } from "@/components/Spread";
import { Jsonld, breadcrumb } from "@/components/Jsonld";
import { AUDIT, AUDIT_INTRO } from "@/content/site";
import { SITE_URL } from "@/lib/site";

export const metadata = {
  title: "The 18-point line audit — run it on any GFRP rebar machine",
  description:
    "Eighteen tests to run on any GFRP rebar production line, ours included. Grouped by cost of production, quality and uptime. Names no brand, recommends no machine.",
  alternates: { canonical: "/before-you-buy" },
};

export default function Audit() {
  let n = 0;
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: AUDIT.flatMap((g) =>
      g.items.map(([q, a]) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      }))
    ),
  };

  return (
    <>
      <Jsonld data={faq} />
      <Jsonld data={breadcrumb([["Home","/"],["Before you buy","/before-you-buy"]])} />
      <Spread
        here="/before-you-buy" eyebrow="Before you buy any line"
        title="Eighteen tests. Run them on ours too."
        answer="Grouped the way a buyer actually thinks: what it costs to run, whether the bar passes, and whether the line keeps going."
        img="/img/control-panel.jpg" alt="Drive readout on the line control panel, mid-run"
        cap="Drive readout · mid-run"
      >
        <p style={{ fontSize: 15.5, color: "var(--soft)", fontWeight: 300, maxWidth: "48rem", marginBottom: 8 }}>
          {AUDIT_INTRO}
        </p>
        {AUDIT.map((g) => (
          <section key={g.group}>
            <h2 className="grp">{g.group}</h2>
            <div className="lst">
              {g.items.map(([t, d]) => {
                n += 1;
                return (
                  <div key={t} style={{ display: "contents" }}>
                    <span className="sec">{String(n).padStart(2, "0")}</span>
                    <div className="itm"><strong>{t}</strong><span>{d}</span></div>
                  </div>
                );
              })}
            </div>
          </section>
        ))}
      </Spread>
    </>
  );
}
