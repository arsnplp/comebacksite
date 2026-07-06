"use client";

import { useEffect, useState } from "react";
import { CTALink } from "@/components/ui/CTALink";

/**
 * Barre CTA fixe en bas d'écran sur mobile.
 * Apparaît après le hero, disparaît près du footer (le CTA final suffit).
 */
export function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const fromBottom = document.documentElement.scrollHeight - window.scrollY - window.innerHeight;
      setVisible(window.scrollY > 550 && fromBottom > 900);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden={!visible}
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-ink/10 bg-cream/95 px-4 pb-[max(env(safe-area-inset-bottom),0.75rem)] pt-3 backdrop-blur-md transition-transform duration-300 md:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <CTALink href="/essai-gratuit" position="sticky-mobile" className="w-full" size="md">
        Essayer gratuitement 30 jours
      </CTALink>
      <p className="mt-1.5 text-center text-xs text-ink-soft">Sans CB · Sans engagement · 10 min chrono</p>
    </div>
  );
}
