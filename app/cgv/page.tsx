import type { Metadata } from "next";
import { LegalArticle, type LegalSection } from "@/components/ui/LegalArticle";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Conditions générales de vente (CGV)",
  description:
    "Conditions générales de vente du service Comeback : abonnement, essai gratuit de 3 mois, tarifs, résiliation et données. Abonnement mensuel sans engagement.",
  path: "/cgv",
});

/*
 * ⚠️ [PLACEHOLDER] — Trame de CGV à compléter (informations société) et à
 * faire valider par un conseil juridique avant toute mise en ligne.
 */
const sections: LegalSection[] = [
  {
    title: "1. Objet",
    body: [
      "Les présentes conditions générales de vente (CGV) régissent la souscription et l'utilisation du service Comeback, solution de carte de fidélité digitale éditée par [RAISON SOCIALE] (ci-après « l'Éditeur »), par tout professionnel (ci-après « le Client »). Toute souscription au service emporte acceptation pleine et entière des présentes CGV.",
    ],
  },
  {
    title: "2. Description du service",
    body: [
      "Comeback permet au Client de créer et gérer un programme de fidélité digital : carte de fidélité compatible Apple Wallet et Google Wallet, validation de passages, notifications et relances, tableau de bord statistique. Le détail des fonctionnalités par plan figure sur la page Tarifs du site, qui fait partie intégrante des présentes.",
      "L'Éditeur s'efforce d'assurer une disponibilité du service 24 h/24 et 7 j/7, sans obligation de résultat, des interruptions pour maintenance pouvant survenir.",
    ],
  },
  {
    title: "3. Essai gratuit",
    body: [
      "Tout nouveau Client bénéficie d'une période d'essai gratuite de 3 mois, sans carte bancaire et sans engagement. À l'issue de l'essai, le compte est suspendu si aucun abonnement n'est souscrit ; le Client peut exporter ses données avant et après cette échéance, pendant une durée de [DURÉE] jours.",
    ],
  },
  {
    title: "4. Tarifs et facturation",
    body: [
      "Les tarifs en vigueur sont ceux affichés sur la page Tarifs au jour de la souscription, exprimés hors taxes. L'abonnement est mensuel, payable d'avance par prélèvement ou carte bancaire. Toute évolution tarifaire sera notifiée au moins 30 jours avant son application, le Client restant libre de résilier avant cette date.",
      "Chaque plan (Starter, Pro, Business) inclut les volumes indiqués sur la page Tarifs : nombre de clients enregistrés, de cartes de fidélité et de notifications mensuelles. Aucun dépassement n'est facturé automatiquement : en cas d'atteinte d'une limite, le Client est invité à passer au plan supérieur.",
    ],
  },
  {
    title: "5. Durée et résiliation",
    body: [
      "L'abonnement est sans engagement de durée. Le Client peut résilier à tout moment depuis son espace, la résiliation prenant effet à la fin de la période mensuelle en cours, sans frais ni pénalité. L'Éditeur peut suspendre ou résilier un compte en cas de manquement grave aux présentes CGV, après mise en demeure restée sans effet.",
    ],
  },
  {
    title: "6. Obligations du Client",
    body: [
      {
        list: [
          "Utiliser le service conformément à sa destination et à la réglementation applicable, notamment en matière de données personnelles vis-à-vis de ses propres clients.",
          "Ne pas envoyer de notifications abusives ou trompeuses via le service.",
          "Maintenir la confidentialité de ses identifiants de connexion.",
        ],
      },
    ],
  },
  {
    title: "7. Données",
    body: [
      "Les données du programme de fidélité du Client (fichier client, historique de visites) demeurent sa propriété. Elles sont hébergées dans l'Union européenne et exportables à tout moment depuis l'espace Client. Les modalités de traitement sont détaillées dans l'accord de traitement des données conclu entre les parties, conformément à l'article 28 du RGPD.",
    ],
  },
  {
    title: "8. Responsabilité",
    body: [
      "La responsabilité de l'Éditeur, toutes causes confondues, est limitée au montant des sommes effectivement versées par le Client au titre des 12 derniers mois. L'Éditeur ne saurait être tenu responsable des dommages indirects, notamment perte de chiffre d'affaires ou de clientèle, ni des contenus diffusés par le Client via le service.",
    ],
  },
  {
    title: "9. Droit applicable et litiges",
    body: [
      "Les présentes CGV sont soumises au droit français. En cas de litige, les parties rechercheront une solution amiable avant toute action ; à défaut, compétence exclusive est attribuée aux tribunaux de [VILLE], nonobstant pluralité de défendeurs ou appel en garantie.",
    ],
  },
];

export default function TermsPage() {
  return (
    <LegalArticle
      title="Conditions générales de vente"
      updated="4 juillet 2026"
      crumbLabel="CGV"
      crumbHref="/cgv"
      sections={sections}
    />
  );
}
