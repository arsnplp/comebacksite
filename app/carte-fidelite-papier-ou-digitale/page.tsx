import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Accordion } from "@/components/ui/Accordion";
import { Icon } from "@/components/ui/Icon";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata } from "@/lib/seo";
import type { FaqItem } from "@/content/faq";

export const metadata: Metadata = pageMetadata({
  title: "Carte de fidélité papier ou digitale : le comparatif honnête",
  description:
    "Coût, adoption, fraude, relances, données client : le comparatif honnête entre carte de fidélité papier et carte digitale pour votre commerce.",
  path: "/carte-fidelite-papier-ou-digitale",
});

/** true = point fort · false = point faible · string = nuance */
type Verdict = boolean | string;

const criteria: { label: string; paper: Verdict; wallet: Verdict; app: Verdict }[] = [
  { label: "Coût de départ", paper: "Impression à refaire sans cesse", wallet: true, app: "Développement coûteux" },
  { label: "Effort côté client", paper: "Penser à la carte à chaque visite", wallet: true, app: "Télécharger, créer un compte" },
  { label: "Taux d'adoption", paper: "Moyen : cartes vite égarées", wallet: true, app: false },
  { label: "Perte et oubli", paper: false, wallet: true, app: true },
  { label: "Fraude aux tampons", paper: false, wallet: true, app: true },
  { label: "Relances automatiques", paper: false, wallet: true, app: true },
  { label: "Notifications sans spam", paper: false, wallet: true, app: "Souvent désactivées" },
  { label: "Fichier client", paper: false, wallet: true, app: true },
  { label: "Modifier le programme", paper: "Tout réimprimer", wallet: true, app: true },
  { label: "Impact écologique", paper: false, wallet: true, app: true },
];

const comparisonFaq: FaqItem[] = [
  {
    question: "La carte papier a-t-elle encore un intérêt en 2026 ?",
    answer:
      "Dans un cas précis, oui : une clientèle très majoritairement sans smartphone. Partout ailleurs, ses défauts structurels (perte, oubli, fraude, absence totale de données et de relances) lui font perdre la comparaison. Beaucoup de commerçants gardent quelques cartes papier en dépannage pendant la transition, puis les abandonnent naturellement.",
  },
  {
    question: "Pourquoi une carte Wallet plutôt qu'une application de fidélité dédiée ?",
    answer:
      "Parce que l'application impose deux barrières fatales : le téléchargement et la création de compte. La majorité des clients abandonne à l'une ou l'autre. La carte Wallet s'appuie sur Apple Wallet et Google Wallet, déjà installés sur les téléphones : un scan de 10 secondes suffit, et le taux d'adoption change du tout au tout.",
  },
  {
    question: "Que deviennent les tampons de mes cartes papier si je passe au digital ?",
    answer:
      "Vous les reprenez : quand un client présente une carte papier entamée, vous créditez le même nombre de tampons sur sa carte digitale au moment de l'inscription. Personne ne perd sa progression, et la transition se fait en douceur, en quelques semaines.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: comparisonFaq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

function VerdictCell({ value }: { value: Verdict }) {
  if (typeof value === "string") {
    return <span className="text-sm text-ink-soft">{value}</span>;
  }
  return value ? (
    <>
      <Icon name="checkCircle" className="mx-auto h-5 w-5 text-leaf-600" />
      <span className="sr-only">Point fort</span>
    </>
  ) : (
    <>
      <Icon name="xCircle" className="mx-auto h-5 w-5 text-ember-600" />
      <span className="sr-only">Point faible</span>
    </>
  );
}

export default function ComparisonPage() {
  return (
    <>
      <JsonLd data={faqJsonLd} />

      <PageHero
        crumbs={[
          { label: "Ressources", href: "/guide-fidelisation" },
          { label: "Carte papier vs digitale", href: "/carte-fidelite-papier-ou-digitale" },
        ]}
        eyebrow="Comparatif"
        title="Carte de fidélité papier ou digitale : le match, critère par critère"
        highlight="critère par critère"
        lead="La carte à tampons en carton a fidélisé des générations de clients. Voici ce qu'elle vaut aujourd'hui face à la carte Wallet et à l'application dédiée, sans mauvaise foi."
      />

      {/* Tableau comparatif */}
      <section className="pb-16 sm:pb-20" aria-labelledby="table-title">
        <h2 id="table-title" className="sr-only">
          Tableau comparatif
        </h2>
        <Container>
          <div className="overflow-x-auto rounded-3xl bg-white shadow-card ring-1 ring-ink/5">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <caption className="sr-only">
                Comparaison entre carte papier, carte digitale Wallet et application dédiée
              </caption>
              <thead>
                <tr className="border-b border-ink/10">
                  <th scope="col" className="px-6 py-5 text-sm font-semibold uppercase tracking-wider text-ink-soft sm:px-8">
                    Critère
                  </th>
                  <th scope="col" className="px-4 py-5 text-center font-display text-base font-bold">
                    Carte papier
                  </th>
                  <th scope="col" className="bg-leaf-50/60 px-4 py-5 text-center font-display text-base font-bold text-leaf-800">
                    Carte Wallet
                  </th>
                  <th scope="col" className="px-4 py-5 text-center font-display text-base font-bold">
                    Appli dédiée
                  </th>
                </tr>
              </thead>
              <tbody>
                {criteria.map((row) => (
                  <tr key={row.label} className="border-t border-ink/5">
                    <th scope="row" className="px-6 py-4 text-[0.95rem] font-medium text-ink sm:px-8">
                      {row.label}
                    </th>
                    <td className="px-4 py-4 text-center">
                      <VerdictCell value={row.paper} />
                    </td>
                    <td className="bg-leaf-50/40 px-4 py-4 text-center">
                      <VerdictCell value={row.wallet} />
                    </td>
                    <td className="px-4 py-4 text-center">
                      <VerdictCell value={row.app} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-center text-sm text-ink-soft">
            La colonne « Carte Wallet » correspond à une carte de fidélité ajoutée dans Apple Wallet ou Google
            Wallet, comme celle que crée Comeback.
          </p>
        </Container>
      </section>

      {/* Analyse rédigée */}
      <section className="pb-16 sm:pb-20" aria-label="Analyse détaillée">
        <Container className="max-w-3xl space-y-12">
          <div>
            <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
              Le vrai problème de la carte papier : personne ne sait ce qu&apos;elle rapporte
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft">
              Le carton n&apos;a que deux qualités : il ne coûte presque rien à l&apos;unité et tout le monde
              le comprend. Mais il cumule les fuites : les cartes distribuées qui ne reviennent jamais, les
              tampons oubliés qui frustrent les clients réguliers, la fraude au tampon acheté en ligne, et
              surtout l&apos;absence totale d&apos;information. Combien de cartes circulent ? Combien de clients
              sont à un passage de la récompense ? Qui a décroché ? Mystère. Un programme qu&apos;on ne peut
              pas mesurer est un programme qu&apos;on ne peut pas améliorer.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
              L&apos;application dédiée : puissante sur le papier, boudée dans les faits
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft">
              L&apos;application mobile règle les problèmes de données, mais elle en crée un pire : il faut
              convaincre chaque client de télécharger une énième application et de créer un compte, pour un
              commerce qu&apos;il fréquente peut-être une fois par semaine. La plupart refusent poliment, et
              parmi ceux qui installent, beaucoup désactivent les notifications ou suppriment l&apos;application
              au premier nettoyage de téléphone. Réserver cette approche aux très grandes enseignes n&apos;est
              pas un hasard : il faut leur budget marketing pour la faire vivre.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
              La carte Wallet : la mécanique du papier, les moyens du digital
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft">
              La carte Wallet reprend la simplicité du carton (un tampon par passage, une récompense au bout)
              et la loge dans une application que vos clients possèdent déjà : Apple Wallet ou Google Wallet.
              L&apos;inscription tient en un scan de 10 secondes, la carte est impossible à perdre, le tampon
              impossible à frauder, et chaque passage enrichit un fichier client qui vous appartient. Ajoutez
              les relances automatiques et les notifications de récompense, et la comparaison est pliée pour
              l&apos;immense majorité des commerces de proximité.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">
              Pour estimer ce que ce changement représente pour votre commerce, le{" "}
              <Link href="/calculateur" className="font-semibold text-leaf-700 underline underline-offset-4 hover:text-leaf-800">
                calculateur de CA récupérable
              </Link>{" "}
              donne un ordre de grandeur en 10 secondes, et le{" "}
              <Link href="/guide-fidelisation" className="font-semibold text-leaf-700 underline underline-offset-4 hover:text-leaf-800">
                guide de la fidélisation
              </Link>{" "}
              détaille comment bien lancer son programme.
            </p>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-cream-2 py-20 sm:py-28" aria-labelledby="faq-comp-title">
        <Container className="max-w-4xl">
          <SectionHeader eyebrow="Questions fréquentes" title="Les questions qui reviennent sur la transition" />
          <Accordion items={comparisonFaq} />
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
