import React from 'react';

export default function CsBannerSection({ v }) {
  return (
    <section className="cs-banner" aria-roledescription="carousel" aria-label="Promotions">
      {(v.slides || []).map((s, __i3) => (
      <React.Fragment key={__i3}>
      <div className={`cs-slide ${s.cls ?? ""}`} data-on={s.on} aria-hidden={s.hidden}>
      <div className="cs-slide-art"><img src={s.img} alt="" /></div>
      <div className="cs-slide-copy">
      <span className="cs-eyebrow">{s.eyebrow}</span>
      <h1><span>{s.t1}</span><span className="pj-text-gold">{s.t2}</span></h1>
      <p>{s.text}</p>
      <a className="cs-btn" href={s.href} tabIndex={s.tab} onClick={s.pick ? (e) => { e.preventDefault(); s.pick(); } : undefined}>{s.cta}<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg></a>
      </div>
      </div>
      </React.Fragment>
      ))}
      <button className="cs-bnav is-l" type="button" aria-label="Previous promotion" onClick={v.prevSlide}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 6l-6 6 6 6" /></svg></button>
      <button className="cs-bnav is-r" type="button" aria-label="Next promotion" onClick={v.nextSlide}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 6l6 6-6 6" /></svg></button>
      <div className="cs-dots">{(v.dots || []).map((d, __i4) => (
      <React.Fragment key={__i4}><button type="button" aria-pressed={d.on} aria-label={d.label} onClick={d.pick} /></React.Fragment>
      ))}</div>
      </section>
  );
}
