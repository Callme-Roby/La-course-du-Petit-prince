"use client";

import Image from "next/image";
import { useState, type FormEvent } from "react";
import styles from "./Footer.module.css";

/**
 * Champ "Email" du footer. L'envoi réel (Brevo, Mailchimp, HelloAsso…) reste à brancher :
 * remplacer le corps de `onSubmit` par l'appel au service retenu.
 */
export default function NewsletterForm() {
  const [status, setStatus] = useState<"idle" | "done">("idle");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("done");
    e.currentTarget.reset();
  }

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <label htmlFor="newsletter-email" className="visually-hidden">
        Adresse e-mail
      </label>
      <input
        id="newsletter-email"
        name="email"
        type="email"
        required
        autoComplete="email"
        placeholder="Email"
        className={styles.input}
      />
      <button type="submit" className={styles.submit}>
        <span className="visually-hidden">S’abonner</span>
        <Image src="/icons/arrow-right-yellow.svg" alt="" width={16} height={13} />
      </button>
      <p className={styles.formStatus} role="status">
        {status === "done" ? "Merci, votre inscription est bien prise en compte." : ""}
      </p>
    </form>
  );
}
