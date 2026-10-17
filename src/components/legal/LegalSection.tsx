import type { ReactNode } from "react";
import styles from "./LegalSection.module.css";

/**
 * Bloc du "Corps juridique" (pages Mentions légales / Politique de confidentialité, sans maquette dédiée) :
 * intitulé à gauche, texte en colonne de lecture à droite — même grille que le composant "Paragraphe".
 */
export default function LegalSection({ title, id, children }: { title: string; id?: string; children: ReactNode }) {
  return (
    <section id={id} className={styles.section}>
      <h2 className={styles.title}>{title}</h2>
      <div className={`p-s ${styles.content}`}>{children}</div>
    </section>
  );
}

/** Conteneur des blocs juridiques + date de mise à jour. */
export function LegalBody({ updated, children }: { updated: string; children: ReactNode }) {
  return (
    <div className={`container ${styles.body}`}>
      <p className={`p-xs ${styles.updated}`}>Dernière mise à jour : {updated}</p>
      {children}
    </div>
  );
}

/** Marqueur visible des informations à fournir par l'association. */
export function Todo({ children }: { children: ReactNode }) {
  return <mark className={styles.todo}>[À COMPLÉTER : {children}]</mark>;
}
