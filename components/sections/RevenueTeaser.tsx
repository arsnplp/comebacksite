import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { MiniCalculator } from "@/components/sections/MiniCalculator";

/** Section 2 — Revenue Proof : la douleur chiffrée. */
export function RevenueTeaser() {
  return (
    <section className="bg-cream-2 py-20 sm:py-28" aria-labelledby="revenue-title">
      <Container>
        <SectionHeader
          eyebrow="Le manque à gagner"
          title="Savez-vous combien vous perdez chaque année sans fidélisation ?"
          highlight="combien vous perdez"
          lead="Deux réglages suffisent pour l'estimer. Bougez les curseurs : c'est votre commerce."
        />
        <Reveal>
          <MiniCalculator />
        </Reveal>
      </Container>
    </section>
  );
}
