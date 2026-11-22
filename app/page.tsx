import Link from "next/link";
import HeroVideo from "@/components/HeroVideo";
import { Nav, Foot } from "@/components/Chrome";
import { Jsonld, organisation, productsCatalog } from "@/components/Jsonld";
import { HERO, FACTS, HOME_ROWS, COUNTRIES_NOTE, BIAS, MACHINES } from "@/content/site";

export const metadata = {
  title: "GFRP & FRP Rebar Production Lines in India | Composite Tech Machines",
  description:
    "We manufacture GFRP rebar on a Composite Tech line at our own factory in Pithampur. Continuous pultrusion machinery (CT2, CT4, CT6), CNC stirrup benders, and mesh lines for IS 18256 compliance.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Jsonld data={organisation} />
      <Jsonld data={productsCatalog} />
      <Nav here="/" />
      <main>
        <section className="lat">
          <HeroVideo />
          <div className="veil" />
          <div className="say">
            <span className="k">{HERO.eyebrow}</span>
            <h1>
              {HERO.title} <em>{HERO.titleQuiet}</em>
            </h1>
            <p className="sub">{HERO.sub}</p>
            <div className="acts">
              <Link className="lnk" href="/machines">Explore machine lines →</Link>
              <Link className="lnk q" href="/visit">Watch it run in Pithampur</Link>
            </div>
          </div>
        </section>

        <section className="rows">
          {HOME_ROWS.map((r) => (
            <div key={r.title} style={{ display: "contents" }}>
              <span className="rlab">{r.label}</span>
              <div className="rval">
                <strong>{r.title}</strong>
                <span>{r.body}</span>
              </div>
            </div>
          ))}
        </section>

        <section className="facts">
          {FACTS.map((f) => (
            <div className="f" key={f.label}>
              <b>{f.value}</b>
              <span>{f.label}</span>
            </div>
          ))}
        </section>

        <section className="body" style={{ paddingTop: 48, paddingBottom: 24 }}>
          <span className="k">The Machines</span>
          <h2 className="grp" style={{ marginTop: 8, marginBottom: 12 }}>
            GFRP & FRP Rebar Machinery Lines
          </h2>
          <p style={{ fontSize: 16, color: "var(--dim)", fontWeight: 300, maxWidth: "56ch", marginBottom: 32 }}>
            Engineered in Moldova by Composite Tech and running commercially at our Pithampur plant.
            High-speed multi-strand pultrusion lines, CNC stirrup benders, and welded composite mesh equipment.
          </p>

          <div style={{ display: "grid", gap: 0 }}>
            {MACHINES.map((m) => (
              <div className="mach" key={m.slug}>
                <div>
                  <h3 style={{ fontSize: 26, margin: 0, fontWeight: 700 }}>
                    <Link href={`/machines/${m.slug}`} style={{ color: "inherit" }}>
                      {m.name}
                    </Link>
                  </h3>
                  <span className="role">{m.role}</span>
                  <p className="blurb">{m.blurb}</p>
                  <p style={{ marginTop: 14 }}>
                    <Link className="lnk" href={`/machines/${m.slug}`}>
                      View specifications →
                    </Link>
                  </p>
                </div>
                <div className="specs">
                  {m.specs.map(([v, l]) => (
                    <div className="spec" key={l}>
                      <b>{v}</b>
                      <span>{l}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="body" style={{ paddingTop: 20, paddingBottom: 10 }}>
          <h2 className="grp" style={{ marginTop: 0 }}>Why we are doing this</h2>
          <p style={{ fontSize: 16.5, color: "var(--soft)", fontWeight: 300, maxWidth: "46rem", lineHeight: 1.7 }}>
            {BIAS}
          </p>
        </section>

        <p className="note">{COUNTRIES_NOTE}</p>
      </main>
      <Foot />
    </>
  );
}
