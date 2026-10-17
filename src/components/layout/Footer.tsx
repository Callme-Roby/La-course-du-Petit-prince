import Image from "next/image";
import Link from "next/link";
import { footerNav, routes, site } from "@/lib/site";
import BackToTop from "./BackToTop";
import NewsletterForm from "./NewsletterForm";
import styles from "./Footer.module.css";

/** Composant Figma "Footer" (2038:3149). */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.watermark} aria-hidden>
        <Image src="/footer-watermark.svg" alt="" width={1920} height={754} />
      </div>

      <div className={styles.content}>
        <Link href={routes.home} className={styles.logo} aria-label={`${site.name} — accueil`}>
          <Image src="/logo-cdpp-mark.svg" alt="" width={61} height={58} />
        </Link>

        <div className={styles.main}>
          <nav className={styles.nav} aria-label="Pied de page">
            {footerNav.map((group) => (
              <div key={group.title} className={styles.group}>
                <p className={styles.groupTitle}>{group.title}</p>
                <ul className={styles.list}>
                  {group.items.map((item) => (
                    <li key={item.label}>
                      {item.external ? (
                        <a
                          href={item.href}
                          className={styles.link}
                          {...(/^https?:/.test(item.href)
                            ? { target: "_blank", rel: "noopener noreferrer" }
                            : {})}
                        >
                          {item.label}
                        </a>
                      ) : (
                        <Link href={item.href} className={styles.link}>
                          {item.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>

          <div className={styles.newsletter}>
            <h2 className={`h2 ${styles.newsletterTitle}`}>Abonnez-vous à la newsletter</h2>
            <NewsletterForm />
          </div>
        </div>

        <BackToTop className={styles.toTop} />
      </div>

      <div className={styles.bottom}>
        <p>Roby © {year} All rights reserved</p>
        <p>
          Made by <span className={styles.accent}>Roby</span>
        </p>
      </div>
    </footer>
  );
}
