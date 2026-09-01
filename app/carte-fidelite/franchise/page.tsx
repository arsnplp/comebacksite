import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { CTALink } from "@/components/ui/CTALink";
import { Badge } from "@/components/ui/Badge";
import { Accordion } from "@/components/ui/Accordion";
import { Reveal } from "@/components/ui/Reveal";
import { IconTile } from "@/components/ui/Icon";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata, site } from "@/lib/seo";
import type { FaqItem } from "@/content/faq";

export const metadata: Metadata = pageMetadata({
  title: "Carte de fidélité franchise : programme multi-établissements",
  description:
    "Équipez vos franchises d'un système de carte de fidélité en quelques clics : base client centralisée, statistiques par établissement, vision globale pour le réseau.",
  path: "/carte-fidelite/franchise",
  absoluteTitle: true,
});

/* ------------------------------------------------------------------ */
/* Ce que Comeback apporte à un réseau                                 */
/* ------------------------------------------------------------------ */

const benefits = [
  {
    icon: "building" as const,
    title: "Des informations claires, établissement par établissement",
    text: "Chaque point de vente a ses propres chiffres : clients inscrits, visites, chiffre d'affaires généré. Rien n'est mélangé, chaque établissement voit sa propre performance distinctement.",
  },
  {
    icon: "users" as const,
    title: "Une base client propre et centralisée",
    text: "Chaque scan alimente un fichier client unique pour le réseau, sans doublon ni ressaisie. Fini les tableurs séparés par site : une seule base, à jour en temps réel.",
  },
  {
    icon: "card" as const,
    title: "Une carte commune, la même partout",
    text: "Vos clients tamponnent dans n'importe quel établissement du réseau avec la même carte. L'expérience est identique d'un point de vente à l'autre, à vos couleurs d'enseigne.",
  },
  {
    icon: "megaphone" as const,
    title: "Des campagnes ciblées, locales ou nationales",
    text: "Une offre pour tout le réseau en un envoi, ou une promotion réservée à un seul établissement pour animer sa zone. Vous choisissez l'échelle de chaque campagne.",
  },
];

/* ------------------------------------------------------------------ */
/* Étapes de mise en place                                             */
/* ------------------------------------------------------------------ */

const steps = [
  {
    title: "Créez votre carte réseau",
    text: "Logo, couleurs, mécanique de récompense communs à l'enseigne : configurés une fois, appliqués partout. Quelques clics suffisent, sans compétence technique.",
  },
  {
    title: "Équipez chaque établissement",
    text: "Un QR code par point de vente, aucune intégration avec votre caisse. Un établissement qui rejoint le programme est opérationnel le jour même.",
  },
  {
    title: "Pilotez, seul ou en équipe",
    text: "Chaque responsable de site suit ses propres chiffres. Vous, vous gardez la vision d'ensemble sur tout le réseau, en temps réel.",
  },
];

/* ------------------------------------------------------------------ */
/* FAQ                                                                 */
/* ------------------------------------------------------------------ */

const faq: FaqItem[] = [
  {
    question: "Chaque établissement a-t-il besoin de son propre compte ?",
    answer:
      "Oui, c'est possible : chaque établissement peut disposer de son propre compte, avec ses propres accès et ses propres statistiques. C'est adapté aux réseaux où chaque site est géré de façon autonome.",
  },
  {
    question: "Puis-je avoir une vision globale sur tous mes établissements ?",
    answer:
      "Oui. Il est possible de disposer d'un compte gérant avec une vue consolidée sur l'ensemble du réseau : nombre de clients par établissement, argent dépensé, cartes actives, visites générées. Vous gardez la vision globale sans perdre le détail par site.",
  },
  {
    question: "Un client peut-il cumuler des tampons dans plusieurs établissements ?",
    answer:
      "Oui, c'est le principe de la carte commune : le client tamponne dans n'importe quel point de vente du réseau, et sa progression le suit. Les statistiques attribuent chaque visite au bon établissement.",
  },
  {
    question: "Faut-il du matériel ou une intégration caisse pour équiper un réseau ?",
    answer:
      "Non. Chaque établissement a seulement besoin d'un QR code affiché au comptoir et d'un téléphone pour valider les tampons. Aucune intégration avec votre logiciel de caisse n'est nécessaire, quel qu'il soit.",
  },
  {
    question: "Chaque établissement peut-il envoyer ses propres offres ?",
    answer:
      "Selon l'organisation que vous choisissez : vous pouvez réserver les envois à la tête de réseau, les déléguer à chaque établissement pour sa zone, ou combiner les deux, avec des opérations nationales et des animations locales.",
  },
  {
    question: "Quel plan choisir pour un réseau de plusieurs établissements ?",
    answer:
      "Le plan Business à 39,99 € HT par mois couvre les besoins d'un réseau, avec clients et notifications illimités. Consultez la page tarifs pour comparer les plans en détail, ou contactez-nous pour une organisation particulière.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Carte de fidélité digitale pour franchises et réseaux",
  name: "Carte de fidélité franchise : programme multi-établissements",
  description:
    "Équipez vos franchises d'un système de carte de fidélité en quelques clics : base client centralisée, statistiques par établissement, vision globale pour le réseau.",
  provider: { "@type": "Organization", name: site.name, url: site.url },
  areaServed: { "@type": "Country", name: "France" },
  url: `${site.url}/carte-fidelite/franchise`,
};

const linkCls = "font-semibold text-leaf-700 underline underline-offset-4 hover:text-leaf-800";

export default function FranchisePage() {
  return (
    <>
      <JsonLd data={faqJsonLd} />
      <JsonLd data={serviceJsonLd} />

      <PageHero
        crumbs={[
          { label: "Secteurs", href: "/secteurs" },
          { label: "Franchise & réseaux", href: "/carte-fidelite/franchise" },
        ]}
        eyebrow="Franchise & réseaux"
        title="Équipez vos franchises d'un système de carte de fidélité en quelques clics"
        highlight="en quelques clics"
        lead="Une carte de fidélité commune à tout votre réseau, une base client centralisée, et des statistiques claires établissement par établissement."
      >
        <CTALink href="https://app.getcomeback.fr/login" position="franchise-hero" size="xl">
          Essayer gratuitement
        </CTALink>
        <CTALink href="/demo" position="franchise-hero-demo" variant="ghost" size="xl">
          Réserver une démo
        </CTALink>
      </PageHero>

      <div className="pb-6">
        <Container wide className="flex flex-wrap justify-center gap-2">
          <Badge variant="gold">Plan gratuit à vie</Badge>
          <Badge>Installation en quelques clics</Badge>
          <Badge>Sans carte bancaire</Badge>
          <Badge>Aucune intégration caisse</Badge>
        </Container>
      </div>

      {/* Ce que Comeback change pour un réseau */}
      <section className="py-16 sm:py-20" aria-labelledby="benefits-title">
        <Container>
          <SectionHeader
            eyebrow="Ce qui change pour votre réseau"
            title="Un système pensé pour piloter plusieurs établissements"
            highlight="plusieurs établissements"
            lead="Comeback est conçu dès le départ pour un réseau : la carte, les données et le pilotage suivent la même logique, que vous ayez 2 ou 50 établissements."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {benefits.map((b, i) => (
              <Reveal key={b.title} delayMs={i * 100} className="h-full">
                <Card hover className="flex h-full items-start gap-5 p-8">
                  <IconTile name={b.icon} tone={i % 2 === 0 ? "leaf" : "gold"} />
                  <div>
                    <h3 className="font-display text-lg font-bold">{b.title}</h3>
                    <p className="mt-2.5 text-ink-soft">{b.text}</p>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Architecture des comptes */}
      <section className="bg-cream-2 py-20 sm:py-28" aria-labelledby="comptes-title">
        <Container>
          <SectionHeader
            eyebrow="Un compte par établissement, ou une vision globale"
            title="Autonomie sur le terrain, vue d'ensemble pour le siège"
            highlight="vue d'ensemble"
            lead="Comeback s'adapte à votre organisation, pas l'inverse."
          />
          <div className="grid gap-6 md:grid-cols-2">
            <Reveal delayMs={0} className="h-full">
              <div className="h-full rounded-3xl bg-white p-8 shadow-card ring-1 ring-ink/5">
                <IconTile name="store" tone="leaf" className="mb-5" />
                <h3 className="font-display text-xl font-bold">Compte établissement</h3>
                <p className="mt-3 text-ink-soft">
                  Chaque établissement peut avoir son propre compte : ses clients, ses statistiques, ses
                  campagnes locales. Le responsable de site gère son point de vente en autonomie, sans
                  dépendre du siège pour les opérations du quotidien.
                </p>
              </div>
            </Reveal>
            <Reveal delayMs={100} className="h-full">
              <div className="h-full rounded-3xl bg-gradient-to-br from-leaf-800 to-leaf-950 p-8 text-white shadow-card">
                <IconTile name="chart" tone="dark" className="mb-5" />
                <h3 className="font-display text-xl font-bold">Compte gérant réseau</h3>
                <p className="mt-3 text-leaf-100">
                  Il est aussi possible d&apos;avoir un compte gérant avec une vision consolidée sur
                  l&apos;ensemble de vos établissements : nombre de clients, argent dépensé, cartes
                  actives, visites générées, établissement par établissement.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Mise en place en 3 etapes */}
      <section className="py-20 sm:py-28" aria-labelledby="steps-title">
        <Container>
          <SectionHeader
            eyebrow="Comment ça se lance"
            title="Opérationnel en quelques clics, établissement par établissement"
            highlight="quelques clics"
          />
          <ol className="grid gap-6 md:grid-cols-3">
            {steps.map((step, i) => (
              <li key={step.title} className="h-full">
                <Card hover className="relative h-full overflow-hidden p-8">
                  <span
                    className="pointer-events-none absolute -right-3 -top-7 font-display text-[7.5rem] font-extrabold leading-none text-leaf-100"
                    aria-hidden="true"
                  >
                    {i + 1}
                  </span>
                  <span className="relative mb-5 inline-flex h-10 items-center rounded-full bg-leaf-50 px-4 text-sm font-bold text-leaf-800 ring-1 ring-leaf-200">
                    Étape {i + 1}
                  </span>
                  <h3 className="relative font-display text-xl font-bold">{step.title}</h3>
                  <p className="relative mt-3 text-ink-soft">{step.text}</p>
                </Card>
              </li>
            ))}
          </ol>
          <p className="mt-10 text-center text-ink-soft">
            Aucun matériel à acheter, aucune formation longue : un QR code et un téléphone suffisent par
            établissement.
          </p>
        </Container>
      </section>

      {/* Contenu long SEO + maillage interne */}
      <section className="bg-cream-2 py-20 sm:py-28" aria-label="En savoir plus">
        <Container className="max-w-3xl space-y-10">
          <div>
            <h2 className="font-display text-2xl font-bold tracking-tight text-balance sm:text-3xl">
              Pourquoi centraliser la fidélité à l&apos;échelle du réseau
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft">
              Tant que chaque établissement gère sa propre carte, l&apos;enseigne ne capitalise rien : le
              client fidèle d&apos;un site est un inconnu dans le site voisin, et aucune animation
              nationale n&apos;est possible. Un programme centralisé transforme cette collection
              d&apos;initiatives locales en actif d&apos;enseigne. Notre article sur la{" "}
              <Link href="/blog/carte-fidelite-multi-etablissements" className={linkCls}>
                carte de fidélité multi-établissements
              </Link>{" "}
              détaille comment déployer cette centralisation sans friction, site par site.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">
              Cette centralisation ne signifie pas uniformiser à outrance : chaque établissement garde la
              main sur ses horaires d&apos;envoi et ses opérations locales, pendant que la mécanique de
              base (récompense, palier, charte visuelle) reste identique partout, pour que le client
              reconnaisse la même carte où qu&apos;il se trouve dans le réseau.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold tracking-tight text-balance sm:text-3xl">
              La même technologie que sur chaque point de vente
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft">
              La carte réseau repose sur la même mécanique que la carte de fidélité classique : elle vit
              dans{" "}
              <Link href="/blog/carte-fidelite-apple-wallet-google-wallet" className={linkCls}>
                Apple Wallet et Google Wallet
              </Link>
              , sans application à télécharger. Pour la configurer, notre guide{" "}
              <Link href="/blog/comment-creer-carte-fidelite-digitale" className={linkCls}>
                créer une carte de fidélité digitale
              </Link>{" "}
              détaille chaque étape, valable pour un établissement isolé comme pour tout un réseau.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold tracking-tight text-balance sm:text-3xl">
              Un déploiement pensé pour l&apos;adoption terrain
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft">
              Les projets de fidélité en réseau échouent rarement sur la technique : ils échouent sur
              l&apos;adoption, quand le déploiement est trop lourd ou trop rapide. C&apos;est pourquoi
              Comeback ne demande ni matériel spécifique, ni intégration caisse, ni formation longue :
              un QR code sur le comptoir et un téléphone suffisent pour qu&apos;un établissement rejoigne
              le programme. Vous pouvez ainsi commencer par deux ou trois sites pilotes, ajuster la
              mécanique avec des retours concrets, puis généraliser au reste du réseau une fois la
              formule validée.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">
              Pour un franchisé, le bénéfice est immédiat : un outil déjà éprouvé ailleurs dans le réseau,
              sans rien à configurer seul. Pour la tête de réseau, c&apos;est une donnée nouvelle : la
              fidélité mesurée établissement par établissement, en euros plutôt qu&apos;en impressions.
            </p>
          </div>
          <p className="rounded-2xl bg-white p-6 text-ink-soft ring-1 ring-ink/5">
            Pour aller plus loin : consultez le{" "}
            <Link href="/guide-fidelisation" className={linkCls}>
              guide complet de la fidélisation
            </Link>
            , estimez le chiffre d&apos;affaires récupérable avec le{" "}
            <Link href="/calculateur" className={linkCls}>
              calculateur
            </Link>
            , ou comparez les{" "}
            <Link href="/tarifs" className={linkCls}>
              tarifs détaillés
            </Link>{" "}
            pour choisir le plan adapté à votre réseau. La liste complète des fonctionnalités est
            disponible sur la page{" "}
            <Link href="/fonctionnalites" className={linkCls}>
              fonctionnalités
            </Link>
            .
          </p>
        </Container>
      </section>

      {/* FAQ */}
      <section className="pb-20 sm:pb-28" aria-labelledby="faq-franchise-title">
        <Container className="max-w-4xl">
          <SectionHeader eyebrow="Questions fréquentes" title="Vos questions, spécial franchise et réseau" />
          <Accordion items={faq} />
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
