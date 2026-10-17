import Media from "@/components/ui/Media";
import styles from "./GalleryMosaic.module.css";

export type GalleryImage = {
  src: string;
  alt: string;
  /** Point focal (object-position), ex. "60% 50%". */
  position?: string;
};

type GalleryMosaicProps = {
  images: GalleryImage[];
  id?: string;
  /** Titre accessible de la galerie (non affiché). */
  label?: string;
  className?: string;
};

/**
 * Mosaïque photos "list img" (2055:5687) : par groupe de 4 images,
 * une grande à gauche (916×960), une large en haut à droite (916×456)
 * et deux en bas à droite (446×480). Les groupes suivants répètent le motif.
 */
export default function GalleryMosaic({ images, id, label = "Galerie photos", className }: GalleryMosaicProps) {
  const groups: GalleryImage[][] = [];
  for (let i = 0; i < images.length; i += 4) groups.push(images.slice(i, i + 4));

  return (
    <section id={id} className={["container", styles.section, className].filter(Boolean).join(" ")} aria-label={label}>
      {groups.map((group, g) => (
        <ul key={g} className={styles.grid} data-count={group.length}>
          {group.map((image, i) => (
            <li key={`${image.src}-${i}`} className={styles.item}>
              <Media
                src={image.src}
                alt={image.alt}
                position={image.position}
                className={styles.media}
                sizes={i === 0 ? "(max-width: 700px) 100vw, 50vw" : "(max-width: 700px) 50vw, 25vw"}
              />
            </li>
          ))}
        </ul>
      ))}
    </section>
  );
}
