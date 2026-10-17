"use client";

import { useEffect, useRef, useState } from "react";

/** Groupe les milliers (espace insécable) à partir de 5 chiffres, comme la maquette : 1200, 11 500, 83 000. */
function format(n: number) {
  const s = String(Math.round(n));
  return s.length >= 5 ? s.replace(/\B(?=(\d{3})+(?!\d))/g, " ") : s;
}

/**
 * Compteur animé de 0 à `value` lorsqu'il entre dans la vue.
 * Rendu serveur = valeur finale (sans JS / prefers-reduced-motion : pas d'animation).
 */
export default function CountUp({ value, duration = 1600 }: { value: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Déjà visible au chargement : on n'anime pas (évite un saut de valeur)
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) return;

    setDisplay(0);
    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const step = (now: number) => {
          const t = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - t, 3);
          setDisplay(value * eased);
          if (t < 1) frame = requestAnimationFrame(step);
        };
        frame = requestAnimationFrame(step);
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value, duration]);

  return (
    // largeur réservée = valeur finale : pas de reflow pendant l'animation
    <span ref={ref} style={{ display: "inline-block", minWidth: `calc(${format(value).length} * (1ch + var(--ls-h1)))` }}>
      <span aria-hidden>{format(display)}</span>
      <span className="visually-hidden">{format(value)}</span>
    </span>
  );
}
