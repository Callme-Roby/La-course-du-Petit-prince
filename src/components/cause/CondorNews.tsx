import SectionHeader from "@/components/sections/SectionHeader";
import { condorArticles, type CauseArticle } from "@/data/cause";
import ArticleCard from "./ArticleCard";
import styles from "./CondorNews.module.css";

/** Section "Toute l'actualité du laboratoire RHU CONDOR" (2055:7021) : grille d'articles. */
export default function CondorNews({ articles = condorArticles }: { articles?: CauseArticle[] }) {
  return (
    <section className={`container ${styles.section}`} aria-labelledby="condor-news-title">
      <SectionHeader
        id="condor-news-title"
        title={
          <>
            Toute l’actualité <br />
            du laboratoire RHU CONDOR
          </>
        }
      />
      <ul className={styles.grid}>
        {articles.map((article) => (
          <li key={article.id}>
            <ArticleCard article={article} />
          </li>
        ))}
      </ul>
    </section>
  );
}
