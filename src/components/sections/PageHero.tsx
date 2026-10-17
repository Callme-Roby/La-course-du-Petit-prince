import Media from "@/components/ui/Media";
import styles from "./PageHero.module.css";

type PageHeroProps = {
  title: string;
  image?: { src: string; alt: string; position?: string };
};

/** Composant Figma "Hero section" (2057:4936) : H1 + grande photo (pages intérieures). */
export default function PageHero({ title, image }: PageHeroProps) {
  return (
    <section className={`container ${styles.hero}`}>
      <h1 className={`h1 ${styles.title}`}>{title}</h1>
      {image && (
        <Media
          src={image.src}
          alt={image.alt}
          position={image.position}
          className={styles.image}
          sizes="(max-width: 1920px) 100vw, 1856px"
          priority
        />
      )}
    </section>
  );
}
