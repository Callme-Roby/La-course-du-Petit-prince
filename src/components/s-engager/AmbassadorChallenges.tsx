import SectionHeader from "@/components/sections/SectionHeader";
import Media from "@/components/ui/Media";
import { ambassadorChallenges, type AmbassadorChallenge } from "@/data/engagement";
import styles from "./AmbassadorChallenges.module.css";

/** Composant Figma "card-ambassadeur" (2060:14355) : photo, tag, titre et description. */
export function AmbassadorCard({ challenge }: { challenge: AmbassadorChallenge }) {
  return (
    <article className={styles.card}>
      <Media
        src={challenge.image.src}
        alt={challenge.image.alt}
        position={challenge.image.position}
        className={styles.media}
        sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 603px"
      />
      <span className={styles.overlay} aria-hidden />
      <div className={styles.content}>
        <span className={`p-s ${styles.tag}`}>{challenge.tag}</span>
        <h3 className={styles.title}>{challenge.title}</h3>
        <p className="p-m">{challenge.text}</p>
      </div>
    </article>
  );
}

/** Section "Leurs défis" (2060:14435). */
export default function AmbassadorChallenges() {
  return (
    <section className={`container ${styles.section}`} aria-labelledby="defis-title">
      <div className={styles.header}>
        <SectionHeader
          id="defis-title"
          title="Leurs défis"
          text="Quelques aventures portées aux couleurs du Petit Prince."
        />
      </div>
      <ul className={styles.grid}>
        {ambassadorChallenges.map((c) => (
          <li key={c.title}>
            <AmbassadorCard challenge={c} />
          </li>
        ))}
      </ul>
    </section>
  );
}
