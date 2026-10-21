import React from 'react';
import { css } from '../css.js';

export default function SlotsSection({ v }) {
  return (
    <section className="lp-sec lp-slots" id="slots" aria-labelledby="slots-title" aria-roledescription="carousel">
      <h2 className="lp-slots-title" id="slots-title">Slot <span className="pj-text-gold">Games</span></h2>
      <div className="lp-cf" tabIndex="0" role="group" aria-label="Slot games. Use the left and right arrow keys to browse." onKeyDown={v.cfKey} onWheel={v.cfWheel} onPointerDown={v.cfDown} onPointerMove={v.cfMove} onPointerUp={v.cfUp} onPointerCancel={v.cfUp} onLostPointerCapture={v.cfUp}>
      <div className="lp-cf-glow" aria-hidden="true" />
      <div className="lp-cf-track">
      {(v.cfCards || []).map((c, __i5) => (
      <React.Fragment key={__i5}>
      <a className="lp-cf-card" href={v.nCasino} style={css(c.style)} data-ad={c.ad} data-on={c.on} aria-hidden={c.hidden} tabIndex={c.tab} aria-label={c.label} onClick={c.click} draggable="false"><img src={c.img} alt="" draggable="false" /><span className="lp-cf-play" aria-hidden="true"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5.5v13l11-6.5z" /></svg></span></a>
      </React.Fragment>
      ))}
      </div>
      <button className="lp-cf-nav is-prev" type="button" aria-label="Previous game" onClick={v.cfPrev}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 6l-6 6 6 6" /></svg></button>
      <button className="lp-cf-nav is-next" type="button" aria-label="Next game" onClick={v.cfNext}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 6l6 6-6 6" /></svg></button>
      </div>
      <div className="lp-cf-meta" aria-live="polite"><b>{v.cfTitle}</b><span>{v.cfProv} · {v.cfPos}</span></div>
      </section>
  );
}
