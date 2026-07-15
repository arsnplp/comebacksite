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
          Essayer gratuitement 3 mois
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
                          href={`/carte-fidelite/${sector.slug}`}
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
                  href={`/carte-fidelite/${s.slug}`}
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


      {/* Ce que ces parcours ont en commun (SEO) */}
      <section className="pb-20 sm:pb-28" aria-labelledby="points-communs-title">
        <Container className="max-w-3xl">
          <h2 id="points-communs-title" className="font-display text-3xl font-bold tracking-tight">
            Ce que ces commerçants ont fait, dans le même ordre
          </h2>
          <p className="mt-5 text-ink-soft leading-relaxed">
            Derrière chacun de ces témoignages, le parcours est étonnamment semblable. D&apos;abord, un
            constat : des clients satisfaits, mais qui espacent leurs visites sans raison apparente.
            Ensuite, une mise en place courte : la carte est créée en une dizaine de minutes, le QR code
            posé sur le comptoir le jour même. Enfin, la mesure : au bout de quelques semaines, le
            dashboard affiche en euros ce que le programme rapporte, et c&apos;est ce chiffre, pas une
            impression, qui décide de la suite.
          </p>
          <p className="mt-4 text-ink-soft leading-relaxed">
            Notez également ce que ces commerçants n&apos;ont pas fait : aucune application à faire
            télécharger, aucune formation d&apos;équipe, aucun changement de caisse. La carte vit dans
            Apple Wallet ou Google Wallet, le tampon se valide en deux secondes, même en plein rush.
            Pour le détail des mécaniques par métier, parcourez les{" "}
            <Link href="/secteurs" className="font-semibold text-leaf-700 underline underline-offset-4 hover:text-leaf-800">pages secteurs</Link> ; pour la liste complète des
            fonctions, direction la page <Link href="/fonctionnalites" className="font-semibold text-leaf-700 underline underline-offset-4 hover:text-leaf-800">fonctionnalités</Link>.
          </p>
          <p className="mt-4 text-ink-soft leading-relaxed">
            Un mot, enfin, sur la façon de lire ces chiffres. Les métriques affichées (visites
            supplémentaires, clients inscrits, chiffre d&apos;affaires généré) sortent du dashboard de
            chaque commerçant, pas d&apos;un sondage : elles correspondent à des scans réels au
            comptoir. Elles varient évidemment selon le métier, l&apos;emplacement et la mécanique de
            récompense choisie ; c&apos;est précisément pour cela que chaque page secteur documente des
            ordres de grandeur propres à votre activité plutôt qu&apos;une moyenne globale qui ne
            correspondrait à personne.
          </p>
          <p className="mt-4 text-ink-soft leading-relaxed">
            Envie de la même trajectoire ? Estimez d&apos;abord votre potentiel avec le{" "}
            <Link href="/calculateur" className="font-semibold text-leaf-700 underline underline-offset-4 hover:text-leaf-800">calculateur</Link>, puis lancez votre essai gratuit de
            3 mois : votre premier tampon peut être donné ce soir.
          </p>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
