import type { FormConsentConfig, FormFieldConfig } from "./types";

/**
 * Champs du composant Figma "Form" (2057:5581), partagés par les formulaires
 * bénévoles / partenaires / ambassadeurs.
 */
export const contactFields: FormFieldConfig[] = [
  { name: "name", label: "Nom & prénom", type: "text", placeholder: "Jean Dupont", required: true, autoComplete: "name" },
  {
    name: "email",
    label: "Adresse e-mail",
    type: "email",
    placeholder: "vous@exemple.fr",
    required: true,
    autoComplete: "email",
  },
  { name: "phone", label: "Numéro de téléphone", type: "tel", placeholder: "06...", required: true, autoComplete: "tel" },
  { name: "message", label: "Votre message", type: "textarea", placeholder: "Ecrivez votre message" },
];

/** Cases à cocher "Frame 37" (2063:18899). */
export const defaultConsents: FormConsentConfig[] = [
  { name: "cgu", label: "En envoyant ce formulaire, j’accepte les conditions générales.", required: true },
  {
    name: "rgpd",
    label:
      "En envoyant ce formulaire, vous acceptez que vos données soient traitées conformément au Règlement Général sur la Protection des Données (RGPD).",
    required: true,
  },
];
