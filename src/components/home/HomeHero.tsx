"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import Button from "@/components/ui/Button";
import { links } from "@/lib/site";
import Countdown from "./Countdown";
import styles from "./HomeHero.module.css";

type HomeHeroProps = {
  /** Date ISO de la course : la bande "compte à rebours" n'est rendue que si elle est à venir. */
  raceDate?: string;
};

/**
 * "Hero section" de l'accueil (2028:1226) : photo plein écran + H1 + CTA.
 * Composant "IMG HERO" (2022:1064) — états "scroll margin 10/16/24/32" : au défilement,
 * l'image se détache des bords (marge croissante jusqu'à la gouttière) et ses coins s'arrondissent.
 * La progression (0 → 1) est écrite dans la variable CSS --p (rAF), désactivée si prefers-reduced-motion.
 */
export default function HomeHero({ raceDate }: HomeHeroProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;

    const update = () => {
      frame = 0;
      const distance = Math.max(1, el.offsetHeight * 0.4);
      const p = reduce.matches ? 0 : Math.min(1, Math.max(0, window.scrollY / distance));
      el.style.setProperty("--p", p.toFixed(3));
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    reduce.addEventListener("change", update);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      reduce.removeEventListener("change", update);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section ref={ref} className={styles.hero} aria-labelledby="hero-title">
      {raceDate && <Countdown target={raceDate} />}
      <div className={styles.frame}>
        <Image
          src="/images/home/hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className={styles.img}
        />
        <span className={styles.overlay} aria-hidden />
      </div>
      <div className={styles.content}>
        <h1 id="hero-title" className={`h1 ${styles.title}`}>
          Venez vous dépasser pour la bonne cause
        </h1>
        <div className={styles.ctas}>
          <Button variant="glass" href={links.register}>
            Réserver son dossard
          </Button>
          <Button variant="primary" href={links.donate}>
            Faire un don
          </Button>
        </div>
      </div>
    </section>
  );
}
