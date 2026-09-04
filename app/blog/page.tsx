import Link from "next/link";
import { Spread } from "@/components/Spread";
import { Jsonld, breadcrumb } from "@/components/Jsonld";
import { getPosts } from "@/lib/posts";

export const revalidate = 300;

export const metadata = {
  title: "Writing — GFRP rebar manufacturing in India",
  description:
    "Notes from running a GFRP rebar line in Pithampur: process, standards, and the things that only show up once a plant is actually running.",
  alternates: { canonical: "/blog" },
};

export default async function Blog() {
  const posts = await getPosts();
  return (
    <>
      <Jsonld data={breadcrumb([["Home","/"],["Blog","/blog"]])} />
      <Spread
        here="/blog" eyebrow="Writing"
        title="What we have learned running the line."
        answer="Notes on making GFRP rebar in India — process, standards, and things that only show up once a plant is running."
        img="/img/control-panel.jpg" alt="Line control panel at the Pithampur plant"
        cap="Line controls · Pithampur"
      >
        <div className="posts">
          {posts.map((p) => (
            <Link className="post" key={p.slug} href={`/blog/${p.slug}`}>
              <span className="dt">
                {new Date(p.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
              </span>
              <h2>{p.title}</h2>
              <p>{p.summary}</p>
            </Link>
          ))}
        </div>
      </Spread>
    </>
  );
}
