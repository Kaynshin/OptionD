# SEO — Stratégie actionnable (Option/D)

> **Périmètre :** national (France entière), pas local-first. David Jomain est basé en Haute-Savoie, mais la cible SEO est **nationale**.
> **Domaine prod :** https://optiond.fr — 3 routes : `/` (hub), `/site-internet`, `/agent-ia`.
> **Design figé :** on ne touche ni au visuel, ni aux couleurs, ni à la structure DOM. Côté copy, périmètre **équilibré** : intégration **naturelle** de mots-clés dans le copy existant + metas/JSON-LD/technique. Les réécritures plus lourdes restent en **RECOMMANDATIONS (à valider)** en fin de document.

Ce document est la source de vérité SEO d'Option/D. Il contient : (1) les métas par page, (2) la map mots-clés, (3) le plan de données structurées JSON-LD, (4) le plan technique (sitemap, robots, canonical, OG, maillage), (5) les intégrations copy à appliquer, (6) les recommandations à valider.

---

## 1. Métas par page (titles + descriptions)

Règles : `<title>` ≤ 60 caractères, **mot-clé primaire en tête, marque « Option/D » en fin** (via `title.template` côté layout — voir §4). Meta description ≤ 155 caractères, orientée conversion (bénéfice + différenciateur + preuve). Cible nationale FR.

> **Mécanique de marque :** le `title.template` du layout devient `%s · Option/D`. Donc chaque page définit un `title` **sans** la marque (le template l'ajoute). Les valeurs ci-dessous indiquent le **rendu final** ainsi que la chaîne `title` à mettre dans la page.

### `/` (Accueil — hub)

- **`title` (page)** : `Création de site internet & agent IA téléphonique`
- **Rendu final** (avec template) : `Création de site internet & agent IA téléphonique · Option/D` — 57 car.
- **Mot-clé primaire :** `freelance site internet et agent IA` (offre combinée + marque)
- **Meta description** (148 car.) :
  `David Jomain crée des sites internet premium livrés en 7 jours et installe des agents IA téléphoniques pour commerces et indépendants. Diagnostic offert.`

### `/site-internet`

- **`title` (page)** : `Création site internet sur-mesure · Site vitrine`
- **Rendu final** (avec template) : `Création site internet sur-mesure · Site vitrine · Option/D` — 59 car.
- **Mot-clé primaire :** `création site internet sur-mesure` (co-cible `site vitrine` / `prix site vitrine`)
- **Meta description** (151 car.) :
  `Site vitrine et landing page haut de gamme livrés en 7 jours, prix affichés de 2 500 à 5 500 €. Next.js, Lighthouse ≥ 95. Diagnostic offert avant devis.`

### `/agent-ia`

- **`title` (page)** : `Agent IA téléphonique · Standard téléphonique IA`
- **Rendu final** : `Agent IA téléphonique · Standard téléphonique IA · Option/D` — 58 car.
- **Mot-clé primaire :** `agent IA téléphonique` (co-cible `standard téléphonique IA` / `agent vocal IA`)
- **Meta description** (153 car.) :
  `Agent vocal IA qui répond au téléphone, rappelle vos prospects et réveille vos anciens clients. Ne ratez plus un appel. Données en France, RGPD & AI Act.`

| Page | Title (page, hors marque) | Rendu final | Long. |
|---|---|---|---|
| `/` | Création de site internet & agent IA téléphonique | + `· Option/D` | 57 |
| `/site-internet` | Création site internet sur-mesure · Site vitrine | + `· Option/D` | 59 |
| `/agent-ia` | Agent IA téléphonique · Standard téléphonique IA | + `· Option/D` | 58 |

---

## 2. Map mots-clés par page et par section

### Page `/` (Accueil — hub)

Rôle SEO : requêtes de marque + « double offre » + capture large « freelance qui fait site **et** IA ». Nœud de maillage interne vers les 2 pages filles.

- **Primaire :** `freelance site internet et agent IA`
- **Secondaires :** `Option/D` · `David Jomain` · `site internet premium freelance` · `agent IA pour commerce` · `digitaliser son commerce` · `freelance digital pour indépendants`
- **Longue traîne :** `créer un site internet et un standard téléphonique IA` · `site internet ou agent IA` · `prestataire site + IA`
- **Par section :**
  - *Hero* : `sites internet premium`, `agents IA`, `commerce`, `indépendants`, `David Jomain`, `freelance`.
  - *Les services (H2)* : `site qui convertit`, `ne plus perdre de clients`, `assistants qui ne dorment jamais` → candidat « agent IA téléphonique ».
  - *La méthode* : `diagnostic`, `un seul interlocuteur`, `IA-augmenté`.

### Page `/site-internet`

Rôle SEO : page argent n°1. Capte prix/devis + délai + métiers + tech.

- **Primaire :** `création site internet sur-mesure` (co-cible `site vitrine` / `prix site vitrine`)
- **Secondaires (transactionnel) :** `prix site vitrine` · `tarif création site internet` · `création site vitrine freelance` · `site vitrine sur-mesure` · `landing page sur-mesure` · `landing page qui convertit` · `refonte site internet` · `site internet artisan` · `site internet commerçant` · `site internet indépendant` · `site profession libérale` · `site internet livré en une semaine` · `site internet rapide`
- **Longue traîne / tech :** `site Next.js sur-mesure` · `site rapide Lighthouse 95` · `site performant SEO` · `site vitrine professionnel premium` · `devis création site internet` (→ « diagnostic offert »)
- **Par section :**
  - *Hero (H1)* : `site vitrine`, `landing page`, `haut de gamme`, `livré en 7 jours`, `artisans, commerçants, indépendants`.
  - *TargetStrip* : `artisans`, `commerçants`, `coachs & praticiens`, `professions libérales`.
  - *Approche / Stats* : `Next.js`, `Lighthouse ≥ 95`, `Core Web Vitals`, `site rapide`.
  - *Packs* : `prix site vitrine`, `2 500 €`, `3 800 €`, `5 500 €`, `clé en main`.
  - *FAQ* : `combien de temps pour créer un site`, `IA auto-généré`, `refonte`, `distanciel France`.

### Page `/agent-ia`

Rôle SEO : page argent n°2. Plus gros écart copy ↔ recherche (le copy dit « standardiste / assistants automatiques », le marché cherche « standard téléphonique IA / agent vocal IA / callbot »).

- **Primaire :** `agent IA téléphonique` (co-cible `standard téléphonique IA`)
- **Secondaires (transactionnel) :** `standard téléphonique IA` · `accueil téléphonique IA` · `agent vocal IA` · `callbot` · `standardiste virtuelle IA` · `réceptionniste virtuelle IA` · `secrétariat téléphonique IA` · `agent vocal IA pour TPE / PME / artisan / commerce` · `prise de rendez-vous IA 24/7`
- **Secondaires (problème / bénéfice) :** `ne plus rater d'appels` · `répondeur IA appels manqués` · `SMS automatique sur appel manqué` · `rappel prospect automatique` · `relance lead 5 minutes` · `relance clients automatisée` · `réactiver anciens clients SMS` · `avis Google automatisé`
- **Secondaires (réassurance / conformité) :** `agent vocal IA RGPD France` · `agent IA hébergé en France` · `IA téléphonique conforme AI Act` · `loi AGEC`
- **Par section :**
  - *Hero (H1)* : `agent vocal IA`, `standard téléphonique IA`, `répond au téléphone`, `commerce`.
  - *01 — Le constat* : `appels manqués`, `ne plus rater d'appels`, `répondeur`.
  - *02 — La solution* : `standard téléphonique IA`, `rappel prospect automatique`, `réactiver anciens clients`, `prise de rendez-vous`, `avis Google`.
  - *03 — Ce qui est carré* : `RGPD`, `données en France`, `AI Act`.
  - *04 — Les formules* : `890 €/mois`, `1 890 €/mois`, `3 490 €/mois`, `sans engagement`, `clé en main / géré`.
  - *FAQ* : `c'est un robot`, `données`, `je n'y connais rien`, `c'est cher`.

### Récapitulatif — primaires

| Page | Mot-clé primaire | Co-cible forte |
|---|---|---|
| `/` | freelance site internet et agent IA | Option/D · David Jomain |
| `/site-internet` | création site internet sur-mesure | site vitrine / prix site vitrine |
| `/agent-ia` | agent IA téléphonique | standard téléphonique IA / agent vocal IA |

---

## 3. Plan JSON-LD (données structurées)

À injecter via `<script type="application/ld+json">` (composant serveur ou `JSON.stringify` dans un `<script>` rendu côté serveur — pas de `next/script` requis). Toutes les URLs en absolu (`https://optiond.fr…`).

### 3.1 `Organization` / `ProfessionalService` — dans `app/layout.tsx` (global, toutes pages)

```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://optiond.fr/#organization",
  "name": "Option/D",
  "alternateName": "Option D",
  "url": "https://optiond.fr",
  "email": "david@optiond.fr",
  "image": "https://optiond.fr/og-image.png",
  "logo": "https://optiond.fr/favicon.svg",
  "description": "Atelier freelance IA-augmenté — sites internet premium et agents IA téléphoniques pour commerces et indépendants.",
  "founder": {
    "@type": "Person",
    "name": "David Jomain",
    "url": "https://www.linkedin.com/in/davidjomain/",
    "sameAs": [
      "https://www.linkedin.com/in/davidjomain/",
      "https://github.com/Kaynshin"
    ]
  },
  "areaServed": { "@type": "Country", "name": "France" },
  "address": { "@type": "PostalAddress", "addressRegion": "Haute-Savoie", "addressCountry": "FR" },
  "sameAs": [
    "https://www.linkedin.com/in/davidjomain/",
    "https://github.com/Kaynshin"
  ]
}
```

### 3.2 `Service` n°1 (sites) — dans `app/site-internet/page.tsx`

`Service` + `OfferCatalog` reprenant les 3 packs (2 500 / 3 800 / 5 500 €).

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Création de site internet sur-mesure",
  "name": "Sites internet premium — vitrines & landing pages",
  "description": "Sites vitrines et landing pages haut de gamme livrés en environ 7 jours. Next.js, Lighthouse ≥ 95.",
  "provider": { "@id": "https://optiond.fr/#organization" },
  "areaServed": { "@type": "Country", "name": "France" },
  "url": "https://optiond.fr/site-internet",
  "offers": [
    { "@type": "Offer", "name": "Landing & vitrine 3-5 pages", "price": "2500", "priceCurrency": "EUR" },
    { "@type": "Offer", "name": "Vitrine 6-10 pages", "price": "3800", "priceCurrency": "EUR" },
    { "@type": "Offer", "name": "Identité, animations, fonctions", "price": "5500", "priceCurrency": "EUR" }
  ]
}
```

### 3.3 `Service` n°2 (agents IA) — dans `app/agent-ia/page.tsx`

`Service` + `Offer` mensuels (890 / 1 890 / 3 490 €/mois, `unitText` MON).

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Agent IA téléphonique / Standard téléphonique IA",
  "name": "Agents IA téléphoniques pour commerces et indépendants",
  "description": "Agent vocal IA qui répond au téléphone, rappelle les prospects et réveille les anciens clients. Données en France, RGPD & AI Act.",
  "provider": { "@id": "https://optiond.fr/#organization" },
  "areaServed": { "@type": "Country", "name": "France" },
  "url": "https://optiond.fr/agent-ia",
  "offers": [
    { "@type": "Offer", "name": "Découverte", "price": "890", "priceCurrency": "EUR", "priceSpecification": { "@type": "UnitPriceSpecification", "price": "890", "priceCurrency": "EUR", "unitCode": "MON" } },
    { "@type": "Offer", "name": "Essentiel", "price": "1890", "priceCurrency": "EUR", "priceSpecification": { "@type": "UnitPriceSpecification", "price": "1890", "priceCurrency": "EUR", "unitCode": "MON" } },
    { "@type": "Offer", "name": "Complet", "price": "3490", "priceCurrency": "EUR", "priceSpecification": { "@type": "UnitPriceSpecification", "price": "3490", "priceCurrency": "EUR", "unitCode": "MON" } }
  ]
}
```

### 3.4 `FAQPage` ×2 — réutiliser les FAQ déjà présentes (zéro nouveau contenu)

- **`/site-internet`** : sérialiser le tableau `FAQ_ITEMS` (5 Q/R, page lignes 23-44) en `FAQPage` → `Question` + `acceptedAnswer/Answer`.
- **`/agent-ia`** : sérialiser les 5 items du `<Faq items={…}>` (lignes ~462-485) en `FAQPage`.

Patron (à générer par `.map()` sur les items existants pour éviter toute divergence de texte) :

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "<q>", "acceptedAnswer": { "@type": "Answer", "text": "<a>" } }
  ]
}
```

> **Implémentation conseillée :** sortir `FAQ_ITEMS` (déjà constante sur `/site-internet`) et créer une constante équivalente sur `/agent-ia`, puis alimenter **à la fois** le composant `<Faq>` et le JSON-LD à partir de la même source — garantit la parité texte exigée par Google.

---

## 4. Technique

Priorisation : **(1)** robots + sitemap + canonical, **(2)** JSON-LD Organization + FAQPage, **(3)** `title.template` + OG par page, **(4)** IconCard h3, **(5)** /mentions-legales, **(6)** mots-clés copy.

### 4.1 `app/sitemap.ts` (à créer)

```ts
import type { MetadataRoute } from 'next';
export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://optiond.fr';
  return [
    { url: `${base}/`,             changeFrequency: 'monthly', priority: 1.0 },
    { url: `${base}/site-internet`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/agent-ia`,      changeFrequency: 'monthly', priority: 0.9 },
  ];
}
```

### 4.2 `app/robots.ts` (à créer)

```ts
import type { MetadataRoute } from 'next';
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://optiond.fr/sitemap.xml',
    host: 'https://optiond.fr',
  };
}
```

### 4.3 `title.template` — `app/layout.tsx`

- Remplacer `template: '%s'` par **`template: '%s · Option/D'`** et garder `default: 'Option/D'`.
- Conséquence : chaque page définit un `title` **sans** la marque (cf. §1). Les `title` actuels qui répètent « Option/D — … » sont à remplacer par les chaînes courtes du §1.

### 4.4 Canonical — `metadata.alternates.canonical` par page

`metadataBase` est déjà posé (`https://optiond.fr`), donc chemins **relatifs** :
- `/` → `alternates: { canonical: '/' }`
- `/site-internet` → `alternates: { canonical: '/site-internet' }`
- `/agent-ia` → `alternates: { canonical: '/agent-ia' }`

### 4.5 OpenGraph + Twitter par page

Le layout définit OG/Twitter **globalement** (titre = « Option/D »). Ajouter dans chaque page un `openGraph` (et `twitter` si besoin) qui **override** `title`, `description`, `url` :
- `/` → `openGraph: { title: 'Création de site internet & agent IA téléphonique · Option/D', description: <meta du §1>, url: '/' }`
- `/site-internet` → idem avec le title/desc /site-internet, `url: '/site-internet'`
- `/agent-ia` → idem avec le title/desc /agent-ia, `url: '/agent-ia'`

(L'image OG globale `/og-image.png` est conservée — pas d'asset à produire.)

### 4.6 Hiérarchie des titres — `components/IconCard.tsx`

`IconCard` émet un `<h4>` (ligne 14) directement sous des sections en `<h2>`, sans `<h3>` intermédiaire (saut de niveau). **Passer le `<h4>` en `<h3>`** : conforme l'arbre de titres sur `/` (méthode) et `/agent-ia` (sections 02/03). Aucun impact visuel attendu (à vérifier vs CSS ; sinon ajuster la règle CSS du titre de carte sans toucher au rendu).

### 4.7 Maillage interne

- Bon dans l'ensemble (Hero CTA croisés, footers croisés). **À corriger : liens « Mentions légales » morts** (`href="#"`) dans `app/page.tsx` (l.259), `app/site-internet/page.tsx` (l.160), `app/agent-ia/page.tsx` (l.543). → créer `app/mentions-legales/page.tsx` et pointer les 3 liens dessus (page `noindex` possible via `robots: { index: false }`). Ajouter `/mentions-legales` au sitemap avec `priority: 0.1` ou l'exclure.
- Renforcer le maillage **sémantique** : sur `/` la carte « Agents IA » peut lier avec une ancre descriptive (« agent IA téléphonique ») — voir §5.

### 4.8 Déjà conformes (ne rien faire)

`lang="fr"`, `metadataBase` = optiond.fr, `og:locale` fr_FR, descriptions uniques par page, un seul `<h1>` par page, Geist, Vercel Analytics, `next lint` actif, favicon présent. Métas secondaires (`authors`, `keywords`, `manifest`, `theme-color`, `verification` Search Console) : facultatives — ajouter `verification.google` quand le code Search Console sera dispo.

---

## 5. Intégrations copy NATURELLES à appliquer (légères, sans casser le ton)

Modifications ciblées, ton conservé, structure DOM inchangée. **Ne pas toucher** aux données clients fictives (Domaine Gagnaud, etc.) ni à `docs/design_handoff_optiond/`.

### `/` (Accueil)
- **Carte service « Agents IA »** (`app/page.tsx`, `lede` l.140) : remplacer « Des assistants automatiques qui répondent au téléphone… » par « Un **agent IA téléphonique** qui répond au téléphone, réveille vos anciens clients et rappelle vos prospects — pendant que vous travaillez. » (injecte le primaire `/agent-ia` sans changer le sens).
- **Carte service « Agents IA », item 1** (l.142) : « Le **standard téléphonique IA** qui ne rate aucun appel » (au lieu de « Le standardiste qui ne rate aucun appel »).
- **`ctaLabel` carte sites** (l.115) : conserver, mais l'ancre interne reste « Découvrir les sites » — OK.

### `/site-internet`
- **`lede` / sub Hero** : déjà riche (« vitrines et landing pages haut de gamme »). Ajouter **« création de site internet sur-mesure »** dans la première phrase de la section Approche (composant `Approche`) si un emplacement neutre existe — sinon laisser en recommandation.
- **Stats / Approche** : mentionner **« Next.js »** une fois là où on parle de performance (« stack Next.js, Lighthouse ≥ 95 ») — terme aujourd'hui absent du copy visible, fort pour la longue traîne tech. Intégration uniquement si un libellé existant le permet sans réécriture (sinon → recommandations).

### `/agent-ia` (levier n°1)
- **Hero `sub`** (l.44) : « J'installe pour votre commerce un **agent vocal IA** — un **standard téléphonique IA** qui répond au téléphone, relance vos anciens clients et rappelle vos prospects — pendant que vous faites votre métier. » (remplace « des assistants automatiques »).
- **Eyebrow Hero** (l.34-37) : « Option/D · Agent IA téléphonique » (au lieu de « Agents IA ») — pose le primaire dès le haut de page.
- **Section 02 — H2** (l.120) « Ce que je mets en place. » : conserver le H2, mais dans le paragraphe d'intro de la section, nommer une fois **« standard téléphonique IA »** et **« prise de rendez-vous 24/7 »** si un emplacement neutre le permet.
- **FAQ item 1** (« C'est un robot… ») : on peut glisser « pour la partie **standard téléphonique IA** » sans casser le ton.

> Règle d'or : aucune de ces intégrations ne doit allonger une ligne au point de casser la mise en page. En cas de doute, basculer l'item en §6.

---

## 6. RECOMMANDATIONS (à valider) — réécritures plus lourdes, NON appliquées

Ces points sortent du périmètre « intégration légère ». À arbitrer par David avant implémentation.

1. **`/agent-ia` — réaligner le vocabulaire de fond.** Au-delà du Hero, harmoniser progressivement « standardiste / assistants automatiques » → « agent vocal IA / standard téléphonique IA / callbot » dans les sections 01-03, et ajouter un H2 ou eyebrow explicite « Standard téléphonique IA » + « Réceptionniste virtuelle IA ». Levier SEO n°1 mais touche plusieurs blocs de copy.
2. **`/site-internet` — title/H2 « création site internet / site vitrine ».** Le H1 actuel (« Sites premium, livrés en sept jours ») est excellent pour le délai mais ne contient pas la tête de requête volumique. Recommandation : ajouter une section ou un eyebrow « Création de site internet sur-mesure » et un H2 incluant « site vitrine ».
3. **Pages/sections de contenu transactionnel.** Créer du contenu ciblant les têtes de requête prix : « prix site vitrine / combien coûte un site internet » et « standard téléphonique IA prix / callbot prix » (Option/D a l'avantage rare des **prix affichés**). Format : section FAQ enrichie ou page guide. Capte l'intention comparaison.
4. **Pages métier (longue traîne nationale).** « site internet artisan », « site internet commerçant », « site profession libérale », « agent vocal IA pour restaurant / salon / cabinet ». Forte demande, souvent traitée en local-first par les concurrents → opportunité **nationale** pour Option/D. Format : sections dédiées ou landing pages.
5. **Différenciateur bundle.** Un bloc « site premium **+** agent IA sous une seule marque » (les concurrents font l'un OU l'autre) : argument de maillage et d'autorité, à exploiter en copy sur `/`.
6. **Blog / contenu informationnel.** « comment ne plus rater d'appels », « pourquoi un site rapide convertit mieux », « agent vocal IA est-ce légal RGPD », « combien de temps pour créer un site ». Volume long terme, peu de concurrence francophone qualifiée.
7. **`/mentions-legales`.** Contenu légal réel (au-delà du correctif technique du §4.7) : éditeur, hébergeur, RGPD — renforce la confiance E-E-A-T.

---

### Annexe — différenciateurs SEO exploitables (synthèse concurrence)

- **Prix affichés** (2 500/3 800/5 500 € ; 890/1 890/3 490 €/mois) là où la majorité des concurrents renvoient à un devis → fort taux de clic sur les requêtes prix.
- **Livré en 7 jours** : niche peu disputée (concurrents : 2-6 semaines), crédible grâce au périmètre serré assumé.
- **Lighthouse ≥ 95 / Next.js** : preuve perf chiffrée rare en FR, audience tech qualifiée.
- **RGPD / données en France / AI Act** : réassurance devenue requête à part entière (Nerolia occupe déjà l'angle souveraineté côté agents IA → à coupler).
- **Bundle site + agent IA sous une seule marque (David Jomain)** : unique sur le marché FR — les concurrents font l'un OU l'autre.
- **Repères prix marché agents IA** : réceptionniste IA PME ~200-650 €/mois, accueil IA 80-350 €/mois. Option/D est haut de gamme + **service géré** → viser l'intention « clé en main / accompagné », pas « pas cher / no-code ».
