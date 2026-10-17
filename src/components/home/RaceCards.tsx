import Link from "next/link";
import SectionHeader from "@/components/sections/SectionHeader";
import Media from "@/components/ui/Media";
import { races } from "@/data/home";
import { routes } from "@/lib/site";
import styles from "./RaceCards.module.css";

/** Section "Choisissez votre course" (2055:5983) : 4 cartes "card-event" (2035:1788, états Default / Hover). */
export default function RaceCards() {
  return (
    <section className={`container ${styles.section}`} aria-labelledby="races-title">
      <SectionHeader
        id="races-title"
        title="Choisissez votre course"
        text="Du premier dossard de vos enfants au trail qui pique : un format pour chaque envie, le même esprit nature et solidaire."
      />
      <ul className={styles.list}>
        {races.map((race) => (
          <li key={race.id}>
            <Link href={routes.event} className={styles.card}>
              <Media
                src={race.image.src}
                alt={race.image.alt}
                position={race.image.position}
                className={styles.media}
                sizes="(max-width: 600px) 100vw, (max-width: 1100px) 50vw, 25vw"
              />
              <span className={styles.overlay} aria-hidden />
              <span className={`p-s ${styles.tag}`}>{race.tag}</span>
              <h3 className={styles.title}>{race.title}</h3>
              <p className={`p-m ${styles.subtitle}`}>{race.subtitle}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
