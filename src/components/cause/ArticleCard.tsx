import Media from "@/components/ui/Media";
import type { CauseArticle } from "@/data/cause";
import styles from "./ArticleCard.module.css";

const dateFmt = new Intl.DateTimeFormat("fr-FR", { day: "2-digit", month: "long", year: "numeric", timeZone: "Europe/Paris" });

/** Composant Figma "Article card" (2032:1517) : visuel, titre, date. */
export default function ArticleCard({ article }: { article: CauseArticle }) {
  const { title, date, image, href } = article;
  const content = (
    <>
      <Media
        src={image.src}
        alt={image.alt}
        className={styles.image}
        sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, (max-width: 1280px) 33vw, 446px"
      />
      <h3 className={`p-s ${styles.title}`}>{title}</h3>
      <p className={`p-xs ${styles.date}`}>
        <time dateTime={date}>{dateFmt.format(new Date(`${date}T12:00:00`))}</time>
      </p>
    </>
  );

  return (
    <article className={styles.card}>
      {href ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className={styles.link}>
          {content}
        </a>
      ) : (
        <div className={styles.link}>{content}</div>
      )}
    </article>
  );
}
