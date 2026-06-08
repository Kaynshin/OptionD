export default function Stats() {
  return (
    <section className="band" style={{ padding: 0, borderBottom: 'none' }}>
      <div className="container">
        <div className="stats">
          <div className="stat">
            <div className="num">
              7<span className="unit">jours</span>
            </div>
            <div className="lab">Délai de livraison</div>
            <div className="desc">Engagement ferme. Sinon le projet n'entre pas.</div>
          </div>
          <div className="stat">
            <div className="num">
              95<span className="unit">+</span>
            </div>
            <div className="lab">Lighthouse mobile</div>
            <div className="desc">
              Performance, accessibilité, SEO, bonnes pratiques.
            </div>
          </div>
          <div className="stat">
            <div className="num">3</div>
            <div className="lab">Packs, prix tenus</div>
            <div className="desc">
              2 500 € · 3 800 € · 5 500 €. Pas de devis qui s'envole.
            </div>
          </div>
          <div className="stat">
            <div className="num">1</div>
            <div className="lab">Interlocuteur unique</div>
            <div className="desc">
              David. De la première analyse à la mise en ligne.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
