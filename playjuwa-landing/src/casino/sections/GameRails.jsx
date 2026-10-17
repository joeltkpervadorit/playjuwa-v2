import React from 'react';

export default function GameRails({ v }) {
  return (
    <>{(v.sections || []).map((sec, __i2) => (
      <React.Fragment key={__i2}>
      <section className="cs-sec" id={sec.id} aria-labelledby={sec.hid}>
      <div className="cs-sec-h">
      <span className="cs-sec-ic"><img src={sec.icon} alt="" /></span>
      <div><h2 id={sec.hid}>{sec.title}</h2><small>{sec.sub}</small></div>
      <a className="cs-seeall" href="#all">See All</a>
      <button className="cs-arr" type="button" aria-label={`Scroll ${sec.title ?? ""} left`} onClick={sec.scrollL}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 6l-6 6 6 6" /></svg></button>
      <button className="cs-arr" type="button" aria-label={`Scroll ${sec.title ?? ""} right`} onClick={sec.scrollR}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 6l6 6-6 6" /></svg></button>
      </div>
      <div className={`cs-rail ${sec.kind ?? ""}`} role="list">
      {(sec.games || []).map((g, __i5) => (
      <React.Fragment key={__i5}>
      <article className="cs-card" role="listitem">
      <span className="cs-rank" data-d={g.rankLen} aria-hidden="true">{g.rank}</span>
      <a className="cs-card-a" href="#play" aria-label={g.label}>
      <span className="cs-art"><img src={g.img} alt="" loading="lazy" /><span className="cs-play" aria-hidden="true"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5.5v13l11-6.5z" /></svg></span></span>
      <span className="cs-meta"><b>{g.title}</b><small>{g.prov}</small></span>
      </a>
      {g.hot ? (
      <><span className="cs-hot">Hot</span></>
      ) : null}
      {g.live ? (
      <><span className="cs-live"><i />Live</span></>
      ) : null}
      <button className="cs-fav" type="button" aria-pressed={g.fav} aria-label={g.favLabel} onClick={g.toggleFav}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" aria-hidden="true"><path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.8l-5.2 2.8 1-5.8-4.3-4.1 5.9-.9z" /></svg></button>
      </article>
      </React.Fragment>
      ))}
      </div>
      {sec.strip ? (
      <>
      <a id={sec.stripId || undefined} className={`cs-strip ${sec.stripCls ?? ""}`} href={sec.stripHref}><span className="cs-strip-art"><img src={sec.stripImg} alt="" /></span><span className="cs-strip-copy"><small><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3 7l4.5 4L12 4l4.5 7L21 7l-2 12H5L3 7z" /></svg>{sec.stripEye}</small><b><span className="cs-strip-t1">{sec.stripT1}</span> <span className="cs-strip-t2">{sec.stripT2}</span></b><em>{sec.stripText} <mark>{sec.stripHi}</mark></em></span><i>{sec.stripCta}<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg></i></a>
      </>
      ) : null}
      </section>
      </React.Fragment>
    ))}</>
  );
}
