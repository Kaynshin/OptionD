# PROMPT — Implémentation du site & du design system Option/D

> **Copie l'intégralité de ce fichier dans Claude Code** (ou colle-le comme premier message d'une session), à la racine du dossier `design_handoff_optiond/`. Tous les chemins cités sont relatifs à ce dossier. Les fichiers de référence sont fournis dans `references/` et `assets/`.

---

## 0. Rôle & mission

Tu es un ingénieur front-end senior. Ta mission : **reconstruire à l'identique, dans un vrai codebase de production, le site et le design system de la marque Option/D**, à partir des références fournies dans ce dossier.

Le site est un **site vitrine de 3 pages** qui partagent **un seul design system** :

| Page | Fichier prototype | Rôle |
|---|---|---|
| **Accueil** (hub) | `references/site/index.html` | Présente les deux services + CTA vers chacun |
| **Site internet** | `references/site/site-internet.html` | Offre « sites vitrines & landing » (diagnostic, packs, cas, builder-in-public…) |
| **Agent IA** | `references/site/agent-ia.html` | Offre « assistants IA » (problème, solution, réassurance, formules, FAQ) |

Les 3 pages partagent **une feuille de styles unique** `references/site/styles.css` et **un script unique** `references/site/app.js` (déjà externalisés — voir §2). C'est **la source de vérité visuelle absolue**. Ces fichiers sont validés et ne doivent pas être réinterprétés, « améliorés » ni redessinés. Ton job n'est pas de créer du design — il est de **transposer ces prototypes HTML/CSS/JS figés en une application Next.js componentisée, typée et maintenable, dont le rendu est pixel-perfect identique aux prototypes.**

> 🖼️ Des **captures de référence** des 3 pages sont fournies dans `visuals/` (`accueil`, `site-internet`, `agent-ia`). Utilise-les comme cible visuelle de contrôle.

Si à un moment tu hésites entre « fidèle au prototype » et « meilleure pratique perso », **choisis toujours fidèle au prototype.** Le seul écart autorisé : la *structuration du code* (composants, tokens, organisation des fichiers), jamais le *résultat visuel*.

---

## 1. Contexte marque (pour comprendre les intentions, pas à réinventer)

**Option/D** est un atelier freelance IA-augmenté (fondateur : David Jomain, Haute-Savoie). Il porte désormais **deux offres** sous la même marque : (1) des **sites internet** vitrines/landing premium livrés en ~7 jours, et (2) des **agents IA** (standardiste qui répond aux appels, réveil des anciens clients, rappel des prospects, avis Google) en abonnement mensuel pour commerces et indépendants. Une seule couleur de marque : le **magenta `#FF006E`** sur fond noir (digital) ou blanc (print). Wordmark signature : **`Option/D`** (le slash `/` et le `D` toujours en magenta). Headline manifeste sous le wordmark : **`— DAVID · DESIGN · DIGITAL —`** en Geist Mono uppercase.

> ⚠️ Sur le site, la headline est rendue `— DAVID · DIGITAL · DESIGN —` (ordre du HTML actuel). **Reproduis exactement ce qui est dans `references/site/index.html`**, n'inverse rien de ton propre chef. Si tu veux signaler une incohérence avec le design system (`— DAVID · DESIGN · DIGITAL —`), fais-le en commentaire/note mais garde le texte du HTML par défaut.

Détails complets dans :
- `references/design-system.md` — **le design system formel** (tokens, composants, do/don't). À lire en entier.
- `references/brand-identity.md` — fiche d'identité (positionnement, cibles, offre, packs).
- `references/brand-brief.md` — brief de création (direction esthétique, règles de marque non négociables, ton).

---

## 2. Stack technique cible

Sauf instruction contraire de l'utilisateur, implémente en :

- **Next.js 14+ (App Router)** + **TypeScript** — c'est la stack revendiquée par la marque (React/Next.js).
- **CSS** : le design system est **déjà entièrement externalisé** dans `references/site/styles.css` (un seul fichier, 100 % variables CSS, partagé par les 3 pages — voir §4). Porte-le tel quel via **`globals.css`** (le plus sûr) ou découpe-le en **CSS Modules** par composant en gardant les valeurs 1:1. N'introduis **pas** Tailwind si ça t'oblige à retraduire les valeurs et risque des dérives ; si tu utilises Tailwind, mappe les tokens 1:1 dans `tailwind.config` et vérifie le pixel-perfect.
- **JS** : tout le comportement est dans **`references/site/app.js`** (un seul fichier, partagé par les 3 pages). Voir §7 — à porter **verbatim** en hooks `useEffect`.
- **Polices** : **Geist** + **Geist Mono** via `next/font` (package `geist`, ou `next/font/google`). Poids requis : Sans 400/500/600/700, Mono 400/500.
- **Pas de librairie d'animation** nécessaire : tout est en CSS + un peu de Canvas/IntersectionObserver vanilla (voir §7). Tu peux porter le JS tel quel dans des hooks `useEffect`.
- **Déploiement** visé : Vercel. Objectif **Lighthouse ≥ 95 mobile** (perf, a11y, SEO, best practices) — c'est une promesse de marque, donc un critère d'acceptation.

---

## 3. Méthode de travail (ordre imposé)

1. **Lis** les 3 fichiers `references/site/*.html`, `references/site/styles.css`, `references/site/app.js`, puis `references/design-system.md`. Ne code rien avant.
2. **Initialise** le projet Next.js + TypeScript, configure les polices Geist, et pose la couche de tokens (§4) dans `app/globals.css` (copie de `styles.css`).
3. **Porte le CSS** tel quel d'abord (tout `styles.css` dans `globals.css`), vérifie que chaque page rend à l'identique **avant** de découper.
4. **Construis le layout partagé** (Nav globale + Footer) puis **les 3 routes** (§6), section par section, en déplaçant éventuellement les règles CSS dans des modules — **en vérifiant le rendu après chaque section** vs. le prototype et les `visuals/`.
5. **Porte les comportements JS** (§7) **verbatim** depuis `app.js` dans des composants client (`'use client'`) avec `useEffect` + cleanup.
6. **Branche les assets** (§8 : favicon, OG, logos).
7. **Passe la checklist d'acceptation** (§11).

À chaque étape, garde le prototype ouvert dans un onglet et compare visuellement. **Le diff visuel doit être nul.**

---

## 4. Design tokens (à reproduire exactement)

Le prototype définit **tout** en variables CSS, avec un thème **dark par défaut** et un thème **light** activé par `[data-theme="light"]` sur `<html>`. Reprends ces blocs **à l'identique** dans `globals.css` (ne recalcule pas les valeurs — elles ont été calibrées pour WCAG AA).

### 4.1 Tokens invariants (hors thème)

```css
:root{
  --primary:#FF006E;
  --primary-active:#E6005C;
  --on-primary:#FFFFFF;
  --success:#22C55E;
  --warning:#F59E0B;
  --error:#EF4444;
  --sans:'Geist','Inter',system-ui,-apple-system,BlinkMacSystemFont,sans-serif;
  --mono:'Geist Mono','JetBrains Mono',ui-monospace,'SF Mono',monospace;
}
```

### 4.2 Thème DARK (défaut)

```css
:root, [data-theme="dark"]{
  --canvas:#0A0A0A;
  --canvas-pure:#000000;
  --surface-soft:#121212;
  --surface-card:#1A1A1A;
  --surface-elevated:#242424;
  --surface-hover:#2A2A2A;
  --fg:#FFFFFF;
  --fg-strong:#FFFFFF;
  --fg-body:#CCCCCC;
  --fg-body-strong:#E6E6E6;
  --fg-muted:#A0A0A0;
  --fg-soft:#6B6B6B;
  --hairline:#2A2A2A;
  --hairline-strong:#3A3A3A;
  --primary-fg:#FF1A7C;          /* magenta lisible sur canvas sombre — AA ≥18px */
  --grid-line:rgba(255,255,255,0.025);
  --hero-canvas:#000000;
  --hero-halo:rgba(255,0,110,0.14);
  --hero-halo-soft:rgba(200,0,90,0.04);
  --on-magenta-canvas:#0A0A0A;
  --code-token-str:#7dd3fc;
  --code-token-fn:#fde68a;
  --code-token-var:#E5E7EB;
  --code-token-num:#fda4af;
  --nav-bg:rgba(10,10,10,0.78);
  --form-on-mag-bg:#0A0A0A;
  --form-on-mag-border:rgba(255,255,255,0.10);
  --form-on-mag-input-bg:#1A1A1A;
}
```

### 4.3 Thème LIGHT

```css
[data-theme="light"]{
  --canvas:#FAFAF7;
  --canvas-pure:#FFFFFF;
  --surface-soft:#F2F1EC;
  --surface-card:#FFFFFF;
  --surface-elevated:#FFFFFF;
  --surface-hover:#EDECE6;
  --fg:#0A0A0A;
  --fg-strong:#000000;
  --fg-body:#2E2E2E;
  --fg-body-strong:#1A1A1A;
  --fg-muted:#5A5A5A;
  --fg-soft:#8A8A8A;
  --hairline:#E5E3DB;
  --hairline-strong:#CFCDC4;
  --primary-fg:#D60061;          /* magenta assombri sur blanc — AA ≥18px (4.6:1) */
  --grid-line:rgba(10,10,10,0.05);
  --hero-canvas:#F2F1EC;
  --hero-halo:rgba(255,0,110,0.10);
  --hero-halo-soft:rgba(255,0,110,0.03);
  --on-magenta-canvas:#0A0A0A;
  --code-token-str:#0369A1;
  --code-token-fn:#92400E;
  --code-token-var:#1F2937;
  --code-token-num:#9F1239;
  --nav-bg:rgba(250,250,247,0.82);
  --form-on-mag-bg:#0A0A0A;
  --form-on-mag-border:rgba(255,255,255,0.10);
  --form-on-mag-input-bg:#1A1A1A;
}
```

> **Important** : `--primary` (#FF006E) sert aux **surfaces** (boutons, bandeaux, fills magenta). `--primary-fg` (#FF1A7C dark / #D60061 light) sert au **texte/accent magenta** sur canvas, pour garantir le contraste AA. Ne les confonds pas — respecte exactement l'usage du prototype : si une règle utilise `var(--primary)` garde `--primary`, idem pour `--primary-fg`.

### 4.4 Typographie (échelle)

Famille unique : **Geist** (display, body, UI) + **Geist Mono** (code, labels uppercase, headline de marque). Pas de serif. Display toujours **700** avec letter-spacing négatif.

| Usage | Taille (px / clamp) | Poids | Line-height | Letter-spacing |
|---|---|---|---|---|
| Wordmark hero | `clamp(72px,11vw,132px)` | 700 | 1.0 | -0.06em |
| Wordmark nav | 24px | 700 | 1.0 | -0.04em |
| Wordmark footer | 48px | 700 | 1.0 | -0.05em |
| Headline marque (`— DAVID · … —`) | 12px | 500 | 1.4 | 2.4px, uppercase, Mono |
| Hero h1 | `clamp(40px,6vw,72px)` | 700 | 1.05 | -0.035em |
| Section h2 | `clamp(36px,4.4vw,56px)` | 700 | 1.1 | -0.035em |
| Sous-titre / h3 | 32–40px | 700 | 1.15–1.2 | -0.025 à -0.03em |
| Stat number | 64px (unit 28px) | 700 | 1.0 | -0.04em |
| Pack price | 40px | 700 | 1.0 | -0.03em |
| Pack name | 28px | 700 | 1.15 | -0.02em |
| Body lead | 17–18px | 400 | 1.55–1.6 | 0 |
| Body | 16px | 400 | 1.55 | 0 |
| Body small | 13.5–14px | 400 | 1.5–1.55 | 0 |
| Eyebrow / label mono | 11px | 500 | 1.4 | 0.18em, uppercase, Mono |
| Nav link | 14px | 500 | 1.4 | 0 |
| Button | 14px (lg 15px) | 600 | 1.0 | 0 |
| Code | 13.5px | 400 | 1.75 | -0.2em token-level |

### 4.5 Rayons & espacements

- **Radius** : 6px (xs/sm), **8px** (boutons, inputs), **12px** (cards, code window, packs), **16px** (cta-band, gros blocs), `9999px` (pills, dots, toggle).
- **Spacing** : base 4px → 8 / 12 / 16 / 24 / 32 / 48. **Rythme de section : `120px` vertical** (desktop), `80px` mobile (`max-width:720px`). Container `max-width:1280px`, padding latéral `32px` (`20px` mobile).
- **Pas de drop-shadow** structurelle. Les seules ombres sont des *glows magenta* au hover des CTA/packs (ex. `0 8px 24px -8px rgba(255,0,110,.55)`). Reproduis-les exactement.

---

## 5. Règles de marque non négociables

Reprends-les telles quelles (détail dans `references/design-system.md` §Do's and Don'ts) :

1. **Une seule couleur de marque** : magenta `#FF006E`. Jamais de 2ᵉ accent (ni cyan, ni jaune).
2. **Wordmark toujours `Option/D`** — le `/` et le `D` partagent **toujours** la même couleur (magenta). Jamais `OptionD`, jamais `Option D` comme logo.
3. **Headline `— DAVID · … —`** : Geist Mono, uppercase, 12px, letter-spacing 0.20em (2.4px), opacité ~0.62. Les séparateurs sont des **points médians `·` (U+00B7)**, pas des points.
4. **Display = Geist 700** + tracking négatif. La hiérarchie se fait par **taille**, pas par graisse intermédiaire.
5. **Magenta = action & emphase uniquement** (CTA, chiffres stat, slash/D, bandeaux CTA pleins). Jamais en texte courant ni en grand aplat décoratif hors carte magenta intentionnelle.
6. **Halo radial magenta** = hero uniquement. Pas ailleurs.
7. **Pas de hover inventé** au-delà de ce que le prototype encode déjà.
8. Alternance des fonds : ne répète pas deux fois le même mode de surface sur deux bandeaux consécutifs (le prototype alterne déjà `band` / `band soft`).

---

## 6. Architecture (3 routes + layout partagé)

Les 3 pages partagent **un layout** (Nav globale + Footer) et **les mêmes composants**. Structure proposée :

```
app/
  layout.tsx              ← <html>, polices Geist, métadonnées, script anti-FOUC, favicon/OG, <Nav/> + <Footer/>
  globals.css             ← = references/site/styles.css (tokens + tous les composants)
  page.tsx                ← ACCUEIL (hub) : Hero(lockup) + section 2 services + bande méthode
  site-internet/page.tsx  ← SITE INTERNET : le site complet (diagnostic, packs, cas, builder-in-public…)
  agent-ia/page.tsx       ← AGENT IA : problème, solution, réassurance, formules, FAQ, CTA
components/
  Nav.tsx                 ← barre sticky GLOBALE : wordmark+meta → /, liens [Accueil · Site internet · Agent IA], ThemeToggle, CTA. Lien courant = .is-active
  Footer.tsx              ← footer GLOBAL : lockup + headline, colonnes liens inter-pages, barre basse (colonnes légèrement variables par page — voir prototypes)
  ThemeToggle.tsx         ← 2 boutons soleil/lune, persistance localStorage 'optiond-theme'
  Hero.tsx                ← coquille hero (canvas particules + halo + grille). Props eyebrow/lockup/h1/sub/cta/meta
  HeroParticles.tsx       ← canvas vanilla (client) — réseau de particules + répulsion souris (commun aux 3 heros)
  Wordmark.tsx            ← rend Option/D (variants: nav 24 / hero animé clamp / footer 48), slash+D magenta
  Button.tsx              ← variants: primary / sec / ghost / on-mag / on-mag-out ; size lg ; flèche animée
  TargetStrip.tsx         ← bande "Pour qui" — 4 items numérotés (site-internet ET agent-ia)

  # — ACCUEIL (hub) —
  ServiceCard.tsx         ← carte .svc : icône, eyebrow "Service 0X", h3, lede, puces, foot (CTA + prix). Hover: barre magenta gauche
  IconCard.tsx            ← carte .icard : icône en chip + h4 + p. Variante .safe (icône emerald). Sert au hub ET à agent-ia

  # — SITE INTERNET —
  Approche.tsx            ← band-head + 5 steps (grille 5 → 2 → 1)
  Diagnostic.tsx + DiagnosticCard.tsx ← copy + carte signature (accent magenta), lignes k/v/score, "Trois priorités"
  Stats.tsx               ← 4 stats magenta (7 jours / 95+ / 3 / 1)
  Packs.tsx + PackCard.tsx ← 3 packs (Essentiel / Signature[featured] / Atelier) + modulators pills
  Cases.tsx               ← band-head + case-tabs + 3 cartes (thumbs CSS abstraits)
  BuilderInPublic.tsx + CodeWindow.tsx ← copy + fenêtre de code (chrome, <pre> tokenisé, status live)
  Testimonial.tsx         ← citation + attribution
  Faq.tsx                 ← <details>/<summary> natif, 1er ouvert, marqueur +/− (réutilisé par agent-ia)
  CtaContact.tsx          ← cta-band magenta + formulaire URL (diagnostic offert)

  # — AGENT IA —
  LeakPanel.tsx           ← visuel "seau percé" : liste de fuites (drip magenta pulsé + texte + tag de perte)
  PricingCard.tsx         ← carte .pack avec .feat-list (✓ inclus / — exclu / + option), variante featured magenta
  (réutilise Hero, IconCard ×4 puis ×3, Faq, et un cta-band centré)
lib/
  useActiveSection.ts     ← (optionnel) surlignage au scroll — utile seulement sur les longues pages à ancres
```

**Composants partagés clés** : `Nav`, `Footer`, `Hero`, `HeroParticles`, `Wordmark`, `Button`, `IconCard`, `Faq`, `ThemeToggle`. Construis-les une fois.

Découpe les CSS par composant (CSS Modules) en **gardant les noms de classes et valeurs**. Les sélecteurs globaux (`section.band`, `.container`, `.btn*`, variables, media queries) restent dans `globals.css`.

> **Note `data-screen-label`** : chaque page racine du prototype porte un `data-screen-label` (`Accueil — Option/D`, `Site internet — …`, `Agent IA — Option/D`). Conserve un attribut/commentaire équivalent.

### 6.1 Nav & navigation inter-pages

La **Nav est globale et identique** sur les 3 pages : marque `Option/D` (→ `/`), trois liens `Accueil` · `Site internet` · `Agent IA`, le `ThemeToggle`, et un bouton CTA dont le libellé varie par page (« Me contacter » sur l'accueil, « Demander un diagnostic » sur site-internet, « Réserver 20 min » sur agent-ia). Le lien de la page courante porte `.is-active`. Sous `max-width:1180px` les liens texte sont masqués (le prototype n'a **pas** de menu hamburger — si tu en ajoutes un, **demande d'abord**).

### 6.2 Page ACCUEIL (`app/page.tsx`)

Hub court : `Hero` (eyebrow + **lockup animé Option/D** + headline « Deux façons de faire travailler le digital… » + sub + 2 CTA `Sites internet →` / `Agents IA →` + meta) → section **2 services** (`.hub` = 2× `ServiceCard`, l'une « Sites internet » → `/site-internet`, l'autre « Agents IA » → `/agent-ia`, chacune avec prix « à partir de ») → bande méthode (`band-head` + 3× `IconCard`) → `Footer`.

### 6.3 Page AGENT IA (`app/agent-ia/page.tsx`)

Dans l'ordre : `Hero` (h1 « Votre équipe qui ne dort jamais. ») → `TargetStrip` → **Problème** (`band-head` + `.problem-row` : copy + `LeakPanel`) → **Solution** (`band soft`, `band-head` + 4× `IconCard`) → **Réassurance** (`band-head` + 3× `IconCard.safe`) → **Formules** (`band soft`, `band-head` + 3× `PricingCard` dont Essentiel featured + note tarifaire) → **FAQ** (`Faq`, 5 items) → **CTA final** (`cta-band` centré « On en parle ? » + bouton « Réserver 20 minutes » + ligne coordonnées) → `Footer`. Tout le texte est dans `references/site/agent-ia.html` — reprends-le mot pour mot.

---

## 7. Comportements JS à reproduire (à l'identique)

Tout le comportement des 3 pages est dans **`references/site/app.js`** (fichier unique partagé). Porte-le en `'use client'` + `useEffect` (cleanup des observers/RAF/listeners au démontage).

> 🔒 **RÈGLE D'OR POUR L'ISO — porte le JS VERBATIM.** Les descriptions ci-dessous servent à **comprendre** le comportement, **pas** à le réécrire de mémoire. Pour chaque effet (et en particulier les **particules du hero**), **copie le corps exact des fonctions** depuis `references/site/app.js` dans ton `useEffect` — mêmes constantes (densité `(w*h)/16000`, plafond 90, `dpr≤2`, vitesse ±0.18, **18 % magenta**, répulsion rayon² 14000 / facteur 0.6, friction 0.985, liaisons distance² 9000 avec opacité `(1-d2/9000)*(isLight?0.10:0.18)`, halo magenta `r*4` à `a*0.18`, seuils IntersectionObserver 0.05). **Ne réimplémente pas, ne « simplifie » pas, n'arrondis aucune valeur.** Le seul travail d'adaptation : récupérer le `<canvas>` via un `ref` React, lancer la logique dans `useEffect`, et **retourner une fonction de cleanup** (`cancelAnimationFrame`, `io.disconnect()`, `removeEventListener` resize/mousemove/mouseleave). Le résultat doit être bit-pour-bit le même comportement qu'au prototype.

1. **Hero particles** (`<canvas class="hero-particles">`) : réseau de ~90 particules max (densité `(w*h)/16000`, plafond 90), vitesse ±0.18, **18 % de particules magenta** avec halo, lignes de liaison sous distance² 9000, **répulsion à la souris** (rayon² 14000), `dpr` plafonné à 2. Démarre/stoppe via IntersectionObserver (seuil 0.05). **Désactivé si `prefers-reduced-motion: reduce`.** La couleur de base suit le thème (`255,255,255` dark / `10,10,10` light), lue depuis `data-theme`. Fade-in via classe `.is-on` (opacity 0 → 1, transition 0.8s).
2. **Lockup animé du hero** (CSS only, dans `Wordmark` variant hero) : `slashSweep` 6s (le slash balaie + glow), `dPulse` 6s (le D pulse/corona), `optShimmer` sur chaque lettre de "Option" (delays 0→0.25s), `caretBlink` (curseur). **Toutes désactivées sous `prefers-reduced-motion`.**
3. **Reveal diag-card** : IntersectionObserver (seuil 0.2) ajoute `.in-view` → animation `scoreReveal`. Sous reduced-motion, applique `.in-view` direct sans animer.
4. **Nav active link** : le script surligne le lien de section au scroll **uniquement** s'il existe des liens `a[href^="#"]` (cas des longues pages à ancres). Sur la nav globale inter-pages, c'est inerte — le lien actif est posé en dur via `.is-active` côté serveur selon la route courante. Le `HeroParticles`, le `ThemeToggle`, la `Faq` (natif) et le reveal de la diag-card (présent seulement sur site-internet) sont communs/conditionnels — monte chaque effet seulement si sa cible existe sur la page.
5. **Theme toggle** : lit `localStorage['optiond-theme']` (`'light'|'dark'`, défaut `dark`), applique `data-theme` sur `<html>`, met à jour `aria-pressed` des 2 boutons. **Ajoute un script anti-FOUC inline dans `<head>`/`layout` qui pose `data-theme` avant le paint** (sinon flash du mauvais thème au chargement SSR).
6. **FAQ** : `<details>`/`<summary>` natif HTML — pas de JS. Premier item `open`. Marqueur `+`/`−` en `::after`. Garde le natif (accessible, sans JS).
7. **Hover micro-interactions** (CSS) : flèche `.arrow` qui glisse `translateX(3px)`, glow magenta sur `.btn-primary:hover`, `translateY(-3px)` + ombre sur `.pack`/`.case` au hover, `:active{translateY(1px)}` sur boutons. Reproduis-les toutes.
8. **Formulaire contact** : `onsubmit` est neutralisé (`preventDefault`) dans le prototype. À toi de brancher un vrai handler (mailto, API route, ou service) — **mais conserve le markup et le style exacts** (préfixe `https://`, input mono, bouton "Lancer ↗", micro-copy avec ✓). Demande à l'utilisateur la destination réelle si non précisée.

---

## 8. Assets fournis (`assets/`)

- `assets/favicon.svg` + `assets/logos/svg/favicon.svg` — favicon (D magenta). Branche-le dans `layout.tsx` (`icon`).
- `assets/logos/svg/` — set complet vectoriel : `lockup-dark/light`, `lockup-mono-black/white`, `wordmark-dark/light`, `monogram-D-magenta`, `monogram-D-magenta-on-black`, `app-icon-rounded-magenta`.
- `assets/logos/png/` — `favicon-32`, `app-icon-180/192/512-magenta` (PWA / Apple touch), `og-image-dark-1200x630` (Open Graph).
- `assets/README.md` — manifeste de la brand kit (provenance, conventions de nommage).

**Sur le site, le wordmark est rendu en HTML/CSS live** (texte `Option<span class="accent">/D</span>`), pas en image — **garde cette approche** (meilleur rendu, théma­ble, accessible). Les SVG/PNG servent pour favicon, OG, app icons, et éventuels usages hors-page. Utilise `og-image-dark-1200x630.png` pour les métadonnées Open Graph/Twitter dans `layout.tsx`.

---

## 9. Bi-mode dark / light

Le site est **dark par défaut**. Le toggle permet de basculer en light. Les deux thèmes sont entièrement définis en variables (§4) — **aucune couleur ne doit être codée en dur dans les composants**, tout passe par `var(--…)`. Vérifie que **chaque** section rend correctement dans les deux thèmes (le prototype est déjà correct ; ta version doit l'être aussi). Le halo du hero, les tokens de code, le fond nav (blur) et les contrastes magenta changent entre thèmes — c'est déjà géré par les variables, ne touche pas.

---

## 10. Responsive (breakpoints du prototype)

Reprends exactement ces media queries (présentes dans `references/site/index.html`) :

- **`max-width:1180px`** : nav links + small-link + meta cachés (pas de menu hamburger dans le prototype — à ajouter proprement seulement si l'utilisateur le souhaite).
- **`max-width:1100px`** : stats 4→2, steps 5→2, packs/formules 3→1, cases 3→2, **hub 2→1**, **icards.cols-4 4→2**, **problem-row → 1 colonne**, diag-row/build/cta-band → 1 colonne, testimonial → empilé, band-head → 1 colonne, footer 4→2.
- **`max-width:720px`** : sections 120→80px, container 32→20px, cases →1, **icards →1**, **svc padding 28px**, **leak resserré** (tag de perte masqué), cta-band padding 40px, footer →1 colonne.

> Le prototype **n'a pas de menu hamburger** : sous 1180px les liens disparaissent simplement. Si tu juges qu'un menu mobile est nécessaire (recommandé pour un vrai site), **propose-le à l'utilisateur avant de l'ajouter** — ce serait le seul ajout fonctionnel hors prototype.

---

## 11. Checklist d'acceptation (à valider avant de livrer)

- [ ] **Les 3 pages** rendent **pixel-perfect identiques** à leurs prototypes (`index.html`, `site-internet.html`, `agent-ia.html`), dark **et** light, section par section (cf. `visuals/`).
- [ ] La **Nav globale** est identique sur les 3 pages, le lien de la page courante est `.is-active`, et tous les liens inter-pages fonctionnent (`/`, `/site-internet`, `/agent-ia`).
- [ ] Toutes les animations CSS (slash sweep, D pulse, shimmer, caret, hover, score reveal, drip pulsé du LeakPanel) fonctionnent et **se désactivent sous `prefers-reduced-motion`**.
- [ ] Le canvas de particules tourne dans **chaque** hero, suit la souris, suit le thème, se met en pause hors-écran, et est désactivé sous reduced-motion.
- [ ] Le toggle de thème persiste en `localStorage` et **pas de flash** de thème au chargement (script anti-FOUC).
- [ ] La FAQ s'ouvre/ferme (site-internet ET agent-ia). Les ancres internes des pages longues fonctionnent.
- [ ] Les **formules Agent IA** s'affichent correctement : Essentiel en featured magenta, `.feat-list` avec ✓ (inclus) / — (exclu) / + (option), et la note tarifaire sous les cartes.
- [ ] Geist + Geist Mono chargées via `next/font` (pas de FOUT, pas de CLS).
- [ ] Favicon + OG image + métadonnées par page (titres distincts, description, lang `fr`) en place.
- [ ] **Lighthouse mobile ≥ 95** sur les 4 catégories, sur les 3 pages.
- [ ] Contrastes WCAG **AA** respectés (les tokens y pourvoient — ne les altère pas).
- [ ] Aucune couleur codée en dur : tout via variables CSS. Aucune dérive de valeur vs. prototype.
- [ ] Build `next build` propre, zéro erreur TypeScript, zéro warning console au runtime.

---

## 12. Ce qu'il ne faut PAS faire

- ❌ Ne **redessine** pas, ne « modernise » pas, n'ajoute pas de sections, ne change pas la copie (textes français exacts du prototype).
- ❌ N'introduis **pas** une 2ᵉ couleur, ni dégradé arc-en-ciel, ni ombres portées génériques.
- ❌ Ne remplace **pas** le wordmark live par une image, ne sépare pas la couleur du `/` et du `D`.
- ❌ Ne change **pas** les valeurs des tokens « pour faire mieux » — elles sont calibrées AA.
- ❌ N'ajoute **pas** d'emoji, d'icônes décoratives, de librairie UI lourde (shadcn, MUI…) qui imposerait son propre style. Reste fidèle au CSS du prototype.
- ❌ Ne mets **pas** de hover/animation au-delà de ceux déjà encodés.

---

## 13. Contenu textuel & données (rappel)

Toute la copie des 3 pages est **figée dans les fichiers `references/site/*.html`** — reprends-la mot pour mot, ponctuation et accents compris (`Option/D`, `— DAVID · DIGITAL · DESIGN —`, « 2 500 », « 890 €/mois », « Lighthouse ≥ 95 », etc.). Les données « exemple » (Domaine Gagnaud, Atelier B. Roussin, Marina Ferraz, DIAG-2026-0418…) et les **coordonnées** de la page Agent IA (David Jomain · 06 00 00 00 00 · david@optiond.fr) sont du contenu à confirmer : garde-les tant que l'utilisateur ne fournit pas les vraies valeurs.

---

## 14. Pour aller plus loin (si l'utilisateur le demande)

- Variante **print** du site : voir `references/site/index-print.html`.
- Pages supplémentaires (mentions légales, page diagnostic détaillée, blog builder-in-public) : à construire **dans le même système** (mêmes tokens, mêmes composants), jamais en réinventant le style.
- PWA / manifest : les app-icons magenta sont fournis dans `assets/logos/png/`.

---

**Récapitulatif en une phrase :** porte les **3 pages** (`references/site/index.html`, `site-internet.html`, `agent-ia.html`) partageant `styles.css` + `app.js` en une app Next.js + TypeScript multi-routes, componentisée et typée, en conservant **exactement** les tokens (§4), le markup, la copie, les animations et le comportement — le rendu visuel doit être indiscernable des prototypes, en dark comme en light.
