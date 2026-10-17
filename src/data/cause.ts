/**
 * Contenus de la page "Notre cause" (maquette 2055:6987).
 */

export type CauseArticle = {
  id: string;
  title: string;
  /** Date de publication (ISO, AAAA-MM-JJ). */
  date: string;
  image: { src: string; alt: string };
  /** Lien vers l'article (non renseigné dans la maquette — à compléter). */
  href?: string;
};

/** Section "Toute l'actualité du laboratoire RHU CONDOR" (2055:7021). */
export const condorArticles: CauseArticle[] = [
  {
    id: "symposium-2025",
    title: "3ème édition du Symposium CONDOR, retour sur une édition inspirante",
    date: "2025-12-14",
    image: { src: "/images/notre-cause/symposium-2025.jpg", alt: "Les participants du 3ème Symposium CONDOR réunis sur les marches" },
  },
  {
    id: "cheque-100000",
    title: "Plus de 100 000 € récoltés pour la recherche sur les sarcomes",
    date: "2025-09-18",
    image: { src: "/images/notre-cause/cheque-100000.jpg", alt: "Remise du chèque de la Course du Petit Prince à l'Institut Bergonié" },
  },
  {
    id: "rapport-mi-parcours",
    title: "Rapport à mi-parcours",
    date: "2024-12-02",
    image: { src: "/images/notre-cause/rapport-mi-parcours.jpg", alt: "L'équipe du programme RHU CONDOR devant un bâtiment" },
  },
  {
    id: "microenvironment-immunotherapy",
    title: "Microenvironment and Immunotherapy of Sarcomas",
    date: "2023-09-22",
    image: { src: "/images/notre-cause/sab-members.jpg", alt: "Visuel des membres du comité scientifique (SAB) de CONDOR" },
  },
  {
    id: "anniversaire-condor",
    title: "Happy 2nd anniversary CONDOR",
    date: "2023-09-22",
    image: { src: "/images/notre-cause/anniversaire-condor.jpg", alt: "Visuel « Happy 2nd Anniversary » du programme CONDOR" },
  },
  {
    id: "symposium-2023",
    title: "CONDOR Symposium - First edition - Bordeaux 2023",
    date: "2023-09-22",
    image: { src: "/images/notre-cause/symposium-2023.jpg", alt: "Amphithéâtre du premier Symposium CONDOR à Bordeaux" },
  },
  {
    id: "membres-bordeaux",
    title: "Let's meet the #RHUCONDOR members from Bordeaux and Institut Bergonié oncologists!",
    date: "2023-09-22",
    image: { src: "/images/notre-cause/stand-bergonie.jpg", alt: "Stand d'information RHU CONDOR sous une tente" },
  },
  {
    id: "sarcomas",
    title: "What do you know about #sarcomas? ",
    date: "2023-09-22",
    image: { src: "/images/notre-cause/sab-members.jpg", alt: "Visuel des membres du comité scientifique (SAB) de CONDOR" },
  },
  {
    id: "publication-italiano",
    title: "We are pleased to share you the last publication of Prof. Italiano Antoine available in Journal of...",
    date: "2023-09-22",
    image: { src: "/images/notre-cause/sab-members.jpg", alt: "Visuel des membres du comité scientifique (SAB) de CONDOR" },
  },
  {
    id: "highly-cited-2023",
    title: "🏆 3 members of the CONDOR consortium have been recognized among the world's most...",
    date: "2023-09-22",
    image: { src: "/images/notre-cause/highly-cited-2023.jpg", alt: "Visuel « Highly Cited Researchers 2023 » avec le Pr A. Italiano" },
  },
];

/** Section "Plus de documentations" (2057:3545). */
export const documentationLinks = [
  { label: "gustaveroussy.fr", href: "https://www.gustaveroussy.fr" },
  { label: "centreleonberard.fr", href: "https://www.centreleonberard.fr" },
  { label: "expertisesarcome.org", href: "https://expertisesarcome.org" },
  { label: "cancerresearch.org", href: "https://www.cancerresearch.org" },
  { label: "sarcoma.org.uk", href: "https://sarcoma.org.uk" },
];
