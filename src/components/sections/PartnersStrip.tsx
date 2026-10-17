import Image from "next/image";
import { partners } from "@/data/partners";
import SectionHeader from "./SectionHeader";
import styles from "./PartnersStrip.module.css";

/** Section "Carroussel partenaires" (2055:5722) : défilement continu des logos en niveaux de gris. */
export default function PartnersStrip({ title = "Nos partenaires" }: { title?: string }) {
  // La liste est dupliquée pour un défilement sans couture ; la copie est masquée aux lecteurs d'écran.
  const track = [...partners, ...partners];
  return (
    <section className={`container ${styles.section}`} aria-labelledby="partners-title">
      <SectionHeader id="partners-title" title={title} />
      <div className={styles.viewport}>
        <ul className={styles.track}>
          {track.map((p, i) => (
            <li key={`${p.name}-${i}`} className={styles.item} aria-hidden={i >= partners.length || undefined}>
              <Image
                src={p.logo}
                alt={i >= partners.length ? "" : p.name}
                width={p.width}
                height={p.height}
                className={styles.logo}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
