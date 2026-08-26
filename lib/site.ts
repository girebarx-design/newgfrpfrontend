/**
 * One place for the site's identity.
 *
 * The previous build fell back to "http://localhost:3000" when
 * NEXT_PUBLIC_SITE_URL was unset — which it was — so the live robots.txt and
 * every sitemap URL pointed at localhost and Google could reach none of it.
 * Falling back to the real origin means a missing env var degrades to
 * "correct" rather than "invisible".
 *
 * www is canonical: the apex 308-redirects to www, so declaring the apex
 * pointed crawlers at a redirect.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.gfrpindia.com"
).replace(/\/$/, "");

export const CMS_URL = (
  process.env.NEXT_PUBLIC_PAYLOAD_URL || "https://newgfrpbackend.vercel.app"
).replace(/\/$/, "");

export const SITE_NAME = "GFRP India";
export const ORG_LEGAL_NAME = "Credific Ventures Private Limited";
export const WHATSAPP_NUMBER = "919530013034";
export const WHATSAPP_TEXT =
  "Hi, I am looking at setting up a GFRP rebar plant. Please send me details.";
export const CONTACT_EMAIL = "girebarx@gmail.com";
