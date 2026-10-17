"use client";

import { useEffect, useState } from "react";
import styles from "./Countdown.module.css";

const pad = (n: number) => String(n).padStart(2, "0");

function format(ms: number) {
  const s = Math.floor(ms / 1000);
  const d = Math.floor(s / 86400);
  const h = Math.floor((s % 86400) / 3600);
  const m = Math.floor((s % 3600) / 60);
  return `${d}j : ${pad(h)}h : ${pad(m)}min : ${pad(s % 60)}sec`;
}

/**
 * Bande "Compte à rebours" (2022:1026), au-dessus du header de l'accueil.
 * Le serveur ne la rend que si la course est à venir ; côté client elle se masque
 * dès que la date est atteinte. L'attribut `data-countdown` sert au Header
 * (Header.module.css) pour se décaler sous la bande.
 */
export default function Countdown({ target }: { target: string }) {
  const end = new Date(target).getTime();
  const [remaining, setRemaining] = useState<number | null>(null);

  useEffect(() => {
    const tick = () => setRemaining(end - Date.now());
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, [end]);

  if (remaining !== null && remaining <= 0) return null;

  return (
    <div className={styles.bar} data-countdown role="timer" aria-live="off">
      <p>La course c’est dans :</p>
      <p className={styles.value}>
        {remaining === null ? " " : <time dateTime={target}>{format(remaining)}</time>}
      </p>
    </div>
  );
}
