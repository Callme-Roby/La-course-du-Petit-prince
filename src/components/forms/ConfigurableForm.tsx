"use client";

import { useId, useRef, useState, type FormEvent } from "react";
import Button from "@/components/ui/Button";
import FakeRecaptcha from "./FakeRecaptcha";
import type { FormConsentConfig, FormFieldConfig, FormValues } from "./types";
import styles from "./ConfigurableForm.module.css";

type ConfigurableFormProps = {
  /** Identifiant du formulaire, transmis dans les données envoyées (ex. "benevoles"). */
  formName: string;
  fields: FormFieldConfig[];
  consents?: FormConsentConfig[];
  /** Affiche la case anti-robot (factice tant que reCAPTCHA n'est pas branché). */
  captcha?: boolean;
  submitLabel?: string;
  successTitle?: string;
  successMessage?: string;
  /**
   * URL d'envoi (POST JSON). Si absente, l'envoi est simulé côté client.
   * À brancher : route API Next (app/api/…), Formspree, Brevo, HelloAsso…
   */
  endpoint?: string;
  className?: string;
};

type Status = "idle" | "sending" | "sent" | "error";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^\+?[\d\s.()-]{10,}$/;

function validateField(field: FormFieldConfig, raw: string): string | undefined {
  const value = raw.trim();
  if (!value) return field.required ? "Ce champ est obligatoire." : undefined;
  if (field.type === "email" && !EMAIL_RE.test(value)) return "Adresse e-mail invalide (ex. vous@exemple.fr).";
  if (field.type === "tel" && (!PHONE_RE.test(value) || value.replace(/\D/g, "").length < 10))
    return "Numéro de téléphone invalide (10 chiffres minimum).";
  return undefined;
}

/**
 * Formulaire générique (composant Figma "Form" 2057:5581) : champs configurables,
 * validation côté client, cases de consentement, anti-robot factice et état "envoyé".
 */
export default function ConfigurableForm({
  formName,
  fields,
  consents = [],
  captcha = false,
  submitLabel = "Envoyer le formulaire",
  successTitle = "Merci, votre message est bien envoyé !",
  successMessage = "Nous revenons vers vous très vite.",
  endpoint,
  className,
}: ConfigurableFormProps) {
  const uid = useId();
  const successRef = useRef<HTMLDivElement>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>("idle");

  const idFor = (name: string) => `${uid}-${name}`;

  function validate(form: HTMLFormElement) {
    const data = new FormData(form);
    const next: Record<string, string> = {};
    const values: FormValues = { form: formName };
    for (const field of fields) {
      const value = String(data.get(field.name) ?? "");
      values[field.name] = value.trim();
      const error = validateField(field, value);
      if (error) next[field.name] = error;
    }
    for (const consent of consents) {
      const checked = data.get(consent.name) === "on";
      values[consent.name] = checked;
      if (consent.required && !checked) next[consent.name] = "Merci de cocher cette case pour continuer.";
    }
    if (captcha && data.get("captcha") !== "on") next.captcha = "Merci de confirmer que vous n’êtes pas un robot.";
    return { next, values };
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const { next, values } = validate(form);
    setErrors(next);
    const firstInvalid = Object.keys(next)[0];
    if (firstInvalid) {
      form.querySelector<HTMLElement>(`#${CSS.escape(idFor(firstInvalid))}`)?.focus();
      return;
    }

    setStatus("sending");
    try {
      if (endpoint) {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });
        if (!res.ok) throw new Error(String(res.status));
      } else {
        // Pas de backend pour l'instant : envoi simulé. Brancher ici le service retenu
        // (ou passer la prop `endpoint`).
        await new Promise((resolve) => setTimeout(resolve, 600));
      }
      form.reset();
      setStatus("sent");
      requestAnimationFrame(() => successRef.current?.focus());
    } catch {
      setStatus("error");
    }
  }

  /** Revalide un champ déjà en erreur dès qu'il change. */
  function onChange(name: string, check: () => string | undefined) {
    if (!errors[name]) return;
    const error = check();
    setErrors((prev) => {
      const copy = { ...prev };
      if (error) copy[name] = error;
      else delete copy[name];
      return copy;
    });
  }

  if (status === "sent") {
    return (
      <div ref={successRef} tabIndex={-1} role="status" className={[styles.success, className].filter(Boolean).join(" ")}>
        <p className="p-m">{successTitle}</p>
        <p className="p-s">{successMessage}</p>
        <Button variant="secondary" onClick={() => setStatus("idle")}>
          Envoyer un autre message
        </Button>
      </div>
    );
  }

  return (
    <form
      className={[styles.form, className].filter(Boolean).join(" ")}
      onSubmit={onSubmit}
      noValidate
      aria-busy={status === "sending"}
    >
      <div className={styles.fields}>
        {fields.map((field) => {
          const id = idFor(field.name);
          const error = errors[field.name];
          const common = {
            id,
            name: field.name,
            placeholder: field.placeholder,
            autoComplete: field.autoComplete,
            defaultValue: field.defaultValue,
            required: field.required,
            "aria-invalid": error ? true : undefined,
            "aria-describedby": error ? `${id}-error` : undefined,
            className: field.type === "textarea" ? `${styles.input} ${styles.textarea}` : styles.input,
            onChange: (ev: { currentTarget: { value: string } }) =>
              onChange(field.name, () => validateField(field, ev.currentTarget.value)),
          };
          return (
            <div key={field.name} className={styles.field}>
              <label htmlFor={id} className={`p-s ${styles.label}`}>
                {field.label}
                {field.required && (
                  <span className={styles.star} aria-hidden>
                    *
                  </span>
                )}
                {field.required && <span className="visually-hidden"> (obligatoire)</span>}
              </label>
              {field.type === "textarea" ? (
                <textarea rows={field.rows ?? 2} {...common} />
              ) : field.type === "select" ? (
                <select {...common} defaultValue={field.defaultValue ?? ""}>
                  <option value="" disabled>
                    {field.placeholder ?? "Choisir…"}
                  </option>
                  {field.options?.map((o) => (
                    <option key={o.value} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </select>
              ) : (
                <input type={field.type} inputMode={field.type === "tel" ? "tel" : undefined} {...common} />
              )}
              {error && (
                <p id={`${id}-error`} className={styles.error}>
                  {error}
                </p>
              )}
            </div>
          );
        })}
      </div>

      {consents.length > 0 && (
        <div className={styles.consents}>
          {consents.map((consent) => {
            const id = idFor(consent.name);
            const error = errors[consent.name];
            return (
              <div key={consent.name}>
                <div className={styles.consent}>
                  <input
                    id={id}
                    type="checkbox"
                    name={consent.name}
                    className={styles.checkbox}
                    required={consent.required}
                    aria-invalid={error ? true : undefined}
                    aria-describedby={error ? `${id}-error` : undefined}
                    onChange={(ev) =>
                      onChange(consent.name, () =>
                        ev.currentTarget.checked ? undefined : "Merci de cocher cette case pour continuer.",
                      )
                    }
                  />
                  <label htmlFor={id} className="p-s">
                    {consent.label}
                  </label>
                </div>
                {error && (
                  <p id={`${id}-error`} className={styles.error}>
                    {error}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      )}

      {captcha && (
        <FakeRecaptcha
          id={idFor("captcha")}
          error={errors.captcha}
          onChange={(checked) => onChange("captcha", () => (checked ? undefined : errors.captcha))}
        />
      )}

      <div className={styles.actions}>
        <Button type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Envoi en cours…" : submitLabel}
        </Button>
        {status === "error" && (
          <p className={styles.error} role="alert">
            L’envoi a échoué. Merci de réessayer dans quelques instants.
          </p>
        )}
      </div>
    </form>
  );
}
