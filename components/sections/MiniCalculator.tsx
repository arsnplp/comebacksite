"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { Slider } from "@/components/ui/Slider";
import { AnimatedNumber } from "@/components/ui/AnimatedNumber";
import { CTALink } from "@/components/ui/CTALink";
import { estimateLostRevenue, roundToHundred } from "@/lib/calculator";
import { trackEvent } from "@/lib/analytics";

/**
 * Mini-calculateur de la homepage (version courte de /calculateur).
 * Style « ticket de caisse » : le CA perdu s'imprime sous leurs yeux.
 */
export function MiniCalculator() {
  const [clientsPerWeek, setClientsPerWeek] = useState(250);
  const [basket, setBasket] = useState(15);
  const usedRef = useRef(false);

  const lost = roundToHundred(estimateLostRevenue(clientsPerWeek, basket));

  const onUse = <T,>(setter: (v: T) => void) => (v: T) => {
    if (!usedRef.current) {
      usedRef.current = true;
      trackEvent("calculator_used", { location: "home" });
    }
    setter(v);
  };

  return (
    <div className="mx-auto max-w-4xl rounded-3xl bg-white p-6 shadow-card-lg ring-1 ring-ink/5 sm:p-10">
      <div className="grid gap-10 md:grid-cols-2 md:gap-0">
        {/* Entrées */}
        <div className="space-y-8 md:pr-10">
          <Slider
            id="calc-clients"
            label="Combien de clients par semaine ?"
            min={50}
            max={1000}
            step={10}
            value={clientsPerWeek}
            onChange={onUse(setClientsPerWeek)}
            displayValue={`${clientsPerWeek} clients`}
          />
          <Slider
            id="calc-basket"
            label="Panier moyen ?"
            min={5}
            max={100}
            value={basket}
            onChange={onUse(setBasket)}
            displayValue={`${basket} €`}
          />
          <p className="text-sm text-ink-soft">
            Estimation prudente : 25 % de clients sensibles à la fidélité, 30 % de visites
            récupérables.{" "}
            <Link href="/calculateur" className="font-medium text-leaf-700 underline underline-offset-2 hover:text-leaf-800">
              Voir le calcul détaillé
            </Link>
          </p>
        </div>

        {/* Résultat — le ticket */}
        <div className="flex flex-col items-center justify-center border-t-2 border-dashed border-ink/15 pt-10 text-center md:border-l-2 md:border-t-0 md:pl-10 md:pt-0">
          <p className="text-base font-medium text-ink-soft">Vous laissez filer environ</p>
          <p className="my-3 font-display text-5xl font-extrabold tracking-tight text-ember-600 sm:text-6xl">
            <AnimatedNumber value={lost} kind="euros" />
          </p>
          <p className="text-base font-medium text-ink-soft">de CA par an</p>
          <CTALink href="https://app.getcomeback.fr/login" position="calculator" className="mt-7">
            Récupérer ce CA
          </CTALink>
        </div>
      </div>
    </div>
  );
}
