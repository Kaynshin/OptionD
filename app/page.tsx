import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import IconCard from '@/components/IconCard';
import ServiceCard from '@/components/ServiceCard';
import Footer from '@/components/Footer';
import Button from '@/components/Button';

export const metadata: Metadata = {
  title: 'Option/D — Sites internet premium & agents IA · Annecy',
  description:
    'David Jomain : des sites internet premium livrés en une semaine, et des agents IA qui répondent, relancent et rappellent vos clients — pendant que vous faites votre métier.',
};

export default function Accueil() {
  return (
    <main data-screen-label="Accueil — Option/D">
      <Nav
        active="home"
        statusText="Disponible · 2026"
        ctaLabel="Me contacter"
        ctaHref="mailto:david@optiond.fr"
      />

      <Hero
        ariaLabel="Accueil"
        lockup
        eyebrow={
          <>
            <span className="dot"></span>
            <span>Atelier freelance · IA-augmenté</span>
            <span className="sep">—</span>
            <span>David Jomain · Annecy</span>
          </>
        }
        headline={
          <>
            Deux façons de faire travailler le digital pour{' '}
            <span className="accent">votre commerce.</span>
          </>
        }
        sub={
          <>
            Option/D, c&apos;est David Jomain : des <strong>sites internet premium</strong> livrés
            en une semaine, et des <strong>agents IA</strong> qui répondent, relancent et rappellent
            vos clients — pendant que vous faites votre métier.
          </>
        }
        ctas={
          <>
            <Button href="/site-internet" variant="primary" size="lg" arrow="→">
              Sites internet
            </Button>
            <Button href="/agent-ia" variant="sec" size="lg" arrow="→">
              Agents IA
            </Button>
          </>
        }
        meta={
          <>
            <span>
              <span className="tick">↳</span> Un seul interlocuteur
            </span>
            <span>
              <span className="tick">↳</span> L&apos;analyse avant le devis
            </span>
            <span>
              <span className="tick">↳</span> Basé en Haute-Savoie
            </span>
          </>
        }
      />

      {/* ============== DEUX SERVICES ============== */}
      <section id="services" className="band">
        <div className="container">
          <div className="band-head">
            <div className="left">
              <div className="eyebrow">Les services</div>
              <h2>Deux leviers, un seul artisan du digital.</h2>
            </div>
            <p className="right">
              Faire venir de nouveaux clients avec un site qui convertit, et{' '}
              <strong>ne plus en perdre</strong> grâce à des assistants qui ne dorment jamais. Vous
              pouvez commencer par l&apos;un, ajouter l&apos;autre quand vous êtes prêt.
            </p>
          </div>

          <div className="hub">
            <ServiceCard
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
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              }
              eyebrow="Service 01"
              title="Sites internet"
              lede="Vitrines et landing pages haut de gamme, livrées en environ sept jours. Périmètre serré, exécution agent-IA, qualité arbitrée ligne par ligne."
              items={[
                'Diagnostic offert avant tout devis',
                'Trois packs, de 2 500 € à 5 500 €',
                'Lighthouse ≥ 95 sur mobile',
                'Livraison en ~7 jours, prix tenu',
              ]}
              ctaLabel="Découvrir les sites"
              ctaHref="/site-internet"
              price={
                <>
                  À partir de <b>2 500 €</b>
                </>
              }
            />

            <ServiceCard
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
                  <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.94.37 1.86.7 2.74a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.34-1.34a2 2 0 0 1 2.11-.45c.88.33 1.8.57 2.74.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              }
              eyebrow="Service 02"
              title="Agents IA"
              lede="Des assistants automatiques qui répondent au téléphone, réveillent vos anciens clients et rappellent vos prospects — pendant que vous travaillez."
              items={[
                'Le standardiste qui ne rate aucun appel',
                'Réveil des anciens clients endormis',
                'Rappel des prospects en moins de 5 min',
                'Données en France, conforme RGPD & AI Act',
              ]}
              ctaLabel="Découvrir les agents IA"
              ctaHref="/agent-ia"
              price={
                <>
                  À partir de <b>890 €/mois</b>
                </>
              }
            />
          </div>
        </div>
      </section>

      {/* ============== POURQUOI ============== */}
      <section className="band soft">
        <div className="container">
          <div className="band-head">
            <div className="left">
              <div className="eyebrow">La méthode</div>
              <h2>L&apos;analyse précède la proposition.</h2>
            </div>
            <p className="right">
              Je ne réponds pas à des appels d&apos;offres. J&apos;arrive avec un{' '}
              <strong>diagnostic</strong> de votre présence en ligne — c&apos;est seulement ensuite
              qu&apos;on parle prix.
            </p>
          </div>

          <div className="icards cols-3">
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
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              }
              title="Un seul interlocuteur"
            >
              David, de la première analyse à la mise en ligne. Zéro intermédiaire, zéro téléphone
              arabe.
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
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              }
              title="L'analyse d'abord"
            >
              J&apos;arrive avec un constat honnête sur ce qui vous fait perdre des clients — pas
              avec un devis générique.
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
              title="IA-augmenté, assumé"
            >
              L&apos;IA accélère la production et le suivi. Jamais la réflexion : chaque arbitrage
              reste humain.
            </IconCard>
          </div>
        </div>
      </section>

      <Footer
        brandText="Sites internet premium et agents IA pour commerces et indépendants. Un seul interlocuteur : David Jomain, Haute-Savoie."
        bottomStatus="Disponible · 2026"
        columns={[
          {
            title: 'Services',
            links: [
              { label: 'Site internet', href: '/site-internet' },
              { label: 'Agent IA', href: '/agent-ia' },
              { label: 'Diagnostic offert', href: '/site-internet#diagnostic' },
              { label: 'Formules IA', href: '/agent-ia#formules' },
            ],
          },
          {
            title: 'Atelier',
            links: [
              { label: 'Approche', href: '/site-internet#approche' },
              { label: 'Packs & tarifs', href: '/site-internet#packs' },
              { label: 'Cas clients', href: '/site-internet#cas' },
              { label: 'Mentions légales', href: '#' },
            ],
          },
        ]}
      />
    </main>
  );
}
