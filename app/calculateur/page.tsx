import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Accordion } from "@/components/ui/Accordion";
import { Icon } from "@/components/ui/Icon";
import { FullCalculator } from "@/components/sections/FullCalculator";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { COEFFICIENTS } from "@/lib/calculator";
import type { FaqItem } from "@/content/faq";

export const metadata: Metadata = pageMetadata({
  title: "Calculateur : combien de CA votre commerce laisse-t-il filer ?",
  description:
    "Estimez en 10 secondes le chiffre d'affaires annuel que votre commerce perd sans programme de fidélité. Méthodologie transparente, hypothèses prudentes, résultat en euros.",
  path: "/calculateur",
});

const methodology = [
  {
    step: "Vos visites annuelles",
    detail: `Clients par semaine × ${COEFFICIENTS.WEEKS_PER_YEAR} semaines : le flux annuel réel de votre commerce, à partir de vos deux réponses.`,
  },
  {
    step: "Les clients sensibles à la fidélité",
    detail: `Nous n'en retenons que ${COEFFICIENTS.LOYALTY_SENSITIVE_SHARE * 100} % : la part de clients dont le comportement change réellement avec un programme de fidélité actif.`,
  },
  {
    step: "Les visites récupérables",
    detail: `Sur ce segment, nous ne comptons que ${COEFFICIENTS.RECOVERABLE_VISIT_SHARE * 100} % de visites supplémentaires réellement récupérables : les touristes, les occasionnels de passage et les clients qui déménagent ne reviendront pas, programme ou pas.`,
  },
  {
    step: "Le résultat en euros",
    detail:
      "Ces visites récupérables sont multipliées par votre panier moyen, puis arrondies à la centaine. Un chiffre trop précis serait moins honnête, pas plus.",
  },
];

const calculatorFaq: FaqItem[] = [
  {
    question: "Pourquoi votre estimation est-elle volontairement prudente ?",
    answer:
      "Parce qu'un chiffre gonflé ne sert à rien : vous vérifierez le résultat réel dans votre dashboard pendant l'essai gratuit. Nous préférons annoncer moins et que vous constatiez plus, plutôt que l'inverse. Les coefficients utilisés sont affichés en clair sur cette page.",
  },
  {
    question: "Le résultat correspond-il à ce que je vais gagner avec Comeback ?",
    answer:
      "C'est un potentiel, pas une promesse : il représente le chiffre d'affaires accessible si vos clients existants revenaient un peu plus souvent. Votre résultat réel dépend de votre récompense, de la visibilité du QR code et de votre régularité. Le dashboard mesure ensuite votre chiffre réel, en euros.",
  },
  {
    question: "Mon activité est saisonnière : comment interpréter le chiffre ?",
    answer:
      "Renseignez votre fréquentation moyenne sur l'année (haute et basse saison confondues). Notez que la fidélité est justement l'un des meilleurs amortisseurs de saisonnalité : vos fidèles sont les clients qui restent quand les touristes partent.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: calculatorFaq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function CalculatorPage() {
  return (
    <>
      <JsonLd data={faqJsonLd} />

      <PageHero
        crumbs={[{ label: "Calculateur de CA perdu", href: "/calculateur" }]}
        eyebrow="Calculateur"
        title="Combien votre commerce laisse-t-il filer chaque année ?"
        highlight="laisse-t-il filer"
        lead="Deux curseurs, dix secondes : estimez le chiffre d'affaires que vos clients déjà conquis ne dépensent pas chez vous, faute d'une raison de revenir."
      />

      <section className="pb-16 sm:pb-20" aria-label="Calculateur">
        <Container wide>
          <FullCalculator />
        </Container>
      </section>

      {/* Méthodologie transparente */}
      <section className="bg-cream-2 py-20 sm:py-28" aria-labelledby="methodo-title">
        <Container className="max-w-4xl">
          <SectionHeader
            eyebrow="Méthodologie"
            title="Le calcul, en toutes lettres"
            highlight="en toutes lettres"
            lead="Pas de formule magique ni de chiffre sorti du chapeau : voici exactement comment l'estimation est construite, étape par étape."
          />
          <ol className="space-y-4">
            {methodology.map((m, i) => (
              <li key={m.step} className="flex gap-5 rounded-3xl bg-white p-6 shadow-card ring-1 ring-ink/5 sm:p-7">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-leaf-700 font-display text-lg font-bold text-white">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold">{m.step}</h3>
                  <p className="mt-1.5 text-ink-soft">{m.detail}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-8 flex items-start gap-3 rounded-2xl bg-white p-5 text-sm text-ink-soft ring-1 ring-ink/5">
            <Icon name="shield" className="mt-0.5 h-5 w-5 shrink-0 text-leaf-600" />
            <span>
              Cette estimation ne remplace pas vos chiffres réels : pendant les 3 mois d&apos;essai, votre
              dashboard mesure le chiffre d&apos;affaires effectivement généré par la fidélité, avec vos vraies
              données de caisse. C&apos;est ce chiffre-là qui doit décider de la suite.
            </span>
          </p>
        </Container>
      </section>

      {/* FAQ calculateur */}
      <section className="py-20 sm:py-28" aria-labelledby="faq-calc-title">
        <Container className="max-w-4xl">
          <SectionHeader eyebrow="Questions fréquentes" title="Ce que ce chiffre veut dire, et ce qu'il ne veut pas dire" />
          <Accordion items={calculatorFaq} />
          <p className="mt-10 text-center text-ink-soft">
            Envie de voir comment récupérer ce chiffre d&apos;affaires ?{" "}
            <Link href="/fonctionnalites" className="font-semibold text-leaf-700 underline underline-offset-4 hover:text-leaf-800">
              Découvrez les fonctionnalités
            </Link>{" "}
            ou{" "}
            <Link href="/tarifs" className="font-semibold text-leaf-700 underline underline-offset-4 hover:text-leaf-800">
              consultez les tarifs
            </Link>
            .
          </p>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
