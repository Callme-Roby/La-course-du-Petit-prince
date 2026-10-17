import SectionHeader from "@/components/sections/SectionHeader";
import Button from "@/components/ui/Button";
import { documentationLinks } from "@/data/cause";
import styles from "./DocumentationList.module.css";

/** Section "Plus de documentations" (2057:3545) : liste de sites de référence. */
export default function DocumentationList({ links = documentationLinks }: { links?: { label: string; href: string }[] }) {
  return (
    <section className={`container ${styles.section}`} aria-labelledby="documentation-title">
      <SectionHeader id="documentation-title" title="Plus de documentations" />
      <ul className={styles.list}>
        {links.map((link) => (
          <li key={link.href} className={styles.row}>
            <span className={`p-m ${styles.label}`}>{link.label}</span>
            <Button
              variant="tertiary"
              tone="dark"
              href={link.href}
              className={styles.cta}
              aria-label={`Voir la page ${link.label} (nouvel onglet)`}
            >
              Voir la page
            </Button>
          </li>
        ))}
      </ul>
    </section>
  );
}
