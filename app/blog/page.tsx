import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { pageMetadata } from "@/lib/seo";
import { getAllPosts, formatPostDate } from "@/lib/blog";

export const metadata: Metadata = pageMetadata({
  title: "Blog : fidélisation client et commerce de proximité",
  description:
    "Conseils concrets pour fidéliser vos clients quand on est commerçant : mécaniques de fidélité, cas par métier, chiffres et méthodes. Par l'équipe Comeback.",
  path: "/blog",
});

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <PageHero
        crumbs={[{ label: "Blog", href: "/blog" }]}
        eyebrow="Blog"
        title="Faire revenir ses clients, ça s'apprend"
        highlight="ça s'apprend"
        lead="Méthodes, chiffres et retours de terrain sur la fidélisation en commerce de proximité. Des articles écrits pour être appliqués, pas survolés."
      />

      <section className="pb-20 sm:pb-28" aria-label="Articles du blog">
        <Container>
          {posts.length === 0 ? (
            <p className="text-center text-lg text-ink-soft">Les premiers articles arrivent très vite.</p>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post, i) => (
                <Reveal key={post.slug} delayMs={(i % 3) * 100} className="h-full">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group block h-full rounded-3xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-leaf-600"
                  >
                    <Card hover className="flex h-full flex-col p-8">
                      <p className="flex items-center gap-3 text-sm">
                        <span className="rounded-full bg-leaf-50 px-3 py-1 font-semibold text-leaf-800 ring-1 ring-leaf-200">
                          {post.category}
                        </span>
                        <span className="text-ink-soft">{post.readingMinutes} min de lecture</span>
                      </p>
                      <h2 className="mt-4 font-display text-xl font-bold leading-snug text-balance">
                        {post.title}
                      </h2>
                      <p className="mt-3 flex-1 text-[0.95rem] text-ink-soft">{post.description}</p>
                      <p className="mt-6 flex items-center justify-between border-t border-ink/5 pt-4 text-sm text-ink-soft">
                        <time dateTime={post.date}>{formatPostDate(post.date)}</time>
                        <span className="inline-flex items-center gap-1.5 font-semibold text-leaf-700 transition-transform duration-200 group-hover:translate-x-1">
                          Lire
                          <Icon name="arrowRight" className="h-4 w-4" />
                        </span>
                      </p>
                    </Card>
                  </Link>
                </Reveal>
              ))}
            </div>
          )}
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
