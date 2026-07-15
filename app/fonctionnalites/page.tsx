import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { CTALink } from "@/components/ui/CTALink";
import { Badge } from "@/components/ui/Badge";
import { Accordion } from "@/components/ui/Accordion";
import { Reveal } from "@/components/ui/Reveal";
import { Icon, IconTile, type IconName } from "@/components/ui/Icon";
import { PhoneWalletMockup } from "@/components/mockups/PhoneWalletMockup";
import { DashboardMockup } from "@/components/mockups/DashboardMockup";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata } from "@/lib/seo";
import type { FaqItem } from "@/content/faq";

export const metadata: Metadata = pageMetadata({
  title: "Fonctionnalités : carte Wallet, relances automatiques, dashboard CA",
  description:
    "Carte de fidélité dans Apple Wallet et Google Wallet, relances automatiques des clients inactifs, promos flash et dashboard en euros. Sans appli, sans matériel, sans changer de caisse.",
  path: "/fonctionnalites",
});

/* ------------------------------------------------------------------ */
/* Contenu                                                             */
/* ------------------------------------------------------------------ */

type Feature = {
  icon: IconName;
  eyebrow: string;
  title: string;
  highlight: string;
  text: string;
  points: string[];
  visual: ReactNode;
  reverse?: boolean;
};

const features: Feature[] = [
  {
    icon: "card",
    eyebrow: "La carte",
    title: "Une carte dans leur téléphone, impossible à oublier",
    highlight: "impossible à oublier",
    text: "Votre carte de fidélité vit dans Apple Wallet et Google Wallet, avec votre logo, vos couleurs et votre récompense. Vos clients l'ont toujours sur eux, sans rien télécharger.",
    points: [
      "Compatible iPhone et Android, sans application",
      "Personnalisée à votre image en quelques clics",
      "Tampon ajouté en 2 secondes à chaque passage",
      "Le solde de tampons toujours visible, comme une carte d'embarquement",
    ],
    visual: <PhoneWalletMockup />,
  },
  {
    icon: "bell",
    eyebrow: "Les relances",
    title: "Vos clients reviennent sans que vous leviez le petit doigt",
    highlight: "sans que vous leviez le petit doigt",
    text: "Comeback surveille qui n'est pas revenu et le relance au bon moment, directement sur l'écran de verrouillage. Vous gardez la main sur le message et la fréquence.",
    points: [
      "Relance automatique des clients inactifs après X jours",
      "Notification quand la récompense approche",
      "Offre anniversaire envoyée le jour J",
      "Promo flash envoyée à tous vos clients en 2 clics",
    ],
    visual: <NotificationsMockup />,
    reverse: true,
  },
  {
    icon: "chart",
    eyebrow: "Le pilotage",
    title: "Un dashboard qui parle en euros, pas en likes",
    highlight: "en euros",
    text: "Clients inscrits, visites, CA généré par la fidélité : vous voyez ce que le programme vous rapporte, semaine après semaine. De vraies décisions, avec de vrais chiffres.",
    points: [
      "CA généré par la fidélité, visible d'un coup d'œil",
      "Fréquence de visite et clients les plus fidèles",
      "Fichier client exportable en un clic (Excel)",
      "Vos données restent à vous, hébergées en Europe",
    ],
    visual: <DashboardMockup />,
  },
];

const bentoTiles: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "scan",
    title: "Inscription en 10 secondes",
    text: "Un QR code sur le comptoir. Le client scanne avec son appareil photo, la carte est dans son Wallet. Pas de compte, pas de mot de passe.",
  },
  {
    icon: "send",
    title: "Promos flash",
    text: "Un jour de pluie, un stock à écouler : envoyez une offre à tous vos clients en 30 secondes, sans imprimer un seul flyer.",
  },
  {
    icon: "gift",
    title: "Récompenses sur mesure",
    text: "10 cafés = 1 offert, -10 % au 5e passage, un soin au 10e rendez-vous : vous choisissez la mécanique qui colle à votre métier.",
  },
  {
    icon: "download",
    title: "Fichier client à vous",
    text: "Prénoms, visites, préférences : votre base se construit à chaque scan et s'exporte en un clic. Si vous partez, elle part avec vous.",
  },
  {
    icon: "building",
    title: "Multi-établissements",
    text: "Un programme commun pour tout votre réseau, des statistiques par point de vente. Idéal franchises et succursales.",
  },
  {
    icon: "shield",
    title: "RGPD par conception",
    text: "Données hébergées en Europe, jamais revendues, consentement clair. Vos clients sont en confiance, vous êtes en règle.",
  },
];

const noChangePoints: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "checkCircle",
    title: "Aucun matériel à acheter",
    text: "Pas de borne, pas de tablette dédiée. Un QR code imprimé suffit, nous vous fournissons le PDF prêt à poser.",
  },
  {
    icon: "checkCircle",
    title: "Aucune intégration caisse",
    text: "Comeback fonctionne à côté de votre caisse actuelle, quelle qu'elle soit. Rien à brancher, rien à paramétrer.",
  },
  {
    icon: "checkCircle",
    title: "Aucune formation nécessaire",
    text: "Si vous savez envoyer un SMS, vous savez utiliser Comeback. Votre équipe est opérationnelle en 5 minutes.",
  },
];

const featuresFaq: FaqItem[] = [
  {
    question: "La carte fonctionne-t-elle sur iPhone et Android ?",
    answer:
      "Oui. Sur iPhone, la carte s'ajoute dans Apple Wallet ; sur Android, dans Google Wallet. Ces deux applications sont préinstallées sur les téléphones : vos clients n'ont rien à télécharger, quel que soit leur appareil.",
  },
  {
    question: "Comment j'ajoute un tampon quand un client passe en caisse ?",
    answer:
      "Le client présente sa carte, vous scannez son code avec votre propre téléphone (ou il scanne votre QR de validation). Le tampon s'ajoute instantanément et sa carte se met à jour dans son Wallet. L'opération prend 2 secondes, même en plein rush.",
  },
  {
    question: "Puis-je changer ma récompense après le lancement ?",
    answer:
      "Oui, à tout moment depuis votre espace. Vous pouvez ajuster la mécanique (nombre de passages, type de récompense) et le changement s'applique automatiquement aux cartes déjà distribuées, sans rien réimprimer.",
  },
  {
    question: "Les notifications sont-elles considérées comme du spam ?",
    answer:
      "Non. Ce sont des notifications Wallet, liées à une carte que le client a choisi d'ajouter : pas de SMS ni d'email non sollicités. Vous maîtrisez la fréquence, et le client peut retirer sa carte à tout moment. C'est cette sobriété qui explique les excellents taux de retour.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: featuresFaq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

/* ------------------------------------------------------------------ */
/* Visuel : pile de notifications                                      */
/* ------------------------------------------------------------------ */

/** Pile de notifications Wallet stylisées (visuel de démonstration). */
function NotificationsMockup() {
  const notifications = [
    {
      title: "Ça fait un moment !",
      text: "Votre 8e tampon vous attend. On vous garde une place ?",
      time: "il y a 2 min",
      accent: false,
    },
    {
      title: "Joyeux anniversaire Léa",
      text: "Votre dessert offert est valable toute la semaine.",
      time: "hier",
      accent: true,
    },
    {
      title: "Récompense débloquée",
      text: "10/10 : votre café offert vous attend au comptoir.",
      time: "mardi",
      accent: false,
    },
  ];

  return (
    <div className="relative mx-auto max-w-md" aria-hidden="true">
      <div className="dot-grid absolute -inset-6 rounded-[2.5rem] opacity-60" />
      <div className="relative space-y-4">
        {notifications.map((n, i) => (
          <Reveal key={n.title} delayMs={i * 120}>
            <div
              className={`flex items-start gap-3 rounded-2xl bg-white p-4 shadow-card ring-1 ring-ink/5 ${
                i === 1 ? "translate-x-4 sm:translate-x-8" : ""
              }`}
            >
              <span
                className={`mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                  n.accent ? "bg-gold-400 text-ink" : "bg-leaf-700 text-white"
                }`}
              >
                <Icon name={n.accent ? "gift" : "bell"} className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <div className="flex items-baseline justify-between gap-3">
                  <p className="text-sm font-bold text-ink">{n.title}</p>
                  <p className="shrink-0 text-xs text-ink-faint">{n.time}</p>
                </div>
                <p className="mt-0.5 text-sm leading-snug text-ink-soft">{n.text}</p>
              </div>
            </div>
          </Reveal>
        ))}
        <p className="pt-1 text-center text-sm font-medium text-ink-soft">
          Envoyées automatiquement, au bon moment, à la bonne personne.
        </p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function FeaturesPage() {
  return (
    <>
      <JsonLd data={faqJsonLd} />

      <PageHero
        crumbs={[{ label: "Fonctionnalités", href: "/fonctionnalites" }]}
        eyebrow="Fonctionnalités"
        title="Tout pour faire revenir vos clients. Rien que vous n'ayez à gérer."
        highlight="faire revenir vos clients"
        lead="Une carte dans leur Wallet, des relances qui partent toutes seules, un dashboard qui compte en euros. Voici ce que Comeback fait pour votre commerce, concrètement."
      >
        <CTALink href="https://app.getcomeback.fr/login" position="features-hero" size="xl">
          Essayer gratuitement 3 mois
        </CTALink>
        <CTALink href="/demo" position="features-hero-demo" variant="ghost" size="xl">
          Réserver une démo
        </CTALink>
      </PageHero>

      <div className="pb-4">
        <Container wide className="flex flex-wrap justify-center gap-2">
          <Badge>Sans application à télécharger</Badge>
          <Badge>Sans matériel à acheter</Badge>
          <Badge>Sans changer de caisse</Badge>
        </Container>
      </div>

      {/* Les 3 piliers, en rangées alternées */}
      {features.map((f) => (
        <section key={f.eyebrow} className="py-16 sm:py-24" aria-label={f.title}>
          <Container wide>
            <div
              className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-20 ${
                f.reverse ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div>
                <p className="mb-4 flex items-center gap-2.5 text-sm font-semibold uppercase tracking-[0.14em] text-leaf-700">
                  <IconTile name={f.icon} className="h-9 w-9 rounded-xl [&>svg]:h-5 [&>svg]:w-5" />
                  {f.eyebrow}
                </p>
                <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">
                  {f.title.split(f.highlight)[0]}
                  <span className="hl-gold">{f.highlight}</span>
                  {f.title.split(f.highlight)[1]}
                </h2>
                <p className="mt-5 text-lg text-ink-soft text-pretty">{f.text}</p>
                <ul className="mt-7 space-y-3">
                  {f.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-ink-soft">
                      <Icon name="checkCircle" className="mt-0.5 h-5 w-5 shrink-0 text-leaf-600" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              <Reveal>{f.visual}</Reveal>
            </div>
          </Container>
        </section>
      ))}

      {/* Bento : le reste de la boîte à outils */}
      <section className="bg-cream-2 py-20 sm:py-28" aria-labelledby="bento-title">
        <Container>
          <SectionHeader
            eyebrow="Et aussi"
            title="La boîte à outils complète du commerce qui fidélise"
            highlight="boîte à outils complète"
            lead="Chaque fonctionnalité répond à une situation que vous vivez déjà en boutique. Pas de gadgets, pas d'options que personne n'utilise."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {bentoTiles.map((tile, i) => (
              <Reveal key={tile.title} delayMs={(i % 3) * 100}>
                <Card hover className="h-full p-8">
                  <IconTile name={tile.icon} className="mb-5" />
                  <h3 className="font-display text-lg font-bold">{tile.title}</h3>
                  <p className="mt-2.5 text-ink-soft">{tile.text}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Zéro changement dans l'existant */}
      <section className="py-20 sm:py-28" aria-labelledby="nochange-title">
        <Container>
          <SectionHeader
            eyebrow="Votre quotidien ne change pas"
            title="On s'ajoute à votre commerce. On ne le chamboule pas."
            highlight="On ne le chamboule pas"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {noChangePoints.map((p, i) => (
              <Reveal key={p.title} delayMs={i * 100}>
                <div className="h-full rounded-3xl border-2 border-dashed border-leaf-200 p-8 text-center">
                  <span className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-leaf-700 text-white">
                    <Icon name={p.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="font-display text-lg font-bold">{p.title}</h3>
                  <p className="mt-2.5 text-ink-soft">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-12 text-center text-lg text-ink-soft">
            Une question sur votre cas précis ?{" "}
            <Link href="/contact" className="font-semibold text-leaf-700 underline underline-offset-4 hover:text-leaf-800">
              Écrivez-nous
            </Link>{" "}
            ou consultez les{" "}
            <Link href="/tarifs" className="font-semibold text-leaf-700 underline underline-offset-4 hover:text-leaf-800">
              tarifs détaillés
            </Link>
            .
          </p>
        </Container>
      </section>

      {/* FAQ fonctionnalités */}
      <section className="pb-20 sm:pb-28" aria-labelledby="faq-features-title">
        <Container className="max-w-4xl">
          <SectionHeader
            eyebrow="Questions fréquentes"
            title="Les questions qu'on nous pose sur les fonctionnalités"
          />
          <Accordion items={featuresFaq} />
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
