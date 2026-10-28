import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TrialCTA } from "@/components/ui/TrialCTA";
import { PricingPlans } from "@/components/sections/PricingPlans";
import { CTA_REASSURANCE } from "@/lib/links";
import { Badge } from "@/components/ui/Badge";
import { Accordion } from "@/components/ui/Accordion";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata, site } from "@/lib/seo";
import { plans, formatPlanPrice, includedEverywhere } from "@/content/pricing";
import type { FaqItem } from "@/content/faq";

export const metadata: Metadata = pageMetadata({
  title: "Tarifs : carte de fidélité digitale dès 14,99 € par mois, 30 jours d'essai",
  description:
    "Pro à 14,99 € et Business à 29,99 € TTC par mois, sans engagement. 30 jours d'essai sur Business, 0 € prélevé aujourd'hui, installation faite avec vous et offerte.",
  path: "/tarifs",
});

/* ------------------------------------------------------------------ */
/* Matrice comparative                                                 */
/* ------------------------------------------------------------------ */

type Cell = boolean | string;
type CompareRow = { label: string; cells: [Cell, Cell] };
type CompareGroup = { title: string; rows: CompareRow[] };

const compareGroups: CompareGroup[] = [
  {
    title: "Clients et équipe",
    rows: [
      { label: "Clients inscrits", cells: ["300", "Illimités"] },
      { label: "Comptes employés", cells: ["3", "Illimités"] },
      { label: "Carte de fidélité à vos couleurs", cells: ["1", "1"] },
      { label: "Apple Wallet et Google Wallet", cells: [true, true] },
      { label: "Affiche de comptoir avec QR code", cells: [true, true] },
      { label: "Parrainage client", cells: [true, true] },
      { label: "Mini-jeux (roue, carte à gratter, coffres)", cells: [true, true] },
    ],
  },
  {
    title: "Notifications",
    rows: [
      { label: "Notifications par mois", cells: ["10 000", "Illimitées"] },
      { label: "Ciblage par rang client et par inactivité", cells: [true, true] },
      { label: "Relances automatiques récurrentes", cells: [true, true] },
      { label: "Carte affichée près de la boutique (iPhone)", cells: [true, true] },
    ],
  },
  {
    title: "Données et statistiques",
    rows: [
      { label: "Tableau de bord et CA généré en euros", cells: [true, true] },
      { label: "Export CSV du fichier client", cells: [true, true] },
    ],
  },
  {
    title: "Accompagnement",
    rows: [
      { label: "Installation faite avec vous, offerte", cells: [true, true] },
      { label: "Support email prioritaire", cells: [true, true] },
      { label: "Support dédié, réponse sous 4 h", cells: [false, true] },
    ],
  },
];

/** Déroulé de l'essai, tel que l'app le gère (lib/trial.ts côté app). */
const trialSteps = [
  {
    when: "Aujourd'hui",
    title: "Vous créez votre compte",
    text: "Vous enregistrez votre carte bancaire. 0 € prélevé. La date du premier prélèvement vous est affichée tout de suite.",
  },
  {
    when: "Dans la foulée",
    title: "On installe votre carte avec vous",
    text: "On vous appelle pour régler la récompense, vos couleurs et votre affiche de comptoir. 10 minutes.",
  },
  {
    when: "Pendant 30 jours",
    title: "Vous testez tout, avec vos vrais clients",
    text: "Toutes les fonctionnalités Business, sans limite. Votre dashboard vous montre ce que la fidélité vous rapporte.",
  },
  {
    when: "Avant le 30e jour",
    title: "Vous décidez",
    text: "Vous gardez Business, vous passez sur Pro, ou vous résiliez en un clic sans rien payer. Sans action de votre part, Business continue selon la formule choisie : 29,99 € par mois, 79,99 € par trimestre ou 288 € par an.",
  },
];

/* ------------------------------------------------------------------ */
/* FAQ tarifs                                                          */
/* ------------------------------------------------------------------ */

const pricingFaq: FaqItem[] = [
  {
    question: "Pourquoi une carte bancaire pour l'essai gratuit ?",
    answer:
      "Pour que votre carte de fidélité ne s'arrête pas au 31e jour si Comeback vous rapporte : vos clients ne verraient aucune coupure. Rien n'est prélevé pendant les 30 jours, la date du premier prélèvement vous est indiquée dès la saisie de la carte et rappelée dans votre espace. Si vous arrêtez avant la fin, un clic suffit et vous n'êtes jamais prélevé.",
  },
  {
    question: "Puis-je choisir le plan Pro plutôt que Business ?",
    answer:
      "Oui. L'essai se fait sur Business pour que vous puissiez tout tester sans limite. Depuis votre espace, vous passez sur Pro quand vous voulez, pendant ou après l'essai. Pro convient tant que vous restez sous 300 clients inscrits.",
  },
  {
    question: "Comment se passe l'installation ?",
    answer:
      "Juste après votre inscription, on vous appelle pour configurer la carte avec vous : récompense, couleurs, logo, affiche de comptoir. Comptez 10 minutes. C'est offert, quel que soit le plan. Vous pouvez aussi tout faire seul depuis votre espace si vous préférez.",
  },
  {
    question: "Y a-t-il des frais d'installation ou des coûts cachés ?",
    answer:
      "Aucun. Le prix affiché est le prix payé : pas de frais de mise en service, pas de matériel à acheter, pas de coût par notification. Votre affiche de comptoir est générée par l'application, prête à imprimer.",
  },
  {
    question: "Puis-je changer de plan ou résilier à tout moment ?",
    answer:
      "Oui. L'abonnement est sans engagement : vous passez de Pro à Business (et inversement) en 2 clics depuis votre espace, la différence est calculée au prorata. La résiliation se fait en un clic, sans préavis ni justification.",
  },
  {
    question: "Existe-t-il une formule trimestrielle ou annuelle ?",
    answer:
      "Oui, les deux. Au trimestre, environ 11 % de réduction : 39,99 € pour Pro et 79,99 € pour Business, tous les 3 mois. À l'année, 20 % de réduction : 144 € pour Pro (12 € par mois) et 288 € pour Business (24 € par mois), facturés en une fois. Choisissez la formule sur cette page avant de créer votre compte : l'essai de 30 jours reste gratuit, la formule démarre ensuite.",
  },
  {
    question: "Les prix affichés sont-ils HT ou TTC ?",
    answer:
      "Tous les prix affichés sont TTC : le montant que vous voyez est exactement celui qui sera prélevé. Le plan Business à 29,99 € correspond à 24,99 € HT plus 5,00 € de TVA, détaillés sur chaque facture. Si votre commerce est assujetti, cette TVA est récupérable.",
  },
  {
    question: "Comment être sûr que ce sera rentable pour mon commerce ?",
    answer:
      "Faites le calcul avec vos chiffres : avec un panier moyen de 20 euros, deux visites supplémentaires par mois couvrent largement l'abonnement Business. Notre calculateur estime le chiffre d'affaires récupérable, et les 30 jours d'essai vous montrent le chiffre réel, mesuré dans votre dashboard, avant de payer quoi que ce soit.",
  },
];

/* ------------------------------------------------------------------ */
/* JSON-LD                                                             */
/* ------------------------------------------------------------------ */

const offersJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: site.name,
  url: `${site.url}/tarifs`,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  offers: plans.map((p) => ({
      "@type": "Offer",
      name: `Plan ${p.name}`,
      price: p.price,
      priceCurrency: "EUR",
      description: p.description,
      // Les prix publiés aux moteurs sont TTC, comme sur le site.
      priceSpecification: {
        "@type": "PriceSpecification",
        price: p.price,
        priceCurrency: "EUR",
        valueAddedTaxIncluded: true,
      },
    })),
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: pricingFaq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

/* ------------------------------------------------------------------ */
/* Rendu d'une cellule de la matrice                                   */
/* ------------------------------------------------------------------ */

function CompareCell({ value }: { value: Cell }) {
  if (typeof value === "string") {
    return <span className="text-sm font-medium text-ink-soft">{value}</span>;
  }
  if (value) {
    return (
      <>
        <Icon name="checkCircle" className="mx-auto h-5 w-5 text-leaf-600" />
        <span className="sr-only">Inclus</span>
      </>
    );
  }
  return (
    <>
      <svg viewBox="0 0 16 16" className="mx-auto h-4 w-4 text-ink/20" aria-hidden="true">
        <path d="M4 8h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
      <span className="sr-only">Non inclus</span>
    </>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function PricingPage() {
  return (
    <>
      <JsonLd data={offersJsonLd} />
      <JsonLd data={faqJsonLd} />

      <PageHero
        crumbs={[{ label: "Tarifs", href: "/tarifs" }]}
        eyebrow="Tarifs"
        title="Testez 30 jours. Payez seulement si vos clients reviennent."
        highlight="vos clients reviennent"
        lead="L'essai vous donne tout le plan Business, avec vos vrais clients. Avant la fin, vous gardez Business, vous passez sur Pro ou vous arrêtez en un clic."
      >
        <TrialCTA position="tarifs-hero" size="xl" />
      </PageHero>
      <div className="-mt-4 pb-10 sm:-mt-6">
        <Container className="flex flex-wrap justify-center gap-2">
          <Badge variant="gold">0 € aujourd&apos;hui</Badge>
          <Badge>Installation offerte</Badge>
          <Badge>Sans engagement</Badge>
        </Container>
      </div>

      {/* Cartes de plans */}
      <section className="pb-16 sm:pb-20" aria-labelledby="plans-title">
        <h2 id="plans-title" className="sr-only">
          Les plans Comeback
        </h2>
        <Container className="max-w-5xl">
          <PricingPlans reassurance={CTA_REASSURANCE} />
        </Container>
      </section>

      {/* Inclus partout */}
      <section className="pb-16 sm:pb-20" aria-labelledby="included-title">
        <Container>
          <SectionHeader
            eyebrow="Dans les deux plans"
            title="Tout ce qui fait revenir vos clients est inclus"
            highlight="est inclus"
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {includedEverywhere.map((item) => (
              <div key={item.title} className="rounded-2xl bg-white p-6 shadow-card ring-1 ring-ink/5">
                <Icon name="checkCircle" className="h-6 w-6 text-leaf-600" />
                <h3 className="mt-3 font-display text-base font-bold">{item.title}</h3>
                <p className="mt-1.5 text-sm text-ink-soft">{item.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Déroulé de l'essai */}
      <section className="bg-cream-2 py-20 sm:py-28" aria-labelledby="trial-title">
        <Container className="max-w-4xl">
          <SectionHeader
            eyebrow="L'essai gratuit"
            title="Comment se passent vos 30 jours"
            highlight="30 jours"
            lead="Pas de surprise : voici exactement ce qui se passe, du jour de l'inscription à votre décision."
          />
          <ol className="relative space-y-6 border-l-2 border-leaf-200 pl-8">
            {trialSteps.map((step) => (
              <li key={step.title} className="relative">
                <span className="absolute -left-[2.6rem] top-1.5 h-4 w-4 rounded-full bg-leaf-600 ring-4 ring-cream-2" aria-hidden="true" />
                <p className="text-sm font-semibold uppercase tracking-wider text-ember-600">{step.when}</p>
                <h3 className="mt-1 font-display text-lg font-bold">{step.title}</h3>
                <p className="mt-1.5 text-ink-soft">{step.text}</p>
              </li>
            ))}
          </ol>
          <div className="mt-10 text-center">
            <TrialCTA position="tarifs-trial" size="lg" />
          </div>
        </Container>
      </section>

      {/* Matrice comparative */}
      <section className="py-20 sm:py-28" aria-labelledby="compare-title">
        <Container>
          <SectionHeader
            eyebrow="Dans le détail"
            title="Comparez les plans, ligne par ligne"
            highlight="ligne par ligne"
          />
          <div className="overflow-x-auto rounded-3xl bg-white shadow-card ring-1 ring-ink/5">
            <table className="w-full min-w-[520px] border-collapse text-left">
              <caption className="sr-only">
                Comparatif détaillé des fonctionnalités incluses dans les plans Pro et Business
              </caption>
              <thead>
                <tr className="border-b border-ink/10">
                  <th scope="col" className="px-6 py-5 text-sm font-semibold uppercase tracking-wider text-ink-soft sm:px-8">
                    Fonctionnalité
                  </th>
                  {plans.map((plan) => (
                    <th key={plan.name} scope="col" className="px-4 py-5 text-center">
                      <span className="font-display text-base font-bold text-ink">{plan.name}</span>
                      <span className="block text-sm font-normal text-ink-soft">
                        {`${formatPlanPrice(plan.price)} €/mois`}
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              {compareGroups.map((group) => (
                <tbody key={group.title}>
                  <tr className="bg-leaf-50/60">
                    <th
                      scope="colgroup"
                      colSpan={3}
                      className="px-6 py-3 text-sm font-semibold uppercase tracking-wider text-leaf-800 sm:px-8"
                    >
                      {group.title}
                    </th>
                  </tr>
                  {group.rows.map((row) => (
                    <tr key={row.label} className="border-t border-ink/5">
                      <th scope="row" className="px-6 py-4 text-[0.95rem] font-normal text-ink sm:px-8">
                        {row.label}
                      </th>
                      {row.cells.map((cell, i) => (
                        <td key={i} className="px-4 py-4 text-center">
                          <CompareCell value={cell} />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              ))}
            </table>
          </div>
        </Container>
      </section>

      {/* Bande ROI */}
      <section className="py-20 sm:py-28" aria-labelledby="roi-title">
        <Container>
          <div className="grid items-center gap-10 rounded-3xl bg-gradient-to-br from-leaf-800 to-leaf-950 p-8 text-white sm:p-12 lg:grid-cols-[1.3fr_1fr]">
            <div>
              <h2 id="roi-title" className="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">
                Faites le calcul avec vos chiffres, pas les nôtres
              </h2>
              <p className="mt-4 max-w-xl text-lg text-leaf-100">
                Notre calculateur estime le chiffre d&apos;affaires que votre commerce laisse filer chaque année
                sans programme de fidélité. Deux curseurs, dix secondes, et un chiffre en euros. Pour resituer ce
                calcul dans votre budget, notre article{" "}
                <Link href="/blog/combien-coute-carte-fidelite-digitale" className="font-semibold text-white underline underline-offset-4 hover:text-leaf-200">
                  combien coûte une carte de fidélité digitale
                </Link>{" "}
                compare les modèles de tarification du marché.
              </p>
              <div className="mt-8">
                <Link href="/calculateur" className="font-semibold text-white underline underline-offset-4 hover:text-leaf-200">
                  Estimer mon CA récupérable →
                </Link>
              </div>
            </div>
            <div className="rounded-2xl bg-white/10 p-6 ring-1 ring-white/15">
              <p className="text-sm font-semibold uppercase tracking-wider text-gold-400">Exemple</p>
              <p className="mt-3 text-leaf-100">
                250 clients par semaine, panier moyen de 15 euros :
              </p>
              <p className="mt-2 font-display text-4xl font-extrabold tracking-tight text-white">
                14 600 € / an
              </p>
              <p className="mt-2 text-sm text-leaf-200">
                de CA récupérable estimé, contre 288 € d&apos;abonnement annuel au plan Business (formule annuelle, -20 %).
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ tarifs */}
      <section className="pb-20 sm:pb-28" aria-labelledby="faq-tarifs-title">
        <Container className="max-w-4xl">
          <SectionHeader eyebrow="Questions fréquentes" title="Tout ce qu'il faut savoir avant de vous lancer" />
          <Accordion items={pricingFaq} />
          <p className="mt-10 text-center text-ink-soft">
            Une situation particulière (saisonnalité, plusieurs boutiques, association) ?{" "}
            <Link href="/contact" className="font-semibold text-leaf-700 underline underline-offset-4 hover:text-leaf-800">
              Parlons-en
            </Link>
            .
          </p>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
