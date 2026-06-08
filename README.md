# Option/D

Site vitrine **Option/D** — 2 services (Sites internet & Agent IA) sur un design system unique.
Cible : **Next.js (App Router) + TypeScript**, polices Geist / Geist Mono, déploiement **Vercel**, Lighthouse ≥ 95 mobile.

> Statut : **bootstrap**. Le code de production sera porté à partir du handoff de design (`design_handoff_optiond/`).

## Structure

```
.
├── docs/                     # Documentation vivante (CHANGELOG, décisions, design system, stratégie, architecture)
│   └── design_handoff_optiond/   # Handoff design figé : prototypes HTML/CSS/JS, design system, brand kit, visuels de référence
└── README.md
```

Le handoff (`docs/design_handoff_optiond/`) est la **source de vérité visuelle** : prototypes validés à transposer en code pixel-perfect. Voir `docs/design_handoff_optiond/PROMPT.md` pour la mission détaillée.

## Workflow

Branches : `main` (stable) + `dev` (intégration). Tout passe par des feature branches et des PR — voir `docs/`.

## Liens

- Repo : https://github.com/Kaynshin/OptionD
- Déploiement : Vercel (`kaynshins-projects`)
