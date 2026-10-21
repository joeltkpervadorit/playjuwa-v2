import React from 'react';

export default function CsPromos({ v }) {
  return (
    <div className="cs-promos">
      {(v.promos || []).map((p, __i3) => (
      <React.Fragment key={__i3}>
      <a className={`cs-promo ${p.cls ?? ""}`} href={p.href}><img src={p.img} alt="" /><span className="cs-promo-copy"><b>{p.title}</b><small>{p.sub}</small><i>{p.cta}<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg></i></span></a>
      </React.Fragment>
      ))}
      </div>
  );
}
