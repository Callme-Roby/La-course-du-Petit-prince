import type { Metadata } from "next";
import Link from "next/link";
import Separator from "@/components/sections/Separator";
import PageHero from "@/components/sections/PageHero";
import LegalSection, { LegalBody, Todo } from "@/components/legal/LegalSection";
import { routes, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: `Politique de confidentialité du site ${site.name} : données collectées, finalités, cookies et droits RGPD.`,
};

/** Page "Politique de confidentialité" (arborescence : En-tête + Corps juridique ; pas de maquette dédiée). */
export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <Separator />
      <PageHero title="Politique de confidentialité" />
      <Separator size="small" />
      <LegalBody updated="[À COMPLÉTER : date]">
        <LegalSection title="Responsable du traitement">
          <p>
            Les données personnelles collectées sur ce site sont traitées par l’association <strong>La Course du Petit Prince – La CdPP</strong>
            , {site.address}, représentée par <Todo>nom du / de la représentant·e légal·e</Todo>.
          </p>
          <p>
            Contact : <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
        </LegalSection>

        <LegalSection title="Données collectées">
          <p>Nous collectons uniquement les données que vous nous transmettez volontairement :</p>
          <ul>
            <li>
              <strong>Formulaire de contact</strong> : nom et prénom, adresse e-mail, numéro de téléphone, contenu de
              votre message ;
            </li>
            <li>
              <strong>Newsletter</strong> : adresse e-mail ;
            </li>
            <li>
              <strong>Inscriptions, dons, adhésions et achats</strong> : ils sont réalisés sur les plateformes ProTiming
              (inscriptions) et HelloAsso (dons, adhésions, boutique), qui collectent et traitent ces données en tant
              que responsables de traitement distincts (voir leurs propres politiques de confidentialité).
            </li>
          </ul>
        </LegalSection>

        <LegalSection title="Finalités et bases légales">
          <ul>
            <li>Répondre à vos demandes envoyées via le formulaire de contact (consentement) ;</li>
            <li>Vous rappeler la date d’ouverture d’un évènement lorsque vous le demandez (consentement) ;</li>
            <li>Vous adresser notre newsletter (consentement, retirable à tout moment) ;</li>
            <li>Assurer la sécurité du site et prévenir les envois abusifs (intérêt légitime).</li>
          </ul>
          <p>Vos données ne sont jamais vendues ni cédées à des tiers à des fins commerciales.</p>
        </LegalSection>

        <LegalSection title="Durée de conservation">
          <ul>
            <li>Demandes de contact : 3 ans à compter du dernier échange ;</li>
            <li>Newsletter : jusqu’à votre désinscription.</li>
          </ul>
          <p>
            <Todo>valider ces durées avec l’association</Todo>
          </p>
        </LegalSection>

        <LegalSection title="Destinataires et hébergement">
          <p>
            Les données sont destinées aux seuls membres habilités de l’association. Le site est hébergé par Vercel
            Inc. (440 N Barranca Ave #4133, Covina, CA 91723, États-Unis) ; les transferts éventuels hors de l’Union
            européenne sont encadrés par les clauses contractuelles types de la Commission européenne.
          </p>
          <p>
            Prestataires d’envoi (formulaire, newsletter) : <Todo>outil retenu, ex. Brevo</Todo>.
          </p>
        </LegalSection>

        <LegalSection title="Cookies">
          <p>
            Ce site n’utilise pas de cookies publicitaires. Seuls des cookies strictement nécessaires à son
            fonctionnement peuvent être déposés ; ils ne requièrent pas votre consentement.
          </p>
          <p>
            Si un outil de mesure d’audience ou un service tiers (vidéo, carte, anti-spam) est ajouté, il sera listé ici
            et, si nécessaire, soumis à votre consentement préalable : <Todo>liste des cookies / traceurs</Todo>.
          </p>
        </LegalSection>

        <LegalSection title="Vos droits">
          <p>
            Conformément au Règlement général sur la protection des données (RGPD) et à la loi Informatique et
            Libertés, vous disposez d’un droit d’accès, de rectification, d’effacement, de limitation, d’opposition et de
            portabilité de vos données, ainsi que du droit de retirer votre consentement à tout moment.
          </p>
          <p>
            Pour exercer ces droits, écrivez-nous à <a href={`mailto:${site.email}`}>{site.email}</a>. Nous vous
            répondrons dans un délai d’un mois.
          </p>
          <p>
            Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une réclamation auprès de la
            CNIL (
            <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">
              cnil.fr
            </a>
            ).
          </p>
        </LegalSection>

        <LegalSection title="Pour en savoir plus">
          <p>
            Consultez également nos <Link href={routes.legal}>mentions légales</Link> ou{" "}
            <Link href={routes.contact}>contactez-nous</Link>.
          </p>
        </LegalSection>
      </LegalBody>
      <Separator />
    </>
  );
}
