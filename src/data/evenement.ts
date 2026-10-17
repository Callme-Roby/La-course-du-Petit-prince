import { links } from "@/lib/site";
import type { GalleryImage } from "@/components/sections/GalleryMosaic";

export type Album = {
  title: string;
  /** URL de l'album photo (Google Photos, Flickr…). À fournir : en attendant, renvoie vers la galerie de la page. */
  href?: string;
};

/** Section "L'évènement en image" (2063:14530). */
export const albums: Album[] = [
  { title: "Les courses des enfants" },
  { title: "Les marches" },
  { title: "Le trail 7 kms" },
  { title: "Le trail 17 kms" },
  { title: "Activités des enfants" },
  { title: "Le village" },
  { title: "Les partenaires" },
  { title: "Les associations de santé" },
  { title: "Les podiums" },
  { title: "Les concerts" },
  { title: "Les bénévoles" },
  { title: "Les vidéos du drone" },
];

/** Mosaïque photos (2063:16404). */
export const eventGallery: GalleryImage[] = [
  { src: "/images/evenement/galerie-1.jpg", alt: "Départ de la course des enfants sous la pluie", position: "58% 50%" },
  { src: "/images/evenement/galerie-2.jpg", alt: "Enfants s'élançant sur la ligne de départ devant le village de la course" },
  { src: "/images/evenement/galerie-3.jpg", alt: "Jeunes coureurs dossard au ventre dans la forêt du Bourgailh" },
  { src: "/images/evenement/galerie-4.jpg", alt: "Une enfant court vers l'arrivée devant les stands", position: "80% 50%" },
];

export type ResultDoc = {
  label: string;
  /** PDF local (/public/resultats/…) ou page de résultats en ligne. */
  href: string;
  /** true = fichier PDF téléchargeable ; false = page de résultats externe */
  pdf?: boolean;
};

/**
 * Section "Les résultats" (2063:15061).
 * Les classements sont publiés par le chronométreur ProTiming. Pour proposer des PDF,
 * les déposer dans /public/resultats/ et passer `pdf: true`.
 */
export const results: ResultDoc[] = [
  { label: "Résultats - Trail 17 km - 2026", href: links.results },
  { label: "Résultats - Trail 7 km - 2026", href: links.results },
  { label: "Résultats - Marches - 2026", href: links.results },
  { label: "Résultats - Courses enfants - 2026", href: links.results },
];
