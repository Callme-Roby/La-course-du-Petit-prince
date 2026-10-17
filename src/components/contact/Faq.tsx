import Image from "next/image";
import Link from "next/link";
import SectionHeader from "@/components/sections/SectionHeader";
import { faq as defaultItems, type FaqItem } from "@/data/faq";
import styles from "./Faq.module.css";

/**
 * Section "Foire aux questions" (2057:5058) — composant "row" type=faq, états close/open.
 * Accordéon natif <details>/<summary> : accessible au clavier et sans JavaScript.
 */
export default function Faq({ items = defaultItems, title = "Foire aux questions" }: { items?: FaqItem[]; title?: string }) {
  return (
    <section className={`container ${styles.section}`} aria-labelledby="faq-title">
      <SectionHeader id="faq-title" title={title} />
      <div className={styles.list}>
        {items.map((item) => (
          <details key={item.question} className={styles.row}>
            <summary className={styles.summary}>
              <h3 className={`p-m ${styles.question}`}>{item.question}</h3>
              <Image className={styles.icon} src="/icons/plus.svg" alt="" width={20} height={20} aria-hidden />
            </summary>
            <div className={`p-xs ${styles.answer}`}>
              <p>{item.answer}</p>
              {item.link && (
                <Link
                  href={item.link.href}
                  className={styles.link}
                  {...(/^https?:/.test(item.link.href) ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  {item.link.label} →
                </Link>
              )}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
