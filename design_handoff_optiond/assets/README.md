# Option/D — Brand Kit V1.0

**Date** : 28 avril 2026
**Source de vérité** : `../DESIGN-OptionD.md`
**Tokens-clés** : magenta `#FF006E` · canvas dark `#0A0A0A` · canvas light `#FFFFFF` · police Geist Sans 700 (wordmark) + Geist Mono 500 (headline)

---

## 📁 Arborescence

```
Brand/
├── logos/
│   ├── svg/                   ← 19 fichiers vectoriels (à privilégier)
│   └── png/                   ← 37 fichiers raster (favicons, app-icons, social, OG)
├── wallpapers/
│   ├── desktop-4k/            ← 6 fichiers · 3840×2160
│   └── smartphone/            ← 6 fichiers · 1272×2772
├── preview/
│   └── brand-kit.html         ← Page de visualisation complète
└── README.md
```

---

## 🔠 Logos — quand utiliser quoi

### SVG (19 fichiers — usage prioritaire)
| Fichier | Usage |
|---|---|
| `lockup-dark.svg` | Site web dark, signature email dark, OG, papeterie premium |
| `lockup-light.svg` | Site web light, print, papeterie standard |
| `lockup-mono-white.svg` | T-shirt blanc sur dark, gravure, monochrome digital |
| `lockup-mono-black.svg` | T-shirt noir sur light, sérigraphie, gravure |
| `lockup-on-dark-transparent.svg` | Lockup à poser sur n'importe quelle surface dark |
| `lockup-on-light-transparent.svg` | Lockup à poser sur n'importe quelle surface light |
| `wordmark-{dark,light}.svg` | Wordmark seul (sans headline) — nav, header serré |
| `wordmark-on-{dark,light}-transparent.svg` | Wordmark seul transparent |
| `monogram-D-magenta.svg` | D seul transparent — favicon, app icon, watermark |
| `monogram-D-{magenta-on-black,white-on-black}.svg` | D plein, fond inclus |
| `app-icon-rounded-{dark,light,magenta}.svg` | Icône app iOS/macOS rounded square |
| `avatar-circle-{dark,magenta}.svg` | Avatar profil circulaire |
| `favicon.svg` | Favicon SVG (modern browsers) |

### PNG (37 fichiers — usage spécifique)
- **Favicon** : `favicon-{16,32,48,64,96,128}.png`
- **Apple Touch icon (iOS)** : `app-icon-180-dark.png`
- **Android / PWA** : `app-icon-{192,512}-{dark,magenta,light}.png`
- **macOS / large** : `app-icon-1024-{dark,magenta,light}.png`
- **Avatar social** : `avatar-{200,400,800}-{dark,magenta}.png`, `profile-{400,800}-{dark,light}.png`
- **OG image (Twitter card, LinkedIn share, Facebook)** : `og-image-{dark,light}-1200x630.png`
- **LinkedIn banner profil** : `linkedin-banner-1584x396.png`
- **X (Twitter) header** : `x-header-1500x500.png`
- **Signature email** : `email-signature-{dark,light}-600x180.png`

---

## 🖼️ Wallpapers — 3 concepts

### Concept 01 — **Halo**
Halo radial magenta sur canvas pur, lockup discret au pied. Cinematic, sobre, voltage retenu.
*Idéal pour usage quotidien — laisse les icônes respirer.*

### Concept 02 — **Monogramme**
Le D magenta habite l'écran, sur grille de points subtile. Sur desktop, il est positionné à droite pour libérer la zone des icônes.
*Idéal pour les moments où tu veux porter visiblement la marque.*

### Concept 03 — **Slash**
Wordmark Option/D plein cadre, scanlines très subtiles, label « OPTIOND / V1.0 » et rail magenta. Editorial console, builder-in-public.
*Idéal pour les pitchs, partages d'écran, signature visuelle forte.*

Chaque concept est livré en :
- **Desktop 4K** (3840×2160) · dark + light
- **Mobile** (1272×2772) · dark + light

---

## 📐 Comment installer un wallpaper

**macOS**
1. Ouvre Réglages Système → Fond d'écran
2. Glisse le PNG dans la liste, ou « Ajouter dossier » et pointe vers `wallpapers/desktop-4k/`

**iOS / iPhone**
1. AirDrop le PNG mobile sur ton téléphone (ou envoie-toi par message)
2. Photos → Fond d'écran → Définir comme fond d'écran

**Windows**
1. Clic droit sur le PNG → « Définir en tant qu'arrière-plan du Bureau »

---

## 🌐 Comment intégrer le kit web

```html
<!-- Favicon (head) -->
<link rel="icon" type="image/svg+xml" href="/Brand/logos/svg/favicon.svg">
<link rel="icon" type="image/png" sizes="32x32" href="/Brand/logos/png/favicon-32.png">
<link rel="apple-touch-icon" sizes="180x180" href="/Brand/logos/png/app-icon-180-dark.png">

<!-- Open Graph -->
<meta property="og:image" content="https://optiond.fr/Brand/logos/png/og-image-dark-1200x630.png">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:image" content="https://optiond.fr/Brand/logos/png/og-image-dark-1200x630.png">

<!-- PWA manifest -->
{
  "icons": [
    { "src": "/Brand/logos/png/app-icon-192-dark.png", "sizes": "192x192", "type": "image/png" },
    { "src": "/Brand/logos/png/app-icon-512-dark.png", "sizes": "512x512", "type": "image/png" }
  ]
}
```

---

## 🎨 Tokens visuels (rappel — extrait DESIGN-OptionD.md)

| Token | Valeur |
|---|---|
| `primary` | `#FF006E` |
| `primary-active` | `#E6005C` |
| `canvas-dark` | `#0A0A0A` |
| `canvas-pure-black` | `#000000` |
| `canvas-light` | `#FFFFFF` |
| `cream` (premium print) | `#F5F1EA` |
| `surface-card-dark` | `#1A1A1A` |
| Wordmark | Geist Sans 700, letter-spacing -0.05em |
| Headline | Geist Mono 500, letter-spacing 2.4px, opacity 0.62 |

**Règles non-négociables** : slash `/` obligatoire entre Option et D · slash et D toujours même couleur · headline immuable dans l'ordre `— DAVID · DESIGN · DIGITAL —` · pas de seconde couleur d'accent.
