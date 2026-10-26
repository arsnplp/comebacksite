import { Container } from "@/components/ui/Container";
import { TrialCTA } from "@/components/ui/TrialCTA";
import { StampStrip } from "@/components/ui/Stamps";
import { Reveal } from "@/components/ui/Reveal";
import { CTA_REASSURANCE } from "@/lib/links";

/** CTA final, contraste fort. */
export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-leaf-800 to-leaf-950 py-20 text-white sm:py-28">
      <div className="dot-grid-dark pointer-events-none absolute inset-0 opacity-50" aria-hidden="true" />
      <Container className="relative text-center">
        <Reveal>
        <StampStrip total={10} filled={9} className="justify-center text-leaf-200" />

        <p className="mx-auto mt-8 max-w-3xl font-display text-4xl font-bold tracking-tight text-balance sm:text-5xl">
          Le client d&apos;aujourd&apos;hui peut revenir demain. À vous de lui rappeler.
        </p>
        <p className="mx-auto mt-5 max-w-xl text-lg text-leaf-100">
          30 jours pour tester avec vos vrais clients. Vous voyez ce que ça rapporte, puis vous décidez.
        </p>

        <div className="mt-10">
          <TrialCTA position="final" size="xl" className="px-12" />
        </div>
        <p className="mt-5 text-sm text-leaf-200">{CTA_REASSURANCE}</p>
        </Reveal>
      </Container>
    </section>
  );
}
