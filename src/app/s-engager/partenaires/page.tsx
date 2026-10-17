import type { Metadata } from "next";
import DonBanner from "@/components/sections/DonBanner";
import PageHero from "@/components/sections/PageHero";
import Paragraphe from "@/components/sections/Paragraphe";
import Separator from "@/components/sections/Separator";
import FormSection from "@/components/s-engager/FormSection";
import PartnerCategories from "@/components/s-engager/PartnerCategories";

export const metadata: Metadata = {
  title: "Nos partenaires",
  description:
    "Entreprises, commerces et institutions soutiennent la Course du Petit Prince. Devenez partenaire : 100 % des fonds collectés sont reversés à la recherche contre les sarcomes.",
};

/** Maquette "S'engager -> Partenaires" (2060:7777). */
export default function PartnersPage() {
  return (
    <>
      <Separator />
      <PageHero
        title="Nos partenaires"
        image={{
          src: "/images/partenaires/hero.jpg",
          alt: "Coureurs et partenaires lors de la Course du Petit Prince",
          position: "50% 44%",
        }}
      />
      <Separator />
      <Paragraphe title="Pourquoi nous soutenir ?">
        <p>
          Soutenir la Course du Petit Prince, c&apos;est associer votre image à une manifestation qui rassemble chaque
          année participants, familles et bénévoles autour de Pessac.
        </p>
        <p>
          C&apos;est surtout inscrire votre engagement dans une démarche concrète : 100 % des fonds collectés sont
          reversés à la recherche contre les sarcomes. Pour une entreprise, c&apos;est une façon forte de donner du sens
          à sa politique RSE, de fédérer ses équipes et de renforcer son ancrage local.
        </p>
      </Paragraphe>
      <Separator />
      <PartnerCategories />
      {/* La maquette n'a pas de séparateur ici (oubli probable) : ajouté pour aérer. */}
      <Separator />
      <FormSection
        id="devenir-partenaire"
        title={
          <>
            Construisons un partenariat <br />à votre image
          </>
        }
        formName="partenaires"
        successTitle="Merci pour votre intérêt !"
        successMessage="Nous revenons vers vous très vite pour construire ensemble votre partenariat."
      />
      <Separator />
      <DonBanner />
    </>
  );
}
