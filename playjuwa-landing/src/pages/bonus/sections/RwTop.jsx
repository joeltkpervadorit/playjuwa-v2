import React from 'react';
import { css } from '../css.js';

export default function RwTop({ v }) {
  return (
    <div className="rw-top">
      {(v.heroList || []).map((hero, __i3) => (
      <React.Fragment key={__i3}>
      <section className={`rw-hero rw-hero2 is-${hero.key ?? ""}`} aria-labelledby="rw-hero-t" data-status={hero.status}>
      <span className="rw-h2-orb" aria-hidden="true" />
      <div className="rw-hero-copy">
      <div className="rw-hero-tags">
      <span className="rw-h2-feat"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="8" width="18" height="13" rx="2" /><path d="M12 8v13M3 12h18M12 8c-2-4-6-4-6-1.5S9 8 12 8zm0 0c2-4 6-4 6-1.5S15 8 12 8z" /></svg>Featured offer</span>
      <span className={`rw-st rw-h2-st is-${hero.status ?? ""}`}><i aria-hidden="true" />{hero.statusLabel}</span>
      </div>
      <h2 id="rw-hero-t">{hero.titleA} <span className="pj-text-gold">{hero.titleB}</span></h2>
      <p className="rw-h2-lead">{hero.lead}</p>
      <p className="rw-h2-lead2">{hero.lead2}</p>
      <ul className="rw-h2-terms" aria-label="Key conditions">
      {(hero.tiles || []).map((t, __i7) => (
      <React.Fragment key={__i7}><li><span className={`rw-h2-ic is-${t.ic ?? ""}`} aria-hidden="true" /><span>{t.t}</span></li></React.Fragment>
      ))}
      </ul>
      <div className="rw-hero-cta">
      {hero.isLink ? (
      <><a className="pj-btn pj-btn-primary pj-btn-lg rw-cta-main" href={hero.href}><span>{hero.cta}</span><span className="rw-cta-arr" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span></a></>
      ) : null}
      {hero.isClaim ? (
      <><button className="pj-btn pj-btn-primary pj-btn-lg rw-cta-main" type="button" data-claim={hero.claim} disabled={hero.claimBusy} aria-busy={hero.claimBusyStr} onClick={hero.onClaim}>{hero.claimSpin ? (
      <><i className="rw-spinner" aria-hidden="true" /></>
      ) : null}{hero.cta}</button></>
      ) : null}
      {hero.isOff ? (
      <><button className="pj-btn pj-btn-secondary pj-btn-lg rw-cta-main" type="button" disabled={v.yes}>{hero.cta}</button></>
      ) : null}
      <button className="rw-h2-terms-link" type="button" onClick={hero.openTerms}><svg className="rw-h2-info" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M12 11v5M12 8h.01" /></svg>View terms<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg></button>
      </div>
      {hero.fbShow ? (
      <>
      <div className={`rw-fb is-${hero.fbKind ?? ""}`} role="status"><span className="rw-fb-ic" aria-hidden="true" /><span>{hero.fbText}</span>{hero.fbRetry ? (
      <><button type="button" className="rw-fb-retry" onClick={hero.onClaim}>Retry</button></>
      ) : null}</div>
      </>
      ) : null}
      </div>
      <div className="rw-h2-art" aria-hidden="true">
      <span className="rw-h2-disc" />
      <img className={`rw-h2-main ${hero.artCls ?? ""}`} src={hero.art} alt="" />
      <img className="rw-h2-crown" src={hero.crown} alt="" />
      <i className="rw-h2-spk s1" /><i className="rw-h2-spk s2" /><i className="rw-h2-spk s3" />
      </div>
      </section>
      </React.Fragment>
      ))}
      <aside className="rw-side" aria-label={v.sideLabel}>
      <a className="rw-spinmini" href={v.spinHref} data-state={v.spinState} aria-label={v.spinAria} aria-disabled={v.spinDisabled}>
      <img src={v.spinArt} alt="" aria-hidden="true" />
      <span className="rw-spinmini-txt"><small><i aria-hidden="true" />{v.spinEyebrow}</small><b>Spin the <span className="pj-text-gold">Wheel</span></b><span>{v.spinSub}</span></span>
      <span className="rw-spinmini-go" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span>
      </a>
      {v.authIn ? (
      <>
      <div className="rw-sum">
      <div className="rw-sum-h"><b>Your rewards</b><a href={v.nWallet}>Wallet</a></div>
      <dl className="rw-stats">
      <div className="rw-stat is-ready"><dt>Ready to claim</dt><dd>{v.sumReady}</dd></div>
      <div className="rw-stat is-active"><dt>Active</dt><dd>{v.sumActive}</dd></div>
      <div className="rw-stat is-done"><dt>Claimed</dt><dd>{v.sumClaimed}</dd></div>
      </dl>
      <div className="rw-vip">
      <div className="rw-vip-h"><span><img src={v.vipIcon} alt="" aria-hidden="true" />{v.vipName}</span><b>{v.vipPctText}</b></div>
      <div className="rw-bar" role="progressbar" aria-label="VIP progress" aria-valuemin="0" aria-valuemax="100" aria-valuenow={v.vipPct}><span className="rw-bar-fill" style={css(v.vipFill)} /></div>
      <small>{v.vipNext}</small>
      </div>
      </div>
      </>
      ) : null}
      {v.authOut ? (
      <>
      <div className="rw-sum is-guest">
      <div className="rw-sum-h"><b>Track your rewards</b></div>
      <ul className="rw-guest-list"><li>See what’s ready to claim</li><li>Follow your active bonuses</li><li>Watch your VIP progress</li></ul>
      <div className="rw-guest-act"><a className="pj-btn pj-btn-primary" href={v.nSignup}>Sign Up Free</a><a className="pj-btn pj-btn-outline" href={v.nLogin}>Log in</a></div>
      </div>
      </>
      ) : null}
      </aside>
      </div>
  );
}
