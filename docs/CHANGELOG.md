# Changelog

Format : [Keep a Changelog](https://keepachangelog.com/fr/1.1.0/). Versionnage : [SemVer](https://semver.org/lang/fr/).

## [Unreleased]

### Added
- Bootstrap du dépôt : structure `docs/`, README, `.gitignore` Next.js.
- Intégration du handoff de design (`docs/design_handoff_optiond/`) comme source de vérité visuelle.
- Site Next.js (App Router + TypeScript) : portage pixel-perfect des 3 pages du handoff (`/`, `/site-internet`, `/agent-ia`), `globals.css` = `styles.css` verbatim, 24 composants, particules canvas et thème dark/light portés verbatim depuis `app.js`, polices Geist via `next/font`, anti-FOUC, favicon + OG. Build `next build` vert.

### Changed
- Déplacement du handoff design `design_handoff_optiond/` → `docs/design_handoff_optiond/`.
- Liens LinkedIn et GitHub réels dans le footer (ouverture en nouvel onglet, `rel="noopener noreferrer"`).
- Localisation de la marque affichée en « Haute-Savoie » (au lieu de « Annecy ») : titre accueil, eyebrows accueil/site internet, footer. Les exemples clients fictifs (Annecy) sont conservés.

### Fixed

### Removed
- Numéro de téléphone placeholder (`06 00 00 00 00`) retiré du site (footer, CTA site internet, coordonnées agent IA).

### Deprecated

### Security
