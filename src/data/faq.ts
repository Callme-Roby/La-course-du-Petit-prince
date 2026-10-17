import { links, routes } from "@/lib/site";

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
      "Les inscriptions se font en ligne sur ProTiming, depuis le bouton « Réserver son dossard ». Vous choisissez votre épreuve, réglez votre inscription et recevez votre confirmation par e-mail. Des inscriptions sur place restent possibles le jour J dans la limite des dossards disponibles.",
    link: { label: "Réserver son dossard", href: links.register },
  },
  {
    question: "Quelles épreuves sont proposées ?",
    answer:
      "Des marches de 5 km et 11 km, des courses enfants (6-15 ans) de 1 km et 2 km, deux trails de 7 km et 17 km (17 km dès 18 ans) et un relais par équipe de 3 (dès 11 ans, au moins 2 adultes), sur un circuit 100 % nature dans la forêt du Bourgailh. Départs : 9h00 les marches, 9h30 les courses enfants, 10h30 le trail 17 km, 10h45 le trail 7 km.",
    link: { label: "Découvrir l'événement", href: routes.event },
  },
  {
    question: "Quels sont les tarifs d'inscription ?",
    answer:
      "Le tarif de chaque épreuve est indiqué sur la page d'inscription ProTiming. À titre indicatif, en 2025 : 5,80 € pour la marche de 5 km et 20,20 € pour le trail de 17 km. L'intégralité des bénéfices des inscriptions est reversée à la recherche.",
  },
  {
    question: "À partir de quel âge les enfants peuvent-ils participer ?",
    answer:
      "Les courses enfants sont ouvertes dès 6 ans et jusqu'à 15 ans. Les marches sont accessibles à toute la famille.",
  },
  {
    question: "Un certificat médical est-il obligatoire ?",
    answer:
      "Pour être chronométré sur les trails, il faut une licence en cours de validité ou le Pass Prévention Santé (PPS, 5 €, valable un an). Sur le 7 km, le PPS n'est pas obligatoire, mais les coureurs qui n'en ont pas ne sont pas chronométrés. Les conditions complètes figurent dans le règlement de la course.",
    link: { label: "Lire le règlement", href: links.rules },
  },
  {
    question: "Où et quand retirer mon dossard ?",
    answer: "[À COMPLÉTER : lieu, jours et horaires du retrait des dossards, pièces à présenter.]",
  },
  {
    question: "Comment venir et se garer ?",
    answer:
      "La course se déroule dans la forêt du Bourgailh, à Pessac (Gironde), le jeudi de l'Ascension. [À COMPLÉTER : parkings et accès en transports en commun.]",
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
