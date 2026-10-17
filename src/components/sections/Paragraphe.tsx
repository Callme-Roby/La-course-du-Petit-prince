import type { ReactNode } from "react";
import styles from "./Paragraphe.module.css";

type ParagrapheProps = {
  title: ReactNode;
  /** Un ou plusieurs paragraphes (colonne de droite). */
  children: ReactNode;
  /** Contenu additionnel sous le texte (CTA…). */
  footer?: ReactNode;
  id?: string;
};

/** Composant Figma "Paragraphe" (2060:8431) : H2 à gauche, texte en 2e colonne. */
export default function Paragraphe({ title, children, footer, id }: ParagrapheProps) {
  return (
    <section id={id} className={`container ${styles.paragraphe}`}>
      <h2 className={`h2 ${styles.title}`}>{title}</h2>
      <div className={`p-m ${styles.content}`}>
        {children}
        {footer}
      </div>
    </section>
  );
}
