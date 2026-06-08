# Architecture

> Statut : à compléter au fur et à mesure du portage Next.js.

## Vue d'ensemble

Site vitrine Next.js (App Router) + TypeScript. Rendu statique privilégié (perf, Lighthouse ≥ 95).

## Routes (cible)

| Route | Rôle | Prototype source |
|---|---|---|
| `/` | Accueil (hub), présente les 2 services | `docs/design_handoff_optiond/references/site/index.html` |
| `/site-internet` | Offre sites vitrines & landing | `docs/design_handoff_optiond/references/site/site-internet.html` |
| `/agent-ia` | Offre assistants IA | `docs/design_handoff_optiond/references/site/agent-ia.html` |

## Design system

Source : `docs/design_handoff_optiond/references/design-system.md` + `styles.css` (tokens, composants). À porter dans `globals.css` + composants partagés. Voir `docs/design-system.md`.

## Composants partagés (cible)

- Nav globale, footer, wordmark `Option/D` rendu en HTML/CSS live (pas en image).
- Comportements JS (particules, thème dark/light, reveal) depuis `app.js` → hooks/composants client.
