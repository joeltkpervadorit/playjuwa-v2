import React from 'react';

export default function DpMethodSection({ v }) {
  return (
    <section className="dp-card" id="dp-method" aria-labelledby="dp-m-h" data-flash={v.flashMethod}>
      <div className="dp-sec-h">
      <span className="dp-num">1</span>
      <div><h2 id="dp-m-h">How are you paying?</h2><p>Top one. Nothing is charged yet.</p></div>
      </div>
      <div className="dp-methods" role="radiogroup" aria-label="Payment method">
      {(v.methods || []).map((m, __i4) => (
      <React.Fragment key={__i4}>
      <button className="dp-method" type="button" role="radio" aria-checked={m.on} onClick={m.pick}>
      <span className="dp-m-ic"><img src={m.icon} alt="" /></span>
      <span className="dp-m-txt"><b>{m.name}</b><small><i className="dp-m-dot" data-k={m.speedKind} />{m.speed}</small></span>
      <span className="dp-check" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg></span>
      </button>
      </React.Fragment>
      ))}
      </div>
      <div className="dp-secure">
      <span className="dp-shield" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l7.5 3v5.5c0 4.6-3.2 8.3-7.5 9.5-4.3-1.2-7.5-4.9-7.5-9.5V6z" /><path d="M8.8 12.2l2.2 2.2 4.2-4.4" /></svg></span>
      <div className="dp-secure-txt"><b>We never store your card details</b><small>Handled by a PCI Level 1 provider.</small></div>
      <ul className="dp-seals"><li>SSL SECURED</li><li>PCI LEVEL 1</li><li>3DS VERIFIED</li></ul>
      </div>
      </section>
  );
}
