import type { Metadata } from "next";
import DonBanner from "@/components/sections/DonBanner";
import PageHero from "@/components/sections/PageHero";
import Paragraphe from "@/components/sections/Paragraphe";
import PartnersStrip from "@/components/sections/PartnersStrip";
import Separator from "@/components/sections/Separator";
import ShopCatalog from "@/components/shop/ShopCatalog";

export const metadata: Metadata = {
  title: "Boutique",
  description:
    "Pin’s, porte-clés et silhouettes du Petit Prince : chaque achat dans la boutique de la CDPP finance la recherche contre les sarcomes.",
};

/** Maquette "V1 - Boutique" (2055:9138). */
export default function BoutiquePage() {
  return (
    <>
      <Separator />
      <PageHero
        title="Notre boutique"
        image={{
          src: "/images/boutique/hero.jpg",
          alt: "Peloton de coureurs sur la route au départ de la Course du Petit Prince",
          position: "50% 44%",
        }}
      />
      <Separator />
      <ShopCatalog />
      <Separator />
      <Paragraphe title="Où vont les fonds de la boutique ?">
        <p>
          Acheter un pin&apos;s, un t-shirt ou une gourde, ce n&apos;est pas seulement repartir avec un souvenir :
          c&apos;est financer la recherche. La boutique est gérée par l&apos;association à but non lucratif, et
          l&apos;intégralité des bénéfices nets une fois déduit le coût de fabrication des produits est reversée à la
          même cause que les inscriptions et les dons.
        </p>
        <p>
          Ces fonds rejoignent le programme national RHU CONDOR de l&apos;Institut Bergonié, dédié à la recherche sur
          les sarcomes. Comme pour le reste de l&apos;événement, nous appliquons nos trois principes : transparence (un
          bilan des sommes reversées est publié chaque année), efficience (les fonds vont directement à la recherche)
          et traçabilité (nous rendons compte des avancées obtenues). Chaque achat, même modeste, compte : mis bout à
          bout, ils font une vraie différence.
        </p>
      </Paragraphe>
      <Separator />
      <PartnersStrip />
      <Separator />
      <DonBanner />
    </>
  );
}
