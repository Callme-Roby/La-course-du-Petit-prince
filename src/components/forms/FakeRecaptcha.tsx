import styles from "./ConfigurableForm.module.css";

type FakeRecaptchaProps = {
  id: string;
  error?: string;
  onChange?: (checked: boolean) => void;
};

/**
 * Reproduction visuelle du widget "reCAPTCHA" (Figma 2057:5444).
 * FACTICE : simple case à cocher, aucune vérification côté serveur.
 * Pour la mise en production, remplacer ce composant par le vrai widget
 * (ex. react-google-recaptcha ou Cloudflare Turnstile) et vérifier le jeton
 * côté serveur, là où l'envoi du formulaire sera branché.
 */
export default function FakeRecaptcha({ id, error, onChange }: FakeRecaptchaProps) {
  return (
    <div>
      <div className={styles.captcha}>
        <input
          id={id}
          name="captcha"
          type="checkbox"
          className={styles.captchaBox}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? `${id}-error` : undefined}
          onChange={(e) => onChange?.(e.currentTarget.checked)}
        />
        <label htmlFor={id} className={styles.captchaLabel}>
          I&apos;m not a robot
        </label>
        <span className={styles.captchaBrand} aria-hidden>
          reCAPTCHA
        </span>
      </div>
      {error && (
        <p id={`${id}-error`} className={styles.error}>
          {error}
        </p>
      )}
    </div>
  );
}
