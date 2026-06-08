const PRE_HTML =
  '<span class="ln">01</span><span class="com">// Option/D — orchestrateur agent + arbitrage humain</span>\n' +
  '<span class="ln">02</span><span class="kw">import</span> <span class="var">{ Hero, FindUs, Cellar }</span> <span class="kw">from</span> <span class="str">"@/components"</span>\n' +
  '<span class="ln">03</span><span class="kw">import</span> <span class="var">{ trackVitals }</span> <span class="kw">from</span> <span class="str">"@/lib/vitals"</span>\n' +
  '<span class="ln">04</span>\n' +
  '<span class="ln">05</span><span class="kw">export default function</span> <span class="fn">Page</span>() {\n' +
  '<span class="ln">06</span>  <span class="fn">trackVitals</span>({ <span class="var">target</span>: <span class="str">"lighthouse-95"</span> })\n' +
  '<span class="ln">07</span>  <span class="kw">return</span> (\n' +
  '<span class="ln">08</span>    &lt;<span class="fn">main</span>&gt;\n' +
  '<span class="ln">09</span>      &lt;<span class="fn">Hero</span>\n' +
  '<span class="ln">10</span>        <span class="var">title</span>=<span class="str">"Le vin d\'Annecy, à la source."</span>\n' +
  '<span class="ln">11</span>        <span class="var">cta</span>=<span class="str">"Commander un coffret"</span> /&gt;\n' +
  '<span class="ln">12</span>      &lt;<span class="fn">FindUs</span> <span class="var">city</span>=<span class="str">"Annecy"</span> <span class="var">map</span>={<span class="kw">true</span>} /&gt;\n' +
  '<span class="ln">13</span>      &lt;<span class="fn">Cellar</span> <span class="var">items</span>={<span class="num">87</span>} <span class="var">live</span>={<span class="kw">true</span>} /&gt;\n' +
  '<span class="ln">14</span>    &lt;/<span class="fn">main</span>&gt;\n' +
  '<span class="ln">15</span>  )\n' +
  '<span class="ln">16</span>}';

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
      <pre dangerouslySetInnerHTML={{ __html: PRE_HTML }} />
      <div className="status">
        <span className="live">DEPLOY · domaine-gagnaud.fr</span>
        <span>
          <span className="ok">✓</span> Lighthouse 98 · LCP 1.2 s · CLS 0.02
        </span>
      </div>
    </div>
  );
}
