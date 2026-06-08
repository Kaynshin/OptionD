export default function Cases() {
  return (
    <section id="cas" className="band">
      <div className="container">
        <div className="band-head">
          <div className="left">
            <div className="eyebrow">04 — Cas clients</div>
            <h2>Travaux récents, sans esbroufe.</h2>
          </div>
          <p className="right">
            Trois projets représentatifs des cibles Phase 1. Chaque site est{' '}
            <strong>livré, mesuré, et suivi</strong> trois mois en moyenne. Aucun
            de ces clients n'a payé pour figurer ici.
          </p>
        </div>

        <div className="case-tabs" role="tablist">
          <button className="tab active" type="button">
            Tous · 12
          </button>
          <button className="tab" type="button">
            Artisans · 4
          </button>
          <button className="tab" type="button">
            Commerçants · 3
          </button>
          <button className="tab" type="button">
            Coachs · 3
          </button>
          <button className="tab" type="button">
            Libérales · 2
          </button>
        </div>

        <div className="cases">
          <article className="case">
            <div className="thumb cave"></div>
            <div className="meta">
              <div className="row">
                <div className="name">Domaine Gagnaud</div>
                <div className="when">Mars 2026</div>
              </div>
              <div className="desc">
                Cave et caviste, Annecy. Refonte vitrine + page "Trouver la cave"
                + intégration commande de coffrets.
              </div>
              <div className="tags">
                <span className="tag">Pack Signature</span>
                <span className="tag">Commerçant</span>
                <span className="tag">7 j</span>
              </div>
            </div>
          </article>

          <article className="case">
            <div className="thumb archi"></div>
            <div className="meta">
              <div className="row">
                <div className="name">Atelier B. Roussin</div>
                <div className="when">Février 2026</div>
              </div>
              <div className="desc">
                Architecte D.P.L.G., Megève. Portfolio long, 14 projets, tirage
                haute-définition, prise de RDV.
              </div>
              <div className="tags">
                <span className="tag">Pack Atelier</span>
                <span className="tag">Libérale</span>
                <span className="tag">9 j</span>
              </div>
            </div>
          </article>

          <article className="case">
            <div className="thumb coach">
              <div className="eb">— Coach performance —</div>
              <div className="ti">
                Marina Ferraz
                <br />
                Performance &amp; nutrition
              </div>
            </div>
            <div className="meta">
              <div className="row">
                <div className="name">Marina Ferraz</div>
                <div className="when">Janvier 2026</div>
              </div>
              <div className="desc">
                Coach performance, Annemasse. Landing événement + tunnel
                d'inscription + paiement acompte.
              </div>
              <div className="tags">
                <span className="tag">Pack Essentiel + urgence</span>
                <span className="tag">Coach</span>
                <span className="tag">5 j</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
