"use client";

import { Children, useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import SectionHeader from "@/components/sections/SectionHeader";
import Button from "@/components/ui/Button";
import SlideButton from "@/components/ui/SlideButton";
import styles from "./CarouselSection.module.css";

type CarouselSectionProps = {
  id: string;
  title: ReactNode;
  /** Lien "Tout voir" */
  allHref: string;
  allLabel?: string;
  children: ReactNode;
};

/**
 * Section carrousel — "En-tête" état "all btn" (flèches + "Tout voir") et liste de cartes
 * défilante (scroll-snap). Les flèches font défiler d'une carte ; elles se désactivent aux extrémités.
 */
export default function CarouselSection({ id, title, allHref, allLabel = "Tout voir", children }: CarouselSectionProps) {
  const trackRef = useRef<HTMLUListElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const update = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 2);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 2);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    update();
    el.addEventListener("scroll", update, { passive: true });
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", update);
      ro.disconnect();
    };
  }, [update]);

  const scroll = (dir: 1 | -1) => {
    const el = trackRef.current;
    const item = el?.firstElementChild as HTMLElement | null;
    if (!el || !item) return;
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: dir * (item.offsetWidth + gap), behavior: reduce ? "auto" : "smooth" });
  };

  const titleId = `${id}-title`;

  return (
    <section className={`container ${styles.section}`} aria-labelledby={titleId}>
      <SectionHeader
        id={titleId}
        title={title}
        actions={
          <>
            <div className={styles.arrows}>
              <SlideButton direction="prev" onClick={() => scroll(-1)} disabled={!canPrev} aria-controls={`${id}-track`} />
              <SlideButton direction="next" onClick={() => scroll(1)} disabled={!canNext} aria-controls={`${id}-track`} />
            </div>
            <Button variant="secondary" tone="dark" href={allHref}>
              {allLabel}
            </Button>
          </>
        }
      />
      <ul id={`${id}-track`} ref={trackRef} className={styles.track} aria-roledescription="carrousel">
        {Children.map(children, (child) => (
          <li className={styles.item}>{child}</li>
        ))}
      </ul>
    </section>
  );
}
