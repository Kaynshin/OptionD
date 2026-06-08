export default function LeakPanel() {
  return (
    <div className="leak" aria-label="Le seau percé — pertes invisibles">
      <div className="leak-head">
        <span>Le seau percé</span>
        <span>Pertes invisibles</span>
      </div>
      <div className="leak-row">
        <span className="drip"></span>
        <div className="lk-txt">
          <div className="t">Appel manqué</div>
          <div className="d">Le téléphone sonne pendant que vous travaillez.</div>
        </div>
        <div className="lk-loss">Client perdu</div>
      </div>
      <div className="leak-row">
        <span className="drip"></span>
        <div className="lk-txt">
          <div className="t">Ancien client oublié</div>
          <div className="d">Il ne revient pas — juste parce qu&apos;il a oublié.</div>
        </div>
        <div className="lk-loss">Revenu dormant</div>
      </div>
      <div className="leak-row">
        <span className="drip"></span>
        <div className="lk-txt">
          <div className="t">Prospect du dimanche soir</div>
          <div className="d">Rappelé le mardi : déjà parti chez le voisin.</div>
        </div>
        <div className="lk-loss">Trop tard</div>
      </div>
    </div>
  );
}
