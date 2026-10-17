/**
 * Configuration globale du site : arborescence (page "Arborescence" du Figma),
 * liens externes et informations de contact.
 */

export const site = {
  name: "La Course du Petit Prince",
  shortName: "CDPP",
  description:
    "Marches et trails nature en famille, dans la forêt du Bourgailh à Pessac. 100 % des dons et des fonds sont reversés à la recherche contre les sarcomes.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://lacoursedupetitprince.fr",
  phone: "06 15 16 17 18",
  email: "contact@lacoursedupetitprince.fr",
  /** Date de la prochaine édition — pilote le compte à rebours de l'accueil. */
  raceDate: "2026-05-22T09:00:00+02:00",
} as const;

/**
 * Liens externes. À remplacer par les vraies URLs (HelloAsso, réseaux sociaux…).
 */
export const links = {
  donate: "https://www.helloasso.com/associations/la-course-du-petit-prince",
  register: "https://www.helloasso.com/associations/la-course-du-petit-prince",
  kitty: "https://www.helloasso.com/associations/la-course-du-petit-prince",
  /** Boutique en ligne (commande / paiement) — à remplacer par l'URL HelloAsso de la boutique. */
  shop: "https://www.helloasso.com/associations/la-course-du-petit-prince",
  linkedin: "https://www.linkedin.com/",
  instagram: "https://www.instagram.com/",
  facebook: "https://www.facebook.com/",
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
    ],
  },
  {
    title: "Nous contacter",
    items: [{ label: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}`, external: false }],
  },
  {
    title: "Réseaux sociaux",
    items: [
      { label: "LinkedIn", href: links.linkedin, external: true },
      { label: "Instagram", href: links.instagram, external: true },
      { label: "Facebook", href: links.facebook, external: true },
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
