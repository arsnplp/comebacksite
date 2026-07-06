import { AnimatedNumber } from "@/components/ui/AnimatedNumber";

/**
 * Mockup du dashboard Comeback (fenêtre navigateur).
 * [PLACEHOLDER] — à remplacer par un vrai screenshot (idéal : 1200×760).
 * Les chiffres sont des données de DÉMONSTRATION.
 */

// Visites par jour (14 jours) — données de démonstration
const BARS = [32, 41, 38, 55, 48, 62, 58, 70, 64, 78, 72, 88, 84, 96];

export function DashboardMockup() {
  const max = Math.max(...BARS);

  return (
    <div className="overflow-hidden rounded-3xl bg-white shadow-card-lg ring-1 ring-ink/10">
      {/* Barre navigateur */}
      <div className="flex items-center gap-3 border-b border-ink/5 bg-cream-2 px-4 py-2.5">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
        </span>
        <span className="mx-auto rounded-full bg-white px-4 py-1 text-xs text-ink-soft ring-1 ring-ink/5">
          app.getcomeback.fr
        </span>
      </div>

      <div className="bg-[#fbfbfa] p-4 sm:p-6">
        <div className="mb-4 flex items-baseline justify-between">
          <p className="font-display text-lg font-bold">Bonjour Camille</p>
          <p className="text-xs text-ink-soft">30 derniers jours</p>
        </div>

        {/* Tuiles de stats */}
        <div className="grid grid-cols-3 gap-2.5 sm:gap-4">
          <div className="rounded-2xl bg-white p-3 ring-1 ring-ink/5 sm:p-4">
            <p className="text-[11px] text-ink-soft sm:text-xs">Clients inscrits</p>
            <p className="mt-1 font-display text-xl font-bold sm:text-2xl">
              <AnimatedNumber value={412} />
            </p>
            <p className="mt-1 text-[11px] font-medium text-leaf-700">+38 cette semaine</p>
          </div>
          <div className="rounded-2xl bg-white p-3 ring-1 ring-ink/5 sm:p-4">
            <p className="text-[11px] text-ink-soft sm:text-xs">Visites ce mois</p>
            <p className="mt-1 font-display text-xl font-bold sm:text-2xl">
              <AnimatedNumber value={1238} />
            </p>
            <p className="mt-1 text-[11px] font-medium text-leaf-700">+9 % vs mois dernier</p>
          </div>
          <div className="rounded-2xl bg-white p-3 ring-1 ring-gold-300 sm:p-4">
            <p className="text-[11px] text-ink-soft sm:text-xs">CA généré</p>
            <p className="mt-1 font-display text-xl font-bold sm:text-2xl">
              <AnimatedNumber value={8450} kind="euros" />
            </p>
            <p className="mt-1 text-[11px] font-medium text-leaf-700">+1 120 € vs mois dernier</p>
          </div>
        </div>

        {/* Graphique : visites par jour (série unique, vert marque) */}
        <div className="mt-2.5 rounded-2xl bg-white p-3 ring-1 ring-ink/5 sm:mt-4 sm:p-4">
          <p className="mb-2 text-xs font-medium text-ink-soft">Visites par jour</p>
          <svg viewBox="0 0 560 130" className="w-full" role="img" aria-label="Graphique de démonstration : visites par jour en progression">
            {/* lignes de repère */}
            {[32, 64, 96].map((y) => (
              <line key={y} x1="0" x2="560" y1={y} y2={y} stroke="#14201A" strokeOpacity="0.06" />
            ))}
            {BARS.map((v, i) => {
              const h = (v / max) * 104;
              return (
                <rect
                  key={i}
                  x={i * 40 + 8}
                  y={128 - h}
                  width="24"
                  height={h}
                  rx="4"
                  fill={i === BARS.length - 1 ? "#8CC9A4" : "#0B6236"}
                />
              );
            })}
            <line x1="0" x2="560" y1="128" y2="128" stroke="#14201A" strokeOpacity="0.15" />
          </svg>
        </div>
      </div>
    </div>
  );
}
