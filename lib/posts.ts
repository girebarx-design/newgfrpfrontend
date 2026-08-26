import { withCmsOverride } from "./cms";

export type Block = { t: "p" | "h"; x: string };
export type Post = {
  slug: string;
  title: string;
  summary: string;
  date: string;      // ISO
  body: Block[];
};

/**
 * Posts committed to the repo. Blocks rather than markdown so there is no
 * parser and no dependency — a post is data, and it renders the same whether
 * or not anything else is reachable.
 */
import { posts as filePosts } from "../content/posts";

type CmsDoc = { slug?: string; title?: string; excerpt?: string; createdAt?: string };

/** File posts always render. CMS posts are added to them, never replace them. */
export async function getPosts(): Promise<Post[]> {
  const extra = await withCmsOverride<Post[]>(
    "/api/blogs?limit=100&where[isActive][equals]=true",
    [],
    (json) => {
      const docs = (json as { docs?: CmsDoc[] })?.docs;
      if (!Array.isArray(docs)) return null;
      return docs
        .filter((d) => typeof d.slug === "string" && d.slug.length > 0)
        .map((d) => ({
          slug: String(d.slug),
          title: d.title ?? String(d.slug),
          summary: d.excerpt ?? "",
          date: d.createdAt ?? new Date(0).toISOString(),
          body: [] as Block[],
        }));
    }
  );

  const seen = new Set(filePosts.map((p) => p.slug));
  const merged = [...filePosts, ...extra.filter((p) => !seen.has(p.slug))];
  return merged.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPost(slug: string): Promise<Post | null> {
  return (await getPosts()).find((p) => p.slug === slug) ?? null;
}
