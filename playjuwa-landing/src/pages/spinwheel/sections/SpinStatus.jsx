import React from 'react';

export default function SpinStatus({ v }) {
  return (
    <section className="sp-status" data-state={v.stState} aria-labelledby="sp-st-title" aria-live="polite">
      <span className="sp-st-tag"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={v.stIcon} /></svg>{v.stTag}</span>
      <h2 id="sp-st-title">{v.stTitle}</h2>
      <p>{v.stText} <b className="sp-time">{v.stTime}</b></p>
      {v.locked ? (
      <>
      <a className="sp-cta is-green" href={v.nSignup}><span>Sign up to unlock</span><span className="sp-cta-go" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span></a>
      <p className="sp-note">Already have an account? <a className="sp-link" href={v.nLogin}>Log in</a></p>
      </>
      ) : null}
      {v.unlocked ? (
      <>
      <button className="sp-cta" type="button" onClick={v.spin} disabled={v.spinDisabled}>
      {v.isSpinning ? (
      <><span className="lp-spinner" aria-hidden="true" /></>
      ) : null}
      <span>{v.btnText}</span>
      <span className="sp-cta-go" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span>
      </button>
      </>
      ) : null}
      {v.hasResult ? (
      <>
      <div className="sp-result" role="status">
      <span className="sp-result-ic" aria-hidden="true"><svg viewBox="0 0 32 32"><rect x="5" y="13" width="22" height="15" rx="3" fill="#ff5fa2" /><rect x="3" y="9" width="26" height="6" rx="2" fill="#ff86bb" /><rect x="14" y="9" width="4" height="19" fill="#ffd21f" /><path d="M16 9c-2-4-7-5-7-2s5 2 7 2zm0 0c2-4 7-5 7-2s-5 2-7 2z" fill="#ffd21f" /></svg></span>
      <span><small>You won</small><b>{v.resultLabel}</b></span>
      </div>
      </>
      ) : null}
      <span className="sp-panel-gift sp-fl" aria-hidden="true"><img src="/assets/96c8e0e9aadd3d69b1e069a0e6fd647e.webp" alt="" /><img className="is-coin" src="/assets/11ef8cbb2900a3979b8a2493012e9391.webp" alt="" /></span>
      </section>
  );
}
