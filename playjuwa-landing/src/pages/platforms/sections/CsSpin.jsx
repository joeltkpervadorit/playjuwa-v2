import React from 'react';

export default function CsSpin({ v }) {
  return (
    <a className="cs-spin" href={v.nHome}>
      <img src="/assets/5f7da007a7e5d5a562bf2ddd4c8e483c.jpg" alt="" />
      <span className="cs-spin-copy"><small><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3 8l4.5 4 4.5-7 4.5 7L21 8l-2 11H5z" /></svg>Daily Rewards</small><b>Spin the <span className="pj-text-gold">Wheel</span></b><em>Spin Every 24 Hours</em><span className="cs-btn is-sm">Spin Now<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span></span>
      </a>
  );
}
