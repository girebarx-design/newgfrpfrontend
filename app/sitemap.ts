import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { MACHINES } from "@/content/site";
import { getPosts } from "@/lib/posts";

/**
 * Built from the real route list. The previous sitemap advertised
 * /blogs/<slug> (the route is /blog/<slug>), /products/<slug> and
 * /about/<slug> (neither exists) and /faq (no such page), while omitting the
 * two pages that actually had content.
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const fixed: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE_URL}/machines`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/before-you-buy`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/start-a-plant`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${SITE_URL}/visit`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];

  const machines: MetadataRoute.Sitemap = MACHINES.map((m) => ({
    url: `${SITE_URL}/machines/${m.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const posts: MetadataRoute.Sitemap = (await getPosts()).map((p) => ({
    url: `${SITE_URL}/blog/${encodeURIComponent(p.slug)}`,
    lastModified: new Date(p.date),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...fixed, ...machines, ...posts];
}
