/** Motifs « tampon de fidélité » — la signature visuelle de Comeback. */

/** Tampon unique avec coche — sert de puce, d'icône d'eyebrow, de marqueur. */
export function StampCheck({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <circle
        cx="16"
        cy="16"
        r="14.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeDasharray="3.2 3.4"
      />
      <circle cx="16" cy="16" r="10" fill="currentColor" />
      <path
        d="M11.5 16.5 14.5 19.5 20.5 12.5"
        fill="none"
        stroke="#fff"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Rangée de tampons décorative (carte de fidélité stylisée).
 * `filled` tampons cochés sur `total`.
 */
export function StampStrip({
  total = 10,
  filled = 7,
  className = "",
}: {
  total?: number;
  filled?: number;
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-2 ${className}`} aria-hidden="true">
      {Array.from({ length: total }).map((_, i) =>
        i < filled ? (
          <span
            key={i}
            className="flex h-7 w-7 items-center justify-center rounded-full bg-gold-400 text-ink"
          >
            <svg viewBox="0 0 16 16" className="h-3.5 w-3.5">
              <path
                d="M3.5 8.5 6.5 11.5 12.5 4.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        ) : (
          <span key={i} className="h-7 w-7 rounded-full border-2 border-dashed border-current opacity-40" />
        ),
      )}
    </div>
  );
}
