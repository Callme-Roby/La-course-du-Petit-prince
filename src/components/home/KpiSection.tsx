import Image from "next/image";
import SectionHeader from "@/components/sections/SectionHeader";
import { kpis } from "@/data/home";
import CountUp from "./CountUp";
import styles from "./KpiSection.module.css";

/** Section "Ensemble, on fait avancer la recherche" (2055:5950) : composants "kpi" (2044:4057) + tracé de la course. */
export default function KpiSection() {
  return (
    <section className={`container ${styles.section}`} aria-labelledby="kpi-title">
      <SectionHeader id="kpi-title" title="Ensemble, on fait avancer la recherche" />
      <div className={styles.body}>
        <ul className={styles.stats}>
          {kpis.map((kpi) => (
            <li key={kpi.label} className={styles.stat}>
              <p className={styles.value}>
                <CountUp value={kpi.value} />
                {kpi.unit && <span className={styles.unit}>{kpi.unit}</span>}
              </p>
              <p className={`p-s ${styles.label}`}>{kpi.label}</p>
            </li>
          ))}
        </ul>
        <Image
          className={styles.map}
          src="/illustrations/kpi-map.svg"
          alt=""
          width={573}
          height={364}
          aria-hidden
        />
      </div>
    </section>
  );
}
