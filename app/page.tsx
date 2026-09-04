import Image from "next/image";
import Link from "next/link";
import { Nav, Foot } from "@/components/Chrome";
import { Jsonld, organisation } from "@/components/Jsonld";
import { HERO, FACTS, HOME_ROWS, COUNTRIES_NOTE, BIAS } from "@/content/site";

export const metadata = {
  title: "GFRP rebar production lines in India | GFRP India",
  description:
    "We picked this Composite Tech line for our own factory in Pithampur before we ever sold one. Machine detail, a 17-point audit for any line, and what starting a plant actually takes.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Jsonld data={organisation} />
      <Nav here="/" />
      <main>
        <section className="lat">
          <Image
            className="shot"
            src="/img/line-pithampur.jpg"
            alt="Composite Tech production line running at the Pithampur plant"
            width={2049}
            height={1537}
            priority
          />
          <div className="veil" />
          <div className="say">
            <span className="k">{HERO.eyebrow}</span>
            <h1>
              {HERO.title} <em>{HERO.titleQuiet}</em>
            </h1>
            <p className="sub">{HERO.sub}</p>
            <div className="acts">
              <Link className="lnk" href="/start-a-plant">See what it takes →</Link>
              <Link className="lnk q" href="/visit">Watch it run</Link>
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

        <section className="body" style={{ paddingTop: 46, paddingBottom: 10 }}>
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
