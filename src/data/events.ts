import { links } from "@/lib/site";

export type EventStatus = "reminder" | "full" | "open";

export type CdppEvent = {
  id: string;
  /** Date ISO (YYYY-MM-DD) */
  date: string;
  title: string;
  price: string;
  status: EventStatus;
  /** Lien d'inscription (status "open") */
  href?: string;
  /** Événement phare (tampon logo CDPP) */
  featured?: boolean;
};

/** Liste "Nos prochains évènements" (maquette Accueil / L'événement / Contact). */
export const events: CdppEvent[] = [
  {
    id: "conference-sarcomes-2026",
    date: "2026-03-15",
    title: "Conférence, sensibilisation sur les sarcomes",
    price: "8 €",
    status: "reminder",
  },
  {
    id: "visite-hopitaux-2026",
    date: "2026-04-04",
    title: "Visite et animation hôpitaux",
    price: "Gratuit",
    status: "full",
  },
  {
    id: "course-petit-prince-2026",
    date: "2026-05-22",
    title: "La course du Petit Prince",
    price: "20 €",
    status: "open",
    href: links.register,
    featured: true,
  },
];
