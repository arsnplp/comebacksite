import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { CTALink } from "@/components/ui/CTALink";
import { Badge } from "@/components/ui/Badge";
import { Accordion } from "@/components/ui/Accordion";
import { Reveal } from "@/components/ui/Reveal";
import { Icon, IconTile } from "@/components/ui/Icon";
import { LinkedParagraph } from "@/components/ui/LinkedParagraph";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata, site } from "@/lib/seo";
import { sectorDetails } from "@/content/sectors/details";
import type { FaqItem } from "@/content/faq";

export const metadata: Metadata = pageMetadata({
  title: "Carte de fidélité food truck : vos clients vous suivent partout",
  description:
    "Carte de fidélité digitale pour food truck : vos clients savent où vous êtes et reviennent plus souvent, d'un emplacement à l'autre.",
  path: "/carte-fidelite/food-truck",
  absoluteTitle: true,
});

/* ------------------------------------------------------------------ */
/* Ce que Comeback apporte à un food truck                             */
/* ------------------------------------------------------------------ */

const benefits = [
  {
    icon: "card" as const,
    title: "La carte papier, en mieux",
    text: "Vos clients ont déjà une carte tampons. Avec Comeback, elle vit dans leur téléphone : ils ne la perdent plus, ne l'oublient plus, et l'utilisent vraiment à chaque passage.",
  },
  {
    icon: "users" as const,
    title: "Une vraie visibilité sur vos clients",
    text: "Chaque scan vous dit qui revient, à quelle fréquence et sur quel emplacement. Vous connaissez enfin vos habitués, au-delà des visages que vous reconnaissez au comptoir.",
  },
  {
    icon: "megaphone" as const,
    title: "Vos fidèles reviennent encore plus souvent",
    text: "Une notification pour annoncer l'emplacement du jour, le plat de la semaine ou une offre du midi : vos clients fidèles reviennent plus souvent, sans dépenser en pub.",
  },
];

/* ------------------------------------------------------------------ */
/* Récompenses                                                         */
/* ------------------------------------------------------------------ */

const rewards = [
  { mechanic: "Le 10e menu offert", note: "Palier classique, adapté au rythme hebdomadaire des habitués." },
  { mechanic: "Une boisson offerte au 5e passage", note: "Palier court pour installer l'habitude dès le premier mois." },
  { mechanic: "Dessert offert le jour de l'anniversaire", note: "Une attention qui fait parler autour du truck." },
  { mechanic: "Annonce des emplacements en avant-première", note: "Via promo flash : vos fidèles savent avant tout le monde." },
];

/* ------------------------------------------------------------------ */
/* Étapes de mise en place                                             */
/* ------------------------------------------------------------------ */

const steps = [
  {
    title: "Créez votre carte entre deux services",
    text: "10 minutes sur votre téléphone : votre logo, votre récompense, vos couleurs. Rien à installer dans le camion.",
  },
  {
    title: "Affichez le QR code sur le passe-plat",
    text: "Les clients scannent en attendant leur commande, le moment parfait : ils ont le téléphone en main et quelques minutes devant eux.",
  },
  {
    title: "Emmenez vos fidèles partout",
    text: "Nouvel emplacement, changement d'horaire, plat du jour : prévenez tous vos clients en une notification, où qu'ils soient.",
  },
];

/* ------------------------------------------------------------------ */
/* Contenu long SEO                                                    */
/* ------------------------------------------------------------------ */

const seoBlocks = [
  {
    title: "Une carte de fidélité qui suit vos clients, où que vous soyez garé",
    paragraphs: [
      "La force d'un food truck, c'est d'aller chercher les clients là où ils sont. La carte de fidélité digitale prolonge cet avantage : elle reste dans la poche du client d'un emplacement à l'autre, là où une carte papier finit oubliée ou perdue. Les réseaux sociaux complètent le dispositif mais l'algorithme décide qui voit vos publications ; avec Comeback, chaque client qui scanne devient joignable directement, par une notification sur son écran de verrouillage.",
      "Votre emplacement du jour, vos horaires, votre plat de la semaine : l'information part une fois et touche tous vos inscrits. C'est ce lien direct qui fait revenir vos habitués plus souvent. Notre article sur [pourquoi vos clients ne reviennent pas](/blog/pourquoi-clients-ne-reviennent-pas) explique ce que change ce contact régulier sur la fréquence de visite.",
    ],
  },
  {
    title: "La file d'attente, votre meilleur moment pour recruter des fidèles",
    paragraphs: [
      "Un food truck a un atout que peu de commerces possèdent : un temps d'attente pendant lequel le client a son téléphone en main. C'est le moment idéal pour proposer le scan : le QR code affiché sur le camion, une phrase (« Scannez, le 10e menu est offert »), et l'inscription se fait pendant que la commande chauffe.",
      "À ce rythme, un truck qui sert 80 clients par service construit un fichier de plusieurs centaines de fidèles en quelques semaines. Un capital qui vous suit dans chaque nouveau spot, et que ni la pluie ni un changement d'emplacement ne peuvent effacer. Pour lisser les emplacements plus calmes, notre article sur [remplir les jours creux de son commerce](/blog/remplir-jours-creux-commerce) donne des mécaniques concrètes.",
    ],
  },
];

/* ------------------------------------------------------------------ */
/* FAQ                                                                 */
/* ------------------------------------------------------------------ */

const faq: FaqItem[] = [
  {
    question: "Comment mes clients savent-ils où je serai cette semaine ?",
    answer:
      "Envoyez une promo flash en début de semaine avec vos emplacements : elle arrive en notification sur le téléphone de tous vos clients inscrits. Ceux qui vous cherchaient savent immédiatement où vous trouver.",
  },
  {
    question: "Le scan fonctionne-t-il sans wifi, sur un marché ou une zone industrielle ?",
    answer:
      "Oui : la validation passe par votre téléphone et sa connexion mobile, comme votre terminal de paiement. Et la carte du client, une fois ajoutée à son Wallet, reste visible même sans réseau.",
  },
  {
    question: "J'ai deux camions : puis-je faire une seule carte ?",
    answer:
      "Oui, avec le plan Business : une carte commune valable aux deux camions, et un suivi complet de vos clients pour savoir qui revient et à quelle fréquence.",
  },
  {
    question: "Mes clients changent selon les emplacements : le programme reste-t-il pertinent ?",
    answer:
      "Chaque emplacement a ses habitués : les bureaux du mardi, le marché du samedi. Le programme fidélise chaque micro-clientèle sur son créneau, et vous donne pour la première fois une vision d'ensemble : qui revient, où, à quelle fréquence.",
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
  serviceType: "Carte de fidélité digitale pour food truck",
  name: "Carte de fidélité food truck : vos clients vous suivent partout",
  description:
    "Carte de fidélité digitale pour food truck : vos clients savent où vous êtes et reviennent plus souvent, d'un emplacement à l'autre.",
  provider: { "@type": "Organization", name: site.name, url: site.url },
  areaServed: { "@type": "Country", name: "France" },
  url: `${site.url}/carte-fidelite/food-truck`,
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { label: "Accueil", href: "/" },
    { label: "Secteurs", href: "/secteurs" },
    { label: "Food truck", href: "/carte-fidelite/food-truck" },
  ].map((crumb, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: crumb.label,
    item: `${site.url}${crumb.href === "/" ? "" : crumb.href}`,
  })),
};

const otherSectors = sectorDetails.filter((s) => s.slug !== "food-truck");

export default function FoodTruckPage() {
  return (
    <>
      <JsonLd data={faqJsonLd} />
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />

      <section className="relative overflow-hidden">
        <div className="dot-grid pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)] lg:block" />

        <Container wide className="relative pb-16 pt-12 sm:pt-16 lg:pb-24 lg:pt-20">
          <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <Badge variant="gold" className="mb-6">
                Food truck
              </Badge>

              <h1 className="font-display text-[2.6rem] font-bold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl">
                La carte de fidélité qui fait revenir vos clients à{" "}
                <span className="hl-gold">votre food truck</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg text-ink-soft text-pretty sm:text-xl">
                Vos habitués vous suivent d&apos;un emplacement à l&apos;autre. Comeback remplace la
                carte papier par une carte dans leur téléphone, vous donne une vraie visibilité sur vos
                clients et vous permet de les prévenir en une notification pour les faire revenir plus
                souvent.
              </p>

              <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <CTALink href="https://app.getcomeback.fr/login" position="secteur-food-truck-hero" size="xl">
                  Essayer gratuitement
                </CTALink>
                <CTALink href="/demo" position="secteur-food-truck-hero-demo" variant="ghost" size="xl" withArrow={false}>
                  <svg viewBox="0 0 20 20" className="h-5 w-5 text-leaf-700" aria-hidden="true">
                    <circle cx="10" cy="10" r="9" fill="none" stroke="currentColor" strokeWidth="1.6" />
                    <path d="M8 6.8v6.4l5.2-3.2L8 6.8Z" fill="currentColor" />
                  </svg>
                  Réserver une démo
                </CTALink>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                <Badge variant="gold">Plan gratuit à vie</Badge>
                <Badge>Sans application à télécharger</Badge>
                <Badge>Installé en 10 minutes</Badge>
                <Badge>Essai gratuit, sans CB</Badge>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/headerfoodtruck.png"
                alt="La carte de fidélité Comeback affichée sur un téléphone, devant un food truck"
                width={1370}
                height={1148}
                priority
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="h-auto w-full"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Ce que Comeback apporte */}
      <section className="py-16 sm:py-20" aria-labelledby="benefits-title">
        <Container>
          <SectionHeader
            eyebrow="Ce que ça change pour vous"
            title="Vos clients fidèles reviennent encore plus souvent"
            highlight="encore plus souvent"
            lead="Vous avez déjà des habitués. Comeback vous donne les moyens de les garder proches et de les faire revenir plus régulièrement, où que vous soyez garé."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {benefits.map((b, i) => (
              <Reveal key={b.title} delayMs={i * 100} className="h-full">
                <Card hover className="h-full p-8">
                  <IconTile name={b.icon} tone={i === 1 ? "gold" : "leaf"} className="mb-5" />
                  <h3 className="font-display text-lg font-bold">{b.title}</h3>
                  <p className="mt-2.5 text-ink-soft">{b.text}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Récompenses adaptées au métier */}
      <section className="bg-cream-2 py-20 sm:py-28" aria-labelledby="rewards-title">
        <Container>
          <SectionHeader
            eyebrow="Les mécaniques qui marchent"
            title="Des récompenses pensées pour votre food truck"
            highlight="pensées pour"
            lead="Vous choisissez la mécanique en 2 clics et pouvez l'ajuster à tout moment. Voici celles qui font leurs preuves dans votre métier."
          />
          <div className="grid gap-6 sm:grid-cols-2">
            {rewards.map((reward, i) => (
              <Reveal key={reward.mechanic} delayMs={(i % 2) * 100} className="h-full">
                <div className="flex h-full items-start gap-5 rounded-3xl bg-white p-7 shadow-card ring-1 ring-ink/5">
                  <IconTile name="gift" tone="gold" />
                  <div>
                    <h3 className="font-display text-lg font-bold">{reward.mechanic}</h3>
                    <p className="mt-1.5 text-[0.95rem] text-ink-soft">{reward.note}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Lancement en 3 étapes */}
      <section className="py-20 sm:py-28" aria-labelledby="steps-title">
        <Container>
          <SectionHeader
            eyebrow="Comment ça se lance"
            title="Votre carte de fidélité food truck opérationnelle en 10 minutes"
            highlight="10 minutes"
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
        </Container>
      </section>

      {/* Contenu long SEO */}
      <section className="pb-20 sm:pb-28" aria-label="En savoir plus">
        <Container className="max-w-3xl space-y-14">
          {seoBlocks.map((block) => (
            <div key={block.title}>
              <h2 className="font-display text-2xl font-bold tracking-tight text-balance sm:text-3xl">
                {block.title}
              </h2>
              {block.paragraphs.map((p, i) => (
                <LinkedParagraph key={i} text={p} className="mt-5 text-lg leading-relaxed text-ink-soft" />
              ))}
            </div>
          ))}
          <p className="rounded-2xl bg-leaf-50 p-6 text-ink-soft ring-1 ring-leaf-200">
            Pour aller plus loin : consultez le{" "}
            <Link href="/guide-fidelisation" className="font-semibold text-leaf-700 underline underline-offset-4 hover:text-leaf-800">
              guide complet de la fidélisation
            </Link>
            , comparez{" "}
            <Link href="/carte-fidelite-papier-ou-digitale" className="font-semibold text-leaf-700 underline underline-offset-4 hover:text-leaf-800">
              carte papier et carte digitale
            </Link>{" "}
            ou estimez votre potentiel avec le{" "}
            <Link href="/calculateur" className="font-semibold text-leaf-700 underline underline-offset-4 hover:text-leaf-800">
              calculateur de CA
            </Link>
            . Pour le détail technique, notre article sur{" "}
            <Link
              href="/blog/carte-fidelite-apple-wallet-google-wallet"
              className="font-semibold text-leaf-700 underline underline-offset-4 hover:text-leaf-800"
            >
              le fonctionnement de la carte Apple Wallet et Google Wallet
            </Link>{" "}
            explique chaque étape, et la page{" "}
            <Link href="/fonctionnalites" className="font-semibold text-leaf-700 underline underline-offset-4 hover:text-leaf-800">
              fonctionnalités
            </Link>{" "}
            liste tout ce que la carte permet de faire.
          </p>
        </Container>
      </section>

      {/* FAQ secteur */}
      <section className="pb-20 sm:pb-28" aria-labelledby="faq-sector-title">
        <Container className="max-w-4xl">
          <SectionHeader eyebrow="Questions fréquentes" title="Vos questions, spécial food truck" />
          <Accordion items={faq} />
        </Container>
      </section>

      {/* Autres secteurs */}
      <section className="bg-cream-2 py-16 sm:py-20" aria-label="Comeback dans les autres métiers">
        <Container>
          <p className="mb-8 text-center font-display text-2xl font-bold tracking-tight">
            Comeback dans les autres métiers
          </p>
          <ul className="flex flex-wrap justify-center gap-3">
            {otherSectors.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/carte-fidelite/${s.slug}`}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 font-medium text-ink shadow-card ring-1 ring-ink/5 transition-all hover:-translate-y-0.5 hover:shadow-card-lg"
                >
                  <Icon name={s.icon} className="h-4.5 w-4.5 text-leaf-700" />
                  {s.label}
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
