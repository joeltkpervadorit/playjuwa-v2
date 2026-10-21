import React from 'react';
import { Badge } from '../../../components/ds.jsx';

export default function PlatformsSection({ v }) {
  return (
    <section className="lp-sec" id="platforms" aria-labelledby="plat-title">
      <div className="lp-sh">
      <div><span className="lp-eyebrow">Platforms</span><h2 className="lp-st" id="plat-title"><img src="/assets/fd763c56b874820f9064b9dfe1db38d2.svg" alt="" />Top Game <span className="pj-text-gold">Platforms</span></h2></div>
      <a className="lp-viewall" href="#all-platforms">View All<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 6l6 6-6 6" /></svg></a>
      </div>
      <div className="lp-plats lp-rail">
      {(v.platforms || []).map((p, __i4) => (
      <React.Fragment key={__i4}>
      <a className="lp-plat" href="#platform">
      {p.isNew ? (
      <><Badge tone="new" /></>
      ) : null}
      <img src={p.img} alt="" />
      <span className="lp-plat-name">{p.name}</span>
      <span className="lp-plat-cap">Sign up &amp; Play</span>
      </a>
      </React.Fragment>
      ))}
      <a className="lp-plat lp-plat-more" href="#all-platforms">
      <span className="lp-plat-more-ic" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><rect x="4" y="4" width="6.5" height="6.5" rx="2" /><rect x="13.5" y="4" width="6.5" height="6.5" rx="2" /><rect x="4" y="13.5" width="6.5" height="6.5" rx="2" /><path d="M16.75 13.5v6.5M13.5 16.75H20" /></svg></span>
      <span className="lp-plat-name">View All</span>
      <span className="lp-plat-cap">Platforms</span>
      </a>
      </div>
      </section>
  );
}
