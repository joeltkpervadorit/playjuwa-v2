import React from 'react';

export default function HelpSection({ v }) {
  return (
    <section className="ch-help" id="help" aria-labelledby="ch-help-h">
      <div className="ch-help-h">
      <h2 id="ch-help-h"><svg viewBox="0 0 24 24" fill="#ffc21a" aria-hidden="true"><path d="M13 2 4 14h6l-1 8 9-12h-6z" /></svg>Quick Help</h2>
      <a href="#help-all">See All<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 6l6 6-6 6" /></svg></a>
      </div>
      <div className="ch-help-grid">
      {(v.help || []).map((h, __i4) => (
      <React.Fragment key={__i4}>
      <a className="ch-hcard" href={h.href}><span className="ch-hic" aria-hidden="true"><img src={h.icon} alt="" /></span><span className="ch-htxt"><b>{h.title}</b><small>{h.sub}</small></span><svg className="ch-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 6l6 6-6 6" /></svg></a>
      </React.Fragment>
      ))}
      </div>
      </section>
  );
}
