import Image from "next/image";
import Button from "@/components/ui/Button";
import { links } from "@/lib/site";
import styles from "./CtaSection.module.css";

/** "section cta" (2028:1224) : texte centré + bouton, illustrations jaunes en fond ("img fond" 2055:6343). */
export default function CtaSection() {
  return (
    <section className={`container ${styles.section}`} aria-labelledby="cta-title">
      <Image
        className={styles.bg}
        src="/illustrations/cta-background.svg"
        alt=""
        width={1860}
        height={551}
        aria-hidden
      />
      <div className={styles.content}>
        <h2 id="cta-title" className={`h2 ${styles.title}`}>
          Marches et trails nature en famille, <br />
          dans la forêt du Bourgailh à Pessac. <br />
          100% des dons et des fonds sont reversés à la recherche contre <br className={styles.br} />
          les sarcomes.
        </h2>
        <Button href={links.register}>Réserver son dossard</Button>
      </div>
    </section>
  );
}
