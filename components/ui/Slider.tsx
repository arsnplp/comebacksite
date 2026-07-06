"use client";

import type { CSSProperties } from "react";

type SliderProps = {
  id: string;
  label: string;
  min: number;
  max: number;
  step?: number;
  value: number;
  onChange: (value: number) => void;
  /** Valeur affichée à droite du label, ex. "250 clients" */
  displayValue: string;
};

/** Slider stylisé (piste remplie via --pct), 100 % accessible au clavier. */
export function Slider({ id, label, min, max, step = 1, value, onChange, displayValue }: SliderProps) {
  const pct = ((value - min) / (max - min)) * 100;

  return (
    <div>
      <div className="mb-1.5 flex items-baseline justify-between gap-4">
        <label htmlFor={id} className="font-medium text-ink">
          {label}
        </label>
        <span className="font-display text-lg font-bold text-leaf-700 tabular-nums">{displayValue}</span>
      </div>
      <input
        id={id}
        type="range"
        className="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        style={{ "--pct": `${pct}%` } as CSSProperties}
      />
    </div>
  );
}
