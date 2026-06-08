# Changelog

Format : [Keep a Changelog](https://keepachangelog.com/fr/1.1.0/). Versionnage : [SemVer](https://semver.org/lang/fr/).

## [Unreleased]

### Added
- Intégration Vercel Speed Insights (`@vercel/speed-insights` v2.0.0) dans le layout racine — mesure des Core Web Vitals sur les déploiements Vercel.
- Intégration Vercel Analytics (`@vercel/analytics` v2.0.1) dans le layout racine — collecte automatique des pages vues sur les déploiements Vercel.
- Bootstrap du dépôt : structure `docs/`, README, `.gitignore` Next.js.
- Intégration du handoff de design (`docs/design_handoff_optiond/`) comme source de vérité visuelle.
- Site Next.js (App Router + TypeScript) : portage pixel-perfect des 3 pages du handoff (`/`, `/site-internet`, `/agent-ia`), `globals.css` = `styles.css` verbatim, 24 composants, particules canvas et thème dark/light portés verbatim depuis `app.js`, polices Geist via `next/font`, anti-FOUC, favicon + OG. Build `next build` vert.
- Menu mobile (hamburger) accessible sous 1180px : panneau avec les 3 liens + CTA + statut, gestion clavier (Escape, piège de focus), `aria-expanded`/`aria-modal`, verrou de scroll, animations désactivées sous `prefers-reduced-motion`.

### Changed
- Déplacement du handoff design `design_handoff_optiond/` → `docs/design_handoff_optiond/`.
- Liens LinkedIn et GitHub réels dans le footer (ouverture en nouvel onglet, `rel="noopener noreferrer"`).
- Localisation de la marque affichée en « Haute-Savoie » (au lieu de « Annecy ») : titre accueil, eyebrows accueil/site internet, footer. Les exemples clients fictifs (Annecy) sont conservés.
- Grosse passe responsive sur les 3 pages (breakpoints fins 560/480/360px, zéro débordement horizontal de 320 à 1440px, tap targets ≥ 40px, code window et case-tabs scrollables, reflow diag-card/strip/cta-band/footer).

### Fixed

### Removed
- Numéro de téléphone placeholder (`06 00 00 00 00`) retiré du site (footer, CTA site internet, coordonnées agent IA).
- Toggle de thème clair/sombre : le site est désormais forcé en **dark** (`data-theme="dark"` en dur), composant `ThemeToggle` et script anti-FOUC supprimés. Le bloc CSS du thème clair reste présent mais inutilisé.

### Deprecated

### Security
