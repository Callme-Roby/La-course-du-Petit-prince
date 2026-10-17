import type { Metadata } from "next";
import Separator from "@/components/sections/Separator";
import PageHero from "@/components/sections/PageHero";
import Button from "@/components/ui/Button";
import { routes } from "@/lib/site";

export const metadata: Metadata = {
  title: "Page introuvable",
};

/** Maquette "V1 - 404" (2081:6716). */
export default function NotFound() {
  return (
    <>
      <Separator />
      <PageHero
        title="La page est introuvable."
        image={{ src: "/images/404/hero.jpg", alt: "Coureurs sur les sentiers de la forêt du Bourgailh" }}
      />
      <Separator size="small" />
      <div className="container" style={{ display: "flex", justifyContent: "center" }}>
        <Button href={routes.home}>Retour à la page d’accueil</Button>
      </div>
      <Separator />
    </>
  );
}
