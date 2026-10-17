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
  /**
   * PDF des résultats. Les fichiers ne sont pas encore fournis :
   * les déposer dans /public/resultats/ sous ces noms.
   */
  href: string;
};

/** Section "Les résultats" (2063:15061). */
export const results: ResultDoc[] = [
  { label: "Résultat - Trail 17 km - 2025", href: "/resultats/trail-17-km-2025.pdf" },
  { label: "Résultat - Trail 7 km - 2025", href: "/resultats/trail-7-km-2025.pdf" },
  { label: "Résultat - Marches - 2025", href: "/resultats/marches-2025.pdf" },
  { label: "Résultat - Courses enfants - 2025", href: "/resultats/courses-enfants-2025.pdf" },
];
