import type { Metadata } from "next";
import Link from "next/link";
import Separator from "@/components/sections/Separator";
import PageHero from "@/components/sections/PageHero";
import LegalSection, { LegalBody, Todo } from "@/components/legal/LegalSection";
import { routes, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: `Mentions légales du site ${site.name} : éditeur, hébergeur, propriété intellectuelle et responsabilité.`,
};

/** Page "Mentions légales" (arborescence : En-tête + Corps juridique ; pas de maquette dédiée). */
export default function MentionsLegalesPage() {
  return (
    <>
      <Separator />
      <PageHero title="Mentions légales" />
      <Separator size="small" />
      <LegalBody updated="[À COMPLÉTER : date]">
        <LegalSection title="Éditeur du site">
          <p>
            Le site <strong>{site.url.replace(/^https?:\/\//, "")}</strong> est édité par l’association{" "}
            <strong>La Course du Petit Prince – La CdPP</strong>, association loi 1901 déclarée le 18 août 2023.
          </p>
          <ul>
            <li>
              Siège social : {site.address}
            </li>
            <li>
              Numéro RNA : {site.rna}
            </li>
            <li>
              SIRET : {site.siret}
            </li>
            <li>
              E-mail : <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>
              Directeur de la publication : <Todo>nom et qualité (ex. président·e de l’association)</Todo>
            </li>
          </ul>
        </LegalSection>

        <LegalSection title="Hébergeur">
          <p>Le site est hébergé par :</p>
          <p>
            <strong>Vercel Inc.</strong>
            <br />
            440 N Barranca Ave #4133
            <br />
            Covina, CA 91723, États-Unis
            <br />
            <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">
              vercel.com
            </a>
          </p>
        </LegalSection>

        <LegalSection title="Propriété intellectuelle">
          <p>
            L’ensemble des contenus de ce site (textes, photographies, illustrations, logos, éléments graphiques et
            vidéos) est la propriété de l’association {site.name} ou de ses partenaires, et est protégé par le Code de
            la propriété intellectuelle.
          </p>
          <p>
            Toute reproduction, représentation, modification ou diffusion, totale ou partielle, de ces contenus sans
            autorisation écrite préalable de l’association est interdite.
          </p>
          <p>
            Les logos des partenaires restent la propriété de leurs titulaires respectifs. Crédits photos :{" "}
            <Todo>photographes / sources</Todo>.
          </p>
        </LegalSection>

        <LegalSection title="Responsabilité">
          <p>
            L’association s’efforce de fournir des informations exactes et à jour (dates, horaires, tarifs, parcours),
            mais ne peut garantir l’absence d’erreurs ou d’omissions. Les informations publiées peuvent être modifiées
            à tout moment, notamment en cas de changement d’organisation de l’événement.
          </p>
          <p>
            Le site contient des liens vers des sites tiers (HelloAsso, ProTiming, réseaux sociaux, partenaires). L’association
            n’exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.
          </p>
          <p>
            Les inscriptions aux épreuves sont traitées par ProTiming et les dons, adhésions et achats par
            HelloAsso, selon leurs propres conditions générales.
          </p>
        </LegalSection>

        <LegalSection title="Données personnelles">
          <p>
            Pour tout savoir sur la collecte et le traitement de vos données, ainsi que sur vos droits, consultez notre{" "}
            <Link href={routes.privacy}>politique de confidentialité</Link>.
          </p>
        </LegalSection>

        <LegalSection title="Droit applicable">
          <p>
            Les présentes mentions légales sont soumises au droit français. En cas de litige, et à défaut de résolution
            amiable, les tribunaux français seront seuls compétents.
          </p>
        </LegalSection>
      </LegalBody>
      <Separator />
    </>
  );
}
