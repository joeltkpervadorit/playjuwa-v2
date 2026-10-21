import React from 'react';
import { css } from '../css.js';

export default function RwOffersSection({ v }) {
  return (
    <section className="rw-grid" id="rw-offers" role="tabpanel" aria-labelledby={v.tabId} data-tab={v.tab}>
      {(v.cards || []).map((c, __i3) => (
      <React.Fragment key={__i3}>
      <article className={`rw-card is-${c.key ?? ""}`} id={c.anchor} data-status={c.status} data-open={c.termsOpen} style={css(c.style)} aria-labelledby={c.hid}>
      <div className="rw-card-art" aria-hidden="true"><img src={c.art} alt="" className={c.artFit} /></div>
      <div className="rw-card-body">
      <div className="rw-card-top">
      <span className="rw-card-cat">{c.catLabel}</span>
      <span className={`rw-st is-${c.status ?? ""}`}><i aria-hidden="true" />{c.statusLabel}</span>
      </div>
      <h3 id={c.hid}>{c.title}</h3>
      <p className="rw-card-val"><b>{c.value}</b><span>{c.valueSub}</span></p>
      <p className="rw-card-desc">{c.desc}</p>
      <ul className="rw-chips" aria-label="Key terms">
      {(c.chips || []).map((t, __i7) => (
      <React.Fragment key={__i7}><li>{t}</li></React.Fragment>
      ))}
      </ul>
      {c.hasProg ? (
      <>
      <div className="rw-prog">
      <div className="rw-prog-h"><span>{c.progLabel}</span><b>{c.progText}</b></div>
      <div className="rw-bar" role="progressbar" aria-label={c.progAria} aria-valuemin="0" aria-valuemax="100" aria-valuenow={c.progPct}><span className="rw-bar-fill" style={css(c.progFill)} /></div>
      <small>{c.progLeft}</small>
      </div>
      </>
      ) : null}
      <div className="rw-card-act">
      {c.isLink ? (
      <><a className={`pj-btn ${c.btnCls ?? ""} rw-btn`} href={c.href}>{c.cta}</a></>
      ) : null}
      {c.isClaim ? (
      <><button className="pj-btn pj-btn-primary rw-btn" type="button" data-claim={c.claim} disabled={c.claimBusy} aria-busy={c.claimBusyStr} onClick={c.onClaim}>{c.claimSpin ? (
      <><i className="rw-spinner" aria-hidden="true" /></>
      ) : null}{c.cta}</button></>
      ) : null}
      {c.isOff ? (
      <><button className="pj-btn pj-btn-secondary rw-btn" type="button" disabled={v.yes}>{c.cta}</button></>
      ) : null}
      <button className="rw-more" type="button" aria-expanded={c.termsOpen} aria-controls={c.tid} onClick={c.toggleTerms}>View terms<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6" /></svg></button>
      </div>
      {c.fbShow ? (
      <>
      <div className={`rw-fb is-${c.fbKind ?? ""}`} role="status"><span className="rw-fb-ic" aria-hidden="true" /><span>{c.fbText}</span>{c.fbRetry ? (
      <><button type="button" className="rw-fb-retry" onClick={c.onClaim}>Retry</button></>
      ) : null}</div>
      </>
      ) : null}
      {c.termsShow ? (
      <>
      <div className="rw-terms" id={c.tid}>
      <p className="rw-terms-desc">{c.desc}</p>
      <dl>
      {(c.terms || []).map((r, __i9) => (
      <React.Fragment key={__i9}><div><dt>{r.k}</dt><dd>{r.v}</dd></div></React.Fragment>
      ))}
      </dl>
      <p>Full conditions are in the <a href="#sweeps">Sweepstakes Rules</a> and <a href="#terms">Terms &amp; Conditions</a>.</p>
      </div>
      </>
      ) : null}
      </div>
      </article>
      </React.Fragment>
      ))}
      </section>
  );
}
