/**
 * Contenus de la page d'accueil (maquette "V1 - Accueil" 2020:898).
 * Fichiers images : figma-assets/home.json
 */
import type { GalleryImage } from "@/components/sections/GalleryMosaic";

/** Section KPI "Ensemble, on fait avancer la recherche" (2055:5950). */
export type Kpi = { value: number; unit?: string; label: string };

export const kpis: Kpi[] = [
  { value: 1200, label: "Coureurs & marcheurs" },
  { value: 11500, unit: "km", label: "Parcourus ensemble" },
  { value: 83000, unit: "€", label: "Reversé à la recherche" },
  { value: 100, unit: "%", label: "Des fonds reversés, chaque année" },
];

/** Section "Choisissez votre course" (2055:5983) — cartes "card-event". */
export type Race = {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  image: { src: string; alt: string; position?: string };
};

export const races: Race[] = [
  {
    id: "courses-enfants",
    tag: "6-15 ans",
    title: "Courses enfants",
    subtitle: "Circuits 100% nature",
    image: { src: "/images/home/course-enfants.jpg", alt: "Des enfants courent sous la pluie au départ de la course" },
  },
  {
    id: "marches",
    tag: "Famille",
    title: "Les marches",
    subtitle: "Familiale & sportive",
    image: { src: "/images/home/marches.jpg", alt: "Marcheurs déguisés en super-héros, cape rose sur le dos" },
  },
  {
    id: "trail-7km",
    tag: "Trail",
    title: "Trail 7 Km",
    subtitle: "Accessible (+150m D+)",
    image: { src: "/images/home/trail-7km.jpg", alt: "Coureur du trail de 7 km dossard sur le ventre" },
  },
  {
    id: "trail-17km",
    tag: "Trail",
    title: "Trail 17 Km",
    subtitle: "Sportif (+420m D+)",
    image: { src: "/images/home/trail-17km.jpg", alt: "Traileuse concentrée au départ du 17 km", position: "8% 50%" },
  },
];

/** Section "Retour en images" (2055:6117). */
export const homeGallery: GalleryImage[] = [
  { src: "/images/home/galerie-1.jpg", alt: "Coureurs et une petite fille franchissant l’arrivée", position: "58% 50%" },
  { src: "/images/home/galerie-2.jpg", alt: "Départ de la course des enfants sous la pluie" },
  { src: "/images/home/galerie-3.jpg", alt: "Peloton de coureurs en maillots bleus" },
  { src: "/images/home/galerie-4.jpg", alt: "Un coureur et une fillette main dans la main", position: "80% 50%" },
];
