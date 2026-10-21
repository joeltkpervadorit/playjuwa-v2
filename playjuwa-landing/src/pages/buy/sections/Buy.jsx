import React from 'react';

export default function Buy({ v }) {
  return (
    <main className="by-main" id="buy">
      <div className="by-head">
      <img src="/assets/57cb3b8dc960b8e80d9cbe9e37932476.png" alt="" />
      <div><h1 className="pj-text-gold">Buy SC</h1><p>Get more coins and enjoy your favorite games.</p></div>
      <div className="by-secure"><img src="/assets/fb173b6d814f2e73a03ec9ab3330e6dc.png" alt="" /><span><b>Secure &amp; Safe Payment</b>Your payment information is encrypted.</span></div>
      </div>
      <section className="by-step" aria-labelledby="s1">
      <div className="by-step-h"><span className="by-num" aria-hidden="true">1</span><h2 id="s1">Choose Payment Method</h2></div>
      <div className="by-methods" role="radiogroup" aria-labelledby="s1">
      {(v.methods || []).map((m, __i5) => (
      <React.Fragment key={__i5}>
      <button className="by-m" type="button" role="radio" aria-checked={m.on} onClick={m.pick}>
      <span className={m.icCls}><img src={m.icon} alt="" /></span>
      <span className="by-m-t"><b>{m.name}</b><small>{m.sub}</small></span>
      <span className="by-tick" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg></span>
      </button>
      </React.Fragment>
      ))}
      </div>
      </section>
      <section className="by-step" aria-labelledby="s2">
      <div className="by-step-h"><span className="by-num is-v" aria-hidden="true">2</span><h2 id="s2">Choose Your Package</h2><small><i />{v.methodName} selected</small></div>
      <div className="by-pkgs" role="radiogroup" aria-labelledby="s2">
      {(v.pkgs || []).map((p, __i5) => (
      <React.Fragment key={__i5}>
      <button className="by-p" type="button" role="radio" aria-checked={p.on} aria-label={p.label} onClick={p.pick}>
      {p.flag ? (
      <><span className="by-flag">{p.flag}</span></>
      ) : null}
      <span className="by-off">{p.off} OFF</span>
      <img src={p.img} alt="" />
      <span className="by-amt"><span><img src="/assets/edbab742e888b020a93dd88ac36e1531.png" alt="" />{p.gc} GC</span><span className="is-sc"><img src="/assets/b1551f22a5fce6ec1f9c62af9e8d8675.png" alt="" />{p.sc} SC Free</span></span>
      <span className="by-price"><s>{p.was}</s><b>{p.price}</b></span>
      <span className="by-tick" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg></span>
      </button>
      </React.Fragment>
      ))}
      </div>
      <div className="by-custom">
      <h3 id="cust"><img src="/assets/edbab742e888b020a93dd88ac36e1531.png" alt="" />Or Choose Your Own Amount</h3>
      <div className="by-amts" role="radiogroup" aria-labelledby="cust">
      {(v.amts || []).map((a, __i6) => (
      <React.Fragment key={__i6}>
      <button className="by-a" type="button" role="radio" aria-checked={a.on} onClick={a.pick}>{a.label}</button>
      </React.Fragment>
      ))}
      </div>
      </div>
      </section>
      <div className="by-bottom">
      <section className="by-step" aria-labelledby="s3">
      <div className="by-step-h"><span className="by-num is-v" aria-hidden="true">3</span><h2 id="s3">Complete Purchase</h2></div>
      <form className="by-code" data-state={v.codeState} onSubmit={v.applyCode} noValidate>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" aria-hidden="true"><path d="M3 12V4h8l10 10-8 8z" /><circle cx="7.5" cy="8.5" r="1.5" /></svg>
      <label className="lp-sr" htmlFor="by-code">Discount code</label>
      <input id="by-code" name="code" type="text" placeholder="Enter discount code" autoComplete="off" aria-describedby="by-code-msg" aria-invalid={v.codeInvalid} />
      <button type="submit" disabled={v.codeBusy}>{v.codeBtn}</button>
      </form>
      <p className="by-code-msg" id="by-code-msg" data-state={v.codeState} aria-live="polite">{v.codeMsg}</p>
      <div className="by-recv">
      <div><small>You will receive</small>
      <ul>
      <li><img src={v.recvImg} alt="" />{v.recvGc}</li>
      <li className="is-sc"><img src="/assets/b1551f22a5fce6ec1f9c62af9e8d8675.png" alt="" />{v.recvSc}</li>
      </ul>
      </div>
      <div className="by-total"><small>Total Amount</small>{v.hasDisc ? (
      <><s>{v.subtotal}</s></>
      ) : null}<b>{v.total}</b></div>
      </div>
      <button className="by-buy" type="button" onClick={v.buy} disabled={v.buyDisabled} data-busy={v.busy} aria-describedby="by-buy-hint">
      {v.isBusy ? (
      <><span className="by-spin" aria-hidden="true" /></>
      ) : null}
      {v.notBusy ? (
      <><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 10V8a5 5 0 0 1 10 0v2h1a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1zm2 0h6V8a3 3 0 0 0-6 0z" /></svg></>
      ) : null}
      <span>{v.buyText}</span>
      </button>
      <p className="by-hint" id="by-buy-hint">{v.buyHint}</p>
      {v.isError ? (
      <>
      <div className="by-alert is-err" role="alert"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M12 7.5v5.5M12 16.5v.01" /></svg><span><b>Payment could not be completed</b>{v.errText}</span><button type="button" onClick={v.retry}>Try again</button></div>
      </>
      ) : null}
      {v.isSuccess ? (
      <>
      <div className="by-alert is-ok" role="status"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M8 12.5l3 3 5-6" /></svg><span><b>Purchase complete</b>{v.okText}</span><button type="button" onClick={v.reset}>Buy more</button></div>
      </>
      ) : null}
      </section>
      <aside className="by-step by-sum" aria-labelledby="sum">
      <h2 id="sum">Order Summary</h2>
      <div className="by-sum-row"><img src={v.recvImg} alt="" /><span><b>{v.sumTitle}</b><small>{v.sumSub}</small></span><em>{v.total}</em></div>
      <h3>Payment Method</h3>
      <div className="by-sum-row"><span className={v.methodIcCls}><img src={v.methodIcon} alt="" /></span><span><b>{v.methodName}</b><small className="is-muted">{v.methodSub}</small></span></div>
      <div className="by-sum-secure"><img src="/assets/fb173b6d814f2e73a03ec9ab3330e6dc.png" alt="" /><span><b>Encrypted checkout</b>Your payment details are never stored on PlayJuwa.</span></div>
      <p className="by-terms"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 10V8a5 5 0 0 1 10 0v2h1a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1zm2 0h6V8a3 3 0 0 0-6 0z" /></svg><span>By completing this purchase, you agree to our <a href="#terms">Terms &amp; Conditions</a>.</span></p>
      </aside>
      </div>
      <div className="by-secure-m"><img src="/assets/fb173b6d814f2e73a03ec9ab3330e6dc.png" alt="" /><span><b>Secure &amp; Safe Payment</b>Your payment information is encrypted.</span></div>
      <div className="by-acts">
      <section className="by-step" aria-labelledby="hist">
      <div className="by-list-h"><h2 id="hist">Your Purchase History</h2><a href={v.nTx}>View All</a></div>
      <ul className="by-list by-hist">
      {(v.history || []).map((h, __i6) => (
      <React.Fragment key={__i6}>
      <li><span className="by-h-what"><strong>{h.what}</strong><small>{h.when} · {h.method}</small></span><span>{h.amount}</span><span className={h.cls}>{h.status}</span></li>
      </React.Fragment>
      ))}
      </ul>
      </section>
      <section className="by-step" aria-labelledby="recent">
      <div className="by-list-h"><i aria-hidden="true" /><h2 id="recent">Recent Purchases</h2><a href={v.nTx}>View All</a></div>
      <ul className="by-list">
      {(v.recent || []).map((r, __i6) => (
      <React.Fragment key={__i6}>
      <li><span className="by-ini" aria-hidden="true">{r.ini}</span><b>{r.name}</b><span>Bought <em>{r.sc} SC</em></span><time>{r.ago}</time></li>
      </React.Fragment>
      ))}
      </ul>
      </section>
      <section className="by-step by-help" aria-labelledby="help">
      <div className="by-help-h"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M4 14v-2a8 8 0 0 1 16 0v2" /><rect x="3" y="13" width="4" height="7" rx="1.5" /><rect x="17" y="13" width="4" height="7" rx="1.5" /></svg><b id="help">Need Help?</b></div>
      <p>Payment not going through? Our support team can help.</p>
      <ul className="by-help-links">
      <li><a href="#faq-payments">Payment FAQ<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 6l6 6-6 6" /></svg></a></li>
      <li><a href="#faq-redeem">How to redeem SC<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 6l6 6-6 6" /></svg></a></li>
      <li><a href="#faq-limits">Purchase limits<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 6l6 6-6 6" /></svg></a></li>
      </ul>
      <a className="by-help-cta" href="#support"><span>Contact Support</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg></a>
      </section>
      </div>
      </main>
  );
}
