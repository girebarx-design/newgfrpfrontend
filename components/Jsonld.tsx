import { SITE_URL, SITE_NAME, ORG_LEGAL_NAME } from "@/lib/site";

/** Structured data. The old site emitted none, so nothing could be cited. */
export function Jsonld({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export const organisation = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  "@id": `${SITE_URL}/#organisation`,
  name: SITE_NAME,
  legalName: ORG_LEGAL_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/img/og.jpg`,
  image: `${SITE_URL}/img/og.jpg`,
  telephone: "+91-95300-13034",
  email: "partner@gfrpindia.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Plot 8B & 8C, Sector 3, Pithampur",
    addressLocality: "Pithampur",
    addressRegion: "Madhya Pradesh",
    postalCode: "454775",
    addressCountry: "IN",
  },
  areaServed: { "@type": "Country", name: "India" },
  sameAs: [
    "https://www.youtube.com/@compositetechrebar66",
    "https://composite-tech.com",
    "https://rebarx.in",
  ],
  knowsAbout: [
    "GFRP rebar manufacturing",
    "Pultrusion production lines",
    "IS 18256",
    "Composite reinforcement",
  ],
  description:
    "India partner for Composite Tech GFRP rebar production lines. We manufacture GFRP rebar in Pithampur on the same line we sell.",
};

export function breadcrumb(trail: [string, string][]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map(([name, path], i) => ({
      "@type": "ListItem",
      position: i + 1,
      name,
      item: `${SITE_URL}${path}`,
    })),
  };
}
