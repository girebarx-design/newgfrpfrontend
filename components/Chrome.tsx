import Link from "next/link";
import { DISCLOSURE } from "@/content/site";

const NAV = [
  ["/", "Home"],
  ["/machines", "Machines"],
  ["/start-a-plant", "Start a plant"],
  ["/before-you-buy", "Before you buy"],
  ["/blog", "Blog"],
  ["/visit", "Visit us"],
] as const;

export function Nav({ here }: { here?: string }) {
  return (
    <>
      <div className="rail" aria-hidden="true" />
      <Link href="/" className="mark">GFRP<i>INDIA</i></Link>
      <nav className="menu" aria-label="Main">
        {NAV.map(([href, label]) => (
          <Link key={href} href={href} aria-current={here === href ? "page" : undefined}>
            {label}
          </Link>
        ))}
      </nav>
    </>
  );
}

export function Foot() {
  return (
    <footer className="foot">
      <span className="ar" style={{ fontVariationSettings: "'wdth' 120,'wght' 700", fontSize: 18 }}>
        GFRP<i style={{ fontStyle: "normal", color: "var(--o)" }}>INDIA</i>
      </span>
      <p style={{ fontSize: 13.5, color: "var(--dim)", fontWeight: 300, maxWidth: "88ch" }}>
        {DISCLOSURE}
      </p>
      <div className="ln">
        <a href="https://composite-tech.com" target="_blank" rel="noopener">Composite Tech</a>
        <a href="https://www.youtube.com/@compositetechrebar66" target="_blank" rel="noopener">YouTube</a>
        <a href="https://rebarx.in" target="_blank" rel="noopener">rebarx.in</a>
      </div>
    </footer>
  );
}
