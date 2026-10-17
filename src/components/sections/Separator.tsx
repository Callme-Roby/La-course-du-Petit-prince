import styles from "./Separator.module.css";

/** Composant Figma "separator" (2028:1263) : espace vertical entre sections (256px, ou 48px en "small"). */
export default function Separator({ size = "default" }: { size?: "default" | "small" }) {
  return <div className={size === "small" ? styles.small : styles.default} aria-hidden />;
}
