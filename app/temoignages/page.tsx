import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { CTALink } from "@/components/ui/CTALink";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { StampCheck } from "@/components/ui/Stamps";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { pageMetadata } from "@/lib/seo";
import { testimonials } from "@/content/testimonials";
import { sectors } from "@/content/sectors";

export const metadata: Metadata = pageMetadata({
  title: "Témoignages : des commerçants qui font revenir leurs clients",
  description:
    "Boulangeries, salons de coiffure, restaurants, cafés : découvrez comment des commerçants indépendants utilisent Comeback pour augmenter la fréquence de visite et leur chiffre d'affaires.",
  path: "/temoignages",
});

/* Chiffres de la barre de preuve — mêmes claims que la homepage.
   [PLACEHOLDER] — à actualiser avec les vraies données produit. */
const proofStats = [
  { value: "150+", label: "commerçants équipés" },
  { value: "2×", label: "plus de visites chez les clients fidélisés" },
  { value: "10 s", label: "pour qu'un client ajoute sa carte" },
];

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Témoignages", href: "/temoignages" }]}
        eyebrow="Témoignages"
        title="Ils ont posé un QR code. Leurs clients reviennent."
        highlight="Leurs clients reviennent"
        lead="Des commerçants indépendants, dans toute la France, qui mesurent enfin ce que la fidélité leur rapporte. Voici ce qu'ils constatent, avec leurs chiffres."
      >
        <CTALink href="https://app.getcomeback.fr/login" position="temoignages-hero" size="xl">
          Essayer gratuitement 30 jours
        </CTALink>
      </PageHero>

      {/* Barre de preuve */}
      <section aria-label="Chiffres clés" className="pb-16">
        <Container>
          <dl className="grid gap-6 rounded-3xl bg-leaf-950 p-8 text-center sm:grid-cols-3 sm:p-10">
            {proofStats.map((stat) => (
              <div key={stat.label}>
                <dt className="order-2 mt-2 block text-sm text-leaf-200">{stat.label}</dt>
                <dd className="font-display text-4xl font-extrabold tracking-tight text-gold-400">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* Grille de témoignages */}
      <section className="pb-20 sm:pb-28" aria-labelledby="grid-title">
        <h2 id="grid-title" className="sr-only">
          Témoignages de commerçants
        </h2>
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => {
              const sector = sectors.find((s) => s.slug === t.sectorSlug);
              return (
                <Reveal key={t.name} delayMs={(i % 3) * 100} className="h-full">
                  <Card hover className="flex h-full flex-col p-8">
                    <p>
                      <span className="font-display text-4xl font-extrabold tracking-tight text-ember-600">
                        {t.metric}
                      </span>
                      <span className="mt-1 block text-sm font-medium text-ink-soft">{t.metricLabel}</span>
                    </p>
                    <blockquote className="mt-5 flex-1">
                      <p className="text-ink-soft">&laquo;&nbsp;{t.quote}&nbsp;&raquo;</p>
                    </blockquote>
                    <footer className="mt-6 flex items-center justify-between gap-3 border-t border-ink/5 pt-5">
                      <div>
                        <p className="font-semibold text-ink">{t.name}</p>
                        <p className="text-sm text-ink-soft">
                          {t.business}, {t.city}
                        </p>
                      </div>
                      {sector && (
                        <Link
                          href={`/secteurs/${sector.slug}`}
                          className="shrink-0 rounded-full bg-leaf-50 px-3 py-1 text-xs font-semibold text-leaf-800 ring-1 ring-leaf-200 transition-colors hover:bg-leaf-100"
                        >
                          {sector.label}
                        </Link>
                      )}
                    </footer>
                  </Card>
                </Reveal>
              );
            })}
          </div>

          <p className="mt-10 flex items-center justify-center gap-2 text-center text-sm text-ink-soft">
            <StampCheck className="h-5 w-5 text-leaf-600" />
            Témoignages recueillis auprès de commerçants utilisateurs, publiés avec leur accord.
          </p>
        </Container>
      </section>

      {/* Renvoi vers les pages secteurs */}
      <section className="bg-cream-2 py-20 sm:py-28" aria-labelledby="sectors-link-title">
        <Container>
          <SectionHeader
            eyebrow="Et chez vous ?"
            title="Voyez ce que Comeback donne dans votre métier"
            highlight="votre métier"
            lead="Chaque secteur a ses habitudes et ses mécaniques de récompense. Retrouvez les cas d'usage détaillés pour le vôtre."
          />
          <ul className="flex flex-wrap justify-center gap-3">
            {sectors.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/secteurs/${s.slug}`}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 font-medium text-ink shadow-card ring-1 ring-ink/5 transition-all hover:-translate-y-0.5 hover:shadow-card-lg"
                >
                  {s.label}
                  <Icon name="arrowRight" className="h-4 w-4 text-leaf-700" />
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
