---
version: alpha
name: OptionD
description: A premium freelance web-agency interface anchored on warm white canvas (light mode, print) or near-pure black canvas (dark mode, digital), with magenta voltage as the singular brand color. Geist Sans typography in confident weights, magenta CTAs, and magenta-text stat numbers carry the brand voice across every surface. The wordmark "Option/D" with slash separator (slash and D both magenta) and the headline "— DAVID · DESIGN · DIGITAL —" in mono uppercase are the brand's typographic signature. Modes alternate: white for print/papeterie, dark with optional radial magenta halo for digital surfaces. Brand identity built on three D's — David (the human signature), Design (the craft), Digital (the medium).

colors:
  primary: "#FF006E"
  primary-active: "#E6005C"
  primary-disabled: "#3D0019"
  on-primary: "#FFFFFF"
  ink: "#0A0A0A"
  ink-pure: "#000000"
  on-dark: "#FFFFFF"
  cream: "#F5F1EA"
  body-on-dark: "#CCCCCC"
  body-strong-on-dark: "#E6E6E6"
  body-on-light: "#3A3A3A"
  body-soft-on-light: "#666666"
  muted-on-dark: "#888888"
  muted-soft-on-dark: "#5A5A5A"
  muted-on-light: "#75758A"
  hairline-dark: "#2A2A2A"
  hairline-strong-dark: "#3A3A3A"
  hairline-light: "#E5E5E5"
  hairline-strong-light: "#D0D0D0"
  canvas-light: "#FFFFFF"
  canvas-dark: "#0A0A0A"
  canvas-pure-black: "#000000"
  surface-soft-dark: "#121212"
  surface-card-dark: "#1A1A1A"
  surface-elevated-dark: "#242424"
  surface-magenta-band: "#FF006E"
  halo-magenta-soft: "rgba(255, 0, 110, 0.10)"
  halo-magenta-medium: "rgba(255, 0, 110, 0.14)"
  halo-magenta-strong: "rgba(255, 0, 110, 0.18)"
  accent-emerald: "#22C55E"
  accent-amber: "#F59E0B"
  accent-rose: "#EF4444"
  success: "#22C55E"
  warning: "#F59E0B"
  error: "#EF4444"

typography:
  brand-wordmark:
    fontFamily: "Geist, Inter, sans-serif"
    fontSize: 88px
    fontWeight: 700
    lineHeight: 1.0
    letterSpacing: -0.05em
  brand-wordmark-lg:
    fontFamily: "Geist, Inter, sans-serif"
    fontSize: 120px
    fontWeight: 700
    lineHeight: 1.0
    letterSpacing: -0.06em
  brand-wordmark-sm:
    fontFamily: "Geist, Inter, sans-serif"
    fontSize: 32px
    fontWeight: 700
    lineHeight: 1.0
    letterSpacing: -0.04em
  brand-headline:
    fontFamily: "Geist Mono, JetBrains Mono, monospace"
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 2.4px
    textTransform: uppercase
  display-xl:
    fontFamily: "Geist, Inter, sans-serif"
    fontSize: 72px
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: -2.5px
  display-lg:
    fontFamily: "Geist, Inter, sans-serif"
    fontSize: 56px
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: -2px
  display-md:
    fontFamily: "Geist, Inter, sans-serif"
    fontSize: 40px
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: -1.5px
  display-sm:
    fontFamily: "Geist, Inter, sans-serif"
    fontSize: 32px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: -1px
  title-lg:
    fontFamily: "Geist, Inter, sans-serif"
    fontSize: 24px
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: -0.3px
  title-md:
    fontFamily: "Geist, Inter, sans-serif"
    fontSize: 18px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 0
  title-sm:
    fontFamily: "Geist, Inter, sans-serif"
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 0
  stat-display:
    fontFamily: "Geist, Inter, sans-serif"
    fontSize: 56px
    fontWeight: 700
    lineHeight: 1.0
    letterSpacing: -1.5px
  body-lg:
    fontFamily: "Geist, Inter, sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0
  body-md:
    fontFamily: "Geist, Inter, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0
  body-sm:
    fontFamily: "Geist, Inter, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0
  caption:
    fontFamily: "Geist, Inter, sans-serif"
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0
  caption-uppercase:
    fontFamily: "Geist Mono, JetBrains Mono, monospace"
    fontSize: 11px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 1.8px
  code:
    fontFamily: "Geist Mono, JetBrains Mono, monospace"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: -0.2px
  button:
    fontFamily: "Geist, Inter, sans-serif"
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1
    letterSpacing: 0
  nav-link:
    fontFamily: "Geist, Inter, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0

rounded:
  xs: 4px
  sm: 6px
  md: 8px
  lg: 12px
  xl: 16px
  pill: 9999px
  full: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  section: 96px

components:
  brand-lockup:
    typography: "{typography.brand-wordmark}"
    color: "{colors.on-dark}"
    accent-color: "{colors.primary}"
    separator: "/"
    headline: "— DAVID · DESIGN · DIGITAL —"
    headline-typography: "{typography.brand-headline}"
    headline-color-on-dark: "rgba(255, 255, 255, 0.62)"
    headline-color-on-light: "rgba(23, 23, 28, 0.62)"
    headline-spacing-top: 22px
  monogram-D:
    typography: "{typography.brand-wordmark-sm}"
    color: "{colors.primary}"
    sizing: "16px to 96px"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 12px 20px
    height: 40px
  button-primary-active:
    backgroundColor: "{colors.primary-active}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
  button-primary-disabled:
    backgroundColor: "{colors.primary-disabled}"
    textColor: "{colors.muted-on-dark}"
    rounded: "{rounded.md}"
  button-secondary-dark:
    backgroundColor: "{colors.surface-card-dark}"
    textColor: "{colors.on-dark}"
    border: "1px solid {colors.hairline-strong-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 12px 20px
    height: 40px
  button-secondary-light:
    backgroundColor: "{colors.canvas-light}"
    textColor: "{colors.ink}"
    border: "1px solid {colors.hairline-strong-light}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 12px 20px
    height: 40px
  button-text-link:
    backgroundColor: transparent
    textColor: "{colors.primary}"
    typography: "{typography.button}"
  button-icon-circular:
    backgroundColor: "{colors.surface-card-dark}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.full}"
    size: 36px
  text-link-on-dark:
    backgroundColor: transparent
    textColor: "{colors.primary}"
    typography: "{typography.body-md}"
    decoration: underline
  text-link-on-light:
    backgroundColor: transparent
    textColor: "{colors.primary}"
    typography: "{typography.body-md}"
    decoration: underline
  top-nav-dark:
    backgroundColor: "{colors.canvas-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.nav-link}"
    height: 64px
    border-bottom: "1px solid {colors.hairline-dark}"
  top-nav-light:
    backgroundColor: "{colors.canvas-light}"
    textColor: "{colors.ink}"
    typography: "{typography.nav-link}"
    height: 64px
    border-bottom: "1px solid {colors.hairline-light}"
  hero-band-dark:
    backgroundColor: "{colors.canvas-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.display-xl}"
    padding: 96px 24px
  hero-band-dark-halo:
    backgroundColor: "{colors.canvas-pure-black}"
    backgroundOverlay: "radial-gradient(ellipse 90% 70% at center, {colors.halo-magenta-soft} 0%, rgba(200, 0, 90, 0.03) 35%, transparent 70%)"
    textColor: "{colors.on-dark}"
    typography: "{typography.display-xl}"
    padding: 96px 24px
  hero-band-light:
    backgroundColor: "{colors.canvas-light}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    padding: 96px 24px
  hero-stat-card:
    backgroundColor: transparent
    textColor: "{colors.primary}"
    typography: "{typography.stat-display}"
  feature-card-magenta:
    backgroundColor: "{colors.surface-magenta-band}"
    textColor: "{colors.on-primary}"
    typography: "{typography.title-md}"
    rounded: "{rounded.lg}"
    padding: 32px
  feature-card-dark:
    backgroundColor: "{colors.surface-card-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.title-md}"
    rounded: "{rounded.lg}"
    padding: 32px
    border: "1px solid {colors.hairline-dark}"
  feature-card-light:
    backgroundColor: "{colors.canvas-light}"
    textColor: "{colors.ink}"
    typography: "{typography.title-md}"
    rounded: "{rounded.lg}"
    padding: 32px
    border: "1px solid {colors.hairline-light}"
  code-window-card:
    backgroundColor: "{colors.surface-card-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.code}"
    rounded: "{rounded.lg}"
    padding: 24px
    border: "1px solid {colors.hairline-dark}"
  diagnostic-card:
    backgroundColor: "{colors.surface-card-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.title-md}"
    rounded: "{rounded.lg}"
    padding: 32px
    border: "1px solid {colors.hairline-dark}"
    accent-border: "1px solid {colors.primary}"
  pack-card:
    backgroundColor: "{colors.surface-card-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.title-lg}"
    rounded: "{rounded.lg}"
    padding: 32px
    border: "1px solid {colors.hairline-dark}"
  pack-card-featured:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.title-lg}"
    rounded: "{rounded.lg}"
    padding: 32px
  stat-callout:
    backgroundColor: transparent
    textColor: "{colors.primary}"
    typography: "{typography.stat-display}"
  cta-band-magenta:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.display-md}"
    rounded: "{rounded.lg}"
    padding: 64px
  text-input-dark:
    backgroundColor: "{colors.surface-card-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: 10px 14px
    height: 40px
    border: "1px solid {colors.hairline-strong-dark}"
  text-input-dark-focused:
    backgroundColor: "{colors.surface-card-dark}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.md}"
    border: "1px solid {colors.primary}"
  category-tab:
    backgroundColor: transparent
    textColor: "{colors.muted-on-dark}"
    typography: "{typography.nav-link}"
    rounded: "{rounded.md}"
    padding: 8px 14px
  category-tab-active:
    backgroundColor: "{colors.surface-card-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.nav-link}"
    rounded: "{rounded.md}"
  badge-pill:
    backgroundColor: "{colors.surface-card-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: 4px 12px
  badge-magenta:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.caption-uppercase}"
    rounded: "{rounded.pill}"
    padding: 4px 12px
  testimonial-card:
    backgroundColor: "{colors.surface-card-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body-lg}"
    rounded: "{rounded.lg}"
    padding: 32px
    border: "1px solid {colors.hairline-dark}"
  customer-logo-strip:
    backgroundColor: "{colors.canvas-dark}"
    textColor: "{colors.muted-on-dark}"
    typography: "{typography.body-sm}"
    padding: 32px
  footer:
    backgroundColor: "{colors.canvas-dark}"
    textColor: "{colors.muted-on-dark}"
    typography: "{typography.body-sm}"
    padding: 64px
---

## Overview

OptionD's surface is a premium freelance web-agency interface that operates in two parallel modes — light (white canvas, for print, papeterie, propositions formelles) and dark (near-pure black canvas, for digital, web, social). The base atmosphere of the digital surface is **near-pure black canvas** (`{colors.canvas-dark}` — #0A0A0A) with **magenta voltage** (`{colors.primary}` — #FF006E) as the singular brand color. The magenta handles every primary CTA, every stat-callout number, every "DEMANDER UN DIAGNOSTIC" badge — used scarcely on individual elements but generously on full-bleed magenta CTA cards.

The magenta + black pairing (and magenta + white in print mode) is what makes OptionD instantly recognizable. Where Akaru and Ultra Noir lean into editorial restraint and Linear leans into sober tech-blue, OptionD claims one bright magenta `{colors.primary}` (#FF006E) that does all the brand work. White typography in confident weight-700 Geist Sans anchors the editorial body. Code blocks, terminal output, and product UI fragments embed directly in dark `{colors.surface-card-dark}` (#1A1A1A) cards across digital surfaces.

The brand wordmark `{component.brand-lockup}` is the typographic signature: **Option/D** in Geist Sans 700 with a slash separator (the slash and the D both rendered in magenta), accompanied by the manifesto headline `— DAVID · DESIGN · DIGITAL —` in Geist Mono uppercase. The headline activates the three lectures of the D — David (the human signature), Design (the craft), Digital (the medium).

Type voice runs **Geist** at confident weights — 700 for display headlines (with negative letter-spacing -1 to -2.5px), 600 for sub-titles and buttons, 400 for body. Mono labels use **Geist Mono** at 11-12px with ~0.20em letter-spacing for editorial annotation. The system has no display-serif counter-voice; everything is one geometric humanist sans, scaled and weighted for hierarchy.

**Key Characteristics:**
- Dual-canvas system: near-pure black `{colors.canvas-dark}` (#0A0A0A) for digital, pure white `{colors.canvas-light}` (#FFFFFF) for print. Optional radial magenta halo on hero dark surfaces.
- Magenta primary (`{colors.primary}` — #FF006E). Used on primary CTAs, large stat-callout numbers, full-bleed magenta CTA bands. Never as decorative wash — magenta is action and emphasis only.
- The slash `/` is the brand's structural element — it sits between Option and D in every wordmark instance. Slash and D always share the same color.
- Geist Sans 700 for display, Geist Sans 500-600 for sub-titles + buttons, Geist Sans 400 for body. Geist Mono for code and uppercase headline labels.
- Dark surface cards (`{colors.surface-card-dark}` — #1A1A1A) for feature cards, code windows, diagnostic cards, pack cards. Cards barely lighter than canvas — color-block contrast is subtle.
- Code blocks render in Geist Mono inside `{colors.surface-card-dark}`. Builder-in-public mode: the agent orchestration and the AI stack are visible on the digital surface, not hidden.
- Stat numbers in magenta + Geist 700 + huge size carry the credibility moment ("7 jours", "12+ sites livrés", "100% qualité").
- Border radius is hierarchical: `{rounded.md}` (8px) for buttons, `{rounded.lg}` (12px) for content cards. No pill except in tag badges and CTA buttons.
- Section rhythm `{spacing.section}` (96px) between major editorial bands.
- The brand headline `— DAVID · DESIGN · DIGITAL —` appears under the wordmark on every official lockup (footer, signature email, hero, papeterie). 12px Geist Mono uppercase, opacity 0.62 on dark / 0.62 on light.

## Colors

### Brand & Accent
- **Primary (Magenta Voltage)** (`{colors.primary}` — #FF006E): The signature brand color. All primary CTA backgrounds, large stat-callout numbers, full-bleed magenta CTA cards, the slash and D in every brand wordmark instance. The magenta is the brand.
- **Primary Active** (`{colors.primary-active}` — #E6005C): Press / hover-darker variant.
- **Primary Disabled** (`{colors.primary-disabled}` — #3D0019): Desaturated dark-magenta on dark canvas for disabled states.
- **On Primary** (`{colors.on-primary}` — #FFFFFF): Text on magenta surfaces. The high-contrast magenta + white combo is the brand action signal.

### Surface — Dark mode (digital primary)
- **Canvas Dark** (`{colors.canvas-dark}` — #0A0A0A): The default digital page floor. Near-pure black.
- **Canvas Pure Black** (`{colors.canvas-pure-black}` — #000000): Used only for hero bands with halo treatment.
- **Surface Soft Dark** (`{colors.surface-soft-dark}` — #121212): Section dividers, very-soft band tints.
- **Surface Card Dark** (`{colors.surface-card-dark}` — #1A1A1A): Feature cards, code windows, diagnostic cards, pack cards, testimonials.
- **Surface Elevated Dark** (`{colors.surface-elevated-dark}` — #242424): Nested cards inside larger dark cards.
- **Halo Magenta Soft** (`{colors.halo-magenta-soft}` — rgba(255,0,110,0.10)): Center-radial gradient overlay on hero bands. Modulable from 0.06 (very light) to 0.18 (statement).
- **Surface Magenta Band** (`{colors.surface-magenta-band}` — #FF006E): The magenta CTA card / band fill — same hex as primary.
- **Hairline Dark** (`{colors.hairline-dark}` — #2A2A2A): 1px borders on cards.
- **Hairline Strong Dark** (`{colors.hairline-strong-dark}` — #3A3A3A): Heavier divider on input borders and emphasis.

### Surface — Light mode (print primary)
- **Canvas Light** (`{colors.canvas-light}` — #FFFFFF): The default print page floor. Pure white.
- **Cream** (`{colors.cream}` — #F5F1EA): Warm alternative for premium print supports (carte de visite haut de gamme, propositions formelles).
- **Hairline Light** (`{colors.hairline-light}` — #E5E5E5): 1px borders on cards in light mode.
- **Hairline Strong Light** (`{colors.hairline-strong-light}` — #D0D0D0): Heavier divider on light surfaces.

### Text — On Dark
- **On Dark** (`{colors.on-dark}` — #FFFFFF): All headline and primary text on dark surfaces.
- **Body On Dark** (`{colors.body-on-dark}` — #CCCCCC): Default running-text color on dark.
- **Body Strong On Dark** (`{colors.body-strong-on-dark}` — #E6E6E6): Emphasized paragraphs on dark.
- **Muted On Dark** (`{colors.muted-on-dark}` — #888888): Footer links, captions, breadcrumbs on dark.
- **Muted Soft On Dark** (`{colors.muted-soft-on-dark}` — #5A5A5A): Tertiary text — fine print on dark.

### Text — On Light
- **Ink** (`{colors.ink}` — #0A0A0A): All headline and primary text on light surfaces.
- **Body On Light** (`{colors.body-on-light}` — #3A3A3A): Default running-text color on light.
- **Body Soft On Light** (`{colors.body-soft-on-light}` — #666666): Secondary body text on light.
- **Muted On Light** (`{colors.muted-on-light}` — #75758A): Captions, dates, metadata on light.

### Semantic / Accent
- **Accent Emerald** (`{colors.accent-emerald}` — #22C55E): Success states, "delivered" status indicators in product UI.
- **Accent Amber** (`{colors.accent-amber}` — #F59E0B): Warning states, "in progress" indicators.
- **Accent Rose** (`{colors.accent-rose}` — #EF4444): Error states, "blocked" indicators. Distinct from primary magenta — semantic only.

### Gradient System
OptionD does not use gradients as decorative wash. The single gradient used is the **radial halo magenta** on hero dark surfaces — a soft center-radial overlay (rgba(255,0,110,0.10) → transparent) inspired by Framer's hero treatment. Reserved for hero bands only. UI surfaces stay flat.

## Typography

### Font Family
The system runs **Geist** for everything — display, body, navigation, buttons, captions. **Geist Mono** handles code blocks, the brand headline, and uppercase technical labels. The fallback stack walks `Inter, system-ui, -apple-system, BlinkMacSystemFont, sans-serif`.

The single-family approach is deliberate: Geist at weight 700 + 600 + 500 + 400 covers the entire hierarchy without needing a serif or display counter-voice. The geometric humanist character of Geist at confident bold weight gives OptionD a precise, engineered feel that matches the freelance positioning — premium, sober, no clinquant.

Geist is open-source (Vercel Foundry, MIT license) — commercial-safe, free, and modern. Fallback to Inter is acceptable; both are geometric humanist sans-serifs with similar tracking behavior.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.brand-wordmark-lg}` | 120px | 700 | 1.0 | -0.06em | Hero lockup at full size |
| `{typography.brand-wordmark}` | 88px | 700 | 1.0 | -0.05em | Standard wordmark on hero, footer, papeterie |
| `{typography.brand-wordmark-sm}` | 32px | 700 | 1.0 | -0.04em | Wordmark in nav, signature email, mobile |
| `{typography.brand-headline}` | 12px | 500 | 1.4 | 0.20em | The "— DAVID · DESIGN · DIGITAL —" headline. Geist Mono uppercase. |
| `{typography.display-xl}` | 72px | 700 | 1.05 | -2.5px | Homepage h1 ("Sites premium, livrés en sept jours.") |
| `{typography.display-lg}` | 56px | 700 | 1.1 | -2px | Section heads |
| `{typography.display-md}` | 40px | 700 | 1.15 | -1.5px | Sub-section heads, CTA-band heads |
| `{typography.display-sm}` | 32px | 700 | 1.2 | -1px | Card titles, pack tier prices |
| `{typography.title-lg}` | 24px | 700 | 1.3 | -0.3px | Pack plan names, larger feature titles |
| `{typography.title-md}` | 18px | 600 | 1.4 | 0 | Card titles, intro paragraphs |
| `{typography.title-sm}` | 16px | 600 | 1.4 | 0 | Small card titles, list labels |
| `{typography.stat-display}` | 56px | 700 | 1.0 | -1.5px | Stat callouts ("7 jours", "12+", "100%") — ALWAYS magenta |
| `{typography.body-lg}` | 18px | 400 | 1.55 | 0 | Lead paragraphs, hero subtitle |
| `{typography.body-md}` | 16px | 400 | 1.55 | 0 | Default running-text |
| `{typography.body-sm}` | 14px | 400 | 1.55 | 0 | Footer body, fine-print |
| `{typography.caption}` | 13px | 500 | 1.4 | 0 | Badge labels, captions |
| `{typography.caption-uppercase}` | 11px | 500 | 1.4 | 1.8px | Section labels, "PACK SIGNATURE" markers, mono uppercase |
| `{typography.code}` | 14px | 400 | 1.55 | -0.2px | Code blocks — Geist Mono with negative letter-spacing |
| `{typography.button}` | 14px | 600 | 1.0 | 0 | Standard button labels |
| `{typography.nav-link}` | 14px | 500 | 1.4 | 0 | Top-nav menu items |

### Principles
Display weights stay at 700 across all sizes. Negative letter-spacing (-1 to -2.5px on display, -0.05em on wordmark) is essential — Geist at weight 700 without negative tracking reads as too wide / generic-marketing. The tightened tracking gives OptionD the precise, engineered feel.

Body and labels stay at weights 400 / 500 / 600. The hierarchy is built on size + weight, not on family contrast.

Mono labels (`{typography.caption-uppercase}` and `{typography.brand-headline}`) use **positive** letter-spacing (1.8 to 2.4px) to preserve legibility at small sizes when set in uppercase. The brand headline is always rendered with this spacing — never tighter.

### The Brand Lockup
The wordmark `{component.brand-lockup}` is the most important typographic moment in the entire system. It must always render as:

```
Option/D                ← Geist Sans 700, "Option" in default text color, "/" and "D" both in magenta primary
— DAVID · DESIGN · DIGITAL —    ← Geist Mono, 12px, uppercase, letter-spacing 2.4px, opacity 0.62
```

The slash separator (`/`) and the D ALWAYS share the same color (magenta on standard surfaces, white if used as a monochrome variant on print). The slash is never plain; it is part of the brand voltage. The middle-dots in the headline are bullet operators (·, U+00B7), not periods.

### Note on Font Substitutes
Geist is open-source and the documented choice. **Inter** is the closest alternative (similar tracking and metrics). **Söhne** is a close commercial alternative if licensed. Both are acceptable fallbacks but Geist is the brand canonical.

## Layout

### Spacing System
- **Base unit:** 4px.
- **Tokens:** `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 24px · `{spacing.xl}` 32px · `{spacing.xxl}` 48px · `{spacing.section}` 96px.
- **Section padding:** `{spacing.section}` (96px) between major editorial bands. On mobile, scales to 64px.
- **Card internal padding:** `{spacing.xl}` (32px) for feature cards, pack cards, diagnostic cards; `{spacing.lg}` (24px) for code-window cards and testimonial cards.

### Grid & Container
- **Max content width:** ~1280px centered.
- **Editorial body:** Single 12-column grid; hero often uses 7/5 split (h1 left, code mockup or product visual right).
- **Feature card grids:** 3-up at desktop, 2-up at tablet, 1-up at mobile.
- **Pack grid:** 3-up at desktop (Essentiel · Signature · Atelier), 1-up at mobile.
- **Brand wordmark always center-aligned** in hero contexts; can be left-aligned in nav and signature contexts.

### Whitespace Philosophy
OptionD uses dense, slightly-compressed whitespace appropriate for a freelance studio brand — generous enough to read editorially, tight enough to feel "premium-engineered" rather than "marketing-soft." Section rhythm at 96px is standard; card internal padding stays at 32px for content cards.

The brand headline `— DAVID · DESIGN · DIGITAL —` is always set 22px below the wordmark in the hero lockup. Never tighter, never wider.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow, no border | Body sections, top nav, hero |
| Soft hairline | 1px `{colors.hairline-dark}` border (or `{colors.hairline-light}` on light) | Code-window cards, content cards, pack cards |
| Surface card | `{colors.surface-card-dark}` background — no shadow | Feature cards, diagnostic cards, testimonials |
| Magenta band | `{colors.primary}` background — no shadow | Full-bleed magenta CTA cards / bands |
| Halo overlay | radial-gradient `{colors.halo-magenta-soft}` over `{colors.canvas-pure-black}` | Hero bands only |

The system uses no drop shadows. Depth comes from:
1. The contrast between black canvas and `{colors.surface-card-dark}` (a barely-lighter-than-canvas tone) — the contrast is subtle, more like an "engineering-grade dim panel" than an "elevated card."
2. The magenta-on-black contrast does most of the elevation work for CTAs.
3. The optional radial halo on hero surfaces provides "screen voltage" without adding shadow.

### Decorative Depth
- Code-window cards carry their own internal product chrome — line numbers, syntax highlighting, status bars at the bottom — adding visual density without external shadows.
- Diagnostic cards have a 1px magenta accent border (top or left) to signal that they're the brand's signature offering.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.xs}` | 4px | Reserved for badge accents, small inline elements |
| `{rounded.sm}` | 6px | Small inline buttons |
| `{rounded.md}` | 8px | Standard CTA buttons, text inputs |
| `{rounded.lg}` | 12px | Content cards, code-window cards, pack cards, diagnostic cards |
| `{rounded.xl}` | 16px | Large hero cards, brand lockup containers |
| `{rounded.pill}` | 9999px | Badge pills, pill-shaped CTAs (alternative to rounded.md when more friendly tone is needed) |
| `{rounded.full}` | 9999px / 50% | Avatars, icon buttons, dot indicators |

## Components

### Brand Lockup

**`brand-lockup`** — The signature typographic moment. Renders the wordmark `Option/D` with the magenta slash and D, accompanied by the headline `— DAVID · DESIGN · DIGITAL —` 22px below. Used on hero bands, footer, signature email, papeterie, OG images.

```
Option/D                                  ← {typography.brand-wordmark}, "/" and "D" in {colors.primary}
— DAVID · DESIGN · DIGITAL —              ← {typography.brand-headline}, opacity 0.62
```

Three sizes: `brand-wordmark-lg` (120px hero), `brand-wordmark` (88px standard), `brand-wordmark-sm` (32px nav, mobile, email).

### Monogram D

**`monogram-D`** — The standalone D, in magenta, used as favicon, avatar, social media profile mark. Size range 16px (favicon) to 96px (large social avatar). The slash disappears at this scale; the D alone carries the brand.

### Top Navigation

**`top-nav-dark`** — Black nav bar pinned to top. 64px tall, `{colors.canvas-dark}` background. Carries the brand `Option/D` wordmark at left in `brand-wordmark-sm`, primary horizontal menu (Approche · Diagnostic · Packs · Cas clients · Contact) center-left, right-side cluster with "Demander un diagnostic" `{component.button-primary}` (magenta). Menu items in `{typography.nav-link}` (Geist 14px / 500). Border-bottom 1px `{colors.hairline-dark}`.

**`top-nav-light`** — Same structure on white canvas for print mockups and supports formels.

### Buttons

**`button-primary`** — The signature magenta CTA. Background `{colors.primary}` (#FF006E), text `{colors.on-primary}` (white), type `{typography.button}` (Geist 14px / 600), padding 12px × 20px, height 40px, rounded `{rounded.md}` (8px). The magenta + white combination is iconic.

**`button-secondary-dark`** — Dark surface card button. Background `{colors.surface-card-dark}`, text `{colors.on-dark}` (white), 1px `{colors.hairline-strong-dark}` border, same shape as primary.

**`button-secondary-light`** — White surface button. Background `{colors.canvas-light}`, text `{colors.ink}` (near-black), 1px `{colors.hairline-strong-light}` border, same shape.

**`button-text-link`** — Inline text button, no background. Used for "Lire l'article complet", "Voir le cas suivant", inline link CTAs. Text in `{colors.primary}`.

**`text-link-on-dark`** / **`text-link-on-light`** — Inline body links in `{colors.primary}`. Underlined.

**`button-icon-circular`** — 36 × 36 circular icon button on dark.

### Cards & Containers

**`hero-band-dark`** — Black-canvas hero with 7-5 grid: brand lockup left, hero h1 + sub-headline + button row, with diagnostic mockup or code-window-card on the right. Vertical padding `{spacing.section}` (96px).

**`hero-band-dark-halo`** — Same as `hero-band-dark` but with a radial magenta halo gradient overlay (opacity 0.10) inspired by Framer's hero treatment. Reserved for the homepage hero and major campaign banners. The halo gives a "screen voltage" subtle, like cinema lighting.

**`hero-band-light`** — White-canvas variant. Used on print mockups, propositions formelles, papeterie haut de gamme.

**`hero-stat-card`** — Magenta stat-display numbers ("7 jours", "12+ sites", "100%") inline on the canvas. No card surface — just magenta text in `{typography.stat-display}` (56px / 700).

**`feature-card-magenta`** — Full-bleed magenta card ("Diagnostic offert avant tout devis"). Background `{colors.primary}`, text `{colors.on-primary}` (white), rounded `{rounded.lg}` (12px), padding `{spacing.xl}` (32px). The magenta card IS the visual emphasis.

**`feature-card-dark`** — Standard dark feature card. Background `{colors.surface-card-dark}`, text `{colors.on-dark}`, 1px `{colors.hairline-dark}` border, rounded `{rounded.lg}`, padding `{spacing.xl}` (32px).

**`feature-card-light`** — White surface variant. Background `{colors.canvas-light}`, text `{colors.ink}`, 1px `{colors.hairline-light}` border.

**`code-window-card`** — Dark card showing a code snippet (often Next.js, TypeScript, or terminal output for builder-in-public mode). Background `{colors.surface-card-dark}`, code in Geist Mono with syntax highlighting, rounded `{rounded.lg}`, padding `{spacing.lg}` (24px). Often the hero's right-side artifact on builder-in-public surfaces (LinkedIn, GitHub, case studies).

**`diagnostic-card`** — The signature OptionD card. Shows the diagnostic David delivers before any quote: site audit, fiche Google score, SEO local notes, competitive snapshot, opportunités identifiées. Background `{colors.surface-card-dark}`, 1px `{colors.hairline-dark}` border, with a 1px magenta accent on the top or left edge to mark it as the brand's signature offering. Padding `{spacing.xl}` (32px).

**`pack-card`** — Standard pack tier card (Pack Essentiel 2 500 €, Pack Signature 3 800 €, Pack Atelier 5 500 €). Background `{colors.surface-card-dark}`, rounded `{rounded.lg}`, padding `{spacing.xl}` (32px). 1px `{colors.hairline-dark}` border.

**`pack-card-featured`** — The featured tier (typically Pack Signature) flips to `{colors.primary}` (magenta). The magenta surface IS the featured signal.

**`stat-callout`** — Inline magenta stat numbers ("7 jours", "12+", "100% des sites Lighthouse ≥ 95"). Transparent background, text `{colors.primary}`, type `{typography.stat-display}`. Used as a flat layout block, not a card with surface.

**`testimonial-card`** — Client testimonial with quote, signature, and small avatar. Background `{colors.surface-card-dark}`, rounded `{rounded.lg}`, padding `{spacing.xl}` (32px). Quote in `{typography.body-lg}` (18px / 400). Attribution in `{typography.caption}` magenta.

**`customer-logo-strip`** — Horizontal monochrome customer-logo strip. Background `{colors.canvas-dark}`, logos in `{colors.muted-on-dark}`, vertical padding `{spacing.xl}` (32px). Used to show the client portfolio (artisans, commerçants, libérales).

### Inputs & Forms

**`text-input-dark`** — Dark text input. Background `{colors.surface-card-dark}`, text `{colors.on-dark}`, 1px `{colors.hairline-strong-dark}` border, rounded `{rounded.md}` (8px), padding 10px × 14px, height 40px.

**`text-input-dark-focused`** — Border thickens to `{colors.primary}` (magenta) for focus emphasis.

### Tags / Badges

**`badge-pill`** — Small dark pill label. Background `{colors.surface-card-dark}`, text `{colors.on-dark}`, type `{typography.caption}`, rounded `{rounded.pill}`.

**`badge-magenta`** — Magenta pill for "DIAGNOSTIC OFFERT", "NOUVEAU CAS", "PACK SIGNATURE" emphasis. Background `{colors.primary}`, text `{colors.on-primary}`, type `{typography.caption-uppercase}`, rounded `{rounded.pill}`.

### Tab / Filter

**`category-tab`** + **`category-tab-active`** — Dark tab navigation. Inactive: transparent + muted text. Active: surface-card background + on-dark text. Padding 8px × 14px, rounded `{rounded.md}`. Used to filter case studies by client type (artisans / commerçants / coachs / libérales).

### CTA / Footer

**`cta-band-magenta`** — A pre-footer "Demander mon diagnostic" CTA band. Full magenta fill, white type, rounded `{rounded.lg}`, padding 64px. Carries an h2 in `{typography.display-md}` and a CTA — usually a white-outlined button on the magenta surface, or a dark button.

**`footer`** — Dark footer that closes every digital page. Background `{colors.canvas-dark}`, text `{colors.muted-on-dark}`. 4-column link list at desktop covering Approche / Cas / Ressources / Contact. Vertical padding 64px. The OptionD brand lockup sits at the top in `{colors.on-dark}` with the headline `— DAVID · DESIGN · DIGITAL —` rendered below.

## Do's and Don'ts

### Do
- Anchor every digital page on the dark canvas (`{colors.canvas-dark}` — #0A0A0A). The magenta + black pairing is the brand voltage.
- Anchor every print support on the white canvas (`{colors.canvas-light}` — #FFFFFF). Cream is acceptable for premium papeterie.
- Reserve `{colors.primary}` (magenta) for primary CTAs, stat-callout numbers, the slash and D in every wordmark, and full-bleed magenta CTA bands. The magenta's scarcity at the element level + abundance at the band level is what makes it powerful.
- Use Geist at weight 700 for every display headline, with -1 to -2.5px letter-spacing.
- Always render the brand wordmark as `Option/D` with the slash and D in magenta. Never `OptionD` (no separator), never `Option D` (with space).
- Always set the headline `— DAVID · DESIGN · DIGITAL —` in Geist Mono uppercase, 12px, letter-spacing 0.20em (2.4px), opacity 0.62. Never tighter, never larger.
- Show actual code snippets (Next.js, TypeScript, terminal logs) inside `{component.code-window-card}` — OptionD is a builder-in-public studio; show the work, don't paint marketing illustrations of work.
- Use `{component.stat-callout}` numbers to establish credibility (7 jours de livraison, sites livrés, performance Lighthouse). The magenta stat numbers are signature.
- Anchor every band with `{spacing.section}` (96px) vertical rhythm.
- On hero surfaces, use the `{component.hero-band-dark-halo}` for the radial magenta halo treatment. On utilitarian surfaces, use plain `{component.hero-band-dark}`.

### Don't
- Don't introduce a second brand color. OptionD is monochromatic + magenta. No cyan, no yellow, no second accent.
- Don't bold display weight beyond 700 or use weight 500 for headlines. The hierarchy depends on size, not on weight gradation.
- Don't use magenta for body text or large surface fills outside of intentional magenta cards.
- Don't render the wordmark without the slash. The D must never be glued to "Option".
- Don't change the slash and D colors independently — they always share the same color (magenta on accent, white on monochrome variants only).
- Don't render the headline at size below 12px or letter-spacing below 0.18em — illegibility risk.
- Don't reorder the headline. It is `— DAVID · DESIGN · DIGITAL —`, in this order. Never `DIGITAL · DESIGN · DAVID` or any permutation.
- Don't use rounded buttons / pills outside of small badges and pill-CTA exceptions. The standard button radius is 8px (md).
- Don't repeat the same surface mode in two consecutive bands. Black canvas → dark feature card → magenta CTA card → black canvas → code-window card.
- Don't hide the AI orchestration in code/diagnostic surfaces — the builder-in-public mode is part of the brand. Hide it in commercial copy (landing, devis), not in technical surfaces.
- Don't add hover state styling beyond what the system already encodes.
- Don't apply the radial halo to non-hero surfaces. The halo is a hero-only treatment.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 768px | Hamburger nav; brand wordmark scales 88px → 40px; hero h1 72→36px; code-window-card stacks below; feature grids 1-up; pack grid 1-up |
| Tablet | 768–1024px | Top nav tightens; feature cards 2-up; pack grid 2-up + 1-up below |
| Desktop | 1024–1440px | Full top-nav; 3-up feature cards; 3-up pack grid (Essentiel · Signature · Atelier) |
| Wide | > 1440px | Same as desktop with more breathing room; max content 1280px |

### Touch Targets
- `{component.button-primary}` at minimum 40 × 40px.
- `{component.button-icon-circular}` at exactly 36 × 36 — slightly under WCAG 44, visually centered.
- `{component.text-input-dark}` height is 40px.

### Collapsing Strategy
- Top nav collapses to hamburger at < 768px. The brand wordmark stays visible at top-left, scaled to 32px.
- Hero 7-5 grid → single-column on mobile.
- Feature card grids reduce columns rather than scaling.
- Code-window cards retain font-size; horizontal scroll inside the card on mobile.
- Pack tier cards collapse 3 → 1; featured pack magenta stays distinct.
- Brand headline `— DAVID · DESIGN · DIGITAL —` may wrap to two lines on mobile if the wordmark scales below 40px. Prefer keeping it on one line by reducing wordmark before wrapping.

### Image Behavior
- Code blocks inside dark mockups stay at fixed font-size; horizontal scroll on mobile rather than wrapping.
- Customer logos in monochrome strip retain native widths; row wraps on mobile.
- Diagnostic mockup screenshots in hero stack below the headline on mobile.

## Iteration Guide

1. Focus on ONE component at a time. Reference its YAML key (`{component.diagnostic-card}`, `{component.pack-card-featured}`).
2. Variants of an existing component (`-active`, `-disabled`, `-focused`) live as separate entries.
3. Use `{token.refs}` everywhere — never inline hex.
4. Never document hover. Default and Active/Pressed states only.
5. Display headlines stay Geist 700 with negative letter-spacing. Body stays Geist 400. Mono labels stay Geist Mono 500.
6. The magenta + black pairing is the brand contract. Don't soften with secondary accents.
7. The wordmark `Option/D` and the headline `— DAVID · DESIGN · DIGITAL —` are non-negotiable typographic signatures. They render the same way on every surface.
8. When in doubt about emphasis: bigger Geist 700 before adding color.
9. The diagnostic-card is OptionD's signature offering — give it slightly more weight than other cards (1px magenta accent border).

## Known Gaps

- The exact magenta hex (#FF006E) was validated by David on 28/04/2026. Future tweaks may shift toward a slightly desaturated variant for print CMJN compatibility — to be tested.
- Geist weight axis values beyond 400 / 500 / 600 / 700 are not formalized in this spec — only the static weights observed are documented.
- Animation and transition timings (halo pulse on hero load, stat counter animations on scroll, slash-typewriter on lockup reveal) are not in scope of this V1.
- Form validation states beyond `{component.text-input-dark-focused}` are not extracted.
- The actual OptionD client product surfaces (deliverables for end clients — they're not in this design system; they inherit each client's own brand) are out of scope.
- The customer logo strip's exact opacity / treatment varies — the muted gray is approximate.
- Dark / light mode toggle behavior (if implemented on optiond.fr) is not yet defined; current default is dark for digital, light for print.
- The mobile breakpoint behavior for the radial halo (does it scale, fade, or disable below 768px?) is not yet decided. Recommendation: disable below 768px for performance.

---

## Brand Manifest

OptionD is a freelance studio, not an agency. The brand voice is first-person ("Je conçois", "Je livre"), not corporate "we". The wordmark and headline are the brand's two non-negotiable typographic signatures — they sign every surface, every email, every document, every social post.

The three D's:
- **David** — the human signature, the orchestrator, the single point of contact
- **Design** — the craft, the arbitration line-by-line, the finishing touch
- **Digital** — the medium, the web, the stack (React/Next.js orchestrated through AI agents)

The slash `/` between Option and D is structural, not decorative. It evokes paths, URLs, CLI commands, R/GA, AC/DC. It signals "the D path within Option" — the endpoint, the chosen module.

The magenta `#FF006E` is the brand voltage. It is rare, deliberate, and maximum-signal. Every time magenta appears, it is a brand moment. Don't dilute it.
