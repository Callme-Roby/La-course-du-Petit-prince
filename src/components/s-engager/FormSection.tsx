import type { ReactNode } from "react";
import ConfigurableForm from "@/components/forms/ConfigurableForm";
import { contactFields, defaultConsents } from "@/components/forms/presets";
import SectionHeader from "@/components/sections/SectionHeader";
import styles from "./FormSection.module.css";

type FormSectionProps = {
  id: string;
  title: ReactNode;
  /** Identifiant transmis avec les données (bénévoles, partenaires, ambassadeurs…). */
  formName: string;
  successTitle?: string;
  successMessage?: string;
};

/** Section formulaire (2060:7476 / 2060:9519 / 2060:8631) : En-tête + composant "Form" centré. */
export default function FormSection({ id, title, formName, successTitle, successMessage }: FormSectionProps) {
  return (
    <section id={id} className={`container ${styles.section}`} aria-labelledby={`${id}-title`}>
      <SectionHeader id={`${id}-title`} title={title} />
      <ConfigurableForm
        formName={formName}
        fields={contactFields}
        consents={defaultConsents}
        captcha
        successTitle={successTitle}
        successMessage={successMessage}
        className={styles.form}
      />
    </section>
  );
}
