import { Container } from "@/components/ui/Container";
import { CTALink } from "@/components/ui/CTALink";
import { StampStrip } from "@/components/ui/Stamps";
import { Reveal } from "@/components/ui/Reveal";

/** Section 9 — CTA final, contraste fort. */
export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-leaf-800 to-leaf-950 py-20 text-white sm:py-28">
      <div className="dot-grid-dark pointer-events-none absolute inset-0 opacity-50" aria-hidden="true" />
      <Container className="relative text-center">
        <Reveal>
        <StampStrip total={10} filled={9} className="justify-center text-leaf-200" />

        <p className="mx-auto mt-8 max-w-3xl font-display text-4xl font-bold tracking-tight text-balance sm:text-5xl">
          Vos concurrents fidélisent déjà. Et vous&nbsp;?
        </p>
        <p className="mx-auto mt-5 max-w-xl text-lg text-leaf-100">
          3 mois gratuits · Sans CB · Installé en 10 minutes
        </p>

        <div className="mt-10">
          <CTALink href="https://app.getcomeback.fr/login" position="final" size="xl" className="px-12">
            Essayer gratuitement 3 mois
          </CTALink>
        </div>
        <p className="mt-5 text-sm text-leaf-200">
          Votre première carte peut être active ce soir.
        </p>
        </Reveal>
      </Container>
    </section>
  );
}
