"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import SectionHeader from "@/components/sections/SectionHeader";
import Button from "@/components/ui/Button";
import { routes } from "@/lib/site";
import styles from "./ContactForm.module.css";

type Values = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  terms: boolean;
  gdpr: boolean;
  human: boolean;
};

type Errors = Partial<Record<keyof Values, string>>;

const initialValues: Values = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
  terms: false,
  gdpr: false,
  human: false,
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
// Numéro français (06…, +33 6…) ou international : au moins 10 chiffres.
const PHONE_RE = /^\+?[\d\s.()-]{10,}$/;

function validate(v: Values): Errors {
  const errors: Errors = {};
  if (!v.name.trim()) errors.name = "Veuillez indiquer votre nom et prénom.";
  if (!v.email.trim()) errors.email = "Veuillez indiquer votre adresse e-mail.";
  else if (!EMAIL_RE.test(v.email.trim())) errors.email = "L’adresse e-mail n’est pas valide (ex. vous@exemple.fr).";
  if (!v.phone.trim()) errors.phone = "Veuillez indiquer votre numéro de téléphone.";
  else if (!PHONE_RE.test(v.phone.trim()) || v.phone.replace(/\D/g, "").length < 10)
    errors.phone = "Le numéro de téléphone n’est pas valide.";
  if (!v.terms) errors.terms = "Vous devez accepter les conditions générales.";
  if (!v.gdpr) errors.gdpr = "Vous devez accepter le traitement de vos données.";
  if (!v.human) errors.human = "Veuillez cocher la case « Je ne suis pas un robot ».";
  return errors;
}

/**
 * Section "Formulaire de contact" (2057:5625).
 *
 * - Le paramètre `?sujet=` (envoyé par le bouton « Me le rappeler » de EventsList) pré-remplit
 *   un champ « Sujet », affiché uniquement dans ce cas.
 * - reCAPTCHA (composant Figma 2057:5444) : remplacé par une case « Je ne suis pas un robot »
 *   FACTICE, sans aucune protection réelle. À remplacer par Google reCAPTCHA / hCaptcha /
 *   Cloudflare Turnstile lors du branchement du backend.
 * - Pas de backend : l'envoi affiche un état « envoyé » côté client. Brancher le service
 *   (route API Next.js, Formspree, Brevo…) dans `onSubmit`.
 */
export default function ContactForm() {
  const [values, setValues] = useState<Values>(initialValues);
  const [errors, setErrors] = useState<Errors>({});
  const [hasSubject, setHasSubject] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const formRef = useRef<HTMLFormElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);

  // Lecture côté client pour garder la page statique (pas de useSearchParams + Suspense).
  useEffect(() => {
    const sujet = new URLSearchParams(window.location.search).get("sujet");
    if (sujet) {
      setHasSubject(true);
      setValues((v) => ({ ...v, subject: sujet }));
    }
  }, []);

  useEffect(() => {
    if (status === "sent") statusRef.current?.focus();
  }, [status]);

  function update<K extends keyof Values>(key: K, value: Values[K]) {
    setValues((v) => ({ ...v, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    const firstInvalid = (Object.keys(found) as (keyof Values)[])[0];
    if (firstInvalid) {
      formRef.current?.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }
    setStatus("sending");
    // TODO backend : envoyer `values` au service retenu, ex.
    // await fetch("/api/contact", { method: "POST", body: JSON.stringify(values) });
    await new Promise((r) => setTimeout(r, 400));
    setStatus("sent");
  }

  const describedBy = (key: keyof Values) => (errors[key] ? `contact-${key}-error` : undefined);

  const errorText = (key: keyof Values) =>
    errors[key] ? (
      <p id={`contact-${key}-error`} className={styles.error}>
        {errors[key]}
      </p>
    ) : null;

  return (
    <section className={`container ${styles.section}`} aria-labelledby="contact-form-title">
      <SectionHeader id="contact-form-title" title="Formulaire de contact" />

      {status === "sent" ? (
        <div ref={statusRef} tabIndex={-1} role="status" className={styles.success}>
          <p className="p-m">Merci, votre message a bien été envoyé.</p>
          <p className="p-s">Nous vous répondrons dans les meilleurs délais.</p>
          <Button
            variant="secondary"
            onClick={() => {
              setValues({ ...initialValues, subject: values.subject });
              setStatus("idle");
            }}
          >
            Envoyer un autre message
          </Button>
        </div>
      ) : (
        <form ref={formRef} className={styles.form} onSubmit={onSubmit} noValidate>
          <div className={styles.fields}>
            {hasSubject && (
              <div className={styles.field}>
                <label htmlFor="contact-subject" className={styles.label}>
                  Sujet
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  className={styles.input}
                  value={values.subject}
                  onChange={(e) => update("subject", e.target.value)}
                />
              </div>
            )}

            <div className={styles.field}>
              <label htmlFor="contact-name" className={styles.label}>
                Nom &amp; prénom<span className={styles.required} aria-hidden>*</span>
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Jean Dupont"
                required
                className={styles.input}
                value={values.name}
                onChange={(e) => update("name", e.target.value)}
                aria-invalid={!!errors.name || undefined}
                aria-describedby={describedBy("name")}
              />
              {errorText("name")}
            </div>

            <div className={styles.field}>
              <label htmlFor="contact-email" className={styles.label}>
                Adresse e-mail<span className={styles.required} aria-hidden>*</span>
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="vous@exemple.fr"
                required
                className={styles.input}
                value={values.email}
                onChange={(e) => update("email", e.target.value)}
                aria-invalid={!!errors.email || undefined}
                aria-describedby={describedBy("email")}
              />
              {errorText("email")}
            </div>

            <div className={styles.field}>
              <label htmlFor="contact-phone" className={styles.label}>
                Numéro de téléphone<span className={styles.required} aria-hidden>*</span>
              </label>
              <input
                id="contact-phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                inputMode="tel"
                placeholder="06..."
                required
                className={styles.input}
                value={values.phone}
                onChange={(e) => update("phone", e.target.value)}
                aria-invalid={!!errors.phone || undefined}
                aria-describedby={describedBy("phone")}
              />
              {errorText("phone")}
            </div>

            <div className={styles.field}>
              <label htmlFor="contact-message" className={styles.label}>
                Votre message
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={3}
                placeholder="Ecrivez votre message"
                className={`${styles.input} ${styles.textarea}`}
                value={values.message}
                onChange={(e) => update("message", e.target.value)}
              />
            </div>
          </div>

          <div className={styles.consents}>
            <div>
              <label className={styles.check}>
                <input
                  type="checkbox"
                  name="terms"
                  checked={values.terms}
                  onChange={(e) => update("terms", e.target.checked)}
                  aria-invalid={!!errors.terms || undefined}
                  aria-describedby={describedBy("terms")}
                />
                <span>
                  En envoyant ce formulaire, j’accepte les{" "}
                  <a href={routes.legal} className={styles.inlineLink}>
                    conditions générales
                  </a>
                  .
                </span>
              </label>
              {errorText("terms")}
            </div>
            <div>
              <label className={styles.check}>
                <input
                  type="checkbox"
                  name="gdpr"
                  checked={values.gdpr}
                  onChange={(e) => update("gdpr", e.target.checked)}
                  aria-invalid={!!errors.gdpr || undefined}
                  aria-describedby={describedBy("gdpr")}
                />
                <span>
                  En envoyant ce formulaire, vous acceptez que vos données soient traitées conformément au Règlement
                  Général sur la Protection des Données (
                  <a href={routes.privacy} className={styles.inlineLink}>
                    RGPD
                  </a>
                  ).
                </span>
              </label>
              {errorText("gdpr")}
            </div>
          </div>

          {/* Remplaçant FACTICE du widget reCAPTCHA (2057:5444) — aucune vérification réelle. */}
          <div>
            <label className={styles.captcha}>
              <input
                type="checkbox"
                name="human"
                checked={values.human}
                onChange={(e) => update("human", e.target.checked)}
                aria-invalid={!!errors.human || undefined}
                aria-describedby={describedBy("human")}
              />
              <span className={styles.captchaText}>Je ne suis pas un robot</span>
              <span className={styles.captchaBrand} aria-hidden>
                reCAPTCHA
              </span>
            </label>
            {errorText("human")}
          </div>

          <Button type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Envoi en cours…" : "Envoyer le formulaire"}
          </Button>
        </form>
      )}
    </section>
  );
}
