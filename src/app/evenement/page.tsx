import type { Metadata } from "next";
import Separator from "@/components/sections/Separator";
import PageHero from "@/components/sections/PageHero";
import Paragraphe from "@/components/sections/Paragraphe";
import EventsList, { EventRow } from "@/components/sections/EventsList";
import GalleryMosaic from "@/components/sections/GalleryMosaic";
import DonBanner from "@/components/sections/DonBanner";
import AlbumGrid from "@/components/evenement/AlbumGrid";
import ResultsList from "@/components/evenement/ResultsList";
import { events } from "@/data/events";
import { eventGallery } from "@/data/evenement";

export const metadata: Metadata = {
  title: "L'événement",
  description:
    "La Course du Petit Prince : marches et courses pédestres pour enfants (6-15 ans) et adultes dans la forêt du Bourgailh à Pessac. Albums photos, résultats et prochains évènements.",
};

/** Maquette "V1 - L'événement" (2063:14518). */
export default function EvenementPage() {
  const mainEvent = events.find((e) => e.featured) ?? events[0];

  return (
    <>
      <Separator />
      <PageHero
        title="L'événement"
        image={{
          src: "/images/evenement/hero.jpg",
          alt: "Coureurs au départ de la Course du Petit Prince",
          position: "50% 83%",
        }}
      />
      <Separator />
      <Paragraphe title="La course du Petit Prince">
        <p>
          Créée en 2022, la Course du Petit Prince propose des marches et des courses pédestres pour enfants (6-15 ans)
          et adultes, sur un circuit 100 % nature.
          <br />
          Tous les niveaux sont les bienvenus.
        </p>
      </Paragraphe>
      <Separator size="small" />
      {/* Ligne "événement" (2063:15025) */}
      <ul className="container" aria-label="Prochaine édition">
        <EventRow event={mainEvent} />
      </ul>
      <Separator />
      <Paragraphe title="La forêt du Bourgailh">
        <p>
          Véritable poumon vert de Pessac, la forêt du Bourgailh est un espace naturel préservé de plusieurs dizaines
          d&apos;hectares, sillonné de sentiers ombragés.
        </p>
        <p>
          Ce cadre 100 % nature, accessible et familial, accueille l&apos;ensemble des parcours de la course. Un terrain
          de jeu idéal pour se dépasser au grand air, loin de la ville, tout en respectant l&apos;environnement qui nous
          entoure.
        </p>
      </Paragraphe>
      <Separator />
      <AlbumGrid />
      <Separator size="small" />
      <GalleryMosaic id="galerie" images={eventGallery} label="Photos de l’évènement" />
      <Separator />
      <ResultsList />
      <Separator />
      <EventsList />
      <Separator />
      <DonBanner />
    </>
  );
}
