# Handoff Option/D — Package pour Claude Code

Ce dossier contient **tout ce qu'il faut pour recoder à l'identique** le site Option/D (désormais **3 pages**) dans un vrai codebase (Next.js + TypeScript visé).

## Comment l'utiliser

1. Ouvre **Claude Code** dans ce dossier (`design_handoff_optiond/`).
2. Colle l'intégralité de **`PROMPT.md`** comme premier message (ou dis : « Lis `PROMPT.md` et exécute la mission »).
3. Claude Code lira les références et reconstruira les 3 pages composant par composant.

## Le site : 3 pages, un seul design system

| Page | Prototype | Rôle |
|---|---|---|
| **Accueil** (hub) | `references/site/index.html` | Présente les 2 services + CTA vers chacun |
| **Site internet** | `references/site/site-internet.html` | Offre sites vitrines & landing (diagnostic, packs, cas…) |
| **Agent IA** | `references/site/agent-ia.html` | Offre assistants IA (problème, solution, formules, FAQ) |

Les 3 pages partagent **une feuille de styles** (`references/site/styles.css`) et **un script** (`references/site/app.js`) — un seul design system, zéro duplication.

## Contenu du dossier

```
design_handoff_optiond/
├── PROMPT.md                      ← LE prompt à coller dans Claude Code (mission + tokens + specs + 3 routes)
├── README.md                      ← ce fichier
├── references/
│   ├── site/
│   │   ├── index.html             ← Accueil (hub)
│   │   ├── site-internet.html     ← page service « Site internet »
│   │   ├── agent-ia.html          ← page service « Agent IA »
│   │   ├── styles.css             ← design system COMPLET (partagé par les 3 pages)
│   │   ├── app.js                 ← comportements JS (partagés : particules, thème, reveal…)
│   │   └── index-print.html       ← variante print du site internet
│   ├── design-system.md           ← design system formel (tokens, composants, do/don't)
│   ├── brand-identity.md          ← fiche d'identité marque
│   └── brand-brief.md             ← brief de création (direction esthétique, règles, ton)
├── visuals/                       ← captures de référence des 3 pages (cible visuelle de contrôle)
│   ├── 01-accueil.png … 02-accueil.png
│   ├── 01-agent-ia.png … 03-agent-ia.png
│   └── 01-site-internet.png … 02-site-internet.png
└── assets/
    ├── favicon.svg, lockup-*.svg, wordmark-*.svg, monogram-*.svg
    ├── README.md                  ← manifeste de la brand kit
    └── logos/  (svg/ + png/)       ← set complet : lockups, wordmarks, monogrammes, app-icons, OG image
```

## Le principe en une ligne

Les prototypes sont **figés et validés**. La mission n'est pas de redessiner mais de **transposer ces 3 pages en code de production pixel-perfect** — mêmes tokens, même markup, même copie, mêmes animations, en dark comme en light, avec une Nav globale et des composants partagés.

## Notes

- Stack visée : **Next.js (App Router, 3 routes) + TypeScript**, polices **Geist / Geist Mono**, déploiement **Vercel**, cible **Lighthouse ≥ 95 mobile**. Détails dans `PROMPT.md`.
- Le wordmark `Option/D` est rendu **en HTML/CSS live** (pas en image) — à conserver. Les SVG/PNG servent au favicon, à l'OG image et aux app-icons.
- Le **CSS et le JS sont déjà externalisés** (`styles.css`, `app.js`) : c'est le design system partagé — à porter tel quel dans `globals.css` + hooks.
- Données à confirmer : les cas clients exemples (site internet) et les coordonnées de la page Agent IA (mises par défaut : David Jomain · 06 00 00 00 00 · contact@optiond.fr).
