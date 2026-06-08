import CodeWindow from './CodeWindow';

export default function BuilderInPublic() {
  return (
    <section className="band soft">
      <div className="container">
        <div className="band-head">
          <div className="left">
            <div className="eyebrow">05 — Builder-in-public</div>
            <h2>L'IA accélère la production. Pas la réflexion.</h2>
          </div>
          <p className="right">
            Option/D est un atelier <strong>IA-augmenté</strong> — assumé, pas
            caché. La stack React / Next.js est orchestrée par agents. La
            signature humaine reste sur l'arbitrage qualité, ligne par ligne.
          </p>
        </div>

        <div className="build">
          <div className="build-copy">
            <h3>Vous achetez le résultat. Pas la stack.</h3>
            <p>
              Sur la landing et le devis, je n'en parle pas. Sur LinkedIn et le
              contenu, je partage le process — c'est la même posture, calibrée
              selon le canal. Les clients viennent pour le délai et le rendu, pas
              pour la techno.
            </p>
            <p>
              Honnêteté factuelle quand on me pose la question : oui, j'utilise
              l'IA comme levier de productivité. Non, votre site n'est pas
              auto-généré.
            </p>

            <div className="quote">
              « Périmètre serré, livraison une semaine, prix juste. La rapidité
              ne se paye pas en qualité — si l'arbitrage se présente, on coupe sur
              le périmètre, jamais sur la finition. »
            </div>
            <div className="sig">— David Jomain, fondateur</div>
          </div>

          <CodeWindow />
        </div>
      </div>
    </section>
  );
}
