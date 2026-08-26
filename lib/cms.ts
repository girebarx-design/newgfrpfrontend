import { CMS_URL } from "./site";

/**
 * Files are the source of truth; the CMS is an override.
 *
 * The August 2026 outage happened because every page fetched from Payload and
 * rendered an empty state when the fetch failed. A deleted database therefore
 * blanked the entire site. Here the local value is always returned unless the
 * CMS answers with something usable, so the worst a dead backend can do is
 * leave the site showing its committed content.
 */
export async function withCmsOverride<T>(
  path: string,
  fallback: T,
  pick: (json: unknown) => T | null,
  revalidate = 300
): Promise<T> {
  try {
    const res = await fetch(`${CMS_URL}${path}`, { next: { revalidate } });
    if (!res.ok) return fallback;
    const picked = pick(await res.json());
    return picked ?? fallback;
  } catch {
    return fallback;
  }
}
