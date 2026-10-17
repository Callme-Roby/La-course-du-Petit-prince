# La Course du Petit Prince

Site de l'association **La Course du Petit Prince (CDPP)** — marches et trails nature en famille dans la forêt du Bourgailh (Pessac), au profit de la recherche contre les sarcomes.

Intégration de la maquette Figma [La course du petit prince](https://www.figma.com/design/nN8oaAtd121c8BmEZmUYO8/La-course-du-petit-prince?node-id=2001-280).

## Stack

- [Next.js](https://nextjs.org) (App Router) + React + TypeScript
- CSS Modules + tokens CSS (`src/app/globals.css`) issus des variables Figma — pas de framework CSS
- Pages statiques (SSG), prêtes pour Vercel

## Démarrer

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # build de production
npm run typecheck  # vérification TypeScript
```

## Arborescence

Reprend la page « Arborescence » du Figma :

| Route | Page |
| --- | --- |
| `/` | Accueil |
| `/evenement` | L'événement |
| `/notre-cause` | Notre cause |
| `/s-engager` | S'engager |
| `/s-engager/benevoles` | ↳ Bénévoles |
| `/s-engager/partenaires` | ↳ Partenaires |
| `/s-engager/ambassadeurs` | ↳ Ambassadeurs |
| `/boutique` | Boutique |
| `/contact` | Contact |
| `/mentions-legales` | Mentions légales |
| `/politique-de-confidentialite` | Confidentialité (RGPD) |
| *(toute autre URL)* | 404 |

```
src/
  app/                 # routes (une page = un dossier)
  components/
    layout/            # Header, Footer
    ui/                # Button, Media, SlideButton…
    sections/          # sections partagées : Separator, PageHero, Paragraphe, SectionHeader,
                       # EventsList, PartnersStrip, DonBanner…
    <page>/            # composants spécifiques à une page
  data/                # contenus en liste (événements, produits, partenaires…)
  lib/site.ts          # configuration : routes, navigation, liens externes, date de la course
public/
  icons/, *.svg        # logos et icônes exportés du Figma
  images/              # photos (voir ci-dessous)
figma-assets/          # manifestes des images Figma
scripts/               # outils (images Figma, placeholders)
```

## Images de la maquette

Les photos sont référencées dans `figma-assets/*.json` (hash d'image ou id de calque Figma → fichier dans `public/images`).
Le dépôt contient des **images de remplacement grises** au bon format ; pour récupérer les vraies images :

1. Créer un jeton personnel Figma : *Settings → Security → Personal access tokens* (scope *File content: read*).
2. Lancer :
   ```bash
   FIGMA_TOKEN=xxxxx npm run assets:figma          # toutes les pages
   FIGMA_TOKEN=xxxxx npm run assets:figma home     # un seul manifeste
   ```
3. Commiter `public/images` et `public/og.png`.

`python3 scripts/make-placeholders.py` régénère les images de remplacement manquantes (nécessite Pillow).

## À configurer

Dans `src/lib/site.ts` :

- `links.*` : URLs HelloAsso (dons, inscriptions, cagnotte, boutique) et réseaux sociaux — actuellement des valeurs provisoires ;
- `site.raceDate` : date de la prochaine édition (pilote le compte à rebours de l'accueil) ;
- `site.email`, `site.phone`, `site.url` (ou variable d'env `NEXT_PUBLIC_SITE_URL`).

Les formulaires (contact, bénévoles, ambassadeurs, newsletter) fonctionnent côté client mais **n'envoient rien** : brancher le service retenu (Formspree, Brevo, route API Next + e-mail…) là où un commentaire l'indique.

## Déploiement Vercel

1. Importer le dépôt GitHub dans Vercel (framework détecté : Next.js, aucune configuration requise).
2. Variable d'environnement optionnelle : `NEXT_PUBLIC_SITE_URL=https://votre-domaine.fr` (URLs absolues Open Graph).
3. Chaque push sur la branche de production redéploie le site ; chaque PR obtient une URL de prévisualisation.
