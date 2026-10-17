export type Partner = {
  name: string;
  logo: string;
  width: number;
  height: number;
  href?: string;
};

/** Logos du carrousel "Nos partenaires" (2055:5722). Fichiers : figma-assets/shared.json */
export const partners: Partner[] = [
  { name: "Institut Bergonié", logo: "/images/partners/bergonie.png", width: 115, height: 64 },
  { name: "RHU CONDOR", logo: "/images/partners/condor.png", width: 115, height: 89 },
  { name: "Ville de Pessac", logo: "/images/partners/pessac.svg", width: 115, height: 44 },
  { name: "Crédit Mutuel du Sud-Ouest", logo: "/images/partners/credit-mutuel-sud-ouest.png", width: 115, height: 116 },
  { name: "Région Nouvelle-Aquitaine", logo: "/images/partners/region-nouvelle-aquitaine.svg", width: 115, height: 115 },
  { name: "Les Abatilles", logo: "/images/partners/abatilles.png", width: 115, height: 115 },
];
