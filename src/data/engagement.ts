import { routes } from "@/lib/site";

/** Contenus des pages "S'engager" et sous-pages (textes repris de la maquette Figma). */

export type EngagementWay = { title: string; text: string; href: string };

/** Section "Les façons d'aider" (2060:9034) — cartes card-engagement vers les sous-pages. */
export const engagementWays: EngagementWay[] = [
  {
    title: "Devenir bénévole",
    text: "Donnez quelques heures et vivez l'événement de l'intérieur, dans une ambiance familiale et solidaire.",
    href: routes.volunteers,
  },
  {
    title: "Devenir partenaire",
    text: "Associez votre organisation à un événement local porteur de sens et soutenez directement la recherche.",
    href: routes.partners,
  },
  {
    title: "Devenir ambassadeur",
    text: "Portez nos couleurs sur vos défis sportifs et transformez chaque kilomètre en soutien concret.",
    href: routes.ambassadors,
  },
];

/** Section "Participer en 3 étapes" (2060:7435). */
export const participationSteps: string[] = [
  "Je choisis. Course enfant, marche familiale ou trail de 7 ou 17 km : vous sélectionnez l'épreuve et la catégorie qui vous correspondent.",
  "Je m'inscris. En quelques clics, en ligne via HelloAsso. Vous recevez votre confirmation et toutes les infos pratiques directement par e-mail.",
  "Je cours, je donne. Le jour J, vous profitez d'une journée nature et conviviale dans la forêt du Bourgailh et 100 % de votre participation part à la recherche.",
];

export type Mission = { title: string; text: string };

/** Section "Les missions" (2060:9121) — cartes card-engagement type "mission". */
export const volunteerMissions: Mission[] = [
  { title: "Accueil & dossards", text: "Accueillir les participants, remettre les dossards et renseigner le public." },
  {
    title: "Devenir partenaire",
    text: "Associez votre organisation à un événement local porteur de sens et soutenez directement la recherche.",
  },
  { title: "Balisage & signaleurs", text: "Installer le balisage et guider les coureurs en sécurité sur les sentiers." },
  { title: "Sécurité & secours", text: "Veiller au bon déroulé des épreuves, en lien avec les secouristes." },
  {
    title: "Village & animations",
    text: "Animer les stands, les activités enfants et la buvette tout au long de la journée.",
  },
  { title: "Logistique", text: "Aider au montage, au démontage et au transport du matériel." },
  { title: "Photo & communication", text: "Immortaliser l'événement et alimenter nos réseaux et la galerie." },
];

export type AmbassadorChallenge = {
  tag: string;
  title: string;
  text: string;
  image: { src: string; alt: string; position?: string };
};

/** Section "Leurs défis" (2060:14435) — cartes card-ambassadeur. Images : figma-assets/ambassadeurs.json */
export const ambassadorChallenges: AmbassadorChallenge[] = [
  {
    tag: "Raid",
    title: "Le Corsicaraid fémina",
    text: "Jennifer & Pauline · raid multisport en Corse.",
    image: { src: "/images/ambassadeurs/corsicaraid.jpg", alt: "Jennifer et Pauline aux couleurs de la Course du Petit Prince" },
  },
  {
    tag: "Ultra-trail",
    title: "Le TOR330",
    text: "Grégory · 330 km dans les Alpes valdôtaines.",
    image: { src: "/images/ambassadeurs/tor330.jpg", alt: "Grégory, ambassadeur de la Course du Petit Prince" },
  },
  {
    tag: "Désert",
    title: "Marathon des Sables",
    text: "Sylvain · l'ultra mythique en autosuffisance.",
    image: {
      src: "/images/ambassadeurs/marathon-des-sables.jpg",
      alt: "Sylvain sur une piste d'athlétisme",
      position: "50% 0%",
    },
  },
  {
    tag: "Trail",
    title: "Grand Raid des Pyrénées",
    text: "Alli · l'un des trails les plus exigeants de France.",
    image: { src: "/images/ambassadeurs/grand-raid-pyrenees.jpg", alt: "Départ du Grand Raid des Pyrénées" },
  },
  {
    tag: "Marathon",
    title: "Marathon de Rome",
    text: "Romain · 42,195 km au cœur de la ville éternelle.",
    image: {
      src: "/images/ambassadeurs/marathon-rome.jpg",
      alt: "Romain franchit la ligne du marathon de Rome avec le t-shirt de la Course du Petit Prince",
      position: "50% 15%",
    },
  },
  {
    tag: "Marathon",
    title: "Marathon de Biarritz",
    text: "Amandine · sur la côte basque, pour la cause.",
    image: {
      src: "/images/ambassadeurs/marathon-biarritz.jpg",
      alt: "Amandine en course au marathon de Biarritz",
      position: "50% 25%",
    },
  },
];
