import SectionHeader from "@/components/sections/SectionHeader";
import Button from "@/components/ui/Button";
import { engagementWays } from "@/data/engagement";
import { links, routes } from "@/lib/site";
import EngagementCard from "./EngagementCard";
import styles from "./WaysToHelp.module.css";

/** Section "Les façons d'aider" (2060:9034) : 3 cartes vers les sous-pages + CTA. */
export default function WaysToHelp() {
  return (
    <section className={`container ${styles.section}`} aria-labelledby="ways-title">
      <SectionHeader id="ways-title" title="Les façons d’aider" />
      <ul className={styles.grid}>
        {engagementWays.map((way) => (
          <li key={way.href}>
            <EngagementCard title={way.title} text={way.text} href={way.href} />
          </li>
        ))}
      </ul>
      <div className={styles.actions}>
        <Button href={links.register}>Réserver son dossard</Button>
        <Button variant="secondary" href={links.donate}>
          Faire un don
        </Button>
        <Button variant="secondary" href={routes.shop}>
          Visiter la boutique
        </Button>
      </div>
    </section>
  );
}
