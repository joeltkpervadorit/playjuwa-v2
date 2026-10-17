import React from 'react';

export default function PageHeader({ v }) {
  return (
    <section className="pl-head" aria-labelledby="pl-title">
      <div className="pl-head-copy">
      <span className="pl-eyebrow"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3 8l4.5 4 4.5-7 4.5 7L21 8l-2 11H5z" /></svg>One account · every platform</span>
      <h1 id="pl-title">Game <span className="pj-text-gold">Platforms</span></h1>
      <p>{v.headText}</p>
      </div>
      <ul className="pl-stats" aria-label="Platform highlights">
      <li><b>{v.platCount}</b><span>Platforms</span></li>
      <li><b>Instant</b><span>Credentials</span></li>
      <li><b>24/7</b><span>Support</span></li>
      </ul>
      </section>
  );
}
