import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata, site } from "@/lib/seo";
import { getAllPosts, getPost, formatPostDate } from "@/lib/blog";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return pageMetadata({
    title: post.meta.title,
    description: post.meta.description,
    path: `/blog/${post.meta.slug}`,
    absoluteTitle: true,
  });
}

export default async function BlogPostPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const others = getAllPosts()
    .filter((p) => p.slug !== post.meta.slug)
    .slice(0, 2);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.meta.title,
    description: post.meta.description,
    datePublished: post.meta.date,
    inLanguage: "fr-FR",
    author: { "@type": "Organization", name: site.name, url: site.url },
    publisher: { "@type": "Organization", name: site.name, url: site.url },
    mainEntityOfPage: `${site.url}/blog/${post.meta.slug}`,
  };

  return (
    <>
      <JsonLd data={articleJsonLd} />

      <article>
        <header className="relative overflow-hidden">
          <div
            className="dot-grid pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 opacity-50 [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)] lg:block"
            aria-hidden="true"
          />
          <Container className="relative max-w-3xl pb-10 pt-8 sm:pt-10">
            <Breadcrumbs
              items={[
                { label: "Blog", href: "/blog" },
                { label: post.meta.title, href: `/blog/${post.meta.slug}` },
              ]}
            />
            <p className="mt-10 flex items-center gap-3 text-sm">
              <span className="rounded-full bg-leaf-50 px-3 py-1 font-semibold text-leaf-800 ring-1 ring-leaf-200">
                {post.meta.category}
              </span>
              <time dateTime={post.meta.date} className="text-ink-soft">
                {formatPostDate(post.meta.date)}
              </time>
              <span className="text-ink-soft">{post.meta.readingMinutes} min de lecture</span>
            </p>
            <h1 className="mt-5 font-display text-3xl font-bold leading-[1.12] tracking-tight text-balance sm:text-4xl lg:text-[2.75rem]">
              {post.meta.title}
            </h1>
          </Container>
        </header>

        <Container className="max-w-3xl pb-16">
          <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-ink prose-p:text-ink-soft prose-a:font-semibold prose-a:text-leaf-700 prose-a:underline-offset-4 hover:prose-a:text-leaf-800 prose-strong:text-ink prose-li:text-ink-soft prose-li:marker:text-leaf-600">
            <MDXRemote source={post.content} />
          </div>
        </Container>
      </article>

      {/* Autres articles */}
      {others.length > 0 && (
        <section className="bg-cream-2 py-16 sm:py-20" aria-labelledby="more-posts-title">
          <Container className="max-w-3xl">
            <h2 id="more-posts-title" className="mb-6 font-display text-2xl font-bold tracking-tight">
              À lire ensuite
            </h2>
            <ul className="space-y-4">
              {others.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/blog/${p.slug}`}
                    className="group flex items-center justify-between gap-4 rounded-3xl bg-white p-6 shadow-card ring-1 ring-ink/5 transition-all hover:-translate-y-0.5 hover:shadow-card-lg"
                  >
                    <span>
                      <span className="block text-sm text-ink-soft">{p.category}</span>
                      <span className="mt-1 block font-display text-lg font-bold leading-snug">{p.title}</span>
                    </span>
                    <Icon name="arrowRight" className="h-5 w-5 shrink-0 text-leaf-700 transition-transform group-hover:translate-x-1" />
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}

      <FinalCTA />
    </>
  );
}
