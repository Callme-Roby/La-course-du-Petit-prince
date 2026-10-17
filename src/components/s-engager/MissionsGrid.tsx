import SectionHeader from "@/components/sections/SectionHeader";
import { volunteerMissions } from "@/data/engagement";
import EngagementCard from "./EngagementCard";
import styles from "./MissionsGrid.module.css";

/** Section "Les missions" (2060:9121) : grille de cartes card-engagement "mission". */
export default function MissionsGrid() {
  return (
    <section className={`container ${styles.section}`} aria-labelledby="missions-title">
      <SectionHeader id="missions-title" title="Les missions" />
      <ul className={styles.grid}>
        {volunteerMissions.map((mission) => (
          <li key={mission.title}>
            <EngagementCard title={mission.title} text={mission.text} />
          </li>
        ))}
      </ul>
    </section>
  );
}
