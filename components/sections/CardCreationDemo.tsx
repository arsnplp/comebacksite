import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTALink } from "@/components/ui/CTALink";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Section 2 — Preuve visuelle immédiate après le héros : la vraie création
 * de carte dans le dashboard, puis son arrivée dans Apple Wallet. Silencieuse
 * et en boucle pour rassurer sans demander d'attention active.
 */
export function CardCreationDemo() {
  return (
    <section className="py-16 sm:py-20" aria-labelledby="demo-title">
      <Container>
        <SectionHeader
          eyebrow="Voyez-le en action"
          title="Créez votre première carte de fidélité en un clic"
          highlight="en un clic"
          lead="Récompense, logo, couleurs : votre carte est configurée en quelques minutes et arrive directement dans le Wallet de vos clients."
        />

        <Reveal className="mx-auto max-w-3xl">
          <div className="relative overflow-hidden rounded-3xl bg-ink shadow-card-lg ring-1 ring-ink/10">
            <video
              className="block w-full"
              src="/videos/creation-carte-fidelite.mp4"
              poster="/videos/creation-carte-fidelite-poster.jpg"
              aria-label="Démonstration : création d'une carte de fidélité dans Comeback, puis ajout automatique dans Apple Wallet"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />
          </div>
        </Reveal>

        <div className="mt-10 flex flex-col items-center gap-4">
          <CTALink href="https://app.getcomeback.fr/login" position="card-creation-demo" size="xl">
            Créer ma carte gratuitement
          </CTALink>
          <div className="flex flex-wrap justify-center gap-2">
            <Badge>Sans carte bancaire</Badge>
            <Badge>Sans compétence technique</Badge>
            <Badge>Dans Apple Wallet et Google Wallet</Badge>
          </div>
        </div>
      </Container>
    </section>
  );
}
