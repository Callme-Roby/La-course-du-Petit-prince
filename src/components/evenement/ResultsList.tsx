import SectionHeader from "@/components/sections/SectionHeader";
import Button from "@/components/ui/Button";
import { results as defaultResults, type ResultDoc } from "@/data/evenement";
import styles from "./ResultsList.module.css";

/** Section "Les résultats" (2063:15061) : liste de documents PDF téléchargeables. */
export default function ResultsList({ results = defaultResults }: { results?: ResultDoc[] }) {
  return (
    <section className={`container ${styles.section}`} aria-labelledby="results-title">
      <SectionHeader id="results-title" title="Les résultats" />
      <ul className={styles.list}>
        {results.map((doc) => (
          <li key={doc.href} className={styles.row}>
            <span className={`p-m ${styles.label}`}>{doc.label}</span>
            <Button
              variant="tertiary"
              tone="dark"
              href={doc.href}
              external
              download
              className={styles.cta}
              aria-label={`Télécharger le pdf : ${doc.label}`}
            >
              Télécharger le pdf
            </Button>
          </li>
        ))}
      </ul>
    </section>
  );
}
