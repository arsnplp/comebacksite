import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTALink } from "@/components/ui/CTALink";
import { Badge } from "@/components/ui/Badge";
import { Accordion } from "@/components/ui/Accordion";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata, site } from "@/lib/seo";
import { plans } from "@/content/pricing";
import type { FaqItem } from "@/content/faq";

export const metadata: Metadata = pageMetadata({
  title: "Tarifs : carte de fidélité digitale dès 19 €/mois, 3 mois gratuits",
  description:
    "Trois plans clairs : Starter à 19 €, Pro à 49 €, Business à 99 € par mois HT. 3 mois d'essai gratuit sans carte bancaire, sans engagement. Rentabilisé dès 2 clients fidélisés par mois.",
  path: "/tarifs",
});

/* ------------------------------------------------------------------ */
/* Matrice comparative                                                 */
/* ------------------------------------------------------------------ */

type Cell = boolean | string;
type CompareRow = { label: string; cells: [Cell, Cell, Cell] };
type CompareGroup = { title: string; rows: CompareRow[] };

const compareGroups: CompareGroup[] = [
  {
    title: "Clients et cartes",
    rows: [
      { label: "Clients enregistrés", cells: ["50", "Illimités", "Illimités"] },
      { label: "Cartes de fidélité", cells: ["1", "3", "Illimitées"] },
      { label: "Carte Apple Wallet et Google Wallet", cells: [true, true, true] },
      { label: "QR code comptoir prêt à imprimer", cells: [true, true, true] },
    ],
  },
  {
    title: "Notifications",
    rows: [
      { label: "Notifications par mois", cells: ["1 000", "50 000", "Illimitées"] },
      { label: "Ciblage des envois", cells: ["Tous les clients", "Par rang, inactifs", "Par rang, inactifs"] },
      { label: "Notifications automatiques récurrentes", cells: [false, true, true] },
    ],
  },
  {
    title: "Données et statistiques",
    rows: [
      { label: "Export CSV du fichier client", cells: [false, true, true] },
      { label: "Historique des statistiques", cells: ["7 derniers jours", "Complet", "Complet"] },
    ],
  },
  {
    title: "Accompagnement",
    rows: [
      { label: "Support par email", cells: [true, true, true] },
      { label: "Support prioritaire", cells: [false, true, true] },
      { label: "Support dédié, réponse sous 4 h", cells: [false, false, true] },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* FAQ tarifs                                                          */
/* ------------------------------------------------------------------ */

const pricingFaq: FaqItem[] = [
  {
    question: "L'essai gratuit de 3 mois engage-t-il à quelque chose ?",
    answer:
      "Non. Nous ne demandons pas de carte bancaire à l'inscription : à la fin des 3 mois, rien n'est prélevé. Si Comeback vous rapporte, vous choisissez un plan. Sinon, votre compte s'arrête tout seul et vous récupérez votre fichier client.",
  },
  {
    question: "Y a-t-il des frais d'installation ou des coûts cachés ?",
    answer:
      "Aucun. Le prix affiché est le prix payé : pas de frais de mise en service, pas de matériel à acheter, pas de coût unitaire par notification (chaque plan inclut son volume mensuel). Le QR code comptoir vous est fourni en PDF prêt à imprimer.",
  },
  {
    question: "Puis-je changer de plan ou résilier à tout moment ?",
    answer:
      "Oui. L'abonnement est mensuel et sans engagement : vous passez de Starter à Pro ou de Pro à Business (et inversement) en 2 clics depuis votre espace, et la différence est calculée au prorata. La résiliation est immédiate, sans préavis ni justification.",
  },
  {
    question: "Le nombre de clients ou de notifications est-il limité ?",
    answer:
      "Le plan Starter inclut 50 clients, 1 000 notifications par mois et 1 carte de fidélité : de quoi valider la mécanique. Les plans Pro et Business sont en clients illimités, avec 50 000 notifications mensuelles pour Pro et un volume illimité pour Business. Si vous atteignez une limite, vous passez au plan supérieur en 2 clics, sans rien perdre.",
  },
  {
    question: "Les prix affichés sont-ils HT ou TTC ?",
    answer:
      "Les prix sont affichés hors taxes, comme pour la plupart des logiciels professionnels. Si votre commerce est assujetti, la TVA de 20 % est récupérable : le coût réel reste donc celui affiché.",
  },
  {
    question: "Comment être sûr que ce sera rentable pour mon commerce ?",
    answer:
      "Faites le calcul avec vos propres chiffres : au plan Starter, une seule visite supplémentaire par mois couvre l'abonnement, et au plan Pro il en faut environ 2, sur la base d'un panier moyen de 25 euros. Notre calculateur vous donne une estimation du chiffre d'affaires récupérable, et les 3 mois d'essai vous montrent le chiffre réel, mesuré dans votre dashboard.",
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
  offers: plans
    .filter((p) => p.price !== null)
    .map((p) => ({
      "@type": "Offer",
      name: `Plan ${p.name}`,
      price: p.price,
      priceCurrency: "EUR",
      description: p.description,
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
        title="Un prix simple, rentabilisé dès 2 clients fidélisés par mois"
        highlight="2 clients fidélisés"
        lead="3 mois d'essai gratuit sur tous les plans, sans carte bancaire. Vous ne payez que si la fidélité vous rapporte, et votre dashboard vous le prouve en euros."
      >
        <Badge>Sans carte bancaire</Badge>
        <Badge>Sans engagement</Badge>
        <Badge>Dès 19 € par mois</Badge>
      </PageHero>

      {/* Cartes de plans */}
      <section className="pb-16 sm:pb-20" aria-labelledby="plans-title">
        <h2 id="plans-title" className="sr-only">
          Les plans Comeback
        </h2>
        <Container>
          <div className="grid items-stretch gap-6 lg:grid-cols-3">
            {plans.map((plan, i) => (
              <Reveal key={plan.name} delayMs={i * 100} className="h-full">
                <div
                  className={`relative flex h-full flex-col rounded-3xl p-8 transition-transform duration-300 hover:-translate-y-1 ${
                    plan.recommended
                      ? "z-10 bg-gradient-to-b from-leaf-50/70 to-white shadow-card-lg ring-2 ring-leaf-600 lg:scale-[1.05]"
                      : "bg-white shadow-card ring-1 ring-ink/5 hover:shadow-card-lg"
                  }`}
                >
                  {plan.recommended && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-leaf-700 px-4 py-1 text-sm font-semibold text-white shadow-md">
                      Recommandé
                    </span>
                  )}
                  <h3 className="font-display text-lg font-bold">{plan.name}</h3>
                  <p className="mt-1 text-sm text-ink-soft">{plan.description}</p>
                  <p className="mt-5">
                    {plan.price !== null ? (
                      <>
                        <span className="font-display text-4xl font-extrabold tracking-tight">
                          {plan.price}&nbsp;€
                        </span>
                        <span className="text-ink-soft">{plan.period} HT</span>
                      </>
                    ) : (
                      <span className="font-display text-4xl font-extrabold tracking-tight">Sur devis</span>
                    )}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-ember-600">{plan.equivalent}</p>

                  <ul className="mt-6 flex-1 space-y-2.5">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-[0.95rem] text-ink-soft">
                        <svg viewBox="0 0 16 16" className="mt-1 h-4 w-4 shrink-0 text-leaf-600" aria-hidden="true">
                          <path d="M3 8.5 6.5 12 13 4.5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {f}
                      </li>
                    ))}
                    {plan.missing?.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-[0.95rem] text-ink/35">
                        <svg viewBox="0 0 16 16" className="mt-1 h-4 w-4 shrink-0 text-ink/20" aria-hidden="true">
                          <path d="M4 8h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <CTALink
                      href={plan.price !== null ? "https://app.getcomeback.fr/login" : "/demo"}
                      position={`tarifs-${plan.name.toLowerCase()}`}
                      variant={plan.recommended ? "primary" : "ghost"}
                      className="w-full"
                    >
                      {plan.cta}
                    </CTALink>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-ink-soft">
            Pas encore sûr du bon plan ? Commencez l&apos;essai gratuit : vous choisirez à la fin des 3 mois,
            avec vos vrais chiffres sous les yeux.
          </p>
        </Container>
      </section>

      {/* Matrice comparative */}
      <section className="bg-cream-2 py-20 sm:py-28" aria-labelledby="compare-title">
        <Container>
          <SectionHeader
            eyebrow="Dans le détail"
            title="Comparez les plans, ligne par ligne"
            highlight="ligne par ligne"
          />
          <div className="overflow-x-auto rounded-3xl bg-white shadow-card ring-1 ring-ink/5">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <caption className="sr-only">
                Comparatif détaillé des fonctionnalités incluses dans les plans Starter, Pro et Business
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
                        {plan.price !== null ? `${plan.price} €/mois` : "Sur devis"}
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
                      colSpan={4}
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
                sans programme de fidélité. Deux curseurs, dix secondes, et un chiffre en euros.
              </p>
              <div className="mt-8">
                <CTALink href="/calculateur" position="tarifs-roi" size="lg">
                  Estimer mon CA récupérable
                </CTALink>
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
                de CA récupérable estimé, contre 228 € d&apos;abonnement annuel au plan Starter.
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
