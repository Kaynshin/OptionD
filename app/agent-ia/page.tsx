import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Button from '@/components/Button';
import TargetStrip from '@/components/TargetStrip';
import IconCard from '@/components/IconCard';
import Faq from '@/components/Faq';
import Footer from '@/components/Footer';
import LeakPanel from '@/components/LeakPanel';
import PricingCard from '@/components/PricingCard';
import JsonLd from '@/components/JsonLd';

const PAGE_TITLE = 'Agent IA téléphonique · Standard téléphonique IA';
const PAGE_DESCRIPTION =
  "Agent vocal IA qui répond au téléphone, rappelle vos prospects et réveille vos anciens clients. Ne ratez plus un appel. Données en France, RGPD & AI Act.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    'agent IA téléphonique',
    'standard téléphonique IA',
    'agent vocal IA',
    'callbot',
    'standardiste virtuelle IA',
    'réceptionniste virtuelle IA',
    'prise de rendez-vous IA 24/7',
    "ne plus rater d'appels",
    'agent vocal IA RGPD France',
  ],
  alternates: { canonical: '/agent-ia' },
  openGraph: {
    title: `${PAGE_TITLE} · Option/D`,
    description: PAGE_DESCRIPTION,
    url: '/agent-ia',
  },
  twitter: {
    title: `${PAGE_TITLE} · Option/D`,
    description: PAGE_DESCRIPTION,
  },
};

// Source unique pour le composant <Faq> ET le JSON-LD FAQPage (parité texte exigée par Google).
const FAQ_ITEMS = [
  {
    q: "C'est un robot, mes clients vont le sentir ?",
    a: "Les messages sont écrits dans votre ton, naturels, et personnalisés avec le prénom et l'historique de la personne. Pour la partie standard téléphonique IA, la loi demande de préciser que c'est un assistant : on le dit simplement, et franchement, les gens préfèrent une réponse tout de suite à un répondeur.",
  },
  {
    q: 'Et mes données ?',
    a: "Elles restent chez vous et en France. Je ne les revends pas, je ne les utilise pour rien d'autre. C'est écrit noir sur blanc dans le contrat.",
  },
  {
    q: "Je n'y connais rien en informatique.",
    a: "C'est justement le but. Vous n'installez rien, vous ne gérez rien. Je m'occupe de tout, et vous regardez les résultats.",
  },
  {
    q: "Et si ça ne marche pas chez moi ?",
    a: "On commence petit, par vos anciens clients, là où le risque est nul et le résultat rapide. Vous voyez les chiffres avant d'aller plus loin.",
  },
  {
    q: "C'est cher.",
    a: "Combien vous rapporte un seul client ? On commence par récupérer des clients que vous perdiez sans le voir — et on commence toujours par vos anciens clients : zéro publicité, résultat rapide. Vous voyez les chiffres avant d'aller plus loin.",
  },
];

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Agent IA téléphonique / Standard téléphonique IA',
  name: 'Agents IA téléphoniques pour commerces et indépendants',
  description:
    'Agent vocal IA qui répond au téléphone, rappelle les prospects et réveille les anciens clients. Données en France, RGPD & AI Act.',
  provider: { '@id': 'https://optiond.fr/#organization' },
  areaServed: { '@type': 'Country', name: 'France' },
  url: 'https://optiond.fr/agent-ia',
  offers: [
    {
      '@type': 'Offer',
      name: 'Découverte',
      price: '890',
      priceCurrency: 'EUR',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '890',
        priceCurrency: 'EUR',
        unitCode: 'MON',
      },
    },
    {
      '@type': 'Offer',
      name: 'Essentiel',
      price: '1890',
      priceCurrency: 'EUR',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '1890',
        priceCurrency: 'EUR',
        unitCode: 'MON',
      },
    },
    {
      '@type': 'Offer',
      name: 'Complet',
      price: '3490',
      priceCurrency: 'EUR',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '3490',
        priceCurrency: 'EUR',
        unitCode: 'MON',
      },
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

export default function AgentIaPage() {
  return (
    <main data-screen-label="Agent IA — Option/D">
      <JsonLd data={[serviceJsonLd, faqJsonLd]} />
      <Nav
        active="agent"
        statusText="Réponse sous 24 h"
        ctaLabel="Réserver 20 min"
        ctaHref="#contact"
      />

      {/* ============== HERO ============== */}
      <Hero
        ariaLabel="Agents IA"
        eyebrow={
          <>
            <span className="dot"></span>
            <span>Option/D · Agent IA téléphonique</span>
            <span className="sep">—</span>
            <span>Commerces &amp; indépendants</span>
          </>
        }
        headline={
          <>
            Votre équipe qui <span className="accent">ne dort jamais.</span>
          </>
        }
        sub="J'installe pour votre commerce un agent vocal IA — un standard téléphonique IA qui répond au téléphone, relance vos anciens clients et rappelle vos prospects — pendant que vous faites votre métier."
        ctas={
          <>
            <Button href="#contact" variant="primary" size="lg" arrow="→">
              Prendre 20 minutes pour en parler
            </Button>
            <Button href="#formules" variant="sec" size="lg">
              Voir les formules
            </Button>
          </>
        }
        meta={
          <>
            <span>
              <span className="tick">↳</span> Données hébergées en France
            </span>
            <span>
              <span className="tick">↳</span> Conforme RGPD &amp; AI Act
            </span>
            <span>
              <span className="tick">↳</span> Sans engagement long
            </span>
          </>
        }
      />

      {/* ============== STRIP ============== */}
      <TargetStrip
        items={[
          { num: '01', label: 'Commerces & restaurants' },
          { num: '02', label: 'Artisans' },
          { num: '03', label: 'Indépendants & praticiens' },
          { num: '04', label: 'TPE de services' },
        ]}
      />

      {/* ============== PROBLÈME ============== */}
      <section id="probleme" className="band">
        <div className="container">
          <div className="band-head">
            <div className="left">
              <div className="eyebrow">01 — Le constat</div>
              <h2>Le problème, vous le connaissez déjà.</h2>
            </div>
            <p className="right">
              Trois fuites silencieuses, tous les jours. Des clients qui passent la porte{' '}
              <strong>sans que vous les voyiez</strong> — et sans que ça apparaisse nulle part.
            </p>
          </div>

          <div className="problem-row">
            <div className="problem-copy">
              <p>
                Vous travaillez. Pendant ce temps, le téléphone sonne et vous ne pouvez pas
                répondre. Un client que vous aviez l&apos;an dernier vous a complètement oublié.
                Quelqu&apos;un remplit le formulaire de votre site un dimanche soir, et le temps
                que vous le rappeliez le mardi, il est déjà parti chez le voisin.
              </p>
              <p>À chaque fois, c&apos;est un client qui passe la porte sans que vous le voyiez.</p>
              <p className="kick">
                Vous n&apos;avez pas un problème de clients.{' '}
                <span className="accent">Vous avez un problème de temps.</span>
              </p>
            </div>

            <LeakPanel />
          </div>
        </div>
      </section>

      {/* ============== SOLUTION ============== */}
      <section id="solution" className="band soft">
        <div className="container">
          <div className="band-head">
            <div className="left">
              <div className="eyebrow">02 — La solution</div>
              <h2>Ce que je mets en place.</h2>
            </div>
            <p className="right">
              Un standard téléphonique IA branché sur votre activité — réponse aux appels,
              prise de rendez-vous 24/7 et relances — qui s&apos;occupe de ce que vous n&apos;avez
              pas le temps de faire, <strong>sans rien changer à votre métier</strong>.
            </p>
          </div>

          <div className="icards cols-4">
            <IconCard
              icon={
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.94.37 1.86.7 2.74a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.34-1.34a2 2 0 0 1 2.11-.45c.88.33 1.8.57 2.74.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              }
              title="Le standardiste qui ne rate jamais un appel"
            >
              Vous n&apos;avez pas pu décrocher ? Dans les secondes qui suivent, la personne reçoit
              un message. On peut même décrocher à votre place pour donner vos horaires, vos tarifs,
              ou prendre un rendez-vous. Plus aucun appel ne tombe dans le vide.
            </IconCard>

            <IconCard
              icon={
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polyline points="1 4 1 10 7 10"></polyline>
                  <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>
                </svg>
              }
              title="Celui qui réveille vos anciens clients"
            >
              Vous avez des dizaines de clients qui ne sont jamais revenus. Pas parce
              qu&apos;ils sont mécontents : juste parce qu&apos;ils ont oublié. On leur envoie un
              message simple et personnel. Une partie revient. Sans publicité — ce sont des gens que
              vous avez déjà.
            </IconCard>

            <IconCard
              icon={
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                </svg>
              }
              title="Celui qui rappelle vos prospects tout de suite"
            >
              Dès que quelqu&apos;un laisse ses coordonnées sur votre site, il reçoit une réponse en
              moins de cinq minutes, pendant qu&apos;il pense encore à vous. C&apos;est souvent ça
              qui fait la différence entre un client signé et un client perdu.
            </IconCard>

            <IconCard
              icon={
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              }
              title={
                <>
                  Celui qui s&apos;occupe de vos avis Google{' '}
                  <span className="opt">option</span>
                </>
              }
            >
              Après chaque passage, on facilite ceux qui veulent laisser un avis. Plus d&apos;avis
              récents = mieux placé sur Google = plus de gens qui vous trouvent. Idéal pour les
              commerces, restaurants, artisans.
            </IconCard>
          </div>
        </div>
      </section>

      {/* ============== RÉASSURANCE ============== */}
      <section id="cadre" className="band">
        <div className="container">
          <div className="band-head">
            <div className="left">
              <div className="eyebrow">03 — Ce qui est carré</div>
              <h2>Sérieux, légal, sous contrôle.</h2>
            </div>
            <p className="right">
              L&apos;automatisation ne veut pas dire le far west.{' '}
              <strong>Vos données, la loi, et le dernier mot</strong> : tout est cadré, écrit, et
              reste de votre côté.
            </p>
          </div>

          <div className="icards cols-3">
            <IconCard
              safe
              icon={
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              }
              title="Vos données restent en France"
            >
              Tout est hébergé en France. Rien n&apos;est revendu, rien n&apos;est partagé. Écrit
              noir sur blanc dans le contrat.
            </IconCard>

            <IconCard
              safe
              icon={
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              }
              title="Dans les règles"
            >
              On n&apos;écrit jamais à quelqu&apos;un qui n&apos;a rien demandé. Chacun peut se
              désinscrire d&apos;un mot. Tout respecte la loi française (RGPD, AI Act).
            </IconCard>

            <IconCard
              safe
              icon={
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              }
              title="Vous gardez la main"
            >
              Rien d&apos;important (un avis, une réponse) ne part sans qu&apos;un humain
              l&apos;ait relu. Vous supervisez, vous validez.
            </IconCard>
          </div>
        </div>
      </section>

      {/* ============== FORMULES ============== */}
      <section id="formules" className="band soft">
        <div className="container">
          <div className="band-head">
            <div className="left">
              <div className="eyebrow">04 — Les formules</div>
              <h2>Un abonnement, sans engagement long.</h2>
            </div>
            <p className="right">
              Un abonnement mensuel, sans engagement long.{' '}
              <strong>Vous montez en puissance quand vous êtes prêt.</strong>
            </p>
          </div>

          <div className="packs">
            <PricingCard
              tier="Formule"
              name="Découverte"
              price="890 €"
              priceUnit="/mois · HT"
              lede="Pour démarrer là où le risque est nul : on récupère des clients que vous perdiez sans le voir."
              features={[
                { mk: '✓', children: 'Réveil des anciens clients' },
                { mk: '✓', children: 'Rappel des prospects du site' },
                { mk: '✓', children: 'SMS automatique sur appel manqué' },
                {
                  mk: '✓',
                  children: (
                    <>
                      <span className="qty">200 SMS</span> inclus / mois
                    </>
                  ),
                },
                { mk: '—', children: 'Standard téléphonique IA', off: true },
                {
                  mk: '+',
                  children: 'Avis Google · en option',
                  off: true,
                },
                { mk: '✓', children: 'Tableau de bord + bilan mensuel écrit' },
              ]}
              cta={
                <a href="#contact" className="btn btn-sec">
                  Choisir Découverte
                </a>
              }
            />

            <PricingCard
              tier="Formule"
              name="Essentiel"
              price="1 890 €"
              priceUnit="/mois · HT"
              lede="Le bon équilibre : le standard téléphonique IA en plus, pour ne plus jamais laisser un appel sans réponse."
              featured
              features={[
                { mk: '✓', children: 'Réveil des anciens clients' },
                { mk: '✓', children: 'Rappel des prospects du site' },
                { mk: '✓', children: 'SMS automatique sur appel manqué' },
                {
                  mk: '✓',
                  children: (
                    <>
                      <span className="qty">500 SMS</span> inclus / mois
                    </>
                  ),
                },
                {
                  mk: '✓',
                  children: (
                    <>
                      Standard téléphonique IA —{' '}
                      <span className="qty">~250 appels/mois</span>
                    </>
                  ),
                },
                {
                  mk: '+',
                  children: 'Avis Google · en option',
                  off: true,
                },
                { mk: '✓', children: 'Point téléphonique mensuel + réglages inclus' },
              ]}
              cta={
                <a href="#contact" className="btn btn-on-mag">
                  Choisir Essentiel <span className="arrow">→</span>
                </a>
              }
            />

            <PricingCard
              tier="Formule"
              name="Complet"
              price="3 490 €"
              priceUnit="/mois · HT"
              lede="La puissance maximale : plus de volume, suivi rapproché, et améliorations en continu."
              features={[
                { mk: '✓', children: 'Réveil des anciens clients' },
                { mk: '✓', children: 'Rappel des prospects du site' },
                { mk: '✓', children: 'SMS automatique sur appel manqué' },
                {
                  mk: '✓',
                  children: (
                    <>
                      <span className="qty">1 000 SMS</span> inclus / mois
                    </>
                  ),
                },
                {
                  mk: '✓',
                  children: (
                    <>
                      Standard téléphonique IA —{' '}
                      <span className="qty">~650 appels/mois</span>
                    </>
                  ),
                },
                {
                  mk: '+',
                  children: 'Avis Google · en option',
                  off: true,
                },
                { mk: '✓', children: 'Point tous les 15 jours + améliorations en continu' },
              ]}
              cta={
                <a href="#contact" className="btn btn-sec">
                  Choisir Complet
                </a>
              }
            />
          </div>

          <p className="pricing-note">
            Au-delà des appels inclus, chaque appel supplémentaire est facturé au prix d&apos;un
            café. Tout est plafonné : <span className="ok">pas de mauvaise surprise</span> sur la
            facture.
          </p>
        </div>
      </section>

      {/* ============== FAQ ============== */}
      <section id="faq" className="band">
        <div className="container">
          <div className="band-head">
            <div className="left">
              <div className="eyebrow">05 — Questions fréquentes</div>
              <h2>Les questions qu&apos;on me pose souvent.</h2>
            </div>
            <p className="right">
              Si la vôtre n&apos;est pas là, écrivez-moi deux lignes. Je réponds personnellement,
              simplement, et sans jargon.
            </p>
          </div>

          <Faq items={FAQ_ITEMS} />
        </div>
      </section>

      {/* ============== CTA FINAL ============== */}
      <section id="contact" className="band" style={{ paddingTop: '80px' }}>
        <div className="container">
          <div
            className="cta-band"
            style={{
              gridTemplateColumns: '1fr',
              textAlign: 'center',
              justifyItems: 'center',
            }}
          >
            <div className="left">
              <div className="eyebrow">— On en parle ? —</div>
              <h2>On en parle ?</h2>
              <p style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                Un premier échange de 20 minutes, sans engagement, pour voir si ça colle à votre
                activité. Si je peux vous aider, je vous montre comment. Sinon, je vous le dis
                franchement.
              </p>
              <div className="cta-row" style={{ justifyContent: 'center' }}>
                <a href="mailto:contact@optiond.fr" className="btn btn-on-mag btn-lg">
                  Réserver 20 minutes <span className="arrow">→</span>
                </a>
              </div>
              <div className="cta-coords" style={{ justifyContent: 'center' }}>
                <span>David</span>
                <span className="sepd">·</span>
                <span>contact@optiond.fr</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============== FOOTER ============== */}
      <Footer
        brandText="Sites internet premium et agents IA pour commerces et indépendants. Un seul interlocuteur : David, Haute-Savoie."
        bottomStatus="Disponible · échange sous 24 h"
        columns={[
          {
            title: 'Agent IA',
            links: [
              { label: 'Ce que je mets en place', href: '#solution' },
              { label: 'Ce qui est carré', href: '#cadre' },
              { label: 'Les formules', href: '#formules' },
              { label: 'Questions fréquentes', href: '#faq' },
            ],
          },
          {
            title: 'Services',
            links: [
              { label: 'Accueil', href: '/' },
              { label: 'Site internet', href: '/site-internet' },
              { label: 'Agent IA', href: '/agent-ia' },
              { label: 'Mentions légales', href: '/mentions-legales' },
            ],
          },
        ]}
      />
    </main>
  );
}
