import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { CTALink } from "@/components/ui/CTALink";
import { Reveal } from "@/components/ui/Reveal";
import { IconTile, type IconName } from "@/components/ui/Icon";
import { StampStrip } from "@/components/ui/Stamps";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata, site } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "À propos : pourquoi nous avons créé Comeback",
  description:
    "Comeback est né d'un constat simple : les commerçants indépendants paient pour attirer des clients, puis les regardent partir. Notre mission : rendre la fidélisation aussi simple qu'un scan.",
  path: "/a-propos",
});

const values: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "zap",
    title: "La simplicité, sans négociation",
    text: "Si une fonctionnalité demande une formation, elle est mal conçue. Tout Comeback doit s'utiliser entre deux clients, avec les mains à moitié prises.",
  },
  {
    icon: "euro",
    title: "Des chiffres honnêtes",
    text: "Pas de vanity metrics ni de promesses gonflées : notre dashboard compte en euros, et nos estimations sont volontairement prudentes. Si l'outil ne rapporte pas, nous préférons que vous le voyiez.",
  },
  {
    icon: "shield",
    title: "Vos données sont à vous",
    text: "Le fichier client construit avec Comeback appartient au commerçant : hébergé en Europe, exportable en un clic, jamais revendu. Si vous partez, il part avec vous.",
  },
];

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "À propos de Comeback",
  url: `${site.url}/a-propos`,
  mainEntity: {
    "@type": "Organization",
    name: site.name,
    url: site.url,
    sameAs: site.sameAs,
  },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={aboutJsonLd} />

      <PageHero
        crumbs={[{ label: "À propos", href: "/a-propos" }]}
        eyebrow="À propos"
        title="Les grandes enseignes ont des équipes fidélisation. Vous avez Comeback."
        highlight="Vous avez Comeback"
        lead="Nous construisons l'outil de fidélisation que méritent les commerçants indépendants : aussi puissant que celui des grandes chaînes, aussi simple qu'un tampon sur une carte."
      />

      {/* Histoire */}
      <section className="pb-16 sm:pb-20" aria-labelledby="story-title">
        <Container className="max-w-3xl">
          <h2 id="story-title" className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
            Le constat qui a tout déclenché
          </h2>
          <div className="mt-5 space-y-5 text-lg leading-relaxed text-ink-soft">
            <p>
              Tout part d&apos;une observation répétée chez des dizaines de commerçants : ils dépensent pour
              se faire connaître, travaillent dur pour bien servir, et regardent ensuite leurs clients
              disparaître sans laisser de trace. Pas par déception : par simple oubli. Pendant ce temps, les
              grandes enseignes industrialisent la fidélité avec des applications, des data teams et des
              budgets que personne d&apos;autre ne peut suivre.
            </p>
            <p>
              Les outils existants pour les indépendants ? Des cartes en carton qu&apos;on perd, ou des usines
              à gaz pensées pour des chaînes, facturées comme telles. Il manquait l&apos;outil du milieu :
              celui qui garde la simplicité du tampon et y ajoute ce que le digital fait de mieux, les
              relances automatiques et la mesure en euros.
            </p>
            <p>
              C&apos;est Comeback : une carte de fidélité qui vit dans Apple Wallet et Google Wallet, un
              QR code sur un comptoir, et un dashboard qui dit la seule chose qui compte : combien la
              fidélité vous rapporte.
            </p>
          </div>

          <div className="mt-10 flex items-center gap-4 rounded-3xl bg-leaf-950 p-7 text-white sm:p-8">
            <StampStrip total={10} filled={9} className="hidden shrink-0 text-leaf-200 sm:flex" />
            <p className="text-lg font-medium text-leaf-100">
              Notre mission : que chaque commerce indépendant sache, en euros, ce que la fidélité de ses
              clients lui rapporte.
            </p>
          </div>
        </Container>
      </section>

      {/* Valeurs */}
      <section className="bg-cream-2 py-20 sm:py-28" aria-labelledby="values-title">
        <Container>
          <SectionHeader
            eyebrow="Nos principes"
            title="Trois règles qu'on ne casse jamais"
            highlight="jamais"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delayMs={i * 100} className="h-full">
                <Card hover className="h-full p-8">
                  <IconTile name={v.icon} className="mb-5" />
                  <h3 className="font-display text-lg font-bold">{v.title}</h3>
                  <p className="mt-2.5 text-ink-soft">{v.text}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Made in France + contact */}
      <section className="py-20 sm:py-28" aria-labelledby="france-title">
        <Container className="max-w-3xl text-center">
          <h2 id="france-title" className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
            Conçu en France, pour le commerce d&apos;ici
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
            Comeback est développé en France, hébergé en Europe et pensé pour les réalités du commerce
            français : les rushes du midi, les marchés du samedi, la TVA et le RGPD. Le support répond en
            français, par des gens qui connaissent le produit.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <CTALink href="https://app.getcomeback.fr/login" position="about" size="lg">
              Essayer gratuitement 3 mois
            </CTALink>
            <Link
              href="/contact"
              className="font-semibold text-leaf-700 underline underline-offset-4 hover:text-leaf-800"
            >
              Ou venez nous parler
            </Link>
          </div>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
