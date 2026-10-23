import React from 'react';

export default function GamesSection({ v }) {
  return (
    <section className="lp-sec lp-browse" id="games" aria-labelledby="games-title">
      <div className="lp-sh">
      <div><span className="lp-eyebrow">Explore</span><h2 className="lp-st" id="games-title"><img src="/assets/c745ccd0baef525fbffc1f0228038d13.png" alt="" />Browse <span className="pj-text-gold">Games</span></h2></div>
      <a className="lp-viewall" href={v.nCasino}>View All<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 6l6 6-6 6" /></svg></a>
      </div>
      <div className="lp-promos lp-rail" role="list" aria-label="Promotions">
      <a className="lp-promo" role="listitem" href="#signup" aria-label="Welcome offer: 100% welcome bonus. Claim now"><img src="/assets/067ae5d124c6ce754a2427a4ee831e45.webp" alt="" /></a>
      <a className="lp-promo" role="listitem" href={v.nSpin} onClick={v.askSpin} aria-label="Daily rewards: spin every 24 hours. Spin now"><img src="/assets/de541fefe9e2624b755896ebdf539481.jpg" alt="" /></a>
      </div>
      <div className="lp-catx">
      <div className="lp-catx-hd" aria-hidden="true">
      <span className="lp-catx-ic"><svg viewBox="0 0 24 24"><defs><linearGradient id="catx-g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#c084fc" /><stop offset="1" stopColor="#6d28d9" /></linearGradient></defs><path d="M7 7h10a5 5 0 0 1 5 5v2.5a3 3 0 0 1-5.3 1.9L15 14.5H9l-1.7 1.9A3 3 0 0 1 2 14.5V12a5 5 0 0 1 5-5z" fill="url(#catx-g)" /><path d="M6.5 10.2h1.4v1.4h1.4V13H7.9v1.4H6.5V13H5.1v-1.4h1.4z" fill="#ffd21f" /><circle cx="16" cy="11" r="1.1" fill="#ffd21f" /><circle cx="18" cy="13" r="1.1" fill="#ffd21f" /></svg></span>
      <span className="lp-catx-t"><b>Game <span className="pj-text-gold">Categories</span></b><em>12+ Categories</em><small>Explore your favourite games, all in one place.</small></span>
      </div>
      <div className="lp-catx-row">
      <button className="lp-catx-arw is-prev" type="button" aria-label="Scroll categories left" onClick={v.catPrev}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 6l-6 6 6 6" /></svg></button>
      <div className="lp-chipbar">
      <div className="lp-chips" role="tablist" aria-label="Game categories">
      {(v.cats || []).map((c, __i7) => (
      <React.Fragment key={__i7}>
      <button className="lp-chip" type="button" role="tab" aria-selected={c.pressed} aria-pressed={c.pressed} onClick={c.pick}><img src={c.icon} alt="" />{c.label}</button>
      </React.Fragment>
      ))}
      </div>
      </div>
      <button className="lp-catx-arw is-next" type="button" aria-label="Scroll categories right" onClick={v.catNext}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 6l6 6-6 6" /></svg></button>
      </div>
      <i className="lp-catx-bar" aria-hidden="true"><i /></i>
      </div>
      <div className="lp-shelf">
      <div className="lp-sh lp-new-head"><h3 className="lp-st lp-st-sm" id="shelf-new"><svg className="lp-st-ic lp-new-flame" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2c1 3.5 5 5.5 5 10.5A5 5 0 0 1 7 12.5c0-2 1-3.5 2-4.5 0 2 1 3 2 3 0-3-1-5.5 1-9z" /></svg><span className="lp-new-w">{v.shelfT1}</span> <span className="pj-text-gold">{v.shelfT2}</span><span className="lp-shelf-n">{v.shelfCount}</span></h3><a className="lp-viewall lp-new-all" href={v.shelfHref}>{v.shelfAll}<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 6l6 6-6 6" /></svg></a></div>
      <div className="lp-games lp-rail lp-new-rail" role="list" aria-labelledby="shelf-new">
      {(v.gamesNew || []).map((g, __i5) => (
      <React.Fragment key={__i5}>
      <article className="lp-gcard" role="listitem">
      <a className="lp-gcard-link" href={v.nCasino} aria-label={g.playLabel} data-game={g.title} data-img={g.img} data-prov={g.provider}>
      <span className="lp-gcard-art"><img src={g.img} alt="" /><span className="lp-gcard-play" aria-hidden="true"><span><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5.5v13l11-6.5z" /></svg></span></span></span>
      <span className="lp-gcard-title">{g.title}</span>
      <span className="lp-gcard-prov">{g.provider}</span>
      </a>
      <button className="lp-fav" type="button" aria-pressed={g.fav} aria-label={g.favLabel} onClick={g.toggleFav}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" aria-hidden="true"><path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.8l-5.2 2.8 1-5.8-4.3-4.1 5.9-.9z" /></svg></button>
      </article>
      </React.Fragment>
      ))}
      </div>
      </div>
      </section>
  );
}
