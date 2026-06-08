# 0001 — Stack Next.js (App Router) + TypeScript, déploiement Vercel

- Statut : accepté
- Date : 2026-06-08

## Contexte

Option/D est livré sous forme de handoff de design figé (`design_handoff_optiond/`) : prototypes HTML/CSS/JS validés, design system partagé, brand kit. Objectif : transposer ces pages en code de production pixel-perfect, dark + light, avec une nav globale et des composants partagés. Cible Lighthouse ≥ 95 mobile.

## Décision

- **Next.js (App Router) + TypeScript** comme framework.
- Polices **Geist / Geist Mono**.
- Déploiement **Vercel** (team `kaynshins-projects`), repo GitHub **public** `Kaynshin/OptionD`.
- Le CSS (`styles.css`) et le JS (`app.js`) du handoff sont déjà externalisés : à porter dans `globals.css` + hooks/composants, sans redessiner.

## Alternatives écartées

- **Recoder en HTML/CSS statique pur** : écarté, pas de composants partagés ni de routing propre pour les 2+ services.
- **Autre framework (Vite/Astro)** : écarté, Vercel + Next.js = intégration native (fonts Geist, image, déploiement, Lighthouse).

## Conséquences

- Le build se fera par feature branches + PR vers `dev`, en déléguant le code aux sous-agents.
- Le handoff reste figé : il sert de cible de contrôle visuel, pas de code à modifier.
