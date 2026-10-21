import React from 'react';

export default function FaqSection({ v }) {
  return (
    <section className="lp-sec lp-faq" id="faq" aria-labelledby="faq-title">
      <div className="lp-sh"><div><span className="lp-eyebrow">FAQ</span><h2 className="lp-st" id="faq-title">Everything You Need to Know <span className="pj-text-gold">About Play Juwa</span></h2></div></div>
      <div className="lp-faq-list">
      {(v.faqs || []).map((f, __i4) => (
      <React.Fragment key={__i4}>
      <div className={f.cls}>
      <h3 style={{ margin: "0" }}><button className="lp-faq-q" type="button" aria-expanded={f.open} aria-controls={f.id} onClick={f.toggle}>{f.q}<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14" /></svg></button></h3>
      <div className="lp-faq-a" id={f.id}><div><p>{f.a}</p></div></div>
      </div>
      </React.Fragment>
      ))}
      </div>
      </section>
  );
}
