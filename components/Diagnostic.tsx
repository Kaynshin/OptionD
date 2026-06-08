import Button from './Button';
import DiagnosticCard from './DiagnosticCard';

export default function Diagnostic() {
  return (
    <section id="diagnostic" className="band soft">
      <div className="container">
        <div className="band-head">
          <div className="left">
            <div className="eyebrow">02 — Diagnostic offert</div>
            <h2>Avant le devis, le constat.</h2>
          </div>
          <p className="right">
            Vous repartez avec un document court, dense, lisible — qui vaut, en
            soi, une demi-journée d'audit qu'on facture en moyenne 800 €.{' '}
            <strong>Aucun engagement</strong> de commander la suite.
          </p>
        </div>

        <div className="diag-row">
          <div className="diag-copy">
            <h3>Ce que je remonte sur votre site actuel.</h3>
            <p>
              Un format A4, dix minutes de lecture, des chiffres et des
              recommandations actionnables. Ce qui vous fait perdre du chiffre,
              ce qu'il faudrait corriger avant tout, et une estimation d'effort
              honnête.
            </p>
            <ul>
              <li>
                Performance technique mesurée (Lighthouse, Core Web Vitals,
                mobile)
              </li>
              <li>SEO local — fiche Google Business, présence Maps, avis</li>
              <li>
                Lecture éditoriale — promesse, hiérarchie, parcours, frictions
              </li>
              <li>Comparatif rapide vs. trois concurrents directs</li>
              <li>Recommandation de pack ou refus motivé d'intervenir</li>
            </ul>
            <div className="cta-row">
              <Button href="#contact" variant="primary" arrow="→">
                Demander mon diagnostic
              </Button>
              <span className="micro">Réponse sous 48 h</span>
            </div>
          </div>

          <DiagnosticCard />
        </div>
      </div>
    </section>
  );
}
