import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTALink } from "@/components/ui/CTALink";
import { Badge } from "@/components/ui/Badge";
import { Accordion } from "@/components/ui/Accordion";
import { Reveal } from "@/components/ui/Reveal";
import { Stagger } from "@/components/ui/Stagger";
import { Card } from "@/components/ui/Card";
import { JsonLd } from "@/components/seo/JsonLd";
import { AffiliateSimulator } from "@/components/sections/AffiliateSimulator";
import { pageMetadata, site } from "@/lib/seo";
import type { FaqItem } from "@/content/faq";

export const metadata: Metadata = pageMetadata({
  title: "Devenez partenaire Comeback : jusqu'à 50 % de commission récurrente",
  description:
    "Recommandez Comeback aux commerces autour de vous et touchez 20 à 50 % de chaque abonnement, tous les mois. Gratuit, sans engagement, retrait dès 20 €.",
  path: "/affiliation",
});

const SIGNUP_URL = "https://app.getcomeback.fr/affilies/inscription";
const LOGIN_URL = "https://app.getcomeback.fr/affilies";

/* ------------------------------------------------------------------ */
/* Notifications du héros : montants cohérents avec les paliers        */
/* (49,50 = 50 % de Business, 17,15 = 35 % de Pro, 9,80 = 20 % de Pro, */
/* 34,65 = 35 % de Business). Total affiché : 111,10 €.                */
/* ------------------------------------------------------------------ */

const notifications = [
  { amount: "+ 49,50 €", shop: "Pizzeria Da Marco", when: "à l'instant" },
  { amount: "+ 17,15 €", shop: "Institut Rosa", when: "il y a 2 h" },
  { amount: "+ 9,80 €", shop: "Barber Le Fauteuil", when: "hier" },
  { amount: "+ 34,65 €", shop: "Café des Halles", when: "il y a 3 jours" },
];

/* ------------------------------------------------------------------ */
/* Personas de la section empathie, reliées aux pages secteurs         */
/* ------------------------------------------------------------------ */

const personas = [
  { label: "Une esthéticienne", href: "/secteurs/institut-beaute" },
  { label: "Un coiffeur", href: "/secteurs/coiffeur" },
  { label: "Un food truck", href: "/secteurs/food-truck" },
  { label: "Un restaurant", href: "/secteurs/restaurant" },
  { label: "Une boulangerie", href: "/secteurs/boulangerie" },
  { label: "Un café", href: "/secteurs/cafe-bar" },
];

/* ------------------------------------------------------------------ */
/* Les 3 étapes                                                        */
/* ------------------------------------------------------------------ */

const steps = [
  {
    title: "Partagez votre lien unique",
    text: "Vous recevez un lien et un QR code à votre nom. Envoyez-le par message, montrez-le en rendez-vous, collez-le où vous voulez.",
  },
  {
    title: "Le commerce essaie, puis s'abonne",
    text: "Il teste Comeback gratuitement 3 mois. S'il s'abonne (19, 49 ou 99 € par mois), il est rattaché à vous.",
  },
  {
    title: "Vous touchez 20 à 50 %, chaque mois",
    text: "Votre commission tombe sur chaque paiement du commerce, mois après mois, tant qu'il reste client.",
  },
];

/* ------------------------------------------------------------------ */
/* Paliers                                                             */
/* ------------------------------------------------------------------ */

const tiers = [
  {
    name: "Bronze",
    range: "0 à 100 € générés / mois",
    rate: "20 %",
    example: "80 € générés, 16 € pour vous chaque mois",
    dark: false,
    medalCls: "text-ember-600",
  },
  {
    name: "Gold",
    range: "100 à 500 € générés / mois",
    rate: "35 %",
    example: "250 € générés, 87,50 € pour vous chaque mois",
    dark: false,
    medalCls: "text-gold-500",
  },
  {
    name: "Platinum",
    range: "500 € et plus / mois",
    rate: "50 %",
    example: "2 000 € générés, 1 000 € pour vous chaque mois",
    dark: true,
    medalCls: "text-gold-400",
  },
];

/* ------------------------------------------------------------------ */
/* Témoignages [PLACEHOLDER] — à remplacer par de vrais partenaires    */
/* ------------------------------------------------------------------ */

const testimonials = [
  {
    metric: "450 € / mois",
    detail: "9 commerces parrainés",
    quote:
      "Je visite des restaurants toute la journée. Je leur montre Comeback en 2 minutes, la carte dans le wallet fait le reste. Un vrai deuxième salaire.",
    name: "Karim B.",
    role: "Commercial CHR",
    city: "Lyon",
  },
  {
    metric: "200 € / mois",
    detail: "5 commerces parrainés",
    quote:
      "J'ai équipé mon institut, puis mes copines coiffeuses. Chaque mois ça tombe, sans rien faire de plus.",
    name: "Julie M.",
    role: "Esthéticienne à domicile",
    city: "Bordeaux",
  },
  {
    metric: "120 € / mois",
    detail: "3 commerces parrainés",
    quote:
      "Le kebab en bas de chez moi, mon barbier et un café. Objectif Gold avant l'été.",
    name: "Thomas R.",
    role: "Étudiant",
    city: "Paris",
  },
];

/* ------------------------------------------------------------------ */
/* FAQ                                                                 */
/* ------------------------------------------------------------------ */

const faq: FaqItem[] = [
  {
    question: "Combien ça coûte de devenir partenaire ?",
    answer:
      "Rien. L'inscription est gratuite, sans engagement et sans quota : vous partagez votre lien quand vous voulez, à votre rythme. Vous n'avez rien à vendre vous-même, le commerce teste Comeback gratuitement pendant 3 mois et décide seul.",
  },
  {
    question: "Quand suis-je payé ?",
    answer:
      "Chaque commission est débloquée 18 jours après le paiement du commerce (période de garantie anti-remboursement). Ensuite, vous retirez vos gains dès 20 €, par virement bancaire, Wise ou PayPal : l'argent arrive sous 2 à 3 jours.",
  },
  {
    question: "Combien de temps est-ce que je touche la commission ?",
    answer:
      "Tant que le commerce reste abonné. Ce n'est pas une prime unique : chaque mois où votre commerce paie son abonnement, votre pourcentage tombe. Un commerce fidélisé en janvier vous rapporte encore en décembre.",
  },
  {
    question: "Comment je suis mes gains ?",
    answer:
      "Depuis votre dashboard partenaire, en temps réel : clics sur votre lien, essais lancés, commerces abonnés, palier en cours et commissions du mois. Vous savez toujours où vous en êtes.",
  },
  {
    question: "Faut-il être commercial ou avoir une entreprise ?",
    answer:
      "Non. Étudiant, salarié, indépendant, commerçant déjà client : tout le monde peut partager son lien. Il vous suffit ensuite de déclarer ces revenus selon votre situation fiscale.",
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

/* ------------------------------------------------------------------ */
/* Médaille de palier (trait 1.8, cohérent avec Icon.tsx)              */
/* ------------------------------------------------------------------ */

function Medal({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={`h-9 w-9 ${className}`} aria-hidden="true">
      <path d="m8.2 8.6-3-5.1M15.8 8.6l3-5.1M9.6 3.5H4.9M19.1 3.5h-4.7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="12" cy="14.5" r="6" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="m9.8 14.8 1.6 1.6 3-3.4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function AffiliationPage() {
  return (
    <>
      <JsonLd data={faqJsonLd} />

      {/* ============================== HÉROS ============================== */}
      <section className="relative overflow-hidden">
        <div className="dot-grid pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)] lg:block" />

        <Container wide className="relative pb-16 pt-12 sm:pt-16 lg:pb-24 lg:pt-20">
          <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
            {/* Texte */}
            <div>
              <div className="anim-rise">
                <Badge variant="gold" className="mb-6">
                  Programme d&apos;affiliation Comeback
                </Badge>
              </div>

              <h1
                className="anim-rise font-display text-[2.6rem] font-bold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl"
                style={{ "--rise-delay": "90ms" } as CSSProperties}
              >
                Gagnez de l&apos;argent <span className="hl-gold">tous les mois</span>.
              </h1>

              <p
                className="anim-rise mt-6 max-w-xl text-lg text-ink-soft text-pretty sm:text-xl"
                style={{ "--rise-delay": "180ms" } as CSSProperties}
              >
                Recommandez Comeback aux commerces autour de vous. Chaque commerce qui s&apos;abonne
                via votre lien vous reverse <strong className="text-ink">20 à 50 % de son abonnement</strong>,
                chaque mois, tant qu&apos;il reste client.
              </p>

              <div
                className="anim-rise mt-8 flex flex-col items-start gap-4"
                style={{ "--rise-delay": "270ms" } as CSSProperties}
              >
                <CTALink href={SIGNUP_URL} position="affiliation-hero" size="xl">
                  Devenir partenaire, c&apos;est gratuit
                </CTALink>
                <Link
                  href={LOGIN_URL}
                  className="rounded px-1 text-sm font-medium text-ink-soft underline underline-offset-4 transition-colors hover:text-ink"
                >
                  Déjà partenaire ? Me connecter
                </Link>
              </div>

              <div
                className="anim-rise mt-6 flex flex-wrap gap-2"
                style={{ "--rise-delay": "360ms" } as CSSProperties}
              >
                <Badge>Gratuit</Badge>
                <Badge>Sans engagement</Badge>
                <Badge>Sans quota</Badge>
              </div>
            </div>

            {/* Visuel : notifications de commissions qui tombent */}
            <div className="relative mx-auto w-full max-w-sm" aria-hidden="true">
              <div className="absolute left-1/2 top-1/2 h-[24rem] w-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-leaf-100 opacity-70 blur-3xl" />
              <div className="relative space-y-3.5">
                {notifications.map((n, i) => (
                  <div key={n.shop} className="anim-float" style={{ "--float-delay": `${i * 700}ms` } as CSSProperties}>
                    <div
                      className="anim-stamp flex items-center gap-3.5 rounded-2xl bg-white px-4 py-3.5 shadow-card-lg ring-1 ring-ink/5"
                      style={{ "--rise-delay": `${350 + i * 220}ms` } as CSSProperties}
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-leaf-50 ring-1 ring-leaf-200">
                        <svg viewBox="0 0 20 20" className="h-5 w-5 text-leaf-700">
                          <path d="M12.8 6.2A3.4 3.4 0 0 0 10 5c-2 0-3.6 1.6-3.6 3.5v3c0 1.9 1.6 3.5 3.6 3.5 1.1 0 2.1-.5 2.8-1.2M5 8.8h4.4M5 11.2h4.4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                        </svg>
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="flex items-baseline justify-between gap-3">
                          <span className="truncate text-sm font-semibold text-ink">Commission reçue</span>
                          <span className="shrink-0 font-display text-lg font-extrabold text-leaf-700 tabular-nums">
                            {n.amount}
                          </span>
                        </p>
                        <p className="flex items-baseline justify-between gap-3 text-xs text-ink-soft">
                          <span className="truncate">{n.shop}</span>
                          <span className="shrink-0">{n.when}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
                <div
                  className="anim-stamp mx-auto w-fit rounded-full bg-gold-100 px-4 py-1.5 text-sm font-semibold text-gold-700 ring-1 ring-gold-300"
                  style={{ "--rise-delay": "1300ms" } as CSSProperties}
                >
                  + 111,10 € ce mois-ci, et ça recommence le mois prochain
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================ EMPATHIE ============================ */}
      <section className="bg-cream-2 py-20 sm:py-28" aria-labelledby="empathie-title">
        <Container className="max-w-4xl text-center">
          <SectionHeader
            eyebrow="Pourquoi vous"
            title="Vous connaissez forcément quelqu'un"
            highlight="forcément quelqu'un"
            lead="Un commerçant qui aimerait augmenter son chiffre d'affaires, faire revenir ses clients et les voir repartir contents. Proposez-lui Comeback : lui gagne des clients fidèles, vous êtes récompensé pour la mise en relation. Tous les mois."
          />
          <Reveal>
            <ul className="flex flex-wrap justify-center gap-2.5">
              {personas.map((p) => (
                <li key={p.href}>
                  <Link
                    href={p.href}
                    className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[0.95rem] font-medium text-ink shadow-card ring-1 ring-ink/5 transition-all hover:-translate-y-0.5 hover:text-leaf-700 hover:shadow-card-lg"
                  >
                    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 text-leaf-600" aria-hidden="true">
                      <path d="M3 8.5 6.5 12 13 4.5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      {/* ========================= COMMENT ÇA MARCHE ======================= */}
      <section className="py-20 sm:py-28" aria-labelledby="etapes-title">
        <Container>
          <SectionHeader
            eyebrow="Comment ça marche"
            title="Trois étapes, zéro paperasse"
            highlight="zéro paperasse"
          />
          <Stagger className="grid gap-6 md:grid-cols-3">
            {steps.map((s, i) => (
              <Card key={s.title} hover className="p-8">
                <p className="font-display text-5xl font-extrabold tracking-tight text-leaf-200">
                  {i + 1}
                </p>
                <h3 className="mt-4 font-display text-xl font-bold">{s.title}</h3>
                <p className="mt-2.5 text-ink-soft">{s.text}</p>
              </Card>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* ============================= PALIERS ============================= */}
      <section className="bg-cream-2 py-20 sm:py-28" aria-labelledby="paliers-title">
        <Container>
          <SectionHeader
            eyebrow="Vos commissions"
            title="Plus vos commerces paient, plus votre part grimpe"
            highlight="plus votre part grimpe"
            lead="Votre palier se calcule sur le total payé chaque mois par vos commerces actifs. Il est recalculé tous les mois, uniquement à la hausse de vos résultats."
          />
          <Stagger className="grid items-stretch gap-6 md:grid-cols-3">
            {tiers.map((t) => (
              <div
                key={t.name}
                className={`flex h-full flex-col rounded-3xl p-8 text-center shadow-card transition-transform duration-300 hover:-translate-y-1 hover:shadow-card-lg ${
                  t.dark
                    ? "bg-gradient-to-br from-leaf-800 to-leaf-950 text-white ring-1 ring-leaf-800"
                    : "bg-white ring-1 ring-ink/5"
                }`}
              >
                <Medal className={`mx-auto ${t.medalCls}`} />
                <h3 className="mt-4 font-display text-xl font-bold">{t.name}</h3>
                <p className={`mt-1 text-sm ${t.dark ? "text-leaf-200" : "text-ink-soft"}`}>{t.range}</p>
                <p
                  className={`my-5 font-display text-6xl font-extrabold tracking-tight ${
                    t.dark ? "text-gold-400" : "text-leaf-700"
                  }`}
                >
                  {t.rate}
                </p>
                <p className={`mt-auto text-sm ${t.dark ? "text-leaf-100" : "text-ink-soft"}`}>
                  {t.example}
                </p>
              </div>
            ))}
          </Stagger>
          <Reveal>
            <p className="mx-auto mt-10 max-w-2xl rounded-2xl bg-gold-100 px-6 py-4 text-center font-medium text-gold-700 ring-1 ring-gold-300">
              Exemple : vos commerces paient 250 € par mois au total. Vous êtes Gold, vous touchez
              87,50 € chaque mois.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* ============================ SIMULATEUR =========================== */}
      <section className="py-20 sm:py-28" aria-labelledby="simulateur-title">
        <Container>
          <SectionHeader
            eyebrow="Faites le calcul"
            title="Combien pouvez-vous gagner chaque mois ?"
            highlight="chaque mois"
            lead="Deux réglages, et votre potentiel s'affiche en euros, avec le bon palier appliqué automatiquement."
          />
          <Reveal>
            <AffiliateSimulator />
          </Reveal>
        </Container>
      </section>

      {/* ============================ TÉMOIGNAGES ========================== */}
      <section className="bg-cream-2 py-20 sm:py-28" aria-labelledby="temoignages-affilies-title">
        <Container>
          <SectionHeader
            eyebrow="Ils partagent déjà leur lien"
            title="Des partenaires comme vous. Des virements comme ça."
            highlight="Des virements comme ça."
          />
          <Stagger className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <Card key={t.name} hover className="flex h-full flex-col p-8">
                <div className="flex items-center gap-0.5 text-gold-500" aria-label="Note : 5 étoiles sur 5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} viewBox="0 0 20 20" className="h-4.5 w-4.5" aria-hidden="true">
                      <path
                        d="m10 1.8 2.5 5.1 5.6.8-4 4 1 5.6-5.1-2.7-5.1 2.7 1-5.6-4-4 5.6-.8L10 1.8Z"
                        fill="currentColor"
                      />
                    </svg>
                  ))}
                </div>
                <p className="mt-4 font-display text-4xl font-extrabold tracking-tight text-ember-600">
                  {t.metric}
                </p>
                <p className="mt-1 font-medium text-ink">{t.detail}</p>
                <blockquote className="mt-5 flex-1 text-ink-soft">« {t.quote} »</blockquote>
                <footer className="mt-6 flex items-center gap-3 border-t border-ink/5 pt-5">
                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-leaf-100 font-display text-sm font-bold text-leaf-800"
                    aria-hidden="true"
                  >
                    {t.name.charAt(0)}
                  </span>
                  <div className="text-sm">
                    <p className="font-semibold text-ink">{t.name}</p>
                    <p className="text-ink-soft">
                      {t.role} · {t.city}
                    </p>
                  </div>
                </footer>
              </Card>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* =============================== FAQ =============================== */}
      <section className="py-20 sm:py-28" aria-labelledby="faq-affiliation-title">
        <Container className="max-w-4xl">
          <SectionHeader eyebrow="Questions fréquentes" title="Tout ce qu'il faut savoir avant de partager votre lien" />
          <Accordion items={faq} />
        </Container>
      </section>

      {/* ============================ CTA FINAL ============================ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-leaf-800 to-leaf-950 py-20 text-white sm:py-28">
        <div className="dot-grid-dark pointer-events-none absolute inset-0 opacity-50" aria-hidden="true" />
        <Container className="relative text-center">
          <Reveal>
            <h2 className="mx-auto max-w-3xl font-display text-4xl font-bold tracking-tight text-balance sm:text-5xl">
              Votre lien peut commencer à rapporter dès ce mois-ci.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-leaf-100">
              Gratuit · Sans engagement · Sans quota · Retrait dès 20 €
            </p>
            <div className="mt-10">
              <CTALink href={SIGNUP_URL} position="affiliation-final" size="xl" className="px-12">
                Devenir partenaire, c&apos;est gratuit
              </CTALink>
            </div>
            <p className="mt-5 text-sm text-leaf-200">
              <Link href={LOGIN_URL} className="rounded underline underline-offset-4 transition-colors hover:text-white">
                Déjà partenaire ? Me connecter
              </Link>
            </p>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
