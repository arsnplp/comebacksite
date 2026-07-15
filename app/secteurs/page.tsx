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


      {/* Pourquoi adapter la fidélité au métier (SEO) */}
      <section className="pb-20 sm:pb-28" aria-labelledby="pourquoi-metier-title">
        <Container className="max-w-3xl">
          <h2 id="pourquoi-metier-title" className="font-display text-3xl font-bold tracking-tight">
            Pourquoi votre carte de fidélité doit coller à votre métier
          </h2>
          <p className="mt-5 text-ink-soft leading-relaxed">
            Un client de boulangerie passe tous les matins ; une cliente d&apos;institut revient toutes
            les cinq semaines. Autrement dit, la même mécanique de fidélité ne peut pas convenir aux
            deux : le palier serait atteint en une semaine dans un cas, jamais dans l&apos;autre.
            C&apos;est pourquoi chaque page ci-dessus détaille la récompense, le rythme et les relances
            qui fonctionnent réellement dans votre secteur, avec des exemples chiffrés.
          </p>
          <p className="mt-4 text-ink-soft leading-relaxed">
            Commencez donc par votre métier : vous y trouverez les trois problèmes du quotidien que la
            fidélité résout, la mécanique de récompense conseillée, un témoignage et une FAQ dédiée.
            Ensuite, si vous hésitez encore sur la rentabilité, faites le calcul avec vos propres
            chiffres grâce au <Link href="/calculateur" className="font-semibold text-leaf-700 underline underline-offset-4 hover:text-leaf-800">calculateur de chiffre d&apos;affaires récupérable</Link>.
            Enfin, comparez les formats : notre <Link href="/carte-fidelite-papier-ou-digitale" className="font-semibold text-leaf-700 underline underline-offset-4 hover:text-leaf-800">comparatif carte papier ou digitale</Link>{" "}
            explique, critère par critère, ce que le passage au Wallet change pour un commerce de proximité.
          </p>
          <p className="mt-4 text-ink-soft leading-relaxed">
            Du fournil à la salle de restaurant, les attentes diffèrent, et les chiffres aussi. En
            boulangerie, la carte à tampons digitale récompense un passage quasi quotidien ; en salon
            de coiffure ou en institut de beauté, la relance automatique raccourcit l&apos;intervalle
            entre deux rendez-vous ; dans un café ou un bar, le classique « 10e café offert » passe du
            carton au téléphone ; en boutique, le programme de fidélité construit un fichier client
            que les grandes enseignes vous envient ; quant aux food trucks et aux franchises, la
            notification d&apos;emplacement et la carte commune multi-établissements répondent à des
            besoins qu&apos;aucune carte papier ne sait couvrir.
          </p>
          <p className="mt-4 text-ink-soft leading-relaxed">
            Votre activité ne figure pas dans la liste ? Écrivez-nous via la{" "}
            <Link href="/contact" className="font-semibold text-leaf-700 underline underline-offset-4 hover:text-leaf-800">page contact</Link> : si vos clients peuvent revenir, une carte
            de fidélité digitale s&apos;adapte à votre cas, et nous vous montrerons comment en démo.
          </p>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
