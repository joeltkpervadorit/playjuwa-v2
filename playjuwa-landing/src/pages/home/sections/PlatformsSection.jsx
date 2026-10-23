import React from 'react';
import { Badge } from '../../../components/ds.jsx';

export default function PlatformsSection({ v }) {
  return (
    <section className="lp-sec lp-tpx" id="platforms" aria-labelledby="plat-title">
      <div className="lp-sh">
      <div><span className="lp-eyebrow">Platforms</span><h2 className="lp-st" id="plat-title"><img src="/assets/fd763c56b874820f9064b9dfe1db38d2.svg" alt="" />Top Game <span className="pj-text-gold">Platforms</span></h2><p className="lp-tpx-sub">Play your favourite games from the most trusted platforms</p></div>
      <a className="lp-viewall" href="/platforms">View All<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 6l6 6-6 6" /></svg></a>
      </div>
      <div className="lp-pfx" data-pfx="">
      <div className="lp-pfx-bg" aria-hidden="true">
      <img className="lp-pfx-bg-img" src="/assets/7c9e82f0bbbf0acc214a4e95ecabf79e.jpg" alt="" />
      <span className="lp-pfx-tag">20+ <b>Platforms</b></span>
      </div>
      <div className="lp-pfx-rows">
      <div className="lp-pfx-row is-l">
      <div className="lp-pfx-track">
      {(v.platRowA || []).map((p, __i7) => (
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
      {(v.platRowB || []).map((p, __i7) => (
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
      <div className="lp-tpx-grid is-plats" role="list">
      {(v.platDk || []).map((g, __i5) => (
      <React.Fragment key={__i5}>
      <a className={`lp-tpx-card ${g.cls ?? ""}`} role="listitem" href={g.href} data-game={g.game} data-img={g.img} data-prov={g.prov}>
      <span className="lp-tpx-thumb">{g.hasImg ? (
      <><img src={g.img} alt="" loading="lazy" /></>
      ) : null}{g.noImg ? (
      <><span className="lp-tpx-mono" aria-hidden="true">{g.mono}</span></>
      ) : null}{g.isMore ? (
      <><span className="lp-tpx-more" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><rect x="4" y="4" width="6.5" height="6.5" rx="2" /><rect x="13.5" y="4" width="6.5" height="6.5" rx="2" /><rect x="4" y="13.5" width="6.5" height="6.5" rx="2" /><path d="M16.75 13.5v6.5M13.5 16.75H20" /></svg></span></>
      ) : null}{g.isNew ? (
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
