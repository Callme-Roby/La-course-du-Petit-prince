export type Partner = {
  name: string;
  logo: string;
  width: number;
  height: number;
  href?: string;
  /** Logo clair (blanc) : à afficher sur un fond sombre. */
  onDark?: boolean;
};

/** Logos du carrousel "Nos partenaires" (2055:5722), extraits de la maquette Figma. */
export const partners: Partner[] = [
  { name: "Institut Bergonié", logo: "/images/partners/bergonie.png", width: 115, height: 64 },
  { name: "RHU CONDOR", logo: "/images/partners/condor.png", width: 115, height: 89 },
  { name: "Ville de Pessac", logo: "/images/partenaires/ville-de-pessac.png", width: 230, height: 88 },
  { name: "Crédit Mutuel du Sud-Ouest", logo: "/images/partenaires/credit-mutuel-du-sud-ouest.png", width: 230, height: 54 },
  { name: "Région Nouvelle-Aquitaine", logo: "/images/partenaires/region-nouvelle-aquitaine.png", width: 230, height: 230 },
  { name: "Les Abatilles", logo: "/images/partenaires/les-abatilles.png", width: 230, height: 230 },
];
