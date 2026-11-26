import Link from "next/link";
import { Nav, Foot } from "@/components/Chrome";

export const metadata = {
  title: "Page Not Found (404) | GFRP India",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <Nav />
      <main style={{ minHeight: "65vh", padding: "120px 24px 60px", maxWidth: "900px", margin: "0 auto" }}>
        <span className="k" style={{ display: "inline-block", marginBottom: 16 }}>404 · Not Found</span>
        <h1 style={{ fontSize: "clamp(32px, 5vw, 54px)", lineHeight: 1.1, marginBottom: 20 }}>
          This page does not exist or has moved.
        </h1>
        <p style={{ fontSize: "17px", color: "var(--dim)", maxWidth: "60ch", marginBottom: 36, lineHeight: 1.6 }}>
          The link you followed may be outdated, or the page has been restructured. Explore our core machine lines, plant setup guides, or recent technical writing:
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
          <Link className="lnk" href="/machines">Explore Machine Lines →</Link>
          <Link className="lnk" href="/before-you-buy">17-Point Line Audit →</Link>
          <Link className="lnk" href="/start-a-plant">Start a Plant in India →</Link>
          <Link className="lnk" href="/blog">Technical Blog →</Link>
          <Link className="lnk q" href="/">Back to Home</Link>
        </div>
      </main>
      <Foot />
    </>
  );
}
