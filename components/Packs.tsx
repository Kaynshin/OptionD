import PackCard from './PackCard';

export default function Packs() {
  return (
    <section id="packs" className="band soft">
      <div className="container">
        <div className="band-head">
          <div className="left">
            <div className="eyebrow">03 — Packs</div>
            <h2>Trois périmètres. Trois prix tenus.</h2>
          </div>
          <p className="right">
            Le périmètre est ce qui rend la promesse de délai possible.{' '}
            <strong>
              Si un projet ne tient pas en sept à dix jours sans transiger sur la
              finition, il n'entre pas chez Option/D.
            </strong>
          </p>
        </div>

        <div className="packs">
          <PackCard
            tier="Pack Essentiel"
            name={<>Landing &amp; vitrine 3-5 pages</>}
            price="2 500 €"
            priceUnit="HT · prix tenu"
            lede="L'option courte. Une présence en ligne propre, mobile-first, mise en ligne en sept jours."
            items={[
              'Design sur-mesure, dark ou light, hiérarchie éditoriale',
              'Jusqu\'à 5 pages : accueil, services, à propos, contact, mentions',
              'SEO de base, fiche Google synchronisée, sitemap',
              'Formulaire contact, prise de RDV optionnelle',
              'Hébergement Vercel + nom de domaine offerts 1 an',
            ]}
            ctaLabel="Choisir Essentiel"
            ctaHref="#contact"
            ctaVariant="sec"
          />

          <PackCard
            featured
            tier="Pack Signature"
            name="Vitrine 6-10 pages, effet waouh"
            price="3 800 €"
            priceUnit="HT · prix tenu"
            lede="Le bon choix pour 80 % des clients : un site qui vous ressemble, pas un gabarit Shopify."
            items={[
              'Tout le pack Essentiel',
              'Design éditorial poussé, micro-interactions, animations sobres',
              'Jusqu\'à 10 pages, structure SEO travaillée par requête',
              'CMS léger pour vos actualités / nouveautés',
              'Optimisation Core Web Vitals certifiée',
              'Reportage photo conseillé (non inclus)',
            ]}
            ctaLabel="Choisir Signature"
            ctaHref="#contact"
            ctaVariant="on-mag"
            ctaArrow="→"
          />

          <PackCard
            tier="Pack Atelier"
            name="Identité, animations, fonctions"
            price="5 500 €"
            priceUnit="HT · prix tenu"
            lede="Quand on veut un site qui marque. Identité retravaillée, animations fines, intégrations."
            items={[
              'Tout le pack Signature',
              'Identité visuelle reprise ou créée (logo, palette, typo)',
              'Animations avancées, transitions sur-mesure',
              'Intégrations : Calendly, MailerLite, paiement acompte',
              'Pages illimitées sur le périmètre validé',
              'Suivi rapproché trois mois inclus',
            ]}
            ctaLabel="Choisir Atelier"
            ctaHref="#contact"
            ctaVariant="sec"
          />
        </div>

        <div className="modulators">
          <div className="pill">
            Modulateur urgence — Express 72 h{' '}
            <span className="mag">×1,25</span>
          </div>
          <div className="pill">
            Modulateur urgence — Flash 48 h <span className="mag">×1,5</span>
          </div>
          <div className="pill">
            Suivi mensuel · Sérénité <span className="mag">39 €</span> ·
            Croissance <span className="mag">89 €</span> · Partenaire{' '}
            <span className="mag">189 €</span>
          </div>
        </div>
      </div>
    </section>
  );
}
