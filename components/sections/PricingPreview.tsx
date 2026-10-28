import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PricingPlans } from "@/components/sections/PricingPlans";
import { CTA_REASSURANCE } from "@/lib/links";

/** Aperçu des tarifs : deux plans, un seul point d'entrée (l'essai). */
export function PricingPreview() {
  return (
    <section className="py-20 sm:py-28" aria-labelledby="pricing-title">
      <Container className="max-w-5xl">
        <SectionHeader
          eyebrow="Combien ça coûte"
          title="30 jours pour tester. Ensuite, deux plans simples."
          highlight="30 jours pour tester"
          lead="L'essai vous donne tout le plan Business. Avant la fin, vous gardez Business, vous passez sur Pro ou vous arrêtez en un clic. Installation offerte dans les deux cas."
        />

        <PricingPlans variant="preview" reassurance={CTA_REASSURANCE} />

        <div className="mt-2 flex flex-col items-center">
          <Link
            href="/tarifs"
            className="mt-2 font-semibold text-leaf-700 underline underline-offset-4 hover:text-leaf-800"
          >
            Voir le détail des plans et le déroulé de l&apos;essai
          </Link>
        </div>
      </Container>
    </section>
  );
}
