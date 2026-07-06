import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { StampCheck } from "@/components/ui/Stamps";
import { Reveal } from "@/components/ui/Reveal";

const steps = [
  {
    title: "Créez votre carte",
    text: "Choisissez votre récompense (10 cafés = 1 offert, -10 % au 5e passage…). 5 minutes, zéro compétence technique.",
  },
  {
    title: "Vos clients scannent",
    text: "Un QR code sur votre comptoir. La carte s'ajoute direct dans leur Apple Wallet ou Google Wallet. Rien à télécharger.",
  },
  {
    title: "Ils reviennent, vous mesurez",
    text: "Notifications automatiques, tampons digitaux, et un dashboard qui vous montre le CA généré.",
  },
];

/** Section 3 — Comment ça marche : lever l'objection « compliqué ». */
export function Steps() {
  return (
    <section className="py-20 sm:py-28" aria-labelledby="steps-title">
      <Container>
        <SectionHeader
          eyebrow="Comment ça marche"
          title="Votre première carte active en 10 minutes. Vraiment."
          highlight="10 minutes"
        />

        <ol className="grid gap-6 md:grid-cols-3">
          {steps.map((step, i) => (
            <li key={step.title} className="h-full">
              <Reveal delayMs={i * 130} className="h-full">
              <Card hover className="relative h-full overflow-hidden p-8">
                <span
                  className="pointer-events-none absolute -right-3 -top-7 font-display text-[7.5rem] font-extrabold leading-none text-leaf-100"
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
                <span className="relative mb-5 inline-flex h-10 items-center rounded-full bg-leaf-50 px-4 text-sm font-bold text-leaf-800 ring-1 ring-leaf-200">
                  Étape {i + 1}
                </span>
                <h3 className="relative font-display text-xl font-bold">{step.title}</h3>
                <p className="relative mt-3 text-ink-soft">{step.text}</p>
              </Card>
              </Reveal>
            </li>
          ))}
        </ol>

        <p className="mt-10 flex items-center justify-center gap-2 text-center font-medium text-ink-soft">
          <StampCheck className="h-6 w-6 text-leaf-600" />
          Temps moyen d&apos;installation constaté&nbsp;: <strong className="text-ink">8 min 30</strong>
        </p>
      </Container>
    </section>
  );
}
