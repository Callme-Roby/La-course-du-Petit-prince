import Link from "next/link";
import styles from "./EngagementCard.module.css";

type EngagementCardProps = {
  title: string;
  text: string;
  /** Variante "engagement" : carte cliquable + lien "En savoir plus →". Sans href : variante "mission". */
  href?: string;
  as?: "h3" | "h4";
};

/** Composant Figma "card-engagement" (2060:9026) — variantes engagement (Default/Hover) et mission. */
export default function EngagementCard({ title, text, href, as: Title = "h3" }: EngagementCardProps) {
  return (
    <article className={`${styles.card} ${href ? styles.engagement : styles.mission}`}>
      <div className={styles.content}>
        <Title className={`p-m ${styles.title}`}>{title}</Title>
        <p className="p-s">{text}</p>
      </div>
      {href && (
        <Link href={href} className={`p-s ${styles.more}`}>
          <span className={styles.moreLabel}>En savoir plus →</span>
          <span className="visually-hidden"> : {title}</span>
        </Link>
      )}
    </article>
  );
}
