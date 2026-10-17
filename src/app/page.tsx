import DonBanner from "@/components/sections/DonBanner";
import EventsList from "@/components/sections/EventsList";
import PartnersStrip from "@/components/sections/PartnersStrip";
import Separator from "@/components/sections/Separator";

export default function HomePage() {
  return (
    <>
      <Separator />
      <EventsList />
      <Separator />
      <PartnersStrip />
      <Separator />
      <DonBanner />
    </>
  );
}
