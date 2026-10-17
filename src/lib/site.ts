/**
 * Configuration globale du site : arborescence (page "Arborescence" du Figma),
 * liens externes et informations de contact.
 */

export const site = {
  name: "La Course du Petit Prince",
  shortName: "CDPP",
  description:
    "Marches et trails nature en famille, dans la forêt du Bourgailh à Pessac. 100 % des dons et des fonds sont reversés à la recherche contre les sarcomes.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://coursedupetitprince.fr",
  /** Numéro de la maquette (fictif) — non affiché. Renseigner un vrai numéro puis le réajouter au footer si besoin. */
  phone: "",
  email: "coursedupetitprince@gmail.com",
  /** Siège social (registre RNA / SIRENE) */
  address: "20 avenue de Bretagne, 33600 Pessac",
  rna: "W332033684",
  siret: "923 923 247 00012",
  /** Date de la prochaine édition (jeudi de l'Ascension, à confirmer par l'association) — pilote le compte à rebours de l'accueil. */
  raceDate: "2027-05-06T09:00:00+02:00",
  /** Lieu de la course */
  venue: "Forêt du Bourgailh, Pessac (33)",
} as const;

/**
 * Liens externes (vérifiés en octobre 2026). Pas de compte Instagram / LinkedIn identifié :
 * en ajouter ici puis dans `footerNav` si l'association en a.
 */
export const links = {
  /** Page HelloAsso de l'association : dons, adhésion, boutique, cagnottes des défis */
  helloasso: "https://www.helloasso.com/associations/la-course-du-petit-prince-la-cdpp",
  donate: "https://www.helloasso.com/associations/la-course-du-petit-prince-la-cdpp",
  /** Inscriptions aux épreuves (chronométrage ProTiming) */
  register: "https://www.protiming.fr/events/8103-la-course-du-petit-prince",
  /** Cagnottes des défis des ambassadeurs */
  kitty: "https://www.helloasso.com/associations/la-course-du-petit-prince-la-cdpp",
  /** Boutique en ligne (commande / paiement) */
  shop: "https://www.helloasso.com/associations/la-course-du-petit-prince-la-cdpp",
  membership: "https://www.helloasso.com/associations/la-course-du-petit-prince-la-cdpp/adhesions/adhesion-2026-a-la-cdpp",
  /** Règlement de la course (PDF hébergé sur l'ancien site) */
  rules: "https://coursedupetitprince.fr/documents/CdPP%20-%20Reglement.pdf",
  results: "https://www.protiming.fr/events/8103-la-course-du-petit-prince",
  volunteerPlatform: "https://www.jeveuxaider.gouv.fr/organisations/32811-la-course-du-petit-prince-la-cdpp",
  facebook: "https://www.facebook.com/LaCourseDuPetitPrince",
  youtube: "https://www.youtube.com/playlist?list=PL_jPIoQvpY7-x8xpcMNWBPaJUpSxAvIM0",
} as const;

export const routes = {
  home: "/",
  event: "/evenement",
  cause: "/notre-cause",
  engage: "/s-engager",
  volunteers: "/s-engager/benevoles",
  partners: "/s-engager/partenaires",
  ambassadors: "/s-engager/ambassadeurs",
  shop: "/boutique",
  contact: "/contact",
  legal: "/mentions-legales",
  privacy: "/politique-de-confidentialite",
} as const;

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const mainNav: NavItem[] = [
  { label: "L'événement", href: routes.event },
  { label: "Notre cause", href: routes.cause },
  {
    label: "S'engager",
    href: routes.engage,
    children: [
      { label: "Devenir bénévole", href: routes.volunteers },
      { label: "Nos partenaires", href: routes.partners },
      { label: "Nos ambassadeurs", href: routes.ambassadors },
    ],
  },
  { label: "Boutique", href: routes.shop },
  { label: "Contact", href: routes.contact },
];

export const footerNav = [
  {
    title: "Liens",
    items: [
      { label: "Réserver son dossard", href: links.register, external: true },
      { label: "La cagnotte", href: links.kitty, external: true },
      { label: "Adhérer à la CdPP", href: links.membership, external: true },
      { label: "Règlement de la course", href: links.rules, external: true },
    ],
  },
  {
    title: "Nous contacter",
    items: [
      { label: site.email, href: `mailto:${site.email}`, external: true },
    ],
  },
  {
    title: "Réseaux sociaux",
    items: [
      { label: "Facebook", href: links.facebook, external: true },
      { label: "YouTube", href: links.youtube, external: true },
    ],
  },
  {
    title: "Mention légales",
    items: [
      { label: "Politique de confidentialité", href: routes.privacy, external: false },
      { label: "Conditions d'utilisation", href: routes.legal, external: false },
    ],
  },
];
