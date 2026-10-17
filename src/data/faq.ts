import { routes } from "@/lib/site";

export type FaqItem = {
  question: string;
  answer: string;
  /** Lien optionnel affiché après la réponse. */
  link?: { label: string; href: string };
};

/**
 * Section "Foire aux questions" (2057:5058).
 * Seule la réponse n°1 figure dans la maquette (variante "state=open").
 * Les autres réponses sont rédigées à partir des contenus du site ; celles marquées
 * [À COMPLÉTER] attendent les informations de l'association.
 */
export const faq: FaqItem[] = [
  {
    question: "Comment s'inscrire à la course ?",
    answer:
      "Les inscriptions se font en ligne via HelloAsso, depuis le bouton « Réserver son dossard ».  Vous choisissez votre épreuve, réglez votre inscription et recevez votre confirmation par e-mail.",
  },
  {
    question: "Quelles épreuves sont proposées ?",
    answer:
      "Des courses pour les enfants de 6 à 15 ans, des marches et deux trails de 7 km et 17 km, sur un circuit 100 % nature dans la forêt du Bourgailh.",
    link: { label: "Découvrir l'événement", href: routes.event },
  },
  {
    question: "Quels sont les tarifs d'inscription ?",
    answer:
      "Le tarif de chaque épreuve est indiqué sur la page d'inscription HelloAsso. [À COMPLÉTER : détail des tarifs par épreuve]",
  },
  {
    question: "À partir de quel âge les enfants peuvent-ils participer ?",
    answer:
      "Les courses enfants sont ouvertes dès 6 ans et jusqu'à 15 ans. Les marches sont accessibles à toute la famille.",
  },
  {
    question: "Un certificat médical est-il obligatoire ?",
    answer:
      "[À COMPLÉTER : conditions de certificat médical / licence / PPS pour les trails chronométrés, et règles pour les marches et courses enfants.]",
  },
  {
    question: "Où et quand retirer mon dossard ?",
    answer: "[À COMPLÉTER : lieu, jours et horaires du retrait des dossards, pièces à présenter.]",
  },
  {
    question: "Comment venir et se garer ?",
    answer:
      "La course se déroule dans la forêt du Bourgailh, à Pessac. [À COMPLÉTER : adresse exacte, parkings, accès en transports en commun.]",
  },
  {
    question: "Que se passe-t-il en cas de mauvais temps ?",
    answer:
      "La course a lieu par tous les temps : pensez à prévoir une tenue adaptée. [À COMPLÉTER : conditions d'annulation ou de report en cas d'alerte météo.]",
  },
  {
    question: "Où va l'argent récolté ?",
    answer: "100 % des dons et des fonds récoltés sont reversés à la recherche contre les sarcomes.",
    link: { label: "Découvrir notre cause", href: routes.cause },
  },
  {
    question: "Comment devenir bénévole, partenaire ou ambassadeur ?",
    answer:
      "Rendez-vous sur la page « S'engager » : vous y trouverez toutes les façons de rejoindre l'aventure, comme bénévole, partenaire ou ambassadeur.",
    link: { label: "S'engager", href: routes.engage },
  },
];
