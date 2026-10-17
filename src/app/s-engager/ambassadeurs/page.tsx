import type { Metadata } from "next";
import DonBanner from "@/components/sections/DonBanner";
import PageHero from "@/components/sections/PageHero";
import Paragraphe from "@/components/sections/Paragraphe";
import PartnersStrip from "@/components/sections/PartnersStrip";
import Separator from "@/components/sections/Separator";
import AmbassadorChallenges from "@/components/s-engager/AmbassadorChallenges";
import FormSection from "@/components/s-engager/FormSection";

export const metadata: Metadata = {
  title: "Nos ambassadeurs",
  description:
    "Marathon, raid, ultra-trail, expédition : nos ambassadeurs dédient leurs défis sportifs à la recherche contre les sarcomes. Proposez le vôtre !",
};

/** Maquette "S'engager -> Ambassadeurs" (2060:8101). */
export default function AmbassadorsPage() {
  return (
    <>
      <Separator />
      <PageHero
        title="Nos ambassadeurs"
        image={{
          src: "/images/ambassadeurs/hero.jpg",
          alt: "Ambassadeurs de la Course du Petit Prince",
          position: "50% 8%",
        }}
      />
      <Separator />
      <Paragraphe title="Porter nos couleurs, partout">
        {/* Les deux paragraphes de la maquette sont quasi identiques : à faire relire par le client. */}
        <p>
          Coureurs, marcheurs, traileurs ou aventuriers, nos ambassadeurs relèvent leurs propres défis sportifs un
          marathon, un raid, un ultra-trail, une expédition en dédiant leur effort à notre cause.
        </p>
        <p>
          Coureurs, marcheurs, traileurs ou aventuriers, nos ambassadeurs relèvent leurs propres défis sportifs — un
          marathon, un raid, un ultra-trail, une expédition — en dédiant leur effort à notre cause.
        </p>
      </Paragraphe>
      <Separator />
      <AmbassadorChallenges />
      <Separator />
      <FormSection
        id="proposer-un-defi"
        title="Un défi en tête ?"
        formName="ambassadeurs"
        successTitle="Merci, votre défi nous intéresse !"
        successMessage="Nous revenons vers vous très vite pour en parler et vous accompagner."
      />
      <Separator />
      <PartnersStrip />
      <Separator />
      <DonBanner />
    </>
  );
}
