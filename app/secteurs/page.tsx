import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { CTALink } from "@/components/ui/CTALink";
import { Reveal } from "@/components/ui/Reveal";
import { Icon, IconTile } from "@/components/ui/Icon";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { pageMetadata } from "@/lib/seo";
import { sectorDetails } from "@/content/sectors/details";

export const metadata: Metadata = pageMetadata({
  title: "Secteurs : la fidélité adaptée à votre métier",
  description:
    "Restaurant, coiffeur, boulangerie, boutique, institut de beauté, café, food truck ou franchise : découvrez comment la carte de fidélité digitale Comeback s'adapte aux codes de votre métier.",
  path: "/secteurs",
});

export default function SectorsHubPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Secteurs", href: "/secteurs" }]}
        eyebrow="Secteurs"
        title="La fidélité n'est pas la même partout. Votre carte non plus."
        highlight="Votre carte non plus"
        lead="Un café ne fidélise pas comme un institut de beauté : ni le même rythme, ni le même palier, ni la même récompense. Retrouvez la mécanique qui a fait ses preuves dans votre métier."
      >
        <CTALink href="https://app.getcomeback.fr/login" position="secteurs-hero" size="xl">
          Essayer gratuitement 3 mois
        </CTALink>
      </PageHero>

      <section className="pb-20 sm:pb-28" aria-labelledby="sector-grid-title">
        <h2 id="sector-grid-title" className="sr-only">
          Choisissez votre secteur
        </h2>
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {sectorDetails.map((sector, i) => (
              <Reveal key={sector.slug} delayMs={(i % 4) * 80} className="h-full">
                <Link href={`/carte-fidelite/${sector.slug}`} className="group block h-full rounded-3xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-leaf-600">
                  <Card hover className="flex h-full flex-col p-7">
                    <IconTile name={sector.icon} className="mb-5" />
                    <h3 className="font-display text-lg font-bold">{sector.label}</h3>
                    <p className="mt-2 flex-1 text-[0.95rem] text-ink-soft">
                      {sector.intro.split(". ")[0].replace(/\.$/, "")}.
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1.5 font-semibold text-leaf-700 transition-transform duration-200 group-hover:translate-x-1">
                      Voir le cas d&apos;usage
                      <Icon name="arrowRight" className="h-4 w-4" />
                    </span>
                  </Card>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-cream-2 py-20 sm:py-28" aria-labelledby="why-sector-title">
        <Container className="max-w-4xl">
          <SectionHeader
            eyebrow="Pourquoi par métier"
            title="La même app, mais des réglages qui changent tout"
            highlight="des réglages qui changent tout"
            lead="Le palier de tampons, le type de récompense et le rythme des relances se règlent en 2 clics. Ce qui change d'un métier à l'autre, c'est le bon réglage : nos pages sectorielles vous donnent celui qui fonctionne."
          />
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              { icon: "clock", title: "Le bon rythme", text: "Quotidien au café, hebdomadaire au restaurant, toutes les 6 semaines au salon : les relances suivent le rythme naturel de votre clientèle." },
              { icon: "gift", title: "Le bon palier", text: "10 passages pour un café, 5 pour une boutique : la récompense doit rester atteignable pour créer l'habitude." },
              { icon: "trend", title: "Le bon levier", text: "Remplir les heures creuses, raccourcir les cycles, augmenter le panier : chaque métier a son levier de CA prioritaire." },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <IconTile name={item.icon as "clock" | "gift" | "trend"} className="mx-auto mb-4" />
                <h3 className="font-display text-lg font-bold">{item.title}</h3>
                <p className="mt-2 text-[0.95rem] text-ink-soft">{item.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
