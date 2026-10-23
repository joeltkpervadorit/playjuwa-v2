import React from 'react';
import { Badge } from '../../../components/ds.jsx';

export default function TopGamesSection({ v }) {
  return (
    <section className="lp-sec lp-tpx is-games" id="top-games" aria-labelledby="topg-title">
      <div className="lp-sh">
      <div><span className="lp-eyebrow">Games</span><h2 className="lp-st" id="topg-title"><svg className="lp-st-ic lp-tpx-flame" viewBox="0 0 24 24" aria-hidden="true"><defs><linearGradient id="tpx-fl" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#ffd21f" /><stop offset=".55" stopColor="#ff7a00" /><stop offset="1" stopColor="#e23b1a" /></linearGradient></defs><path d="M12 2c.6 3.2 4.8 5.4 4.8 10.4A4.8 4.8 0 0 1 12 22a6 6 0 0 1-6-6c0-3 1.7-4.8 2.6-6.6.4 1.6 1.2 2.6 2.4 3.1C10.6 9 11 5.6 12 2z" fill="url(#tpx-fl)" /><path d="M12 13c1.4 1.4 2.4 2.6 2.4 4.2a2.4 2.4 0 0 1-4.8 0c0-1.3.9-2.4 2.4-4.2z" fill="#fff2b0" /></svg>Top <span className="pj-text-gold">Games</span></h2><p className="lp-tpx-sub">Play the most popular and exciting games right now</p></div>
      <a className="lp-viewall" href={v.nCasino}>View All<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 6l6 6-6 6" /></svg></a>
      </div>
      <div className="lp-pfx is-games" data-pfx="">
      <div className="lp-pfx-bg" aria-hidden="true">
      <img className="lp-pfx-bg-img" src="/assets/8f14686d83e94ff65cd7af7fe492e7f9.jpg" alt="" />
      <span className="lp-pfx-tag">Hot <b>Slots</b></span>
      </div>
      <div className="lp-pfx-rows">
      <div className="lp-pfx-row is-l">
      <div className="lp-pfx-track">
      {(v.topRowA || []).map((p, __i7) => (
      <React.Fragment key={__i7}>
      <a className={`lp-plat ${p.cls ?? ""}`} href={p.href} aria-hidden={p.dup} tabIndex={p.tab} data-game={p.game} data-img={p.img} data-prov={p.prov}>
      {p.isNew ? (
      <><Badge tone="new" /></>
      ) : null}
      {p.hasImg ? (
      <><img src={p.img} alt="" /></>
      ) : null}
      {p.isMore ? (
      <><span className="lp-plat-more-ic" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><rect x="4" y="4" width="6.5" height="6.5" rx="2" /><rect x="13.5" y="4" width="6.5" height="6.5" rx="2" /><rect x="4" y="13.5" width="6.5" height="6.5" rx="2" /><path d="M16.75 13.5v6.5M13.5 16.75H20" /></svg></span></>
      ) : null}
      <span className="lp-plat-name">{p.name}</span>
      </a>
      </React.Fragment>
      ))}
      </div>
      </div>
      <div className="lp-pfx-row is-r">
      <div className="lp-pfx-track">
      {(v.topRowB || []).map((p, __i7) => (
      <React.Fragment key={__i7}>
      <a className={`lp-plat ${p.cls ?? ""}`} href={p.href} aria-hidden={p.dup} tabIndex={p.tab} data-game={p.game} data-img={p.img} data-prov={p.prov}>
      {p.isNew ? (
      <><Badge tone="new" /></>
      ) : null}
      {p.hasImg ? (
      <><img src={p.img} alt="" /></>
      ) : null}
      {p.isMore ? (
      <><span className="lp-plat-more-ic" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><rect x="4" y="4" width="6.5" height="6.5" rx="2" /><rect x="13.5" y="4" width="6.5" height="6.5" rx="2" /><rect x="4" y="13.5" width="6.5" height="6.5" rx="2" /><path d="M16.75 13.5v6.5M13.5 16.75H20" /></svg></span></>
      ) : null}
      <span className="lp-plat-name">{p.name}</span>
      </a>
      </React.Fragment>
      ))}
      </div>
      </div>
      </div>
      <div className="lp-tpx-grid is-games" role="list">
      {(v.gameDk || []).map((g, __i5) => (
      <React.Fragment key={__i5}>
      <a className="lp-tpx-card" role="listitem" href={g.href} data-game={g.game} data-img={g.img} data-prov={g.prov}>
      <span className="lp-tpx-thumb"><img src={g.img} alt="" loading="lazy" />{g.isNew ? (
      <><span className="lp-tpx-badge">NEW</span></>
      ) : null}</span>
      <span className="lp-tpx-name">{g.name}</span>
      </a>
      </React.Fragment>
      ))}
      </div>
      </div>
      </section>
  );
}
