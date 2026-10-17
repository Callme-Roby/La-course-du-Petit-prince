import Button from "@/components/ui/Button";
import { links } from "@/lib/site";
import styles from "./DonBanner.module.css";

/** Section Figma "Don" (2057:3623) : bandeau d'appel au don vers HelloAsso. */
export default function DonBanner() {
  return (
    <section className={styles.banner} aria-labelledby="don-title">
      <div className={styles.text}>
        <h2 id="don-title" className="h2">
          Chaque don fait avancer <br />
          la recherche
        </h2>
        <p className="p-m">
          Soutenir, même sans courir, <br />
          un geste simple, un impact direct <br />
          sur la vie des enfants touchés par les sarcomes.
        </p>
      </div>
      <Button href={links.donate}>Faire un don</Button>
    </section>
  );
}
