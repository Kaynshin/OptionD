import RevealOnView from './RevealOnView';

export default function DiagnosticCard() {
  return (
    <RevealOnView inViewClass="in-view" threshold={0.2}>
      <div className="diag-card" aria-label="Exemple de diagnostic">
        <div className="head">
          <div className="title">
            <span className="badge-mag">Diagnostic</span>
            <span className="name">Domaine Gagnaud · Cave</span>
          </div>
          <div className="ref">DIAG-2026-0418</div>
        </div>
        <div className="body">
          <div className="diag-row-line">
            <div className="k">Performance</div>
            <div className="v">LCP 4.8 s · CLS 0.21 · mobile</div>
            <div className="score err">42 / 100</div>
          </div>
          <div className="diag-row-line">
            <div className="k">SEO local</div>
            <div className="v">Fiche Google incomplète, 3 photos, 0 post</div>
            <div className="score warn">61 / 100</div>
          </div>
          <div className="diag-row-line">
            <div className="k">Avis clients</div>
            <div className="v">4,8 ★ · 87 avis · 0 réponse</div>
            <div className="score warn">Sous-exploité</div>
          </div>
          <div className="diag-row-line">
            <div className="k">Hiérarchie</div>
            <div className="v">Promesse absente du H1 · CTA hors écran</div>
            <div className="score err">Critique</div>
          </div>
          <div className="diag-row-line">
            <div className="k">Concurrence</div>
            <div className="v">
              2 caves voisines mieux référencées sur "vin Annecy"
            </div>
            <div className="score warn">À reprendre</div>
          </div>
          <div className="diag-row-line">
            <div className="k">Mobile</div>
            <div className="v">Menu cassé · texte 11 px</div>
            <div className="score err">Bloqueur</div>
          </div>
        </div>
        <div className="findings">
          <div className="lab">Trois priorités</div>
          <ol>
            <li>
              <strong>Refonte mobile-first</strong> — 70 % du trafic, expérience
              aujourd'hui inexploitable.
            </li>
            <li>
              <strong>Fiche Google reprise en main</strong> — gain SEO local
              rapide, sans refonte.
            </li>
            <li>
              <strong>Page "Trouver la cave"</strong> — itinéraire, horaires,
              photos. Entrée locale manquante.
            </li>
          </ol>
        </div>
      </div>
    </RevealOnView>
  );
}
