import { SITE_URL, SITE_NAME, ORG_LEGAL_NAME } from "@/lib/site";
import { OUR_COORDS } from "@/content/site";

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
  geo: { "@type": "GeoCoordinates", latitude: OUR_COORDS.lat, longitude: OUR_COORDS.lng },
  areaServed: { "@type": "Country", name: "India" },
  sameAs: [
    "https://www.youtube.com/@compositetechrebar66",
    "https://composite-tech.com",
    "https://rebarx.in",
  ],
  knowsAbout: [
    "GFRP rebar manufacturing",
    "FRP rebar machine",
    "GFRP rebar production lines",
    "FRP rebar production lines",
    "GFRP rebar machine lines in India",
    "Pultrusion production lines",
    "Pultrusion machinery",
    "IS 18256:2023",
    "Composite reinforcement machinery",
    "CNC bent GFRP stirrup machines",
    "GFRP reinforcing mesh machines",
  ],
  description:
    "India partner for Composite Tech GFRP rebar production lines. We manufacture GFRP rebar in Pithampur on the same line we sell.",
};

export const productsCatalog = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Composite Tech GFRP & FRP Rebar Machinery Lines",
  numberOfItems: 5,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Composite Tech CT2 GFRP Rebar Production Line",
      url: `${SITE_URL}/machines/ct2`,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Composite Tech CT4 GFRP Rebar Production Line",
      url: `${SITE_URL}/machines/ct4`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Composite Tech CT6 Industrial GFRP Rebar Line",
      url: `${SITE_URL}/machines/ct6`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Composite Tech CNC Bent Element Line",
      url: `${SITE_URL}/machines/bent`,
    },
    {
      "@type": "ListItem",
      position: 5,
      name: "Composite Tech CT1M / CT2M GFRP Mesh Production Line",
      url: `${SITE_URL}/machines/mesh`,
    },
  ],
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
