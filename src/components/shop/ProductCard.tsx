import Media from "@/components/ui/Media";
import type { Product } from "@/data/products";
import { links } from "@/lib/site";
import styles from "./ProductCard.module.css";

/** Décimales seulement si nécessaire : 3.50 / 4 / 5.50, comme dans la maquette */
function formatPrice(price: number) {
  return Number.isInteger(price) ? String(price) : price.toFixed(2);
}

type ProductCardProps = {
  product: Product;
  /** Lien de commande. Pas de panier côté site : la commande se fait sur la boutique HelloAsso. */
  href?: string;
  sizes?: string;
};

/** Composant Figma "card-boutique" (2043:3896) : visuel 446×292, nom, stock, prix. */
export default function ProductCard({
  product,
  href = links.shop,
  sizes = "(max-width: 560px) 85vw, (max-width: 900px) 45vw, (max-width: 1280px) 30vw, 446px",
}: ProductCardProps) {
  const { name, price, stock, image } = product;
  return (
    <article className={styles.card}>
      <a href={href} target="_blank" rel="noopener noreferrer" className={styles.link}>
        <Media src={image.src} alt={image.alt} position={image.position} className={styles.image} sizes={sizes} />
        <div className={styles.body}>
          <div className={styles.text}>
            <h3 className={`p-s ${styles.name}`}>{name}</h3>
            <p className={`p-xs ${styles.stock}`}>
              {stock > 0 ? `${stock} produit${stock > 1 ? "s" : ""} restant${stock > 1 ? "s" : ""}` : "Épuisé"}
            </p>
          </div>
          <p className={`p-s ${styles.price}`}>
            {formatPrice(price)} €<span className="visually-hidden"> — commander sur la boutique en ligne (nouvel onglet)</span>
          </p>
        </div>
      </a>
    </article>
  );
}
