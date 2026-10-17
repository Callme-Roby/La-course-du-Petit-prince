import type { ReactNode } from "react";
import styles from "./SectionHeader.module.css";

type SectionHeaderProps = {
  title: ReactNode;
  /** Variante "text" : paragraphe en 2e colonne. */
  text?: ReactNode;
  /** Variantes "all btn" / "tout voir" : actions alignées à droite (flèches, bouton…). */
  actions?: ReactNode;
  as?: "h2" | "h3";
  id?: string;
};

/** Composant Figma "En-tête" (2055:5071) — états Default / text / all btn / tout voir. */
export default function SectionHeader({ title, text, actions, as: Tag = "h2", id }: SectionHeaderProps) {
  return (
    <div className={styles.header}>
      <Tag id={id} className={`h2 ${styles.title}`}>
        {title}
      </Tag>
      {text && <p className={`p-m ${styles.text}`}>{text}</p>}
      {actions && <div className={styles.actions}>{actions}</div>}
    </div>
  );
}
