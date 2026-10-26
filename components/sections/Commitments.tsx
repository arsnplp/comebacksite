import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Stagger } from "@/components/ui/Stagger";

/**
 * Preuve honnête de lancement, à la place de témoignages inventés.
 * Quand de vrais retours de commerçants seront collectés (avec accord
 * écrit), ils pourront s'ajouter ici, sous ces engagements.
 */
const commitments = [
  {
    title: "On installe votre carte avec vous",
    text: "Juste après votre inscription, on vous appelle pour régler la récompense, vos couleurs et le QR code. 10 minutes au téléphone, c'est offert.",
  },
  {
    title: "Votre affiche de comptoir est prête",
    text: "Comeback génère une affiche A4 avec votre QR code. Vous l'imprimez, vous la posez à côté de la caisse, vos clients scannent.",
  },
  {
    title: "Un humain vous répond",
    text: "Une question, un blocage ? Vous écrivez, c'est le fondateur qui répond. Pas un robot, pas un ticket perdu.",
  },
];

export function Commitments() {
  return (
    <section className="bg-cream-2 py-20 sm:py-28" aria-labelledby="commitments-title">
      <Container>
        <SectionHeader
          eyebrow="Notre engagement"
          title="Comeback est jeune. Alors on s'occupe de vous personnellement."
          highlight="personnellement"
          lead="On ne vous promet pas de chiffres magiques. On vous promet une carte active dès le premier jour, et 30 jours pour mesurer vous-même ce qu'elle vous rapporte."
        />

        <Stagger className="grid gap-6 md:grid-cols-3">
          {commitments.map((c, i) => (
            <Card key={c.title} hover className="flex h-full flex-col p-8">
              <p className="font-display text-4xl font-extrabold tracking-tight text-ember-600">{i + 1}</p>
              <h3 className="mt-3 font-display text-xl font-bold">{c.title}</h3>
              <p className="mt-3 flex-1 text-ink-soft">{c.text}</p>
            </Card>
          ))}
        </Stagger>

        <figure className="mx-auto mt-12 max-w-2xl text-center">
          <blockquote className="font-display text-xl font-semibold text-ink text-balance sm:text-2xl">
            « J&apos;ai créé Comeback pour que les commerçants indépendants aient enfin un vrai lien avec leurs
            clients, sans appli et sans complication. Chaque commerçant qui démarre, je l&apos;accompagne. »
          </blockquote>
          <figcaption className="mt-4 text-sm font-medium text-ink-soft">Arsène Lecoq, fondateur de Comeback</figcaption>
        </figure>
      </Container>
    </section>
  );
}
