/**
 * FAQ de la homepage : questions formulées comme les vraies recherches
 * des commerçants. Sert aussi au JSON-LD FAQPage (AEO/SEO).
 */
export type FaqItem = {
  question: string;
  answer: string;
};

export const homeFaq: FaqItem[] = [
  {
    question: "Mes clients doivent-ils télécharger une application ?",
    answer:
      "Non. La carte s'ajoute directement dans Apple Wallet ou Google Wallet, déjà installés sur leur téléphone. Ils scannent votre QR code, et la carte est dans leur poche en 10 secondes. Rien à télécharger, rien à retenir.",
  },
  {
    question: "Combien de temps faut-il pour installer Comeback ?",
    answer:
      "Une dizaine de minutes, et vous n'êtes pas seul : juste après votre inscription, on vous appelle pour régler la récompense, vos couleurs et votre affiche de comptoir avec vous. C'est offert. Aucun matériel à acheter, aucune intégration avec votre caisse.",
  },
  {
    question: "Ça fonctionne pour quel type de commerce ?",
    answer:
      "Restaurants, cafés, salons de coiffure, boulangeries, boutiques, instituts de beauté, food trucks… Si vos clients peuvent revenir, Comeback est fait pour vous. Les récompenses s'adaptent à votre métier : 10 cafés = 1 offert, -10 % au 5e passage, un soin offert au 10e rendez-vous.",
  },
  {
    question: "Faut-il une carte bancaire pour l'essai gratuit ?",
    answer:
      "Oui, et rien n'est prélevé pendant 30 jours. Elle sert à ce que votre carte de fidélité continue sans coupure si Comeback vous rapporte. Pendant l'essai, vous avez tout le plan Business et votre dashboard vous montre en euros ce que la fidélité vous rapporte. Avant la fin, vous gardez Business, vous passez sur Pro ou vous résiliez en un clic sans être prélevé. Sans action de votre part, Business continue à 29,99 € par mois : la date vous est indiquée dès le départ et rappelée dans votre espace.",
  },
  {
    question: "Puis-je garder mes cartes papier en parallèle ?",
    answer:
      "Oui, beaucoup de commerçants font la transition en douceur. Vous proposez la carte digitale aux nouveaux clients et laissez les anciennes cartes papier se terminer. En pratique, la plupart abandonnent le papier en quelques semaines : plus rien à imprimer, plus de cartes perdues.",
  },
  {
    question: "Comment mes clients s'inscrivent-ils ?",
    answer:
      "Ils scannent le QR code posé sur votre comptoir avec l'appareil photo de leur téléphone. La carte s'ajoute à leur Wallet, ils renseignent leur prénom, c'est terminé. Comptez 10 secondes par client, sans créer de compte ni de mot de passe.",
  },
  {
    question: "Les données de mes clients m'appartiennent-elles ?",
    answer:
      "Oui, à 100 %. Vos données clients sont hébergées en Europe, conformes au RGPD, et exportables à tout moment en un clic. Elles ne sont jamais revendues ni partagées. Si vous partez, vous repartez avec votre fichier client complet.",
  },
  {
    question: "Puis-je annuler à tout moment ?",
    answer:
      "Oui, en 2 clics depuis votre espace, sans préavis ni frais cachés. L'abonnement est sans engagement : vous restez parce que ça vous rapporte, pas parce qu'un contrat vous retient.",
  },
  {
    question: "Combien coûte une carte de fidélité digitale ?",
    answer:
      "14,99 € TTC par mois pour le plan Pro (jusqu'à 300 clients) et 29,99 € TTC pour le plan Business (clients et notifications illimités), sans engagement. Aucun frais d'installation, aucun matériel à acheter. Tout commence par 30 jours d'essai sur Business : vous testez avec vos vrais clients, vous décidez ensuite, chiffres en main.",
  },
  {
    question: "Quelle différence avec une carte de fidélité papier ?",
    answer:
      "Trois différences changent tout. D'abord, la carte digitale ne se perd jamais : elle vit dans le téléphone de votre client, avec ses tampons à jour. Ensuite, elle construit votre fichier client : chaque scan enregistre une visite, alors qu'un carton tamponné ne vous apprend rien. Enfin, elle permet de relancer : notification de récompense, offre du jour, message aux clients inactifs. Le papier fidélise ceux qui pensent à sortir leur carte ; le digital fait revenir les autres.",
  },
];
