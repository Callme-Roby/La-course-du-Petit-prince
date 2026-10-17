/**
 * Catalogue de la boutique (maquette "V1 - Boutique" 2055:9168, carrousel de l'accueil 2055:6059).
 * Fichiers images : figma-assets/boutique.json
 */

export type ProductCategory = "pins" | "porte-cles" | "decoration";

export type Product = {
  id: string;
  name: string;
  category: ProductCategory;
  /** Prix en euros */
  price: number;
  /** Stock restant */
  stock: number;
  image: { src: string; alt: string; position?: string };
};

export const productCategories: { id: ProductCategory | "all"; label: string }[] = [
  { id: "all", label: "Tout" },
  { id: "pins", label: "Pin’s" },
  { id: "porte-cles", label: "Porte-clés" },
  { id: "decoration", label: "Décorations" },
];

export const products: Product[] = [
  {
    id: "pins-2026",
    name: "Pin’s Petit Prince CdPP 2026",
    category: "pins",
    price: 3.5,
    stock: 15,
    image: { src: "/images/boutique/pins-2026.jpg", alt: "Pin’s émaillé : le Petit Prince assis sur un croissant de lune" },
  },
  {
    id: "pins-2025",
    name: "Pin’s Petit Prince CdPP 2025",
    category: "pins",
    price: 3.5,
    stock: 9,
    image: { src: "/images/boutique/pins-2025.jpg", alt: "Pin’s émaillé : le Petit Prince dans un avion rouge" },
  },
  {
    id: "pins-2024",
    name: "Pin’s Petit Prince CdPP 2024",
    category: "pins",
    price: 3.5,
    stock: 14,
    image: { src: "/images/boutique/pins-2024.jpg", alt: "Pin’s émaillé : le Petit Prince devant une rose bleue" },
  },
  {
    id: "pins-2023",
    name: "Pin’s Petit Prince CdPP 2023",
    category: "pins",
    price: 3.5,
    stock: 3,
    image: { src: "/images/boutique/pins-2023.jpg", alt: "Pin’s émaillé : le Petit Prince debout sur sa planète" },
  },
  {
    id: "porte-cles",
    name: "Porte-clés CdPP",
    category: "porte-cles",
    price: 5.5,
    stock: 15,
    image: { src: "/images/boutique/porte-cles.jpg", alt: "Porte-clés rond au logo de la Course du Petit Prince", position: "50% 89%" },
  },
  {
    id: "petit-prince-rose",
    name: "Petit Prince et la rose 80mm x 75mm",
    category: "decoration",
    price: 4,
    stock: 9,
    image: { src: "/images/boutique/petit-prince-rose.jpg", alt: "Silhouette dorée du Petit Prince et de la rose" },
  },
  {
    id: "petit-prince-renard",
    name: "Petit Prince et le renard doré 90mm x 130mm",
    category: "decoration",
    price: 5,
    stock: 14,
    image: { src: "/images/boutique/petit-prince-renard.jpg", alt: "Silhouette dorée du Petit Prince et du renard sous les étoiles" },
  },
  {
    id: "petit-prince-avion",
    name: "Petit Prince, le Renard et l'avion doré",
    category: "decoration",
    price: 6,
    stock: 3,
    image: { src: "/images/boutique/petit-prince-avion.jpg", alt: "Silhouette dorée du Petit Prince, du renard et de l’avion" },
  },
  {
    id: "ombre-rose",
    name: "Ombre du Petit Prince et la Rose 80mm x 75mm",
    category: "decoration",
    price: 4,
    stock: 15,
    image: { src: "/images/boutique/ombre-rose.jpg", alt: "Ombre portée du Petit Prince et de la rose" },
  },
  {
    id: "ombre-renard",
    name: "Ombre du Petit Prince et le renard 90mm x 130mm",
    category: "decoration",
    price: 5,
    stock: 9,
    image: { src: "/images/boutique/ombre-renard.jpg", alt: "Ombre portée du Petit Prince et du renard sous les étoiles" },
  },
];
