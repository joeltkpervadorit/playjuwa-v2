import React from 'react';

export default function Withdraw({ v }) {
  return (
    <main className="by-main wl-main wd-main" id="withdraw">
      <div className="wl-hero wd-hero">
      <img className="wl-hero-art" src="/assets/073437e09e7d27915f0f560e6189a9bb.jpg" alt="" />
      <div className="wl-head-copy">
      <nav className="wl-crumb" aria-label="Breadcrumb"><a href={v.nWallet}>Wallet</a><span aria-hidden="true">/</span>{v.inFlow ? (
      <><a href="#withdraw" onClick={v.goOverview}>Withdraw SC</a><span aria-hidden="true">/</span></>
      ) : null}<span aria-current="page">{v.crumb}</span></nav>
      <h1>{v.pageTitle}</h1>
      <p>{v.pageSub}</p>
      </div>
      <a className="wl-btn is-ghost wl-hero-back wd-back" href={v.nWallet}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 6l-6 6 6 6" /></svg>Back to Wallet</a>
      </div>
      <p className="wd-mock" role="note"><b>UI preview · mock data</b> Payout methods, limits, fees and processing times below are placeholders until confirmed by the product team. No real redemptions are made from this screen.</p>
      {v.isError ? (
      <>
      <section className="wl-card wl-state is-error" role="alert">
      <span className="wl-state-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M2 8.5a15 15 0 0 1 20 0M5.5 12a10 10 0 0 1 13 0M9 15.5a5 5 0 0 1 6 0M12 19h.01" /><path d="M3 3l18 18" /></svg></span>
      <h2>We couldn’t load redemption details</h2>
      <p>There was a network or server problem while loading your balances and redemption history. Please check your connection and try again.</p>
      <div className="wl-state-acts">
      <button className="wl-btn is-gold" type="button" onClick={v.retry}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 12a8 8 0 1 1-2.3-5.6M20 4v5h-5" /></svg>Try Again</button>
      <a className="wl-btn is-ghost" href={v.nWallet}>Back to Wallet</a>
      </div>
      <small>Error code: REDEMPTION_FETCH_FAILED</small>
      </section>
      </>
      ) : null}
      {v.showOverview ? (
      <>
      <div className="wd-ov">
      {v.isLoading ? (
      <>
      <div className="wl-card wd-sc is-skel" aria-hidden="true"><i className="wl-sk w40" /><i className="wl-sk w60 h34" /><span className="wl-sk-row"><i className="wl-sk h48" /><i className="wl-sk h48" /></span></div>
      <div className="wl-card wd-elig is-skel" aria-hidden="true"><i className="wl-sk w50" /><i className="wl-sk h44" /><i className="wl-sk h44" /><i className="wl-sk h44" /></div>
      <div className="wl-card wd-info is-skel" aria-hidden="true"><i className="wl-sk w40" /><i className="wl-sk h44" /><i className="wl-sk h44" /></div>
      <span className="lp-sr" role="status">Loading redemption details…</span>
      </>
      ) : null}
      {v.isReady ? (
      <>
      <section className="wl-card wl-bal is-sc wd-sc" aria-labelledby="wd-bal">
      <img className="wl-bal-art" src="/assets/14138740904a042a2f0fdb7040481e09.jpg" alt="" />
      <div className="wl-bal-h"><span className="wl-bal-ic"><img src="/assets/b1551f22a5fce6ec1f9c62af9e8d8675.png" alt="" /></span><h2 id="wd-bal">Sweepstakes Coins</h2><span className="wl-tag is-sc">SC</span></div>
      <p className="wl-bal-v">{v.scTotal}</p>
      <p className="wl-bal-s">Total SC balance</p>
      <dl className="wl-split">
      <div><dt>Available SC</dt><dd>{v.scAvail}</dd><small>Ready to use in games</small></div>
      <div className="wd-hl"><dt>Redeemable SC</dt><dd>{v.scRedeem}</dd><small>Eligible for redemption</small></div>
      </dl>
      <p className="wd-gc-note"><img src="/assets/edbab742e888b020a93dd88ac36e1531.png" alt="" /><span>Only Sweepstakes Coins are shown here. Your Gold Coins (GC) balance stays in your <a href={v.nWallet}>Wallet</a>.</span></p>
      </section>
      <section className="wl-card wd-elig" aria-labelledby="wd-el-h">
      <div className="wl-card-h"><span className={`wd-h-ic ${v.eligIcCls ?? ""}`} aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l7.5 3v6c0 4.5-3.2 7.8-7.5 9-4.3-1.2-7.5-4.5-7.5-9V6z" /><path d="M8.5 12l2.5 2.5 4.5-5" /></svg></span><h2 id="wd-el-h">Eligibility</h2><span className={v.eligPill}>{v.eligLabel}</span></div>
      <ul className="wd-checks">
      {(v.checks || []).map((c, __i8) => (
      <React.Fragment key={__i8}>
      <li className={c.cls}><span className="wd-ck" aria-hidden="true"><i /></span><span className="wd-ck-t"><b>{c.label}</b><small>{c.sub}</small></span>{c.hasCta ? (
      <><a className="wd-ck-cta" href={c.href} onClick={c.act}>{c.cta}</a></>
      ) : null}</li>
      </React.Fragment>
      ))}
      </ul>
      {v.hasBlock ? (
      <>
      <div className={`wd-alert ${v.blockCls ?? ""}`} role="alert">
      <span className="wd-alert-ic" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l9.5 17h-19z" /><path d="M12 10v4.5M12 17.5h.01" /></svg></span>
      <p><b>{v.blockTitle}</b>{v.blockText}</p>
      </div>
      </>
      ) : null}
      <button className="wl-btn is-gold wd-cta" type="button" disabled={v.cantWithdraw} onClick={v.startFlow}><span className="nv-ic ic-withdraw" aria-hidden="true" />Withdraw SC</button>
      <p className="wd-cta-hint">{v.ctaHint}</p>
      </section>
      <section className="wl-card wd-info" aria-labelledby="wd-in-h">
      <div className="wl-card-h"><span className="wd-h-ic is-violet" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><circle cx="12" cy="12" r="9" /><path d="M12 11v5M12 8h.01" /></svg></span><h2 id="wd-in-h">Redemption Details</h2></div>
      <dl className="wd-facts">
      {(v.facts || []).map((f, __i8) => (
      <React.Fragment key={__i8}>
      <div><dt>{f.k}</dt><dd className={f.cls}>{f.v}{f.mock ? (
      <><span className="wd-tag-mock">Placeholder</span></>
      ) : null}</dd></div>
      </React.Fragment>
      ))}
      </dl>
      <ul className="by-help-links wd-links">
      <li><a href="#faq-redeem">How to redeem SC<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 6l6 6-6 6" /></svg></a></li>
      <li><a href="#sweeps">Sweepstakes Rules<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 6l6 6-6 6" /></svg></a></li>
      </ul>
      </section>
      </>
      ) : null}
      <section className="wl-card wd-hist" aria-labelledby="wd-hi-h" id="redemption-history">
      <div className="wl-card-h wd-hist-h">
      <span className="wl-h-ic" aria-hidden="true"><span className="nv-ic ic-history" /></span><h2 id="wd-hi-h">Redemption History</h2>
      <span className="wl-count-txt" role="status">{v.histCount}</span>
      </div>
      <div className="wd-hfil">
      <label className="wl-f"><span>Status</span><select value={v.hStatus} onChange={v.onHStatus}><option value="all">All statuses</option><option value="pending">Pending</option><option value="completed">Completed</option><option value="failed">Failed</option><option value="rejected">Rejected</option><option value="cancelled">Cancelled</option></select></label>
      <label className="wl-f"><span>Date</span><select value={v.hDate} onChange={v.onHDate}><option value="all">All time</option><option value="30">Last 30 days</option><option value="90">Last 90 days</option><option value="custom">Custom range</option></select></label>
      {v.hCustom ? (
      <>
      <label className="wl-f"><span>From</span><input type="date" value={v.dFrom} max={v.dTo} onChange={v.onFrom} /></label>
      <label className="wl-f"><span>To</span><input type="date" value={v.dTo} min={v.dFrom} onChange={v.onTo} /></label>
      </>
      ) : null}
      <button className="wl-reset" type="button" onClick={v.hReset} disabled={v.hNoFilter}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 12a8 8 0 1 1-2.3-5.6M20 4v5h-5" /></svg>Reset</button>
      </div>
      {v.isLoading ? (
      <>
      <div className="wl-skel-rows" aria-hidden="true">
      <div><i className="wl-sk sq" /><span className="wl-sk-col"><i className="wl-sk w50" /><i className="wl-sk w30" /></span><i className="wl-sk w15" /><i className="wl-sk w10" /></div>
      <div><i className="wl-sk sq" /><span className="wl-sk-col"><i className="wl-sk w60" /><i className="wl-sk w40" /></span><i className="wl-sk w15" /><i className="wl-sk w10" /></div>
      <div><i className="wl-sk sq" /><span className="wl-sk-col"><i className="wl-sk w40" /><i className="wl-sk w30" /></span><i className="wl-sk w15" /><i className="wl-sk w10" /></div>
      </div>
      </>
      ) : null}
      {v.hEmptyAll ? (
      <>
      <div className="wl-empty">
      <span className="wl-empty-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 15V3M7 8l5-5 5 5" /><path d="M4 14v5a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-5" /></svg></span>
      <h3>No redemptions yet</h3>
      <p>When you submit a redemption request, it will appear here with its status.</p>
      </div>
      </>
      ) : null}
      {v.hNoMatch ? (
      <>
      <div className="wl-empty is-search">
      <span className="wl-empty-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true"><circle cx="11" cy="11" r="6.5" /><path d="M16 16l4 4M8.5 8.5l5 5M13.5 8.5l-5 5" /></svg></span>
      <h3>No redemptions match these filters</h3>
      <p>Try a different status or a wider date range.</p>
      <button className="wl-btn is-ghost" type="button" onClick={v.hReset}>Clear filters</button>
      </div>
      </>
      ) : null}
      {v.hHasRows ? (
      <>
      <div className="wl-table-wrap">
      <table className="wl-table wd-table">
      <thead><tr><th scope="col">Date</th><th scope="col">Transaction ID</th><th scope="col" className="is-num">Amount</th><th scope="col">Payment method</th><th scope="col">Status</th><th scope="col"><span className="lp-sr">Details</span></th></tr></thead>
      <tbody>
      {(v.hRows || []).map((r, __i10) => (
      <React.Fragment key={__i10}>
      <tr className={r.rowCls} onClick={r.open}>
      <td><span className="wl-d">{r.date}</span><small>{r.time}</small></td>
      <td><code>{r.id}</code><small>{r.ref}</small></td>
      <td className="is-num"><span className={`wl-amt ${r.amtCls ?? ""}`}>{r.amt}</span></td>
      <td><span className="wd-pm"><span className={`wd-pm-ic ${r.mCls ?? ""}`} aria-hidden="true"><i /></span>{r.method}</span></td>
      <td><span className={r.pill}>{r.statusLabel}</span></td>
      <td className="is-act"><button className="wl-row-btn wd-view" type="button" aria-label={r.aria}>View<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 6l6 6-6 6" /></svg></button></td>
      </tr>
      </React.Fragment>
      ))}
      </tbody>
      </table>
      </div>
      <ul className="wl-cards">
      {(v.hRows || []).map((r, __i8) => (
      <React.Fragment key={__i8}>
      <li><button className={`wl-tc ${r.rowCls ?? ""}`} type="button" aria-label={r.aria} onClick={r.open}>
      <span className="wl-tc-top"><span className={`wd-pm-ic is-lg ${r.mCls ?? ""}`} aria-hidden="true"><i /></span><span className="wl-tc-what"><b>{r.amt}</b><small>{r.date} · {r.time}</small></span><span className={r.pill}>{r.statusLabel}</span></span>
      <span className="wl-tc-bot"><span className="wl-tc-meta"><code>{r.id}</code><small>{r.method}</small></span><span className="wd-view-m">View details<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 6l6 6-6 6" /></svg></span></span>
      </button></li>
      </React.Fragment>
      ))}
      </ul>
      <nav className="wl-pager" aria-label="Redemption history pages">
      <span className="wl-pager-txt">{v.hRange}</span>
      <div className="wl-pages">
      <button type="button" aria-label="Previous page" disabled={v.hPrevDis} onClick={v.hPrev}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 6l-6 6 6 6" /></svg></button>
      {(v.hPages || []).map((p, __i9) => (
      <React.Fragment key={__i9}>
      <button type="button" aria-current={p.cur} aria-label={`Page ${p.n ?? ""}`} onClick={p.pick}>{p.n}</button>
      </React.Fragment>
      ))}
      <button type="button" aria-label="Next page" disabled={v.hNextDis} onClick={v.hNext}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 6l6 6-6 6" /></svg></button>
      </div>
      </nav>
      </>
      ) : null}
      </section>
      </div>
      </>
      ) : null}
      {v.showFlow ? (
      <>
      <div className="wd-flow">
      <ol className="wd-steps" aria-label="Redemption steps">
      {(v.steps || []).map((s, __i6) => (
      <React.Fragment key={__i6}>
      <li className={s.cls} aria-current={s.cur}><span className="wd-step-n" aria-hidden="true">{s.n}</span><span className="wd-step-l">{s.label}</span></li>
      </React.Fragment>
      ))}
      </ol>
      <p className="wd-steps-m" aria-hidden="true"><b>Step {v.stepNum} of 5</b> · {v.stepName}<i data-s={v.stepNum} /></p>
      <div className="wd-flow-grid">
      <section className="wl-card wd-panel" aria-labelledby="wd-step-h">
      {v.isMethod ? (
      <>
      <h2 className="wd-panel-h" id="wd-step-h">Select a payment method</h2>
      <p className="wd-panel-sub">Choose where you’d like your redemption sent.</p>
      <div className="wd-methods" role="radiogroup" aria-label="Payment methods">
      {(v.methods || []).map((m, __i9) => (
      <React.Fragment key={__i9}>
      <button className={`wd-m ${m.cls ?? ""}`} type="button" role="radio" aria-checked={m.on} aria-disabled={m.dis} onClick={m.pick}>
      <span className={`wd-pm-ic is-xl ${m.mCls ?? ""}`} aria-hidden="true"><i /></span>
      <span className="wd-m-t"><b>{m.name}</b><small>{m.sub}</small></span>
      <span className="wd-m-tags">{m.saved ? (
      <><span className="wd-tag is-saved">Saved {m.savedMask}</span></>
      ) : null}{m.isDis ? (
      <><span className="wd-tag is-off">{m.disReason}</span></>
      ) : null}<span className="wd-tag-mock">Placeholder</span></span>
      <span className="wd-radio" aria-hidden="true" />
      </button>
      </React.Fragment>
      ))}
      </div>
      {v.methodErr ? (
      <><p className="wd-err" role="alert">Select a payment method to continue.</p></>
      ) : null}
      </>
      ) : null}
      {v.isDetails ? (
      <>
      <h2 className="wd-panel-h" id="wd-step-h">Withdrawal details</h2>
      <p className="wd-panel-sub">Enter the {v.methodName} details for your payout. Details must match the name on your PlayJuwa account.</p>
      {v.usingSaved ? (
      <><p className="wd-info-line"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M12 11v5M12 8h.01" /></svg>We’ve filled in your saved details. Edit anything that has changed.</p></>
      ) : null}
      {v.missingPayout ? (
      <><div className="wd-alert is-warn" role="alert"><span className="wd-alert-ic" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l9.5 17h-19z" /><path d="M12 10v4.5M12 17.5h.01" /></svg></span><p><b>Payout information missing</b>Complete the required fields below so we know where to send your redemption.</p></div></>
      ) : null}
      {v.detailsInvalid ? (
      <><div className="wd-alert is-err" role="alert"><span className="wd-alert-ic" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 8v5M12 16h.01" /></svg></span><p><b>Check your payout details</b>{v.errCount} to fix before you can continue.</p></div></>
      ) : null}
      <div className="wd-form">
      {(v.fields || []).map((f, __i9) => (
      <React.Fragment key={__i9}>
      <div className={`wd-field ${f.wide ?? ""}`} data-err={f.hasErr}>
      <label htmlFor={f.id}>{f.label}</label>
      <div className="wd-input">
      <input id={f.id} type={f.type} inputMode={f.mode} autoComplete={f.ac} placeholder={f.ph} value={f.value} maxLength={f.max} aria-invalid={f.hasErr} aria-describedby={`${f.id ?? ""}-msg`} onInput={f.onInput} />
      {f.canReveal ? (
      <><button className="wd-eye" type="button" aria-pressed={f.revealed} aria-label={f.revealLabel} onClick={f.toggle}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z" /><circle cx="12" cy="12" r="3" /></svg></button></>
      ) : null}
      </div>
      <small className="wd-msg" id={`${f.id ?? ""}-msg`}>{f.msg}</small>
      </div>
      </React.Fragment>
      ))}
      {v.isBank ? (
      <>
      <fieldset className="wd-field is-wide wd-seg-f"><legend>Account type</legend>
      <div className="wl-seg wd-seg" role="radiogroup" aria-label="Account type">
      <button type="button" role="radio" aria-checked={v.atChecking} aria-selected={v.atChecking} onClick={v.setChecking}>Checking</button>
      <button type="button" role="radio" aria-checked={v.atSavings} aria-selected={v.atSavings} onClick={v.setSavings}>Savings</button>
      </div>
      </fieldset>
      </>
      ) : null}
      </div>
      <p className="wd-secure"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="5" y="11" width="14" height="9" rx="2" /><path d="M8 11V8a4 4 0 0 1 8 0v3" /></svg>Sensitive numbers are masked after entry and only the last 4 digits are shown again.</p>
      </>
      ) : null}
      {v.isAmount ? (
      <>
      <h2 className="wd-panel-h" id="wd-step-h">How much SC do you want to redeem?</h2>
      <p className="wd-panel-sub">You can redeem up to your redeemable SC balance, within the per-request limits.</p>
      <div className="wd-redeem-box"><span><small>Redeemable SC</small><b>{v.scRedeem} SC</b></span><span><small>Limits per request</small><b>{v.limitText}</b><span className="wd-tag-mock">Placeholder</span></span></div>
      <div className="wd-field wd-amt-f" data-err={v.amtHasErr}>
      <label htmlFor="wd-amt">Amount (SC)</label>
      <div className="wd-input wd-amt-in">
      <span className="wd-amt-coin" aria-hidden="true"><img src="/assets/b1551f22a5fce6ec1f9c62af9e8d8675.png" alt="" /></span>
      <input id="wd-amt" type="text" inputMode="decimal" autoComplete="off" placeholder="0.00" value={v.amt} aria-invalid={v.amtHasErr} aria-describedby="wd-amt-msg" onInput={v.onAmt} />
      <span className="wd-amt-unit">SC</span>
      <button className="wd-max" type="button" onClick={v.useMax}>Use maximum</button>
      </div>
      <small className="wd-msg" id="wd-amt-msg" role={v.amtRole}>{v.amtMsg}</small>
      </div>
      <div className="wd-chips" aria-label="Quick amounts">
      {(v.quick || []).map((q, __i9) => (
      <React.Fragment key={__i9}><button className="wl-chip wd-q" type="button" onClick={q.pick} aria-pressed={q.on}>{q.label}</button></React.Fragment>
      ))}
      </div>
      <dl className="wd-calc">
      <div><dt>Redeemable SC now</dt><dd>{v.scRedeem} SC</dd></div>
      <div><dt>This request</dt><dd className="is-neg">{v.amtShow}</dd></div>
      <div className="is-total"><dt>Redeemable SC after request</dt><dd>{v.remainShow}</dd></div>
      </dl>
      </>
      ) : null}
      {v.isReview ? (
      <>
      <h2 className="wd-panel-h" id="wd-step-h">Review your request</h2>
      <p className="wd-panel-sub">Check everything carefully. You can edit any section before submitting.</p>
      {v.submitErr ? (
      <><div className="wd-alert is-err" role="alert"><span className="wd-alert-ic" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M2 8.5a15 15 0 0 1 20 0M5.5 12a10 10 0 0 1 13 0M9 15.5a5 5 0 0 1 6 0M12 19h.01" /><path d="M3 3l18 18" /></svg></span><p><b>We couldn’t submit your request</b>A network or server error occurred and nothing was submitted. Check your connection and try again.</p></div></>
      ) : null}
      <div className="wd-rv">
      <div className="wd-rv-amt"><small>Redemption amount</small><b>{v.amtShowPlain}</b><span className="wd-rv-sc">Sweepstakes Coins</span></div>
      <dl className="wl-dl wd-rv-dl">
      <div><dt>Payment method</dt><dd>{v.methodName}<button className="wd-edit" type="button" onClick={v.editMethod}>Edit</button></dd></div>
      <div><dt>Payout to</dt><dd>{v.payoutMask}<button className="wd-edit" type="button" onClick={v.editDetails}>Edit</button></dd></div>
      <div><dt>Account holder</dt><dd>{v.payoutName}</dd></div>
      <div><dt>Amount</dt><dd>{v.amtShowPlain}<button className="wd-edit" type="button" onClick={v.editAmount}>Edit</button></dd></div>
      <div><dt>Fees</dt><dd className="is-muted">To be confirmed<span className="wd-tag-mock">Placeholder</span></dd></div>
      <div><dt>Estimated processing time</dt><dd className="is-muted">To be confirmed<span className="wd-tag-mock">Placeholder</span></dd></div>
      <div className="is-total"><dt>Final amount</dt><dd>{v.amtShowPlain}<small>before any applicable fees</small></dd></div>
      </dl>
      </div>
      <label className="wd-agree" data-err={v.agreeErr}>
      <input type="checkbox" checked={v.agree} onChange={v.toggleAgree} />
      <span className="wd-box" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg></span>
      <span>I confirm the payout details are correct and that this request follows the <a href="#sweeps">Sweepstakes Rules</a>.</span>
      </label>
      {v.agreeErrB ? (
      <><p className="wd-err" role="alert">Please confirm the details before submitting.</p></>
      ) : null}
      </>
      ) : null}
      <div className="wd-actbar">
      <button className="wl-btn is-line" type="button" onClick={v.back}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 6l-6 6 6 6" /></svg>{v.backLabel}</button>
      <button className="wl-btn is-gold wd-next" type="button" onClick={v.next} disabled={v.nextDis}>{v.nextLabel}<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg></button>
      </div>
      </section>
      <aside className="wl-card wd-sum" aria-labelledby="wd-sum-h">
      <h2 id="wd-sum-h">Redemption Summary</h2>
      <dl className="wd-sum-dl">
      <div><dt>Redeemable SC</dt><dd className="is-sc">{v.scRedeem} SC</dd></div>
      <div><dt>Payment method</dt><dd>{v.sumMethod}</dd></div>
      <div><dt>Payout to</dt><dd>{v.sumPayout}</dd></div>
      <div><dt>Amount</dt><dd>{v.sumAmount}</dd></div>
      <div className="is-total"><dt>Redeemable after</dt><dd>{v.sumRemain}</dd></div>
      </dl>
      <p className="wd-sum-note">Only Sweepstakes Coins can be part of this request. Gold Coins are not affected.</p>
      <a className="wd-sum-help" href="#support"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M4 14v-2a8 8 0 0 1 16 0v2" /><rect x="3" y="13" width="4" height="7" rx="1.5" /><rect x="17" y="13" width="4" height="7" rx="1.5" /></svg>Questions? Contact Support</a>
      </aside>
      </div>
      </div>
      </>
      ) : null}
      {v.isProcessing ? (
      <>
      <section className="wl-card wd-proc" role="status" aria-live="polite">
      <span className="wd-spin" aria-hidden="true" />
      <h2>Submitting your request…</h2>
      <p>Please don’t close this page or press back. We’re sending your request — this only submits it for review.</p>
      <ol className="wd-proc-steps">
      <li className="is-done"><i aria-hidden="true" />Details validated</li>
      <li className="is-cur"><i aria-hidden="true" />Submitting request</li>
      <li><i aria-hidden="true" />Awaiting review</li>
      </ol>
      <p className="wd-proc-amt">{v.amtShowPlain} · {v.methodName} {v.payoutMaskShort}</p>
      </section>
      </>
      ) : null}
      {v.isResult ? (
      <>
      <section className={`wl-card wd-res ${v.res.cls ?? ""}`} aria-labelledby="wd-res-h">
      <span className="wd-res-ic" aria-hidden="true"><i /></span>
      <span className={v.res.pill}>{v.res.statusLabel}</span>
      <h2 id="wd-res-h">{v.res.title}</h2>
      <p className="wd-res-msg">{v.res.msg}</p>
      {v.res.hasReason ? (
      <><p className="wd-res-reason"><b>Reason</b>{v.res.reason}</p></>
      ) : null}
      <dl className="wl-dl wd-res-dl">
      <div><dt>Reference</dt><dd><code>{v.res.ref}</code></dd></div>
      <div><dt>Transaction ID</dt><dd><code>{v.res.id}</code></dd></div>
      <div><dt>Amount</dt><dd>{v.res.amt}</dd></div>
      <div><dt>Payment method</dt><dd>{v.res.method}</dd></div>
      <div><dt>Submitted</dt><dd>{v.res.date}</dd></div>
      </dl>
      <div className="wd-next-steps">
      <h3>What happens next</h3>
      <ul>
      {(v.res.next || []).map((n, __i7) => (
      <React.Fragment key={__i7}><li>{n.t}</li></React.Fragment>
      ))}
      </ul>
      </div>
      <div className="wd-res-acts">
      {v.res.canRetry ? (
      <><button className="wl-btn is-gold" type="button" onClick={v.startFlow}>Try Again</button></>
      ) : null}
      <button className="wl-btn is-ghost" type="button" onClick={v.toHistory}>View Redemption History</button>
      <a className="wl-btn is-line" href={v.nWallet}>Back to Wallet</a>
      <a className="wl-btn is-plain" href="#support">Contact Support</a>
      </div>
      </section>
      </>
      ) : null}
      </main>
  );
}
