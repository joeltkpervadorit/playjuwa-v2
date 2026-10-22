import React from 'react';
import { Badge } from '../../../components/ds.jsx';

export default function TopGamesSection({ v }) {
  return (
    <section className="lp-sec" id="top-games" aria-labelledby="topg-title">
      <div className="lp-sh">
      <div><span className="lp-eyebrow">Games</span><h2 className="lp-st" id="topg-title"><svg className="lp-st-ic" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2c1 3.5 4.5 5 4.5 9.5A4.5 4.5 0 0 1 12 16a4.5 4.5 0 0 1-4.5-4.5C7.5 9 9 8 9 6c2 1 3 2.5 3 2.5S13 5 12 2zM5 18h14v3H5z" /></svg>Top <span className="pj-text-gold">Games</span></h2></div>
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
      </div>
      </section>
  );
}
