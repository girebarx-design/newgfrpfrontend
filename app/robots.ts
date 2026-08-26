import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// Replaces the committed public/robots.txt, which shipped
// "Sitemap: http://localhost:3000/sitemap.xml" to production.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
