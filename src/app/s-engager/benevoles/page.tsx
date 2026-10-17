import type { Metadata } from "next";
import DonBanner from "@/components/sections/DonBanner";
import PageHero from "@/components/sections/PageHero";
import Paragraphe from "@/components/sections/Paragraphe";
import PartnersStrip from "@/components/sections/PartnersStrip";
import Separator from "@/components/sections/Separator";
import FormSection from "@/components/s-engager/FormSection";
import MissionsGrid from "@/components/s-engager/MissionsGrid";

export const metadata: Metadata = {
  title: "Devenir bénévole",
  description:
    "Accueil, balisage, sécurité, village, logistique, photo : rejoignez l'équipe des bénévoles de la Course du Petit Prince et aidez à faire reculer les sarcomes.",
};

/** Maquette "S'engager -> Bénévoles" (2060:7453). */
export default function VolunteersPage() {
  return (
    <>
      <Separator />
      <PageHero
        title="Devenir bénévole"
        image={{
          src: "/images/benevoles/hero.jpg",
          alt: "Bénévoles de la Course du Petit Prince",
          position: "50% 27%",
        }}
      />
      <Separator />
      <Paragraphe title="Pourquoi devenir bénévole">
        <p>
          Ce sont les bénévoles qui accueillent les coureurs au petit matin, balisent les sentiers, distribuent les
          ravitaillements et font vivre le village toute la journée.
        </p>
        <p>
          Pas besoin d&apos;expérience ni d&apos;être sportif : il y a une mission pour chacun, selon vos envies et vos
          disponibilités. En rejoignant l&apos;équipe, vous vivez l&apos;événement de l&apos;intérieur, vous rencontrez
          des gens formidables, et vous contribuez très concrètement à faire reculer les sarcomes.
        </p>
      </Paragraphe>
      <Separator />
      <MissionsGrid />
      <Separator />
      <FormSection
        id="candidature"
        title="Prêt à rejoindre l’aventure ?"
        formName="benevoles"
        successTitle="Merci pour votre candidature !"
        successMessage="L’équipe des bénévoles vous recontacte très vite pour trouver la mission qui vous correspond."
      />
      <Separator />
      <PartnersStrip />
      <Separator />
      <DonBanner />
    </>
  );
}
