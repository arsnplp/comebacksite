import type { Metadata } from "next";
import { LegalArticle, type LegalSection } from "@/components/ui/LegalArticle";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Politique de confidentialité (RGPD)",
  description:
    "Comment Comeback collecte, utilise et protège vos données personnelles : finalités, durées de conservation, droits RGPD et contact. Données hébergées en Europe, jamais revendues.",
  path: "/politique-confidentialite",
});

/*
 * ⚠️ [PLACEHOLDER] — Les informations entre crochets sont à compléter, et le
 * document complet à faire valider par un conseil juridique avant mise en ligne.
 */
const sections: LegalSection[] = [
  {
    title: "1. Qui est responsable du traitement ?",
    body: [
      "Le responsable du traitement des données collectées sur le site getcomeback.fr est [RAISON SOCIALE], [ADRESSE COMPLÈTE], joignable à l'adresse arsene.lecoq@getcomeback.fr.",
      "Cette politique couvre le site vitrine getcomeback.fr. Les données traitées dans l'application Comeback pour le compte des commerçants (données de leurs clients fidélisés) font l'objet d'un accord de traitement des données dédié, conclu avec chaque commerçant.",
    ],
  },
  {
    title: "2. Quelles données collectons-nous, et pourquoi ?",
    body: [
      "Nous collectons uniquement les données que vous nous transmettez volontairement via nos formulaires (essai gratuit, démo, contact) :",
      {
        list: [
          "Identité et contact : prénom, nom, adresse email, téléphone (facultatif).",
          "Informations professionnelles : nom et secteur de votre commerce.",
          "Contenu de votre message, le cas échéant.",
        ],
      },
      "Ces données servent exclusivement à traiter votre demande : ouvrir votre accès d'essai, organiser votre démonstration ou répondre à votre message. Base légale : l'exécution de mesures précontractuelles prises à votre demande (article 6.1.b du RGPD).",
    ],
  },
  {
    title: "3. Mesure d'audience sans cookie",
    body: [
      "Le site utilise une solution de mesure d'audience respectueuse de la vie privée (Plausible Analytics), qui fonctionne sans cookie et ne collecte aucune donnée permettant de vous identifier. C'est pourquoi aucune bannière de consentement n'est nécessaire : aucun traceur publicitaire n'est déposé sur votre appareil.",
    ],
  },
  {
    title: "4. Combien de temps conservons-nous vos données ?",
    body: [
      {
        list: [
          "Demandes de contact : 24 mois après le dernier échange.",
          "Prospects (essai, démo) : 36 mois après le dernier contact, conformément aux recommandations de la CNIL.",
          "Clients : pendant la durée de la relation contractuelle, puis selon les durées légales de conservation applicables.",
        ],
      },
    ],
  },
  {
    title: "5. Qui a accès à vos données ?",
    body: [
      "Vos données sont accessibles aux seules personnes habilitées de notre équipe, et à nos sous-traitants techniques strictement nécessaires au service (hébergement, envoi d'emails), tous engagés contractuellement au respect du RGPD. Vos données sont hébergées dans l'Union européenne. Elles ne sont jamais vendues, louées ni échangées.",
    ],
  },
  {
    title: "6. Quels sont vos droits ?",
    body: [
      "Conformément au RGPD et à la loi Informatique et Libertés, vous disposez des droits suivants sur vos données :",
      {
        list: [
          "Droit d'accès, de rectification et d'effacement.",
          "Droit à la limitation du traitement et droit d'opposition.",
          "Droit à la portabilité de vos données.",
          "Droit de définir des directives sur le sort de vos données après votre décès.",
        ],
      },
      "Pour exercer ces droits, écrivez-nous à arsene.lecoq@getcomeback.fr en précisant votre demande : nous répondons sous un mois au plus. Si vous estimez que vos droits ne sont pas respectés, vous pouvez saisir la CNIL (cnil.fr).",
    ],
  },
  {
    title: "7. Sécurité",
    body: [
      "Nous mettons en œuvre des mesures techniques et organisationnelles adaptées pour protéger vos données : chiffrement des échanges (HTTPS), contrôle des accès, journalisation et minimisation des données collectées.",
    ],
  },
  {
    title: "8. Évolution de cette politique",
    body: [
      "Cette politique peut évoluer, notamment pour suivre les évolutions légales ou fonctionnelles du site. La date de dernière mise à jour figure en haut de page ; en cas de changement substantiel, une information sera affichée sur le site.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <LegalArticle
      title="Politique de confidentialité"
      updated="4 juillet 2026"
      crumbLabel="Confidentialité"
      crumbHref="/politique-confidentialite"
      intro="Chez Comeback, la protection des données n'est pas un paragraphe obligatoire : c'est un argument produit. Voici, en clair, ce que nous collectons sur ce site, pourquoi, et les droits dont vous disposez."
      sections={sections}
    />
  );
}
