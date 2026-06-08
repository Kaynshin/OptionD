import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

const PAGE_TITLE = 'Mentions légales';
const PAGE_DESCRIPTION =
  'Mentions légales du site Option/D : éditeur, hébergeur, propriété intellectuelle, données personnelles (RGPD) et mesure d’audience.';

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: '/mentions-legales',
  },
  openGraph: {
    title: `${PAGE_TITLE} · Option/D`,
    description: PAGE_DESCRIPTION,
    url: '/mentions-legales',
  },
  twitter: {
    title: `${PAGE_TITLE} · Option/D`,
    description: PAGE_DESCRIPTION,
  },
};

export default function MentionsLegales() {
  return (
    <main data-screen-label="Mentions légales — Option/D">
      <Nav ctaLabel="Me contacter" ctaHref="mailto:david@optiond.fr" />

      <section className="band">
        <div className="container">
          <article className="legal">
            <div className="eyebrow">Informations légales</div>
            <h1>Mentions légales</h1>
            <p className="lead">
              Informations légales relatives au site <strong>optiond.fr</strong>, conformément aux
              articles 6-III et 19 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans
              l&apos;économie numérique (LCEN).
            </p>
            <p className="updated">Dernière mise à jour : juin 2026.</p>

            <h2>Éditeur du site</h2>
            <p>
              Le site Option/D est édité par <strong>David</strong>, atelier freelance Option/D, basé
              en Haute-Savoie (France).
            </p>
            <ul>
              <li>
                Email : <a href="mailto:david@optiond.fr">david@optiond.fr</a>
              </li>
              <li>
                SIRET : 750 186 181 00038
              </li>
            </ul>

            <h2>Directeur de la publication</h2>
            <p>David, en sa qualité d&apos;éditeur du site.</p>

            <h2>Hébergeur</h2>
            <p>Le site est hébergé par :</p>
            <ul>
              <li>Vercel Inc.</li>
              <li>340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis</li>
              <li>
                <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">
                  vercel.com
                </a>
              </li>
            </ul>

            <h2>Propriété intellectuelle</h2>
            <p>
              L&apos;ensemble des contenus présents sur ce site — textes, visuels, mise en page, code,
              ainsi que la marque et l&apos;identité <strong>Option/D</strong> — est protégé par le
              droit de la propriété intellectuelle et reste la propriété exclusive de leur auteur,
              sauf mention contraire.
            </p>
            <p>
              Toute reproduction, représentation, modification, publication ou adaptation, totale ou
              partielle, de ces éléments, par quelque procédé que ce soit, est interdite sans
              autorisation écrite préalable. Toute exploitation non autorisée est susceptible de
              constituer une contrefaçon.
            </p>

            <h2>Données personnelles (RGPD)</h2>
            <p>
              Conformément au Règlement général sur la protection des données (RGPD, UE 2016/679) et à
              la loi Informatique et Libertés, vous êtes informé(e) du traitement de vos données
              personnelles dans les conditions suivantes.
            </p>

            <h3>Données collectées et finalité</h3>
            <p>
              Les données collectées via le formulaire de contact (nom, adresse email et message)
              servent uniquement à répondre à votre demande et à assurer le suivi de notre relation.
              Aucune donnée n&apos;est cédée ni revendue à des tiers à des fins commerciales.
            </p>

            <h3>Base légale</h3>
            <p>
              Le traitement repose sur votre consentement, recueilli lors de l&apos;envoi de votre
              message, ainsi que sur l&apos;intérêt légitime de l&apos;éditeur à répondre aux demandes
              entrantes et, le cas échéant, sur les mesures précontractuelles nécessaires à
              l&apos;établissement d&apos;un devis.
            </p>

            <h3>Durée de conservation</h3>
            <p>
              Vos données sont conservées le temps nécessaire au traitement de votre demande, puis
              pendant la durée légale applicable en cas de relation contractuelle. Elles sont
              supprimées au-delà.
            </p>

            <h3>Vos droits</h3>
            <p>
              Vous disposez d&apos;un droit d&apos;accès, de rectification, de suppression, de
              limitation, d&apos;opposition et de portabilité de vos données. Pour exercer ces droits,
              contactez le délégué à la protection des données (DPO) à l&apos;adresse{' '}
              <a href="mailto:david@optiond.fr">david@optiond.fr</a>. Vous pouvez également introduire
              une réclamation auprès de la CNIL (
              <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">
                cnil.fr
              </a>
              ).
            </p>

            <h3>Hébergement des données</h3>
            <p>
              Pour les services d&apos;agents IA, les données traitées sont hébergées en France,
              conformément aux exigences de souveraineté et de conformité RGPD et AI Act.
            </p>

            <h2>Mesure d&apos;audience et cookies</h2>
            <p>
              Ce site utilise <strong>Vercel Analytics</strong> pour mesurer l&apos;audience de manière
              anonyme et <strong>sans cookie</strong>, ainsi que <strong>Vercel Speed Insights</strong>{' '}
              pour suivre les indicateurs de performance (Core Web Vitals). Aucune donnée personnelle
              identifiante n&apos;est collectée à des fins de mesure d&apos;audience.
            </p>
            <p>
              Le site ne dépose <strong>aucun cookie publicitaire</strong> ni traceur tiers à des fins
              de profilage.
            </p>

            <h2>Contact</h2>
            <p>
              Pour toute question relative à ces mentions légales ou au site, vous pouvez écrire à{' '}
              <a href="mailto:david@optiond.fr">david@optiond.fr</a>.
            </p>
          </article>
        </div>
      </section>

      <Footer
        brandText="Sites internet premium et agents IA pour commerces et indépendants. Un seul interlocuteur : David, Haute-Savoie."
        bottomStatus="Disponible · 2026"
        columns={[
          {
            title: 'Services',
            links: [
              { label: 'Site internet', href: '/site-internet' },
              { label: 'Agent IA', href: '/agent-ia' },
            ],
          },
          {
            title: 'Atelier',
            links: [{ label: 'Mentions légales', href: '/mentions-legales' }],
          },
        ]}
      />
    </main>
  );
}
