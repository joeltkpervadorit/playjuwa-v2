import React from 'react';

export default function PromotionsSection({ v }) {
  return (
    <section className="bn-posters rw-posters" id="promotions" aria-labelledby="rw-pos-h">
      <div className="rw-sec-h"><h2 id="rw-pos-h">Featured <span className="pj-text-gold">promotions</span></h2><span>{v.promoCount}</span></div>
      <div className="bn-pos-track" data-mode={v.posMode}>
      {(v.posters || []).map((p, __i4) => (
      <React.Fragment key={__i4}><a className={`bn-pos ${p.fit ?? ""}`} href={p.href} aria-label={p.label}><img src={p.img} alt="" loading="lazy" /></a></React.Fragment>
      ))}
      </div>
      <div className="bn-pos-dots">{(v.posters || []).map((p, __i4) => (
      <React.Fragment key={__i4}><button type="button" className="bn-pos-dot" data-i={p.i} aria-label={p.dotLabel} aria-pressed={p.first} /></React.Fragment>
      ))}</div>
      </section>
  );
}
