import React from 'react';

export default function Header2({ v }) {
  return (
    <header className="rw-head">
      <div className="rw-head-txt">
      <span className="rw-eyebrow">Rewards</span>
      <h1>Rewards &amp; <span className="pj-text-gold">Bonuses</span></h1>
      </div>
      <a className="pj-link rw-head-link" href="#sweeps">Full rules<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg></a>
      </header>
  );
}
