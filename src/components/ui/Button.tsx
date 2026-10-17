import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import styles from "./Button.module.css";

/**
 * Composant Figma "cta" (Bouton) — variantes :
 * - primary   : fond jaune, remplissage bleu au survol
 * - secondary : contour, pour fonds clairs (tone="dark") ou sombres (tone="light")
 * - glass     : contour clair + fond noir 25 % flouté (header / hero)
 * - tertiary  : lien texte, soulignement au survol
 * - nav       : lien de navigation, jaune au survol
 */
export type ButtonVariant = "primary" | "secondary" | "glass" | "tertiary" | "nav";
export type ButtonTone = "light" | "dark";

type CommonProps = {
  variant?: ButtonVariant;
  /** Couleur du texte pour secondary / tertiary / nav : light = #fdf9f1, dark = #111 */
  tone?: ButtonTone;
  className?: string;
  children: ReactNode;
};

type LinkProps = CommonProps & {
  href: string;
  external?: boolean;
} & Omit<ComponentPropsWithoutRef<"a">, "href" | "className" | "children">;

type NativeButtonProps = CommonProps & {
  href?: undefined;
} & Omit<ComponentPropsWithoutRef<"button">, "className" | "children">;

export type ButtonProps = LinkProps | NativeButtonProps;

export function buttonClassName(
  variant: ButtonVariant = "primary",
  tone: ButtonTone = "dark",
  className?: string,
) {
  return [styles.button, styles[variant], styles[tone], className].filter(Boolean).join(" ");
}

export default function Button(props: ButtonProps) {
  const { variant = "primary", tone = "dark", className, children } = props;
  const cls = buttonClassName(variant, tone, className);
  const content = (
    <>
      {variant === "primary" && <span className={styles.fill} aria-hidden />}
      <span className={styles.label}>{children}</span>
    </>
  );

  if (props.href !== undefined) {
    const { href, external, variant: _v, tone: _t, className: _c, children: _ch, ...rest } = props;
    const isExternal = external ?? /^(https?:|mailto:|tel:)/.test(href);
    if (isExternal) {
      const opensTab = /^https?:/.test(href);
      return (
        <a
          href={href}
          className={cls}
          {...(opensTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          {...rest}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={cls} {...rest}>
        {content}
      </Link>
    );
  }

  const { variant: _v, tone: _t, className: _c, children: _ch, type = "button", ...rest } = props;
  return (
    <button type={type} className={cls} {...rest}>
      {content}
    </button>
  );
}
