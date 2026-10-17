import { participationSteps } from "@/data/engagement";
import styles from "./ParticipationSteps.module.css";

/** Section "Participer en 3 étapes" (2060:7435). */
export default function ParticipationSteps() {
  return (
    <section className={`container ${styles.section}`} aria-labelledby="steps-title">
      <h2 id="steps-title" className={`h2 ${styles.title}`}>
        Participer en 3 étapes
      </h2>
      <ol className={styles.list}>
        {participationSteps.map((step, i) => (
          <li key={i} className={styles.step}>
            <span className={`h2 ${styles.number}`} aria-hidden>
              {String(i + 1).padStart(2, "0")}
            </span>
            <p className="p-m">{step}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
