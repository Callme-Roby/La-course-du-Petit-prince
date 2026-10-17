import type { Metadata } from "next";
import Separator from "@/components/sections/Separator";
import PageHero from "@/components/sections/PageHero";
import Paragraphe from "@/components/sections/Paragraphe";
import PartnersStrip from "@/components/sections/PartnersStrip";
import DonBanner from "@/components/sections/DonBanner";
import CondorNews from "@/components/cause/CondorNews";
import DocumentationList from "@/components/cause/DocumentationList";

export const metadata: Metadata = {
  title: "Notre cause",
  description:
    "La Course du Petit Prince soutient le programme RHU CONDOR de l'Institut Bergonié, dédié à la médecine de précision et à l'immunothérapie des sarcomes.",
};

/** Maquette "V1 - Notre cause" (2055:6987). */
export default function NotreCausePage() {
  return (
    <>
      <Separator />
      <PageHero
        title="Notre cause"
        image={{
          src: "/images/notre-cause/hero.jpg",
          alt: "Deux coureurs franchissent l'arche d'arrivée main dans la main",
          position: "50% 32%",
        }}
      />
      <Separator />
      <Paragraphe id="rhu-condor" title="Le programme RHU CONDOR">
        <p>
          Derrière chaque dossier de la Course du Petit Prince, il y a un bénéficiaire unique : le programme RHU
          CONDOR, dédié à la médecine de précision et à l&apos;immunothérapie des sarcomes
        </p>
        <p>
          Porté par l&apos;Institut Bergonié à Bordeaux, sous la direction du Pr Antoine Italiano, CONDOR a été
          sélectionné parmi les lauréats nationaux du 5ᵉ appel à projets de Recherche Hospitalo-Universitaire en
          santé (RHU). D&apos;un budget global de près de 30 millions d&apos;euros, dont environ 10 millions de
          financement public, il réunit trois centres experts des sarcomes l&apos;Institut Bergonié, Gustave Roussy
          et le Centre Léon Bérard aux côtés de l&apos;Inserm et de plusieurs entreprises françaises de
          biotechnologie.
        </p>
      </Paragraphe>
      <Separator />
      <Paragraphe id="objectif" title="Son objectif">
        <p>
          Transformer la prise en charge des sarcomes des tissus mous, des tumeurs rares et hétérogènes qui
          représentent 1 % des cancers de l&apos;adulte mais 15 % des cancers de l&apos;enfant et du jeune adulte.
          Aujourd&apos;hui encore, malgré une chirurgie adaptée, près de 40 % des patients développent une récidive.
        </p>
        <p>
          Pour changer cela, CONDOR explore trois leviers : mieux comprendre le microenvironnement de la tumeur,
          mobiliser l&apos;intelligence artificielle pour analyser les données, et développer des immunothérapies
          réellement efficaces.
          <br />
          En soutenant la course, vous financez directement cette recherche et l&apos;espoir de nouveaux traitements
          pour celles et ceux qui en manquent le plus.
        </p>
      </Paragraphe>
      <Separator />
      <CondorNews />
      <Separator />
      <DocumentationList />
      <Separator />
      <PartnersStrip />
      <Separator />
      <DonBanner />
    </>
  );
}
