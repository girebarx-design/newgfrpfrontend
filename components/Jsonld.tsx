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
  "@type": "Organization",
  name: SITE_NAME,
  legalName: ORG_LEGAL_NAME,
  url: SITE_URL,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Pithampur",
    addressRegion: "Madhya Pradesh",
    addressCountry: "IN",
  },
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
