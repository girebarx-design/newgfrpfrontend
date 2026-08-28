import Link from "next/link";
import { Spread } from "@/components/Spread";
import { Jsonld, breadcrumb } from "@/components/Jsonld";
import { MACHINES, STATIONS, MATERIALS_NOTE } from "@/content/site";

export const metadata = {
  title: "GFRP rebar production lines — CT2, CT4, CT6, bent and mesh",
  description:
    "Composite Tech straight, bent and mesh lines. Bars at once, diameter range, footprint, connected power, and the eight stations inside the line.",
  alternates: { canonical: "/machines" },
};

export default function Machines() {
  return (
    <>
      <Jsonld data={breadcrumb([["Home","/"],["Machines","/machines"]])} />
      <Spread
        here="/machines" eyebrow="The machines"
        title="Five lines. One of them is probably yours."
        answer="Physical specification and what sits inside each line. Output figures and prices come with a conversation, not from a web page."
        img="/img/line-drawing.jpg" alt="Composite Tech FRP rebar production line general arrangement drawing"
        cap="CT4 line · general arrangement"
      >
        {MACHINES.map((m) => (
          <div className="mach" key={m.slug}>
            <div>
              <h2><Link href={`/machines/${m.slug}`} style={{ color: "inherit" }}>{m.name}</Link></h2>
              <span className="role">{m.role}</span>
              <p className="blurb">{m.blurb}</p>
            </div>
            <div className="specs">
              {m.specs.map(([v, l]) => (
                <div className="spec" key={l}><b>{v}</b><span>{l}</span></div>
              ))}
            </div>
          </div>
        ))}

        <div style={{ marginTop: 52 }}>
          <h2 className="grp">Inside the line</h2>
          <p style={{ fontSize: 15, color: "var(--dim)", fontWeight: 300, maxWidth: "52ch", marginBottom: 18 }}>
            Eight stations in a row. Each one can spoil what the one before it did, which is why a
            four-hour run tells you more than a specification sheet.
          </p>
          <div className="stations">
            {STATIONS.map(([n, t, d]) => (
              <div className="stn" key={n}><i>{n}</i><b>{t}</b><span>{d}</span></div>
            ))}
          </div>
          <p style={{ fontSize: 13.5, color: "var(--dim)", fontWeight: 300, marginTop: 16 }}>
            {MATERIALS_NOTE}
          </p>
        </div>
      </Spread>
    </>
  );
}
