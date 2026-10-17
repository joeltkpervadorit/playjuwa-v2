import React from 'react';

export default function HeroImgsSection({ v }) {
  return (
    <section className="lp-hero lp-hero-imgs" aria-label="PlayJuwa promotions">
      <h1 className="lp-sr" id="hero-title">PlayJuwa</h1>
      <div className="lp-hslides">
      {(v.heroSlides || []).map((h, __i4) => (
      <React.Fragment key={__i4}>
      <div className={`lp-hslide ${h.fit ?? ""}`} data-on={h.on} aria-hidden={h.hidden}><img className="lp-hslide-bg" src={h.img} alt="" /><img className="lp-hslide-img" src={h.img} alt={h.label} /></div>
      </React.Fragment>
      ))}
      </div>
      <div className="lp-hdots" role="group" aria-label="Hero slides">
      {(v.heroDots || []).map((d, __i4) => (
      <React.Fragment key={__i4}>
      <button className="lp-hdot" type="button" aria-pressed={d.on} aria-label={d.label} onClick={d.pick}><i /></button>
      </React.Fragment>
      ))}
      </div>
      </section>
  );
}
