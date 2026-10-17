import Image from "next/image";
import styles from "./Media.module.css";

type MediaProps = {
  src: string;
  alt: string;
  className?: string;
  /** `sizes` transmis à next/image (par défaut : pleine largeur). */
  sizes?: string;
  priority?: boolean;
  /** Point focal (object-position), ex. "50% 30%". */
  position?: string;
};

/**
 * Image remplissant son conteneur (object-fit: cover).
 * Le conteneur fixe le ratio / la hauteur via `className`.
 * Les fichiers de /public/images sont listés dans /figma-assets (voir README).
 */
export default function Media({ src, alt, className, sizes = "100vw", priority, position }: MediaProps) {
  return (
    <div className={[styles.media, className].filter(Boolean).join(" ")}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={styles.img}
        style={position ? { objectPosition: position } : undefined}
      />
    </div>
  );
}
