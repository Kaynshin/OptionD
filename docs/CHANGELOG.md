# Changelog

Format : [Keep a Changelog](https://keepachangelog.com/fr/1.1.0/). Versionnage : [SemVer](https://semver.org/lang/fr/).

## [Unreleased]

### Added

### Changed

### Fixed

### Removed

### Deprecated

### Security

## [1.0.0] - 2026-06-08

### Added
- Page **Mentions légales** (`/mentions-legales`, server component) : éditeur, directeur de la publication, hébergeur (Vercel Inc.), propriété intellectuelle, données personnelles (RGPD : finalité, base légale, durée, droits, DPO), mesure d'audience/cookies (Vercel Analytics + Speed Insights, sans cookie publicitaire) et contact. Placeholders `[à compléter]` pour SIRET et adresse. Métadonnées (title/description/canonical/OpenGraph/Twitter), styles dédiés `.legal` dans `globals.css` (section ADDITIONS), ajout au `sitemap.ts` (priority 0.3). Nav sans lien actif sur cette page.
- Fade-in des sections au scroll (`components/SectionReveal.tsx`) : `IntersectionObserver` vanilla sur les `section.band`, révélées une à une à l'entrée dans le viewport ; masquage CSS activé uniquement quand le JS tourne (classe `reveal-on` sur `<html>`, contenu visible sans JS / au SSR) ; ré-observation des sections à chaque navigation client (App Router, `usePathname`) ; le `.hero` (above-the-fold) reste visible immédiatement.
- Bouton « retour en haut » (`components/BackToTop.tsx`) : fixé en bas à droite, apparaît après ~500px de scroll, remonte la page (smooth) ; accessible (`<button>` + `aria-label`, focus-visible magenta), style sobre via tokens CSS avec halo magenta léger au hover.
- Les deux features respectent strictement `prefers-reduced-motion: reduce` : aucune animation (sections révélées d'emblée, scroll instantané, transitions désactivées). Aucune dépendance ajoutée (vanilla + CSS).
- Intégration Vercel Speed Insights (`@vercel/speed-insights` v2.0.0) dans le layout racine — mesure des Core Web Vitals sur les déploiements Vercel.
- Intégration Vercel Analytics (`@vercel/analytics` v2.0.1) dans le layout racine — collecte automatique des pages vues sur les déploiements Vercel.
- Bootstrap du dépôt : structure `docs/`, README, `.gitignore` Next.js.
- Intégration du handoff de design (`docs/design_handoff_optiond/`) comme source de vérité visuelle.
- Site Next.js (App Router + TypeScript) : portage pixel-perfect des 3 pages du handoff (`/`, `/site-internet`, `/agent-ia`), `globals.css` = `styles.css` verbatim, 24 composants, particules canvas et thème dark/light portés verbatim depuis `app.js`, polices Geist via `next/font`, anti-FOUC, favicon + OG. Build `next build` vert.
- Menu mobile (hamburger) accessible sous 1180px : panneau avec les 3 liens + CTA + statut, gestion clavier (Escape, piège de focus), `aria-expanded`/`aria-modal`, verrou de scroll, animations désactivées sous `prefers-reduced-motion`.
- SEO : données structurées JSON-LD (`ProfessionalService` + founder, `WebPage`, `Service` ×2 avec `Offer`, `FAQPage` ×2), `sitemap.xml` (`app/sitemap.ts`), `robots.txt` (`app/robots.ts`), métadonnées par page (title/description/canonical/OpenGraph/Twitter) optimisées national FR, composant `JsonLd`. Recherche concurrence + mots-clés et stratégie dans `docs/seo/STRATEGY.md`.

### Changed
- Footer de l'accueil nettoyé : colonne **Services** réduite à « Site internet » et « Agent IA » (retrait de « Diagnostic offert » et « Formules IA », ancres profondes inter-pages) ; colonne **Atelier** conservée mais réduite à « Mentions légales » (retrait des ancres profondes « Approche » et « Packs & tarifs »).
- Tous les liens « Mentions légales » des footers (accueil, site internet) pointent désormais vers `/mentions-legales` (fini les `href="#"`). Les ancres même-page des footers site internet (#approche, #diagnostic, #packs) et agent IA (#solution, #cadre, #formules, #faq) sont conservées.
- `Nav` / `MobileMenu` : prop `active` rendue optionnelle (type exporté `NavActive`) pour permettre une page sans lien actif ; ajout de `aria-current="page"` sur le lien actif de la nav desktop.
- Déplacement du handoff design `design_handoff_optiond/` → `docs/design_handoff_optiond/`.
- SEO on-page : intégration naturelle de mots-clés (national FR) dans les eyebrows, titres de sections et accroches des 3 pages, sans réécriture lourde (réécritures plus poussées listées en recommandations dans `docs/seo/STRATEGY.md`).
- Liens LinkedIn et GitHub réels dans le footer (ouverture en nouvel onglet, `rel="noopener noreferrer"`).
- Localisation de la marque affichée en « Haute-Savoie » (au lieu de « Annecy ») : titre accueil, eyebrows accueil/site internet, footer. Les exemples clients fictifs (Annecy) sont conservés.
- Grosse passe responsive sur les 3 pages (breakpoints fins 560/480/360px, zéro débordement horizontal de 320 à 1440px, tap targets ≥ 40px, code window et case-tabs scrollables, reflow diag-card/strip/cta-band/footer).
- Nom du fondateur affiché en « David » uniquement (jamais « David Jomain ») : pages, métadonnées, JSON-LD, footer, signature.
- Les 2 CTA du hero de l'accueil sont désormais des boutons secondaires identiques (« Sites internet » n'est plus en magenta) : aucun des deux n'est mis en avant.
- Copyright du footer centré ; indicateur de disponibilité du footer (« Disponible · … ») retiré.
- Page Site internet : section « Cas clients » retirée et sections renumérotées (Builder-in-public → 04, Questions fréquentes → 05).

### Fixed

### Removed
- Numéro de téléphone placeholder (`06 00 00 00 00`) retiré du site (footer, CTA site internet, coordonnées agent IA).
- Mention « SIRET en cours » retirée du footer.
- Section « Cas clients » de la page Site internet et liens « Cas clients » des footers (accueil + site internet).
- Toggle de thème clair/sombre : le site est désormais forcé en **dark** (`data-theme="dark"` en dur), composant `ThemeToggle` et script anti-FOUC supprimés. Le bloc CSS du thème clair reste présent mais inutilisé.
- Indicateur de disponibilité (`.small-link` « Disponible · 2026 » / « 2 créneaux mai » / « Réponse sous 24 h » + point pulsé) retiré du header et du menu mobile. La prop `statusText` est conservée optionnelle (non rendue) pour ne pas casser l'API ; CSS associé inutilisé.

### Deprecated

### Security
