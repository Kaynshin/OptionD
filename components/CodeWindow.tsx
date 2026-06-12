export default function CodeWindow() {
  return (
    <div className="codewin" aria-label="Build live · domaine-gagnaud">
      <div className="chrome">
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="file">~/clients/domaine-gagnaud/app/page.tsx</span>
        <span className="branch">main · build #042</span>
      </div>
      <pre>
        <span className="ln">01</span>
        <span className="com">{'// Option/D — orchestrateur agent + arbitrage humain'}</span>
        {'\n'}
        <span className="ln">02</span>
        <span className="kw">import</span>
        {' '}
        <span className="var">{'{ Hero, FindUs, Cellar }'}</span>
        {' '}
        <span className="kw">from</span>
        {' '}
        <span className="str">{'"@/components"'}</span>
        {'\n'}
        <span className="ln">03</span>
        <span className="kw">import</span>
        {' '}
        <span className="var">{'{ trackVitals }'}</span>
        {' '}
        <span className="kw">from</span>
        {' '}
        <span className="str">{'"@/lib/vitals"'}</span>
        {'\n'}
        <span className="ln">04</span>
        {'\n'}
        <span className="ln">05</span>
        <span className="kw">export default function</span>
        {' '}
        <span className="fn">Page</span>
        {'() {\n'}
        <span className="ln">06</span>
        {'  '}
        <span className="fn">trackVitals</span>
        {'({ '}
        <span className="var">target</span>
        {': '}
        <span className="str">{'"lighthouse-95"'}</span>
        {' })\n'}
        <span className="ln">07</span>
        {'  '}
        <span className="kw">return</span>
        {' (\n'}
        <span className="ln">08</span>
        {'    <'}
        <span className="fn">main</span>
        {'>\n'}
        <span className="ln">09</span>
        {'      <'}
        <span className="fn">Hero</span>
        {'\n'}
        <span className="ln">10</span>
        {'        '}
        <span className="var">title</span>
        {'='}
        <span className="str">{'"Le vin d\'Annecy, à la source."'}</span>
        {'\n'}
        <span className="ln">11</span>
        {'        '}
        <span className="var">cta</span>
        {'='}
        <span className="str">{'"Commander un coffret"'}</span>
        {' />\n'}
        <span className="ln">12</span>
        {'      <'}
        <span className="fn">FindUs</span>
        {' '}
        <span className="var">city</span>
        {'='}
        <span className="str">{'"Annecy"'}</span>
        {' '}
        <span className="var">map</span>
        {'={'}
        <span className="kw">true</span>
        {'} />\n'}
        <span className="ln">13</span>
        {'      <'}
        <span className="fn">Cellar</span>
        {' '}
        <span className="var">items</span>
        {'={'}
        <span className="num">87</span>
        {'} '}
        <span className="var">live</span>
        {'={'}
        <span className="kw">true</span>
        {'} />\n'}
        <span className="ln">14</span>
        {'    </'}
        <span className="fn">main</span>
        {'>\n'}
        <span className="ln">15</span>
        {'  )\n'}
        <span className="ln">16</span>
        {'}'}
      </pre>
      <div className="status">
        <span className="live">DEPLOY · domaine-gagnaud.fr</span>
        <span>
          <span className="ok">✓</span> Lighthouse 98 · LCP 1.2 s · CLS 0.02
        </span>
      </div>
    </div>
  );
}
