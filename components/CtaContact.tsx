import Button from './Button';
import DiagnosticForm from './DiagnosticForm';

export default function CtaContact() {
  return (
    <section id="contact" className="band" style={{ paddingTop: '80px' }}>
      <div className="container">
        <div className="cta-band">
          <div className="left">
            <div className="eyebrow">— Demander mon diagnostic —</div>
            <h2>Avant le devis, un constat honnête sur votre site.</h2>
            <p>
              Donnez-moi votre URL, je vous renvoie sous 48 h un document court :
              performance, SEO local, parcours, comparatif concurrence. Aucun
              engagement.
            </p>
            <div className="cta-row">
              <Button href="mailto:contact@optiond.fr" variant="on-mag" size="lg" arrow="→">
                contact@optiond.fr
              </Button>
            </div>
          </div>
          <div className="right">
            <DiagnosticForm />
          </div>
        </div>
      </div>
    </section>
  );
}
