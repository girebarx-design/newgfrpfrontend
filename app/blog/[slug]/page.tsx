import { notFound } from "next/navigation";
import Link from "next/link";
import { Spread } from "@/components/Spread";
import { Jsonld, breadcrumb } from "@/components/Jsonld";
import { getPost, getPosts } from "@/lib/posts";
import { SITE_URL, SITE_NAME } from "@/lib/site";

export const revalidate = 300;

export async function generateStaticParams() {
  return (await getPosts()).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = await getPost(slug);
  if (!p) return {};
  return {
    title: p.title,
    description: p.summary,
    alternates: { canonical: `/blog/${p.slug}` },
    openGraph: { type: "article", title: p.title, description: p.summary, publishedTime: p.date },
  };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = await getPost(slug);
  if (!p) notFound();

  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: p.title,
    description: p.summary,
    datePublished: p.date,
    dateModified: p.date,
    url: `${SITE_URL}/blog/${p.slug}`,
    author: { "@type": "Organization", name: SITE_NAME },
    publisher: { "@type": "Organization", name: SITE_NAME },
  };

  return (
    <>
      <Jsonld data={article} />
      <Jsonld data={breadcrumb([["Home","/"],["Blog","/blog"],[p.title,`/blog/${p.slug}`]])} />
      <Spread
        here="/blog"
        eyebrow={new Date(p.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
        title={p.title} answer={p.summary}
        img="/img/control-panel.jpg" alt="Line control panel at the Pithampur plant" cap="Line controls · Pithampur"
      >
        <article className="prose">
          {p.body.length === 0 ? (
            <p>This post was added in the CMS and has no body stored here yet.</p>
          ) : (
            p.body.map((b, i) =>
              b.t === "h" ? <h2 key={i}>{b.x}</h2> : <p key={i}>{b.x}</p>
            )
          )}
        </article>
        <p style={{ marginTop: 34 }}>
          <Link className="lnk" href="/blog">← All writing</Link>
        </p>
      </Spread>
    </>
  );
}
