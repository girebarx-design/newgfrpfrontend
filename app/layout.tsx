import type { Metadata } from "next";
import { Archivo, Barlow, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SITE_URL, SITE_NAME } from "@/lib/site";

const display = Archivo({ subsets: ["latin"], axes: ["wdth"], variable: "--font-display", display: "swap" });
const body = Barlow({ subsets: ["latin"], weight: ["300","400","500","600"], variable: "--font-body", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400","500"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "GFRP rebar production lines in India | GFRP India",
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Composite Tech GFRP rebar production lines, represented in India by people who run one. Machine specifications, an 18-point audit for any line, and what it takes to start a plant.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_IN",
    url: SITE_URL,
    images: [{ url: "/img/og.jpg", width: 1200, height: 630,
               alt: "Composite Tech GFRP rebar production line running at Pithampur" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/img/og.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/img/og.jpg",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
