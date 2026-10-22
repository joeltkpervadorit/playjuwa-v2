import React from 'react';

export default function GameCollageSection({ v }) {
  return (
    <section className="lp-sec lp-col" id="game-collage" aria-labelledby="col-title">
      <div className="lp-sh">
      <div><span className="lp-eyebrow">Collection</span><h2 className="lp-st" id="col-title"><svg className="lp-st-ic" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><rect x="3" y="3" width="11" height="8" rx="2" /><rect x="16" y="3" width="5" height="8" rx="2" /><rect x="3" y="13" width="5" height="8" rx="2" /><rect x="10" y="13" width="11" height="8" rx="2" /></svg>Explore <span className="pj-text-gold">Games</span></h2></div>
      </div>
      {(v.colBlocks || []).map((b, __i3) => (
      <React.Fragment key={__i3}>
      <div className="lp-col-block">
      <div className="lp-col-hd">
      <h3 className="lp-col-t" id={b.hid}><span className="lp-col-ic" aria-hidden="true">{b.emoji}</span>{b.title}</h3>
      <a className="lp-col-all" href={b.href} aria-label={b.allLabel}>All</a>
      <button className="lp-col-arw" type="button" aria-label={b.prevLabel} onClick={b.prev}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 6l-6 6 6 6" /></svg></button>
      <button className="lp-col-arw" type="button" aria-label={b.nextLabel} onClick={b.next}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 6l6 6-6 6" /></svg></button>
      </div>
      <div className="lp-col-wrap">
      <div className="lp-col-rail" role="list" aria-labelledby={b.hid}>
      {(b.items || []).map((g, __i7) => (
      <React.Fragment key={__i7}>
      <div className={`lp-col-tile ${g.cls ?? ""}`} role="listitem">
      <a className="lp-col-link" href={g.href} aria-label={g.label} data-game={g.name} data-img={g.img} data-prov=""><img src={g.img} alt="" loading="lazy" /></a>
      <button className="lp-fav" type="button" aria-pressed={g.fav} aria-label={g.favLabel} onClick={g.toggleFav}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" aria-hidden="true"><path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z" /></svg></button>
      </div>
      </React.Fragment>
      ))}
      </div>
      </div>
      </div>
      </React.Fragment>
      ))}
      </section>
  );
}
