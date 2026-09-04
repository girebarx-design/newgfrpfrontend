import { notFound } from "next/navigation";
import Link from "next/link";
import { Spread } from "@/components/Spread";
import { Jsonld, breadcrumb } from "@/components/Jsonld";
import { MACHINES, STATIONS } from "@/content/site";
import { SITE_URL } from "@/lib/site";

export function generateStaticParams() {
  return MACHINES.map((m) => ({ model: m.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ model: string }> }) {
  const { model } = await params;
  const m = MACHINES.find((x) => x.slug === model);
  if (!m) return {};
  return {
    title: `${m.name} — ${m.role}`,
    description: m.blurb,
    alternates: { canonical: `/machines/${m.slug}` },
  };
}

export default async function Model({ params }: { params: Promise<{ model: string }> }) {
  const { model } = await params;
  const m = MACHINES.find((x) => x.slug === model);
  if (!m) notFound();

  const product = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `Composite Tech ${m.name}`,
    category: "GFRP rebar production line",
    description: m.blurb,
    url: `${SITE_URL}/machines/${m.slug}`,
    brand: { "@type": "Brand", name: "Composite Tech" },
    additionalProperty: m.specs.map(([v, l]) => ({
      "@type": "PropertyValue", name: l, value: v,
    })),
  };

  return (
    <>
      <Jsonld data={product} />
      <Jsonld data={breadcrumb([["Home","/"],["Machines","/machines"],[m.name,`/machines/${m.slug}`]])} />
      <Spread
        here="/machines" eyebrow={m.role} title={m.name} answer={m.blurb}
        img="/img/line-detail.jpg" alt={`Composite Tech ${m.name} line at Pithampur`}
        cap="Drive readout · mid-run"
      >
        <div className="specs">
          {m.specs.map(([v, l]) => (
            <div className="spec" key={l}><b>{v}</b><span>{l}</span></div>
          ))}
        </div>

        <div style={{ marginTop: 46 }}>
          <h2 className="grp">What is in the line</h2>
          <div className="stations">
            {STATIONS.map(([n, t, d]) => (
              <div className="stn" key={n}><i>{n}</i><b>{t}</b><span>{d}</span></div>
            ))}
          </div>
        </div>

        <p style={{ marginTop: 38 }}>
          <Link className="lnk" href="/before-you-buy">Comparing this against a cheaper line? Run these 17 tests →</Link>
        </p>
      </Spread>
    </>
  );
}
