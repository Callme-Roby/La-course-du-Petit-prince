/** Configuration d'un formulaire générique (sérialisable : utilisable depuis un Server Component). */

export type FormFieldType = "text" | "email" | "tel" | "textarea" | "select";

export type FormFieldConfig = {
  name: string;
  label: string;
  type: FormFieldType;
  placeholder?: string;
  required?: boolean;
  autoComplete?: string;
  /** Pour type="select". */
  options?: { value: string; label: string }[];
  /** Pour type="textarea". */
  rows?: number;
  /** Valeur initiale (ex. sujet pré-rempli depuis l'URL). */
  defaultValue?: string;
};

export type FormConsentConfig = {
  name: string;
  label: string;
  required?: boolean;
};

export type FormValues = Record<string, string | boolean>;
