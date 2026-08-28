import Image from "next/image";
import { Nav, Foot } from "@/components/Chrome";
import { Jsonld, organisation } from "@/components/Jsonld";

export function Spread({
  here, eyebrow, title, answer, img, alt, cap, children, note,
}: {
  here: string; eyebrow: string; title: string; answer: string;
  img: string; alt: string; cap: string; children: React.ReactNode; note?: string;
}) {
  return (
    <>
      <Jsonld data={organisation} />
      <Nav here={here} />
      <main>
        <section className="sp">
          <div>
            <span className="k">{eyebrow}</span>
            <h1>{title}</h1>
            <p className="ans">{answer}</p>
          </div>
          <div className="pic">
            <Image className="shot" src={img} alt={alt} width={1200} height={1500} />
            <span className="cap">{cap}</span>
          </div>
        </section>
        {note ? <p className="note">{note}</p> : null}
        <div className="body">{children}</div>
      </main>
      <Foot />
    </>
  );
}

export function List({ rows }: { rows: readonly (readonly [string, string, string])[] }) {
  return (
    <div className="lst">
      {rows.map(([lab, t, d]) => (
        <div key={t} style={{ display: "contents" }}>
          <span className="sec">{lab}</span>
          <div className="itm"><strong>{t}</strong><span>{d}</span></div>
        </div>
      ))}
    </div>
  );
}
