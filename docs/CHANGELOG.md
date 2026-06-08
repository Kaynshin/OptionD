# Changelog

Format : [Keep a Changelog](https://keepachangelog.com/fr/1.1.0/). Versionnage : [SemVer](https://semver.org/lang/fr/).

## [Unreleased]

### Added
- Bootstrap du dépôt : structure `docs/`, README, `.gitignore` Next.js.
- Intégration du handoff de design (`docs/design_handoff_optiond/`) comme source de vérité visuelle.
- Site Next.js (App Router + TypeScript) : portage pixel-perfect des 3 pages du handoff (`/`, `/site-internet`, `/agent-ia`), `globals.css` = `styles.css` verbatim, 24 composants, particules canvas et thème dark/light portés verbatim depuis `app.js`, polices Geist via `next/font`, anti-FOUC, favicon + OG. Build `next build` vert.

### Changed
- Déplacement du handoff design `design_handoff_optiond/` → `docs/design_handoff_optiond/`.

### Fixed

### Removed

### Deprecated

### Security
