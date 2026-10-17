import type { Metadata } from "next";
import DonBanner from "@/components/sections/DonBanner";
import PageHero from "@/components/sections/PageHero";
import Paragraphe from "@/components/sections/Paragraphe";
import Separator from "@/components/sections/Separator";
import ParticipationSteps from "@/components/s-engager/ParticipationSteps";
import WaysToHelp from "@/components/s-engager/WaysToHelp";

export const metadata: Metadata = {
  title: "S'engager",
  description:
    "Courir, faire un don, devenir bénévole, partenaire ou ambassadeur : toutes les façons de soutenir la Course du Petit Prince et la recherche contre les sarcomes.",
};

/** Maquette "S'engager" (2055:7544). */
export default function EngagePage() {
  return (
    <>
      <Separator />
      <PageHero
        title="S'engager"
        image={{ src: "/images/s-engager/hero.jpg", alt: "Participants de la Course du Petit Prince dans la forêt du Bourgailh" }}
      />
      <Separator />
      <Paragraphe title="Les façons d'aider">
        <p>
          Courir, c&apos;est déjà beaucoup. Mais vous pouvez aussi faire un don sans courir, donner de votre temps comme
          bénévole, soutenir l&apos;événement en tant que partenaire, ou porter nos couleurs lors de vos propres défis.
        </p>
        <p>
          Quelle que soit la forme choisie, votre engagement se transforme en moyens supplémentaires pour la recherche
          contre les sarcomes.
        </p>
      </Paragraphe>
      <Separator />
      <WaysToHelp />
      <Separator />
      <ParticipationSteps />
      <Separator />
      <DonBanner />
    </>
  );
}
