import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata, site } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Glossaire de la fidélisation : les termes expliqués simplement",
  description:
    "Carte Wallet, taux de rétention, churn, LTV, promo flash, RGPD : les termes de la fidélisation client expliqués simplement, pour les commerçants qui veulent comprendre sans jargon.",
  path: "/ressources/glossaire",
});

type Term = {
  term: string;
  definition: string;
  /** Lien interne optionnel affiché sous la définition */
  link?: { href: string; label: string };
};

const terms: Term[] = [
  {
    term: "Carte de fidélité digitale",
    definition:
      "Version dématérialisée de la carte à tampons : elle vit dans le téléphone du client (généralement dans Apple Wallet ou Google Wallet) et se met à jour à chaque passage. Contrairement au carton, elle ne se perd pas, ne se fraude pas et permet d'envoyer des notifications.",
    link: { href: "/fonctionnalites", label: "Voir comment fonctionne la carte Comeback" },
  },
  {
    term: "Churn (ou attrition)",
    definition:
      "La part de clients qui cessent de fréquenter votre commerce sur une période donnée. Un churn élevé oblige à recruter sans cesse de nouveaux clients pour maintenir le chiffre d'affaires : c'est précisément ce qu'un programme de fidélité vient réduire.",
  },
  {
    term: "Fichier client",
    definition:
      "La base d'informations sur vos clients : prénoms, coordonnées, fréquence de visite, historique. C'est l'actif le plus sous-estimé du commerce de proximité : il permet de relancer, d'inviter et d'animer sans dépendre d'aucune plateforme. Avec une carte digitale, il se construit automatiquement à chaque scan.",
  },
  {
    term: "Fréquence de visite",
    definition:
      "Le nombre de fois qu'un client vient chez vous sur une période (semaine, mois). C'est le levier principal de la fidélisation en commerce de proximité : une petite hausse de fréquence, multipliée par toute la clientèle, produit un effet majeur sur le chiffre d'affaires annuel.",
  },
  {
    term: "LTV (Lifetime Value, ou valeur vie client)",
    definition:
      "Le chiffre d'affaires total qu'un client génère sur toute sa relation avec votre commerce. Un client de boulangerie à 3 euros par visite, 4 fois par semaine pendant 5 ans, représente une LTV de plus de 3 000 euros : c'est ce chiffre, et non le panier du jour, qui mesure ce que vaut un fidèle.",
  },
  {
    term: "Panier moyen",
    definition:
      "Le montant moyen dépensé par un client à chaque passage. Avec la fréquence de visite, c'est l'une des deux variables qui déterminent votre chiffre d'affaires : les programmes de fidélité agissent d'abord sur la fréquence, et souvent aussi sur le panier (un habitué ose davantage).",
  },
  {
    term: "Pass Wallet",
    definition:
      "Le format de carte numérique utilisé par Apple Wallet et Google Wallet : le même que celui des cartes d'embarquement et des billets de concert. Un pass s'ajoute en un scan, sans application à télécharger, et peut envoyer des notifications sur l'écran de verrouillage.",
  },
  {
    term: "Programme à points",
    definition:
      "Mécanique où chaque euro dépensé crédite des points convertibles en avantages. Plus fine que la carte à tampons mais moins lisible : le client doit calculer ce que valent ses points. À réserver aux commerces à paniers très variables.",
  },
  {
    term: "Programme à tampons",
    definition:
      "La mécanique la plus simple de la fidélisation : un passage égale un tampon, et un nombre défini de tampons débloque une récompense (10 cafés = 1 offert). Sa lisibilité immédiate en fait la mécanique de référence du commerce de proximité.",
    link: { href: "/ressources/guide-fidelisation", label: "Choisir sa mécanique dans le guide" },
  },
  {
    term: "Promo flash",
    definition:
      "Offre ponctuelle et limitée dans le temps, envoyée aux clients inscrits à votre programme : une boisson offerte cet après-midi, une remise ce week-end. Utilisée avec parcimonie, c'est l'outil le plus direct pour remplir un jour creux ou écouler un stock.",
  },
  {
    term: "QR code",
    definition:
      "Le carré à scanner qui sert de porte d'entrée au programme : le client le vise avec l'appareil photo de son téléphone et sa carte s'ajoute au Wallet en quelques secondes. Posé à côté de la caisse, il transforme le moment du paiement en moment d'inscription.",
  },
  {
    term: "Relance automatique",
    definition:
      "Notification envoyée sans intervention de votre part à un client qui n'est pas revenu depuis un délai que vous définissez. C'est l'automatisme le plus rentable d'un programme : il rattrape les clients au moment exact où ils commencent à décrocher.",
  },
  {
    term: "RGPD",
    definition:
      "Le Règlement général sur la protection des données, qui encadre la collecte et l'usage des données personnelles en Europe. Pour un programme de fidélité, il impose notamment le consentement du client, un usage transparent et la possibilité de supprimer ses données. Les données Comeback sont hébergées en Europe et jamais revendues.",
    link: { href: "/politique-confidentialite", label: "Lire notre politique de confidentialité" },
  },
  {
    term: "ROI (retour sur investissement)",
    definition:
      "Le rapport entre ce que votre programme rapporte (chiffre d'affaires généré par la fidélité) et ce qu'il coûte (abonnement, récompenses offertes). Un programme piloté doit afficher son ROI en euros, pas en impressions ni en likes.",
    link: { href: "/calculateur", label: "Estimer votre potentiel avec le calculateur" },
  },
  {
    term: "Taux d'adoption",
    definition:
      "La part de clients qui acceptent de rejoindre votre programme quand on le leur propose. C'est le talon d'Achille des applications dédiées (téléchargement et compte obligatoires) et le point fort des cartes Wallet, qui s'ajoutent en un scan de 10 secondes.",
  },
  {
    term: "Taux de rétention",
    definition:
      "La part de clients toujours actifs après une période donnée : l'inverse du churn. C'est l'indicateur de santé long terme d'un commerce : un point de rétention gagné vaut souvent plus que plusieurs points d'acquisition.",
  },
  {
    term: "Wallet (Apple Wallet / Google Wallet)",
    definition:
      "Les applications préinstallées sur iPhone et Android qui stockent cartes bancaires, billets et cartes de fidélité. Parce qu'elles sont déjà sur tous les téléphones, elles suppriment la barrière du téléchargement : c'est ce qui rend la carte de fidélité digitale accessible à tous les clients, quel que soit leur âge.",
  },
];

const glossaryJsonLd = {
  "@context": "https://schema.org",
  "@type": "DefinedTermSet",
  name: "Glossaire de la fidélisation client",
  url: `${site.url}/ressources/glossaire`,
  hasDefinedTerm: terms.map((t) => ({
    "@type": "DefinedTerm",
    name: t.term,
    description: t.definition,
  })),
};

export default function GlossaryPage() {
  return (
    <>
      <JsonLd data={glossaryJsonLd} />

      <PageHero
        crumbs={[
          { label: "Ressources", href: "/ressources/guide-fidelisation" },
          { label: "Glossaire", href: "/ressources/glossaire" },
        ]}
        eyebrow="Glossaire"
        title="Les mots de la fidélisation, expliqués sans jargon"
        highlight="sans jargon"
        lead="Churn, LTV, taux de rétention, pass Wallet : les termes que vous croiserez en travaillant votre fidélité client, définis simplement et reliés à votre quotidien de commerçant."
      />

      <section className="pb-20 sm:pb-28" aria-label="Définitions">
        <Container className="max-w-3xl">
          <dl className="space-y-5">
            {terms.map((t) => (
              <div key={t.term} id={t.term.toLowerCase().replace(/[^a-z0-9]+/g, "-")} className="scroll-mt-28 rounded-3xl bg-white p-7 shadow-card ring-1 ring-ink/5 sm:p-8">
                <dt className="font-display text-xl font-bold">{t.term}</dt>
                <dd className="mt-2.5 leading-relaxed text-ink-soft">
                  {t.definition}
                  {t.link && (
                    <span className="mt-2.5 block">
                      <Link href={t.link.href} className="font-semibold text-leaf-700 underline underline-offset-4 hover:text-leaf-800">
                        {t.link.label}
                      </Link>
                    </span>
                  )}
                </dd>
              </div>
            ))}
          </dl>

          <p className="mt-12 rounded-2xl bg-leaf-50 p-6 text-ink-soft ring-1 ring-leaf-200">
            Un terme manque ? Écrivez-nous via la{" "}
            <Link href="/contact" className="font-semibold text-leaf-700 underline underline-offset-4 hover:text-leaf-800">
              page contact
            </Link>
            , nous l&apos;ajouterons. Et pour voir ces notions en pratique, le{" "}
            <Link href="/ressources/guide-fidelisation" className="font-semibold text-leaf-700 underline underline-offset-4 hover:text-leaf-800">
              guide de la fidélisation
            </Link>{" "}
            les met toutes en situation.
          </p>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
