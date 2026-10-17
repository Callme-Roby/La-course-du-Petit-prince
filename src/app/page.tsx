import type { Metadata } from "next";
import ArticleCard from "@/components/cause/ArticleCard";
import CarouselSection from "@/components/home/CarouselSection";
import CtaSection from "@/components/home/CtaSection";
import GallerySection from "@/components/home/GallerySection";
import HomeHero from "@/components/home/HomeHero";
import KpiSection from "@/components/home/KpiSection";
import RaceCards from "@/components/home/RaceCards";
import DonBanner from "@/components/sections/DonBanner";
import EventsList from "@/components/sections/EventsList";
import Paragraphe from "@/components/sections/Paragraphe";
import PartnersStrip from "@/components/sections/PartnersStrip";
import Separator from "@/components/sections/Separator";
import ProductCard from "@/components/shop/ProductCard";
import { condorArticles } from "@/data/cause";
import { products } from "@/data/products";
import { routes, site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: `${site.name} — Courir pour la recherche contre les sarcomes` },
  description: site.description,
};

/** Régénère la page toutes les heures : la bande "compte à rebours" disparaît une fois la course passée. */
export const revalidate = 3600;

/** Maquette "V1 - Accueil" (2020:898). */
export default function HomePage() {
  const raceUpcoming = new Date(site.raceDate).getTime() > Date.now();

  return (
    <>
      <HomeHero raceDate={raceUpcoming ? site.raceDate : undefined} />
      <Separator />
      <Paragraphe
        title={
          <>
            La CDPP est une association <br />
            dédiée à la recherche <br />
            contre les sarcomes
          </>
        }
      >
        <p>
          Les sarcomes représentent 15% des cancers de l&apos;enfant et du jeune adulte. Des cancers rares et
          agressifs, longtemps oubliés par la recherche.
        </p>
        <p>
          Chaque dossard, chaque don finance le programme national RHU CONDOR de l&apos;Institut Bergonié avec une
          promesse simple : transparence, efficience, traçabilité.
        </p>
      </Paragraphe>
      <Separator />
      <KpiSection />
      <Separator />
      <CtaSection />
      <Separator />
      <RaceCards />
      <Separator />
      <EventsList />
      <Separator />
      <CarouselSection id="shop" title="Notre boutique" allHref={routes.shop}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </CarouselSection>
      <Separator />
      <GallerySection />
      <Separator />
      <CarouselSection
        id="articles"
        title={
          <>
            Les derniers articles <br />
            du laboratoire RHU CONDOR
          </>
        }
        allHref={routes.cause}
      >
        {condorArticles.slice(0, 8).map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </CarouselSection>
      <Separator />
      <PartnersStrip />
      <Separator />
      <DonBanner />
    </>
  );
}
