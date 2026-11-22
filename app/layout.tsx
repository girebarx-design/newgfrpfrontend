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
    default: "GFRP & FRP Rebar Production Lines in India | GFRP India",
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Official India partner for Composite Tech GFRP & FRP rebar production lines. High-speed multi-strand pultrusion machinery, CNC stirrup benders, and mesh lines running at our Pithampur plant.",
  keywords: [
    "GFRP rebar machine",
    "FRP rebar machine",
    "GFRP rebar production line",
    "FRP rebar production line",
    "GFRP rebar manufacturing machine",
    "pultrusion machine India",
    "GFRP machine price in India",
    "Composite Tech India",
    "GFRP rebar plant setup",
    "IS 18256 rebar machine",
    "GFRP mesh welding machine",
    "CNC bent GFRP stirrup machine"
  ],
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
    icon: [
      { url: "/img/favicon-v2.png", sizes: "32x32", type: "image/png" },
      { url: "/img/favicon-v2-64.png", sizes: "64x64", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
      { url: "/img/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/img/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/img/apple-touch-icon.png",
  },
  robots: { index: true, follow: true },
  other: {
    ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
      ? { "google-site-verification": process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
      : {}),
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
