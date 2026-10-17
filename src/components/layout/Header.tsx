"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import Button from "@/components/ui/Button";
import { links, mainNav, routes, site } from "@/lib/site";
import styles from "./Header.module.css";

/** Composant Figma "Header" (2016:615) : logo, barre de liens, CTA. */
export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === routes.home;
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSub, setOpenSub] = useState<string | null>(null);
  const menuId = useId();
  const navRef = useRef<HTMLElement>(null);

  // Ferme les menus à chaque navigation
  useEffect(() => {
    setMenuOpen(false);
    setOpenSub(null);
  }, [pathname]);

  // Échap / clic extérieur ferment le sous-menu
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenSub(null);
        setMenuOpen(false);
      }
    };
    const onClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpenSub(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className={`${styles.header} ${isHome ? styles.onHero : ""}`}>
      <Link href={routes.home} className={styles.logo} aria-label={`${site.name} — accueil`}>
        <Image src="/logo-cdpp.svg" alt="" width={361} height={81} priority />
      </Link>

      <button
        type="button"
        className={styles.burger}
        aria-expanded={menuOpen}
        aria-controls={menuId}
        onClick={() => setMenuOpen((o) => !o)}
      >
        <span className="visually-hidden">{menuOpen ? "Fermer le menu" : "Ouvrir le menu"}</span>
        <span className={styles.burgerLines} aria-hidden />
      </button>

      <div id={menuId} className={`${styles.panel} ${menuOpen ? styles.panelOpen : ""}`}>
        <nav ref={navRef} className={styles.nav} aria-label="Navigation principale">
          <ul className={styles.navList}>
            {mainNav.map((item) =>
              item.children ? (
                <li
                  key={item.href}
                  className={styles.hasSub}
                  onMouseEnter={() => setOpenSub(item.href)}
                  onMouseLeave={() => setOpenSub(null)}
                >
                  <div className={styles.subTrigger}>
                    <Link
                      href={item.href}
                      className={styles.navLink}
                      aria-current={pathname === item.href ? "page" : undefined}
                      data-active={isActive(item.href) || undefined}
                    >
                      {item.label}
                    </Link>
                    <button
                      type="button"
                      className={styles.chevron}
                      aria-expanded={openSub === item.href}
                      aria-label={`Sous-menu ${item.label}`}
                      onClick={() => setOpenSub((s) => (s === item.href ? null : item.href))}
                    >
                      <Image src="/icons/chevron-down.svg" alt="" width={12} height={7} />
                    </button>
                  </div>
                  <ul className={`${styles.subMenu} ${openSub === item.href ? styles.subOpen : ""}`}>
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className={styles.subLink}
                          aria-current={pathname === child.href ? "page" : undefined}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={styles.navLink}
                    aria-current={pathname === item.href ? "page" : undefined}
                    data-active={isActive(item.href) || undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div className={styles.ctas}>
          <Button variant="glass" href={links.register}>
            {isHome ? "S’inscrire" : "Réserver son dossard"}
          </Button>
          <Button variant="primary" href={links.donate}>
            Faire un don
          </Button>
        </div>
      </div>
    </header>
  );
}
