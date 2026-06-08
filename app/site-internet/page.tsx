import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Button from '@/components/Button';
import TargetStrip from '@/components/TargetStrip';
import Faq from '@/components/Faq';
import Approche from '@/components/Approche';
import Diagnostic from '@/components/Diagnostic';
import Stats from '@/components/Stats';
import Packs from '@/components/Packs';
import Cases from '@/components/Cases';
import BuilderInPublic from '@/components/BuilderInPublic';
import Testimonial from '@/components/Testimonial';
import CtaContact from '@/components/CtaContact';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Création site internet sur-mesure · Site vitrine',
  description:
    'Site vitrine et landing page haut de gamme livrés en 7 jours, prix affichés de 2 500 à 5 500 €. Next.js, Lighthouse ≥ 95. Diagnostic offert avant devis.',
  keywords: [
    'création site internet sur-mesure',
    'site vitrine',
    'prix site vitrine',
    'landing page sur-mesure',
    'site internet livré en une semaine',
    'site internet artisan',
    'site Next.js sur-mesure',
    'refonte site internet',
  ],
  alternates: { canonical: '/site-internet' },
  openGraph: {
    title: 'Création site internet sur-mesure · Site vitrine · Option/D',
    description:
      'Site vitrine et landing page haut de gamme livrés en 7 jours, prix affichés de 2 500 à 5 500 €. Next.js, Lighthouse ≥ 95. Diagnostic offert avant devis.',
    url: '/site-internet',
  },
  twitter: {
    title: 'Création site internet sur-mesure · Site vitrine · Option/D',
    description:
      'Site vitrine et landing page haut de gamme livrés en 7 jours, prix affichés de 2 500 à 5 500 €. Next.js, Lighthouse ≥ 95. Diagnostic offert avant devis.',
  },
};

const FAQ_ITEMS = [
  {
    q: 'Comment tenez-vous la promesse "sept jours" ?',
    a: 'Le périmètre est calibré pour ça. Pas d\'e-commerce complet, pas de plateforme métier, pas de back-office sur-mesure. Vitrines et landing pages — c\'est tout. Si un projet ne tient pas sans transiger sur la finition, je le refuse ou j\'en redéfinis le périmètre avant de commencer. La rapidité n\'est jamais l\'arbitre de la qualité ; c\'est le périmètre qui l\'est.',
  },
  {
    q: 'Vous utilisez l\'IA, donc le site est "auto-généré" ?',
    a: 'Non. J\'utilise des agents IA comme levier de productivité — ils absorbent l\'exécution, pas la réflexion. Le brief, le diagnostic, l\'arbitrage UI/UX, la copie, la finition restent à ma main, ligne par ligne. C\'est précisément ce qui justifie le ticket.',
  },
  {
    q: 'Pourquoi le diagnostic est-il offert ?',
    a: 'Parce que c\'est mon argument commercial principal. Je préfère vous donner gratuitement une demi-journée d\'analyse honnête, qui vaut en soi quelque chose, plutôt que d\'envoyer un devis générique. Si à l\'issue vous ne signez pas, vous repartez avec un document utile.',
  },
  {
    q: 'Que se passe-t-il si mon projet ne rentre pas dans vos packs ?',
    a: 'Je le dis franchement et je vous oriente. Option/D ne fait pas d\'e-commerce, pas de plateforme, pas d\'applicatif métier. Si votre besoin est là, je vous indique deux ou trois confrères de confiance qui le font bien.',
  },
  {
    q: 'Travaillez-vous en distanciel ?',
    a: 'Phase 1 (2026) : Haute-Savoie en priorité, je me déplace pour le diagnostic et la livraison. Phase 2 : Genève, Vaud, Valais. Phase 3 : France entière en distanciel. Le distanciel est possible dès aujourd\'hui si le projet s\'y prête — on en parle au diagnostic.',
  },
];

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Création de site internet sur-mesure',
  name: 'Sites internet premium — vitrines & landing pages',
  description:
    'Sites vitrines et landing pages haut de gamme livrés en environ 7 jours. Next.js, Lighthouse ≥ 95.',
  provider: { '@id': 'https://optiond.fr/#organization' },
  areaServed: { '@type': 'Country', name: 'France' },
  url: 'https://optiond.fr/site-internet',
  offers: [
    {
      '@type': 'Offer',
      name: 'Landing & vitrine 3-5 pages',
      price: '2500',
      priceCurrency: 'EUR',
    },
    {
      '@type': 'Offer',
      name: 'Vitrine 6-10 pages',
      price: '3800',
      priceCurrency: 'EUR',
    },
    {
      '@type': 'Offer',
      name: 'Identité, animations, fonctions',
      price: '5500',
      priceCurrency: 'EUR',
    },
  ],
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
};

export default function SiteInternetPage() {
  return (
    <main data-screen-label="Site Option D — Home">
      <JsonLd data={[serviceJsonLd, faqJsonLd]} />

      <Nav
        active="site"
        statusText="2 créneaux mai"
        ctaLabel="Demander un diagnostic"
        ctaHref="#contact"
      />

      <Hero
        ariaLabel="Accueil"
        lockup
        eyebrow={
          <>
            <span className="dot"></span>
            <span>Atelier freelance · IA-augmenté</span>
            <span className="sep">—</span>
            <span>Lancement 2026 · Haute-Savoie</span>
          </>
        }
        headline={
          <>
            Sites premium, livrés en <span className="accent">sept jours.</span>
          </>
        }
        sub="Création de sites internet sur-mesure : vitrines et landing pages haut de gamme pour artisans, commerçants et indépendants exigeants. Conçues par David Jomain en Haute-Savoie. Périmètre serré, exécution agent-IA, arbitrage qualité ligne par ligne."
        ctas={
          <>
            <Button href="#contact" variant="primary" size="lg" arrow="→">
              Demander mon diagnostic
            </Button>
            <Button href="#approche" variant="sec" size="lg">
              Voir la méthode
            </Button>
          </>
        }
        meta={
          <>
            <span>
              <span className="tick">↳</span> Diagnostic offert avant tout devis
            </span>
            <span>
              <span className="tick">↳</span> 2 500 € à 5 500 €, périmètre tenu
            </span>
            <span>
              <span className="tick">↳</span> Lighthouse ≥ 95 sur mobile
            </span>
          </>
        }
      />

      <TargetStrip
        items={[
          { num: '01', label: 'Artisans haut de gamme' },
          { num: '02', label: 'Commerçants de standing' },
          { num: '03', label: <>Coachs &amp; praticiens</> },
          { num: '04', label: 'Professions libérales' },
        ]}
      />

      <Approche />

      <Diagnostic />

      <Stats />

      <Packs />

      <Cases />

      <BuilderInPublic />

      <Testimonial />

      <section className="band soft">
        <div className="container">
          <div className="band-head">
            <div className="left">
              <div className="eyebrow">06 — Questions fréquentes</div>
              <h2>Réponses courtes, sans détour.</h2>
            </div>
            <p className="right">
              Si votre question n'est pas ici, écrivez-moi en deux lignes. Je
              réponds personnellement sous 48 h, avec un premier élément
              d'analyse.
            </p>
          </div>

          <Faq items={FAQ_ITEMS} />
        </div>
      </section>

      <CtaContact />

      <Footer
        brandText="Atelier freelance IA-augmenté. Sites vitrines et landing pages haut de gamme livrés en environ une semaine. David Jomain, Haute-Savoie."
        bottomStatus="Disponible · 2 créneaux mai 2026"
        columns={[
          {
            title: 'Atelier',
            links: [
              { label: 'Approche', href: '#approche' },
              { label: 'Diagnostic offert', href: '#diagnostic' },
              { label: 'Packs & tarifs', href: '#packs' },
              { label: 'Cas clients', href: '#cas' },
            ],
          },
          {
            title: 'Services',
            links: [
              { label: 'Accueil', href: '/' },
              { label: 'Site internet', href: '/site-internet' },
              { label: 'Agent IA', href: '/agent-ia' },
              { label: 'Mentions légales', href: '#' },
            ],
          },
        ]}
      />
    </main>
  );
}
