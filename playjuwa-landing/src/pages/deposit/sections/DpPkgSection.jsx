import React from 'react';

export default function DpPkgSection({ v }) {
  return (
    <section className="dp-card" id="dp-pkg" aria-labelledby="dp-p-h">
      <div className="dp-sec-h">
      <span className="dp-num">2</span>
      <div><h2 id="dp-p-h">Choose your package</h2><p>{v.pkgSub}</p></div>
      <span className="dp-count">All packages <b>{v.pkgCount}</b></span>
      </div>
      {v.cashNote ? (
      <>
      <p className="dp-note"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M12 11v5M12 8h.01" /></svg>Cash App uses fixed price points. We only show packs this method can actually buy.</p>
      </>
      ) : null}
      <div className="dp-pkg-wrap" data-locked={v.lockedStr}>
      <div className="dp-pkgs" role="radiogroup" aria-label="Packages">
      {(v.pkgs || []).map((p, __i5) => (
      <React.Fragment key={__i5}>
      <button className="dp-pkg" type="button" role="radio" aria-checked={p.on} aria-label={p.aria} onClick={p.pick}>
      {p.hasBadge ? (
      <><span className="dp-pkg-badge">{p.badge}</span></>
      ) : null}
      <span className="dp-check" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg></span>
      <span className="dp-pkg-art"><img src={p.img} alt="" loading="lazy" /></span>
      <b className="dp-pkg-gc">{p.gc} <small>GC</small></b>
      <span className="dp-pkg-sc"><img src="/assets/edbab742e888b020a93dd88ac36e1531.png" alt="" />{p.sc} Free SC Cash</span>
      <span className="dp-pkg-price">{p.hasWas ? (
      <><s>{p.was}</s></>
      ) : null}<b>{p.price}</b></span>
      </button>
      </React.Fragment>
      ))}
      </div>
      {v.locked ? (
      <>
      <div className="dp-lock" role="note">
      <span className="dp-lock-ic" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="11" width="14" height="10" rx="2.5" /><path d="M8 11V8a4 4 0 0 1 8 0v3" /></svg></span>
      <b>Packages are locked</b>
      <span>Tap any package and we take you up to choose a method.</span>
      <button className="dp-btn is-gold" type="button" onClick={v.goMethod}>Choose method<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 19V5M6 11l6-6 6 6" /></svg></button>
      </div>
      </>
      ) : null}
      </div>
      <div className="dp-or" aria-hidden="true"><span>OR</span></div>
      <div className="dp-custom" data-locked={v.lockedStr}>
      <div className="dp-custom-h"><b>Pick your own amount</b><small>Unlocks with your payment method.</small></div>
      {v.locked ? (
      <>
      <div className="dp-custom-lock"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="5" y="11" width="14" height="10" rx="2.5" /><path d="M8 11V8a4 4 0 0 1 8 0v3" /></svg><span><b>Choose a payment method first</b><small>Each method has its own smallest and largest amount.</small></span></div>
      </>
      ) : null}
      {v.unlocked ? (
      <>
      <div className="dp-custom-row">
      <label className="dp-amt"><span className="lp-sr">Custom amount in US dollars</span><span aria-hidden="true">$</span><input inputMode="decimal" placeholder="0.00" value={v.amt} onChange={v.onAmt} aria-describedby="dp-amt-help" /></label>
      <button className="dp-btn is-ghost" type="button" disabled={v.amtDisabled} onClick={v.useAmt}>Use amount</button>
      </div>
      <small className="dp-help" id="dp-amt-help">Each method has its own smallest and largest amount.</small>
      </>
      ) : null}
      </div>
      <form className="dp-code" onSubmit={v.applyCode}>
      <label className="dp-code-in"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 12V4h8l10 10-8 8z" /><circle cx="7.5" cy="8.5" r="1.5" /></svg><span className="lp-sr">Discount code</span><input placeholder="Enter discount code" value={v.code} onChange={v.onCode} autoComplete="off" /></label>
      <button className="dp-btn is-gold" type="submit" disabled={v.codeDisabled} aria-busy={v.codeBusy}>{v.codeBusyB ? (
      <><span className="dp-spin" aria-hidden="true" /></>
      ) : null}Apply</button>
      </form>
      </section>
  );
}
