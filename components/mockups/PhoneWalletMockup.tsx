/**
 * Mockup iPhone : carte de fidélité dans le Wallet + notification.
 * [PLACEHOLDER] — à remplacer par un vrai screenshot du produit.
 * Pour le remplacer : dropper une <Image> 390×812 (ratio écran) dans la
 * zone `screen` ci-dessous, le cadre du téléphone peut rester tel quel.
 */
export function PhoneWalletMockup() {
  return (
    <div className="mx-auto w-[280px] sm:w-[310px]" aria-hidden="true">
      {/* Cadre du téléphone */}
      <div className="rounded-[3rem] bg-ink p-[10px] shadow-card-lg ring-1 ring-black/20">
        {/* Écran */}
        <div className="relative aspect-[390/812] overflow-hidden rounded-[2.4rem] bg-[#eceee9]">
          {/* Dynamic island */}
          <div className="absolute left-1/2 top-2.5 h-[22px] w-[86px] -translate-x-1/2 rounded-full bg-ink" />

          {/* Barre de statut */}
          <div className="flex items-center justify-between px-7 pt-3 text-[11px] font-semibold text-ink">
            <span>9:41</span>
            <span className="flex items-center gap-1">
              <svg viewBox="0 0 16 12" className="h-2.5 w-3.5" fill="currentColor">
                <rect x="0" y="7" width="3" height="5" rx="0.8" />
                <rect x="4.5" y="4.5" width="3" height="7.5" rx="0.8" />
                <rect x="9" y="2" width="3" height="10" rx="0.8" />
              </svg>
              <svg viewBox="0 0 24 12" className="h-3 w-6" fill="none">
                <rect x="0.5" y="0.5" width="20" height="11" rx="3" stroke="currentColor" />
                <rect x="2.5" y="2.5" width="13" height="7" rx="1.5" fill="currentColor" />
                <path d="M22.5 4v4a2 2 0 0 0 0-4Z" fill="currentColor" />
              </svg>
            </span>
          </div>

          {/* Notification push */}
          <div className="mx-3 mt-3 flex items-start gap-2.5 rounded-2xl bg-white/95 p-3 shadow-card">
            <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-leaf-700">
              <svg viewBox="0 0 16 16" className="h-4 w-4">
                <path d="M4.5 8.5 7 11l4.5-5.5" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span className="min-w-0">
              <span className="flex items-baseline justify-between gap-2">
                <span className="text-[12px] font-bold text-ink">Comeback</span>
                <span className="text-[10px] text-ink-soft">maintenant</span>
              </span>
              <span className="block text-[12px] leading-snug text-ink">
                Plus qu&apos;1 tampon avant votre récompense
              </span>
            </span>
          </div>

          {/* Carte de fidélité (pass Wallet) */}
          <div className="mx-3 mt-4 rounded-2xl bg-gradient-to-br from-leaf-700 to-leaf-900 p-4 text-white shadow-card-lg">
            <div className="flex items-center justify-between">
              <div>
                {/* [PLACEHOLDER] nom de commerce fictif */}
                <p className="text-[13px] font-bold">Boulangerie Martin</p>
                <p className="text-[10px] uppercase tracking-widest text-leaf-200">Carte de fidélité</p>
              </div>
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-dashed border-gold-400/70">
                <svg viewBox="0 0 16 16" className="h-4 w-4">
                  <path d="M4.5 8.5 7 11l4.5-5.5" fill="none" stroke="#FFC44E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>

            {/* Tampons : 9 sur 10 */}
            <div className="mt-4 grid grid-cols-5 gap-2">
              {Array.from({ length: 10 }).map((_, i) =>
                i < 9 ? (
                  <span key={i} className="flex aspect-square items-center justify-center rounded-full bg-gold-400">
                    <svg viewBox="0 0 16 16" className="h-3 w-3">
                      <path d="M4 8.5 6.5 11 12 5" fill="none" stroke="#14201A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                ) : (
                  <span key={i} className="aspect-square rounded-full border-2 border-dashed border-white/40" />
                ),
              )}
            </div>

            <div className="mt-4 flex items-end justify-between">
              <div>
                <p className="font-display text-xl font-bold leading-none">9/10</p>
                <p className="mt-1 text-[10px] text-leaf-200">Plus qu&apos;un passage !</p>
              </div>
              {/* Faux QR code */}
              <svg viewBox="0 0 25 25" className="h-11 w-11 rounded bg-white p-1" aria-hidden="true">
                <path
                  fill="#14201A"
                  d="M1 1h7v7H1zM3 3h3v3H3zM17 1h7v7h-7zM19 3h3v3h-3zM1 17h7v7H1zM3 19h3v3H3zM10 1h2v2h-2zM13 2h2v3h-2zM10 5h2v4h-2zM14 6h3v2h-3zM1 10h3v2H1zM5 11h3v2H5zM9 10h2v3H9zM12 11h3v2h-3zM16 10h3v3h-3zM20 11h4v2h-4zM10 14h3v3h-3zM14 15h2v2h-2zM17 14h2v3h-2zM21 15h3v3h-3zM10 19h2v2h-2zM13 18h2v3h-2zM10 22h4v2h-4zM16 19h3v2h-3zM20 19h2v3h-2zM23 21h1v3h-1zM16 22h2v2h-2z"
                />
              </svg>
            </div>
          </div>

          {/* Pill wallet */}
          <div className="mx-auto mt-4 w-fit rounded-full bg-white/80 px-4 py-1.5 text-[11px] font-medium text-ink-soft shadow-sm">
            Dans Apple Wallet &amp; Google Wallet
          </div>
        </div>
      </div>
    </div>
  );
}
