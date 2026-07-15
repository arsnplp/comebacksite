import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Icon } from "@/components/ui/Icon";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata, site } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Guide de la fidélisation client pour commerçants (édition 2026)",
  description:
    "Le guide complet de la fidélisation client pour commerçants indépendants : mécaniques, choix des récompenses, relances et mesure en euros.",
  path: "/guide-fidelisation",
});

type Chapter = {
  id: string;
  title: string;
  blocks: (
    | { type: "p"; text: string }
    | { type: "list"; items: string[] }
    | { type: "tip"; text: string }
  )[];
};

const chapters: Chapter[] = [
  {
    id: "pourquoi",
    title: "1. Pourquoi la fidélité rapporte plus que l'acquisition",
    blocks: [
      {
        type: "p",
        text: "Toute l'énergie marketing d'un commerce part traditionnellement dans l'acquisition : être visible, attirer, convaincre un inconnu de pousser la porte. C'est le levier le plus cher qui existe. Publicité locale, réseaux sociaux, plateformes : chaque nouveau client coûte, et rien ne garantit qu'il revienne.",
      },
      {
        type: "p",
        text: "La fidélisation travaille l'autre bout du problème : des gens déjà convaincus, qui connaissent votre adresse et vos produits. Les faire revenir un peu plus souvent ne coûte presque rien et produit un effet mécanique sur le chiffre d'affaires : un client qui passe 3 fois par mois au lieu de 2 représente 50 % de chiffre en plus, sans un euro de publicité. Et un habitué dépense généralement davantage par visite : il connaît la carte, ose la nouveauté, ajoute le petit extra.",
      },
      {
        type: "tip",
        text: "Ordre de grandeur à retenir : selon les études de référence, retenir un client coûte 5 à 7 fois moins cher que d'en acquérir un nouveau. Estimez ce que cela représente pour votre commerce avec notre calculateur de CA récupérable.",
      },
    ],
  },
  {
    id: "mecaniques",
    title: "2. Les 4 grandes mécaniques de programme, et comment choisir",
    blocks: [
      {
        type: "p",
        text: "Tous les programmes de fidélité du monde reposent sur une poignée de mécaniques. Les connaître évite de réinventer la roue, et surtout de choisir un système trop compliqué pour votre quotidien.",
      },
      {
        type: "list",
        items: [
          "La carte à tampons : un passage, un tampon, une récompense au palier. Simple, lisible, parfaite pour les commerces à visites fréquentes (café, boulangerie, restaurant du midi, coiffeur).",
          "Les points : chaque euro dépensé crédite des points convertibles. Plus fin, mais plus opaque pour le client et plus lourd à gérer : mieux adapté aux paniers très variables.",
          "Le cashback : un pourcentage des achats revient en avoir. Puissant en boutique, mais attention à la marge et à la lisibilité fiscale.",
          "Le programme VIP ou l'abonnement : des avantages permanents contre un statut ou une cotisation. Réservé aux commerces à très forte fréquence et à clientèle établie.",
        ],
      },
      {
        type: "p",
        text: "Pour un commerce de proximité, la carte à tampons gagne presque toujours : c'est la seule mécanique que le client comprend en une seconde, sans explication ni règlement. C'est la mécanique que Comeback digitalise, en gardant sa simplicité et en lui ajoutant ce que le carton n'a jamais su faire : les relances, les notifications et la mesure.",
      },
    ],
  },
  {
    id: "recompense",
    title: "3. Choisir la récompense : les 3 règles qui font tout",
    blocks: [
      {
        type: "p",
        text: "La plupart des programmes qui échouent ne meurent pas de leur logiciel : ils meurent d'une récompense mal calibrée. Trop lointaine, elle décourage. Trop généreuse, elle ronge la marge. Trois règles suffisent à viser juste.",
      },
      {
        type: "list",
        items: [
          "Règle 1, l'atteignabilité : un habitué doit toucher sa première récompense en 4 à 8 semaines. Au-delà, le programme paraît inaccessible et le client décroche. Adaptez le palier à votre fréquence naturelle : 10 passages pour un café, 5 pour une boutique.",
          "Règle 2, le coût matière : offrez un produit dont le coût réel est faible pour vous mais la valeur perçue forte pour le client. La 11e tasse de café coûte quelques dizaines de centimes ; elle vaut 2,50 € aux yeux du client.",
          "Règle 3, la lisibilité : la promesse doit tenir en une phrase. « 10 cafés = 1 offert » se retient. « 1 € = 3 points, 250 points = un bon de 5 € hors promotions » se fuit.",
        ],
      },
      {
        type: "tip",
        text: "Bonus : une récompense qui fait découvrir un produit à forte marge (un soin express, une pâtisserie signature) transforme le cadeau en argument de vente pour la suite.",
      },
    ],
  },
  {
    id: "lancement",
    title: "4. Lancer son programme : la checklist du premier mois",
    blocks: [
      {
        type: "p",
        text: "Un programme de fidélité réussit ou échoue dans ses premières semaines : c'est là que se joue l'habitude, côté équipe comme côté clients. La bonne nouvelle, c'est que le lancement tient en quelques gestes simples.",
      },
      {
        type: "list",
        items: [
          "Placez le support d'inscription là où le client attend déjà : à côté de la caisse, sur le comptoir, sur le porte-addition. Le moment du paiement est le moment de l'inscription.",
          "Écrivez la phrase d'accroche de votre équipe, une seule : « Vous avez notre carte ? Le 10e est offert, ça se scanne en 10 secondes. » Toute l'équipe la connaît, personne n'improvise.",
          "Reprenez l'existant : si des cartes papier circulent, créditez les tampons déjà acquis sur la carte digitale. Personne ne doit perdre sa progression.",
          "Fixez-vous un objectif simple pour le premier mois : un nombre d'inscrits (50, 100, 300 selon votre flux), et suivez-le chaque semaine dans le dashboard.",
        ],
      },
    ],
  },
  {
    id: "animation",
    title: "5. Faire vivre le programme sans y passer ses soirées",
    blocks: [
      {
        type: "p",
        text: "Le piège classique : lancer le programme, puis l'oublier. Or un programme vivant se nourrit de trois automatismes, qui ne demandent aucun travail quotidien une fois réglés.",
      },
      {
        type: "list",
        items: [
          "La relance d'inactivité : un client qui n'est pas revenu depuis X jours reçoit un rappel discret. C'est l'automatisme le plus rentable : il rattrape les clients au moment exact où ils commencent à décrocher.",
          "Le rappel de récompense : à un ou deux tampons du palier, une notification transforme l'hésitation en visite. Personne n'abandonne une carte presque pleine.",
          "L'offre anniversaire : une attention le jour J, et un client qui revient rarement seul.",
        ],
      },
      {
        type: "p",
        text: "Ajoutez, à la main cette fois, la promo flash occasionnelle : un jour creux, une météo défavorable, un stock à écouler. Utilisée avec parcimonie (une à deux fois par mois), elle garde tout son impact : vos fidèles la lisent comme un privilège, pas comme du spam.",
      },
    ],
  },
  {
    id: "mesure",
    title: "6. Mesurer : les 4 chiffres qui disent la vérité",
    blocks: [
      {
        type: "p",
        text: "Sans mesure, la fidélité reste une intuition. Quatre indicateurs suffisent à piloter un programme de commerce de proximité, et tous les quatre doivent se lire en un coup d'œil dans votre outil.",
      },
      {
        type: "list",
        items: [
          "Le nombre d'inscrits, et son rythme hebdomadaire : c'est la santé de votre recrutement au comptoir.",
          "La fréquence de visite des inscrits, comparée à leur rythme d'avant : c'est l'effet réel du programme.",
          "Le taux de retour après relance : la preuve que vos automatismes travaillent.",
          "Le chiffre d'affaires généré par la fidélité, en euros : le seul chiffre qui justifie (ou non) l'abonnement à l'outil.",
        ],
      },
      {
        type: "tip",
        text: "Un bon réflexe : comparez le CA fidélité mensuel au coût mensuel de votre outil. Tant que le premier dépasse largement le second, votre programme est un investissement, pas une dépense.",
      },
    ],
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Guide de la fidélisation client pour commerçants",
  description:
    "Le guide complet pour fidéliser ses clients quand on est commerçant indépendant : mécaniques, récompense, lancement, animation, mesure.",
  author: { "@type": "Organization", name: site.name, url: site.url },
  publisher: { "@type": "Organization", name: site.name, url: site.url },
  mainEntityOfPage: `${site.url}/guide-fidelisation`,
  inLanguage: "fr-FR",
};

export default function GuidePage() {
  return (
    <>
      <JsonLd data={articleJsonLd} />

      <PageHero
        crumbs={[
          { label: "Ressources", href: "/guide-fidelisation" },
          { label: "Guide de la fidélisation", href: "/guide-fidelisation" },
        ]}
        eyebrow="Le guide"
        title="Fidéliser ses clients quand on est commerçant : le guide complet"
        highlight="le guide complet"
        lead="Tout ce qu'il faut savoir pour construire un programme de fidélité qui rapporte : la mécanique, la récompense, le lancement, l'animation et les chiffres à suivre. Sans jargon, avec des exemples de terrain."
      />

      <section className="pb-20 sm:pb-28" aria-label="Guide de la fidélisation">
        <Container className="max-w-3xl">
          {/* Sommaire */}
          <nav aria-label="Sommaire du guide" className="mb-14 rounded-3xl bg-white p-7 shadow-card ring-1 ring-ink/5 sm:p-8">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-leaf-700">Sommaire</p>
            <ol className="space-y-2.5">
              {chapters.map((c) => (
                <li key={c.id}>
                  <a href={`#${c.id}`} className="group inline-flex items-start gap-2 font-medium text-ink transition-colors hover:text-leaf-700">
                    <Icon name="arrowRight" className="mt-1 h-4 w-4 shrink-0 text-leaf-600 transition-transform group-hover:translate-x-0.5" />
                    {c.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {/* Chapitres */}
          <div className="space-y-16">
            {chapters.map((chapter) => (
              <article key={chapter.id} id={chapter.id} className="scroll-mt-28">
                <h2 className="font-display text-2xl font-bold tracking-tight text-balance sm:text-3xl">
                  {chapter.title}
                </h2>
                <div className="mt-5 space-y-5">
                  {chapter.blocks.map((block, i) => {
                    if (block.type === "p") {
                      return (
                        <p key={i} className="text-lg leading-relaxed text-ink-soft">
                          {block.text}
                        </p>
                      );
                    }
                    if (block.type === "list") {
                      return (
                        <ul key={i} className="space-y-3">
                          {block.items.map((item) => (
                            <li key={item} className="flex items-start gap-3 text-lg leading-relaxed text-ink-soft">
                              <Icon name="checkCircle" className="mt-1.5 h-5 w-5 shrink-0 text-leaf-600" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      );
                    }
                    return (
                      <p key={i} className="rounded-2xl border-2 border-dashed border-gold-300 bg-gold-100/50 p-5 leading-relaxed text-ink">
                        {block.text}
                      </p>
                    );
                  })}
                </div>
              </article>
            ))}
          </div>

          {/* Liens de suite */}
          <div className="mt-16 rounded-3xl bg-leaf-50 p-7 ring-1 ring-leaf-200 sm:p-8">
            <h2 className="font-display text-xl font-bold">Pour passer à la pratique</h2>
            <ul className="mt-4 space-y-2.5 text-ink-soft">
              <li>
                <Link href="/calculateur" className="font-semibold text-leaf-700 underline underline-offset-4 hover:text-leaf-800">
                  Estimez le CA que votre commerce laisse filer
                </Link>{" "}
                avec le calculateur.
              </li>
              <li>
                <Link href="/carte-fidelite-papier-ou-digitale" className="font-semibold text-leaf-700 underline underline-offset-4 hover:text-leaf-800">
                  Comparez carte papier et carte digitale
                </Link>{" "}
                critère par critère.
              </li>
              <li>
                <Link href="/secteurs" className="font-semibold text-leaf-700 underline underline-offset-4 hover:text-leaf-800">
                  Trouvez la mécanique de votre métier
                </Link>{" "}
                dans les pages sectorielles.
              </li>
              <li>
                <Link href="/glossaire-fidelisation" className="font-semibold text-leaf-700 underline underline-offset-4 hover:text-leaf-800">
                  Vérifiez un terme dans le glossaire
                </Link>{" "}
                de la fidélisation.
              </li>
            </ul>
          </div>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
