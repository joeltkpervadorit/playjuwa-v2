import React from 'react';

export default function PlatformGrid({ v }) {
  return (
    <section aria-label="Platforms">
      <p className="pl-count" aria-live="polite">{v.resultText}</p>
      <div className="pl-grid">
      {(v.plats || []).map((p, __i4) => (
      <React.Fragment key={__i4}>
      <article className={`pl-card ${p.cls ?? ""}`} aria-label={p.name}>
      <div className="pl-card-top">
      <div className="pl-logo">
      {p.img ? (
      <><img src={p.img} alt="" loading="lazy" /></>
      ) : null}
      {p.noImg ? (
      <><span className="pl-mono" aria-hidden="true">{p.mono}</span></>
      ) : null}
      {p.locked ? (
      <><span className="pl-lockdot" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="11" width="14" height="10" rx="2.5" /><path d="M8 11V8a4 4 0 0 1 8 0v3" /></svg></span></>
      ) : null}
      </div>
      <div className="pl-id">
      <h3>{p.name}</h3>
      <span className="pl-tags">{(p.tags || []).map((t, __i9) => (
      <React.Fragment key={__i9}><span className="pl-tag">{t}</span></React.Fragment>
      ))}</span>
      </div>
      <span className={`pl-badge ${p.badgeCls ?? ""}`}>{p.badge}</span>
      </div>
      <dl className="pl-creds">
      <div className="pl-row">
      <dt><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></svg>Username</dt>
      <dd><span className="pl-val" data-locked={p.lockedStr}>{p.user}</span>
      <button className="pl-ic" type="button" aria-label={p.copyUserLabel} disabled={p.locked} onClick={p.copyUser} data-done={p.userCopied}><svg className="pl-i-copy" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="9" y="9" width="11" height="11" rx="2.5" /><path d="M5 15V6a2 2 0 0 1 2-2h8" /></svg><svg className="pl-i-ok" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg></button>
      </dd>
      </div>
      <div className="pl-row">
      <dt><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="5" y="11" width="14" height="10" rx="2.5" /><path d="M8 11V8a4 4 0 0 1 8 0v3" /></svg>Password</dt>
      <dd><span className="pl-val" data-locked={p.lockedStr}>{p.pass}</span>
      {p.unlocked ? (
      <><button className="pl-ic" type="button" aria-label={p.revealLabel} aria-pressed={p.shown} onClick={p.toggleShow}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z" /><circle cx="12" cy="12" r="3" /></svg></button></>
      ) : null}
      <button className="pl-ic" type="button" aria-label={p.copyPassLabel} disabled={p.locked} onClick={p.copyPass} data-done={p.passCopied}><svg className="pl-i-copy" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="9" y="9" width="11" height="11" rx="2.5" /><path d="M5 15V6a2 2 0 0 1 2-2h8" /></svg><svg className="pl-i-ok" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg></button>
      </dd>
      </div>
      {p.locked ? (
      <><div className="pl-veil"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="5" y="11" width="14" height="10" rx="2.5" /><path d="M8 11V8a4 4 0 0 1 8 0v3" /></svg>Sign up to unlock your login</div></>
      ) : null}
      </dl>
      <div className="pl-actions">
      <a className="pl-btn is-primary" href={p.primaryHref}>{p.primary}</a>
      <a className="pl-btn is-ghost" href={p.secondaryHref}>{p.secondary}</a>
      </div>
      </article>
      </React.Fragment>
      ))}
      </div>
      {v.empty ? (
      <>
      <div className="pl-empty"><b>No platforms match “{v.q}”.</b><span>Try another name or clear the filter.</span><button className="pl-btn is-ghost" type="button" onClick={v.clearSearch}>Clear search</button></div>
      </>
      ) : null}
      </section>
  );
}
