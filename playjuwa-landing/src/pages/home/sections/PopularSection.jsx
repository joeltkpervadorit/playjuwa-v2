import React from 'react';

export default function PopularSection({ v }) {
  return (
    <section className="lp-sec lp-hot" id="popular" aria-labelledby="hot-title">
      <div className="lp-hot-head">
      <h2 id="hot-title"><span className="lp-hot-a pj-text-gold">Hottest<img className="lp-hot-crown" src="/assets/015aac39deb6c72faa9708e19c86fa17.png" alt="" /></span> <span className="lp-hot-b">Casino Games</span></h2>
      <span className="lp-hot-badge"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3 8l4.5 4 4.5-7 4.5 7L21 8l-2 11H5z" /></svg>1,000+ Slot Games</span>
      </div>
      <div className="lp-hot-grid" role="list">
      {(v.hotGames || []).map((h, __i4) => (
      <React.Fragment key={__i4}>
      <a className="lp-hot-card" role="listitem" href={v.nCasino} aria-label={h.label} data-game={h.name} data-img={h.img} data-prov={h.prov}><img src={h.img} alt="" loading="lazy" /><span className="lp-hot-play" aria-hidden="true"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5.5v13l11-6.5z" /></svg></span></a>
      </React.Fragment>
      ))}
      </div>
      </section>
  );
}
