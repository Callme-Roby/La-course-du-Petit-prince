import type { Metadata } from "next";
import Separator from "@/components/sections/Separator";
import PageHero from "@/components/sections/PageHero";
import EventsList from "@/components/sections/EventsList";
import PartnersStrip from "@/components/sections/PartnersStrip";
import DonBanner from "@/components/sections/DonBanner";
import ContactForm from "@/components/contact/ContactForm";
import Faq from "@/components/contact/Faq";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez l'équipe de la Course du Petit Prince : formulaire de contact et réponses aux questions fréquentes (inscriptions, épreuves, dossards, accès…).",
};

/** Maquette "V1 - Contact" (2055:9696). */
export default function ContactPage() {
  return (
    <>
      <Separator />
      <PageHero
        title="Nous contacter"
        image={{
          src: "/images/contact/hero.jpg",
          alt: "Un coureur franchit l'arrivée main dans la main avec deux participantes",
          position: "50% 45%",
        }}
      />
      <Separator />
      <ContactForm />
      <Separator />
      <Faq />
      <Separator />
      <EventsList />
      <Separator />
      <PartnersStrip />
      <Separator />
      <DonBanner />
    </>
  );
}
