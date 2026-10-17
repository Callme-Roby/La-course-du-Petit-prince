import Image from "next/image";
import SectionHeader from "@/components/sections/SectionHeader";
import { partnerCategories } from "@/data/partnerCategories";
import styles from "./PartnerCategories.module.css";

/**
 * Section "Ils nous soutiennent" (2060:8681) : logos par catégorie dans des cartes
 * card-engagement "partenaire" (gris par défaut, couleur au survol — variante Hover 2060:13597).
 */
export default function PartnerCategories() {
  return (
    <section className={`container ${styles.section}`} aria-labelledby="supporters-title">
      <SectionHeader id="supporters-title" title="Ils nous soutiennent" />
      <div className={styles.categories}>
        {partnerCategories.map((cat, ci) => (
          <section key={cat.title} className={styles.category} aria-labelledby={`partners-cat-${ci}`}>
            <h3 id={`partners-cat-${ci}`} className={`p-xs ${styles.catTitle}`}>
              {cat.title}
            </h3>
            <ul className={styles.grid}>
              {cat.partners.map((p) => (
                <li key={p.name} className={styles.card}>
                  <Image
                    src={p.logo}
                    alt={p.name}
                    width={p.width}
                    height={p.height}
                    className={styles.logo}
                    sizes="230px"
                  />
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </section>
  );
}
