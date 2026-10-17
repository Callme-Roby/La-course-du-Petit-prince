import SectionHeader from "@/components/sections/SectionHeader";
import { albums as defaultAlbums, type Album } from "@/data/evenement";
import styles from "./AlbumGrid.module.css";

/** Section "L'évènement en image" (2063:14530) : grille de cartes "card-engagement" vers les albums. */
export default function AlbumGrid({ albums = defaultAlbums }: { albums?: Album[] }) {
  return (
    <section className={`container ${styles.section}`} aria-labelledby="albums-title">
      <SectionHeader id="albums-title" title="L’évènement en image" />
      <ul className={styles.grid}>
        {albums.map((album) => {
          const external = album.href ? /^https?:/.test(album.href) : false;
          return (
            <li key={album.title} className={styles.card}>
              <span className={`p-m ${styles.title}`}>{album.title}</span>
              <a
                className={styles.link}
                href={album.href ?? "#galerie"}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                aria-label={`Voir l’album « ${album.title} »${external ? " (nouvel onglet)" : ""}`}
              >
                Voir l’album →
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
