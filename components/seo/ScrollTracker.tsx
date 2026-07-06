"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

/** Émet l'événement scroll_75 une seule fois par page vue. */
export function ScrollTracker() {
  useEffect(() => {
    let fired = false;
    const onScroll = () => {
      if (fired) return;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollable > 0 && window.scrollY / scrollable >= 0.75) {
        fired = true;
        trackEvent("scroll_75");
        window.removeEventListener("scroll", onScroll);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}
