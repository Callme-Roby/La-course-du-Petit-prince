"use client";

import { useState } from "react";
import SectionHeader from "@/components/sections/SectionHeader";
import Button from "@/components/ui/Button";
import { productCategories, products, type ProductCategory } from "@/data/products";
import ProductCard from "./ProductCard";
import styles from "./ShopCatalog.module.css";

/** Section "Le catalogue" (2055:9168) : filtres par catégorie + grille de cartes produit. */
export default function ShopCatalog() {
  const [category, setCategory] = useState<ProductCategory | "all">("all");
  const visible = category === "all" ? products : products.filter((p) => p.category === category);

  return (
    <section className={`container ${styles.section}`} aria-labelledby="catalog-title">
      <SectionHeader
        id="catalog-title"
        title="Le catalogue"
        actions={
          <div className={styles.filters} role="group" aria-label="Filtrer par catégorie">
            {productCategories.map((c) => (
              <Button
                key={c.id}
                variant={category === c.id ? "primary" : "secondary"}
                tone="dark"
                aria-pressed={category === c.id}
                onClick={() => setCategory(c.id)}
              >
                {c.label}
              </Button>
            ))}
          </div>
        }
      />
      <p className="visually-hidden" aria-live="polite">
        {visible.length} produit{visible.length > 1 ? "s" : ""} affiché{visible.length > 1 ? "s" : ""}
      </p>
      <ul className={styles.grid}>
        {visible.map((product) => (
          <li key={product.id}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </section>
  );
}
