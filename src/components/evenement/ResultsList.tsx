import SectionHeader from "@/components/sections/SectionHeader";
import Button from "@/components/ui/Button";
import { results as defaultResults, type ResultDoc } from "@/data/evenement";
import styles from "./ResultsList.module.css";

/** Section "Les résultats" (2063:15061) : liens vers les classements (PDF ou ProTiming). */
export default function ResultsList({ results = defaultResults }: { results?: ResultDoc[] }) {
  return (
    <section className={`container ${styles.section}`} aria-labelledby="results-title">
      <SectionHeader id="results-title" title="Les résultats" />
      <ul className={styles.list}>
        {results.map((doc) => (
          <li key={doc.label} className={styles.row}>
            <span className={`p-m ${styles.label}`}>{doc.label}</span>
            <Button
              variant="tertiary"
              tone="dark"
              href={doc.href}
              external
              download={doc.pdf || undefined}
              className={styles.cta}
              aria-label={`${doc.pdf ? "Télécharger le pdf" : "Voir les résultats"} : ${doc.label}`}
            >
              {doc.pdf ? "Télécharger le pdf" : "Voir les résultats"}
            </Button>
          </li>
        ))}
      </ul>
    </section>
  );
}
