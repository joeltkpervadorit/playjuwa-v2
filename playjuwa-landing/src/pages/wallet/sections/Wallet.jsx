import React from 'react';

export default function Wallet({ v }) {
  return (
    <main className="by-main wl-main" id="wallet">
      <div className="wl-hero">
      <img className="wl-hero-art" src="/assets/073437e09e7d27915f0f560e6189a9bb.jpg" alt="" />
      <i className="wl-hero-coin is-a" aria-hidden="true" /><i className="wl-hero-coin is-b" aria-hidden="true" />
      <div className="wl-head-copy">
      {v.isHistory ? (
      <>
      <nav className="wl-crumb" aria-label="Breadcrumb"><a href="#wallet" onClick={v.goOverview}>Wallet</a><span aria-hidden="true">/</span><span aria-current="page">Transaction History</span></nav>
      </>
      ) : null}
      <h1>{v.pageTitle}</h1>
      <p>{v.pageSub}</p>
      </div>
      {v.isHistory ? (
      <>
      <a className="wl-btn is-ghost wl-hero-back" href="#wallet" onClick={v.goOverview}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 6l-6 6 6 6" /></svg>Back to Wallet</a>
      </>
      ) : null}
      </div>
      <div className="wl-seg" role="tablist" aria-label="Wallet sections">
      <button type="button" role="tab" aria-selected={v.segOverview} onClick={v.goOverview}>Overview</button>
      <button type="button" role="tab" aria-selected={v.segHistory} onClick={v.goHistory}>Transactions</button>
      </div>
      {v.isError ? (
      <>
      <section className="wl-card wl-state is-error" role="alert">
      <span className="wl-state-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3l9.5 17h-19z" /><path d="M12 10v4.5M12 17.5h.01" /></svg></span>
      <h2>We couldn’t load your wallet</h2>
      <p>Something went wrong while fetching your balances and transactions. Please try again in a moment.</p>
      <div className="wl-state-acts">
      <button className="wl-btn is-gold" type="button" onClick={v.retry}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 12a8 8 0 1 1-2.3-5.6M20 4v5h-5" /></svg>Try Again</button>
      <a className="wl-btn is-ghost" href="#support">Contact Support</a>
      </div>
      <small>Error code: WALLET_FETCH_FAILED</small>
      </section>
      </>
      ) : null}
      {v.showOverview ? (
      <>
      <div className="wl-ov">
      {v.isLoading ? (
      <>
      <div className="wl-card wl-bal a-gc is-skel" aria-hidden="true"><i className="wl-sk w40" /><i className="wl-sk w70 h34" /><i className="wl-sk w50" /><span className="wl-sk-row"><i className="wl-sk h44" /><i className="wl-sk h44" /></span></div>
      <div className="wl-card wl-bal a-sc is-skel" aria-hidden="true"><i className="wl-sk w40" /><i className="wl-sk w60 h34" /><span className="wl-sk-row"><i className="wl-sk h48" /><i className="wl-sk h48" /></span><span className="wl-sk-row"><i className="wl-sk h44" /><i className="wl-sk h44" /></span></div>
      <div className="wl-card wl-qa a-qa is-skel" aria-hidden="true"><i className="wl-sk w40" /><i className="wl-sk h44" /><i className="wl-sk h44" /><i className="wl-sk h44" /><i className="wl-sk h44" /></div>
      <span className="lp-sr" role="status">Loading your wallet…</span>
      </>
      ) : null}
      {v.isReady ? (
      <>
      <section className="wl-card wl-bal is-gc a-gc" aria-labelledby="bal-gc">
      <img className="wl-bal-art" src="/assets/669e590b6916e7e7851bc02d53045426.jpg" alt="" />
      <div className="wl-bal-h"><span className="wl-bal-ic"><img src="/assets/edbab742e888b020a93dd88ac36e1531.png" alt="" /></span><h2 id="bal-gc">Gold Coins</h2><span className="wl-tag is-gc">GC</span></div>
      <p className="wl-bal-v">{v.gcTotal}</p>
      <p className="wl-bal-s">Total GC balance</p>
      <div className="wl-bal-acts">
      <a className="wl-btn is-gold" href={v.nBuy}><span className="wl-plus" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><path d="M12 7v10M7 12h10" /></svg></span>Buy GC</a>
      <a className="wl-btn is-line" href={v.nBuy}><svg className="is-crown" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3 7l4.5 4L12 4l4.5 7L21 7l-2 12H5L3 7z" /></svg>GC Packages</a>
      </div>
      </section>
      <section className="wl-card wl-bal is-sc a-sc" aria-labelledby="bal-sc">
      <img className="wl-bal-art" src="/assets/14138740904a042a2f0fdb7040481e09.jpg" alt="" />
      <div className="wl-bal-h"><span className="wl-bal-ic"><img src="/assets/b1551f22a5fce6ec1f9c62af9e8d8675.png" alt="" /></span><h2 id="bal-sc">Sweepstakes Coins</h2><span className="wl-tag is-sc">SC</span></div>
      <p className="wl-bal-v">{v.scTotal}</p>
      <p className="wl-bal-s">Total SC balance</p>
      <dl className="wl-split">
      <div><dt>Available SC</dt><dd>{v.scAvail}</dd><small>Ready to use in games</small></div>
      <div><dt>Redeemable SC <span className="wl-tip" tabIndex="0" aria-label="About redeemable SC" data-tip="Available and redeemable amounts are reported by your account and may differ from your total SC."><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M12 11v5M12 8h.01" /></svg></span></dt><dd>{v.scRedeem}</dd><small>Eligible for redemption</small></div>
      </dl>
      <div className="wl-bal-acts">
      <a className="wl-btn is-green" href={v.nBuy}><span className="wl-plus" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><path d="M12 7v10M7 12h10" /></svg></span>Buy SC</a>
      <a className="wl-btn is-line" href={v.nWithdraw}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3.5" y="8" width="17" height="4.5" rx="1" /><path d="M5 12.5V20h14v-7.5M12 8v12M12 8c-2-3.5-6-3.5-6-1s4 1 6 1zm0 0c2-3.5 6-3.5 6-1s-4 1-6 1z" /></svg>Redeem SC</a>
      </div>
      </section>
      <section className="wl-card wl-qa a-qa" aria-labelledby="qa-h">
      <div className="wl-qa-head"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M13 3L5 13.5h6L10 21l8-10.5h-6z" /></svg><h2 id="qa-h">Quick Actions</h2></div>
      <a className="wl-qa-btn is-buy" href={v.nBuy}><span className="wl-qa-ic"><span className="nv-ic ic-buy" /></span><span><b>Buy SC</b><small>Get coin packages</small></span><svg className="wl-go" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 6l6 6-6 6" /></svg></a>
      <a className="wl-qa-btn is-out" href={v.nWithdraw}><span className="wl-qa-ic"><span className="nv-ic ic-withdraw" /></span><span><b>Withdraw SC</b><small>Redeem eligible SC</small></span><svg className="wl-go" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 6l6 6-6 6" /></svg></a>
      <a className="wl-qa-btn is-tx" href="#transactions" onClick={v.goHistory}><span className="wl-qa-ic"><span className="nv-ic ic-history" /></span><span><b>View Transactions</b><small>Full history &amp; filters</small></span><svg className="wl-go" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 6l6 6-6 6" /></svg></a>
      <a className="wl-qa-btn is-gift" href={v.nHome}><span className="wl-qa-ic"><span className="nv-ic ic-gift" /></span><span><b>Redeem Rewards</b><small>Claim your bonuses</small></span><svg className="wl-go" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 6l6 6-6 6" /></svg></a>
      </section>
      </>
      ) : null}
      <section className="wl-promo a-promo" aria-roledescription="carousel" aria-label="Offers">
      <img className="wl-promo-art" src="/assets/0df652a9352558c63557b0aaa2ca3894.jpg" alt="" />
      <div className="wl-promo-copy" aria-live="polite">
      <span className="wl-promo-eye">{v.promoEye}</span>
      <h2><span>{v.promoT1}</span> <span className="pj-text-gold">{v.promoT2}</span></h2>
      <p>{v.promoText}</p>
      <a className="wl-btn is-gold is-sm" href={v.promoHref}>{v.promoCta}<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg></a>
      </div>
      <div className="wl-promo-nav">
      <button type="button" aria-label="Previous offer" onClick={v.promoPrev}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 6l-6 6 6 6" /></svg></button>
      <button type="button" aria-label="Next offer" onClick={v.promoNext}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 6l6 6-6 6" /></svg></button>
      </div>
      <div className="wl-promo-dots" aria-hidden="true">{(v.promoDots || []).map((dt, __i7) => (
      <React.Fragment key={__i7}><i data-on={dt.on} /></React.Fragment>
      ))}</div>
      </section>
      <section className="wl-card wl-recent a-recent" aria-labelledby="rc-h">
      <div className="wl-card-h"><span className="wl-h-ic" aria-hidden="true"><span className="nv-ic ic-history" /></span><h2 id="rc-h">Recent Transactions</h2><a className="wl-pill-link" href="#transactions" onClick={v.goHistory}>View All<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg></a></div>
      {v.isLoading ? (
      <>
      <ul className="wl-rc-list is-skel" aria-hidden="true">
      <li><i className="wl-sk sq" /><span className="wl-sk-col"><i className="wl-sk w60" /><i className="wl-sk w40" /></span><i className="wl-sk w20" /></li>
      <li><i className="wl-sk sq" /><span className="wl-sk-col"><i className="wl-sk w50" /><i className="wl-sk w30" /></span><i className="wl-sk w20" /></li>
      <li><i className="wl-sk sq" /><span className="wl-sk-col"><i className="wl-sk w70" /><i className="wl-sk w40" /></span><i className="wl-sk w20" /></li>
      <li><i className="wl-sk sq" /><span className="wl-sk-col"><i className="wl-sk w40" /><i className="wl-sk w30" /></span><i className="wl-sk w20" /></li>
      </ul>
      </>
      ) : null}
      {v.recentEmpty ? (
      <>
      <div className="wl-empty is-sm">
      <img src="/assets/37a67bd426a2bc0f357af02198d57f48.png" alt="" />
      <h3>No transactions yet</h3>
      <p>Purchases, rewards and redemptions will show up here.</p>
      <a className="wl-btn is-gold" href={v.nBuy}>Buy SC</a>
      </div>
      </>
      ) : null}
      {v.recentShow ? (
      <>
      <ul className="wl-rc-list">
      {(v.recent || []).map((t, __i8) => (
      <React.Fragment key={__i8}>
      <li><button className="wl-rc" type="button" aria-label={t.aria} onClick={t.open}>
      <span className={`wl-tic is-solid ${t.typeCls ?? ""}`} aria-hidden="true"><i /></span>
      <span className="wl-rc-what"><b>{t.desc}</b><small>{t.date} · {t.time}</small></span>
      <span className="wl-rc-amt"><span className={`wl-amt ${t.gcCls ?? ""}`}>{t.gcShort}</span><span className={`wl-amt ${t.scCls ?? ""}`}>{t.scShort}</span></span>
      <span className={`${t.pill ?? ""} is-lg`}>{t.statusLabel}</span>
      <svg className="wl-go" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 6l6 6-6 6" /></svg>
      </button></li>
      </React.Fragment>
      ))}
      </ul>
      </>
      ) : null}
      </section>
      <div className="wl-side a-side">
      {v.hasPending ? (
      <>
      <section className="wl-card wl-pend a-pend" aria-labelledby="pd-h">
      <div className="wl-card-h"><span className="wl-pend-dot" aria-hidden="true" /><h2 id="pd-h">Pending Transactions</h2><span className="wl-count">{v.pendingCount}</span></div>
      <p>These transactions are still processing. Balances update once they’re confirmed.</p>
      <ul className="wl-pend-list">
      {(v.pending || []).map((t, __i9) => (
      <React.Fragment key={__i9}>
      <li><button type="button" onClick={t.open} aria-label={t.aria}><span className={`wl-tic is-sm ${t.typeCls ?? ""}`} aria-hidden="true"><i /></span><span className="wl-pend-what"><b>{t.desc}</b><small>{t.dateS} · {t.id}</small></span><span className={`wl-amt ${t.mainCls ?? ""}`}>{t.mainAmt}</span></button></li>
      </React.Fragment>
      ))}
      </ul>
      </section>
      </>
      ) : null}
      <section className="by-step by-help wl-help a-help" aria-labelledby="help">
      <div className="by-help-h"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M4 14v-2a8 8 0 0 1 16 0v2" /><rect x="3" y="13" width="4" height="7" rx="1.5" /><rect x="17" y="13" width="4" height="7" rx="1.5" /></svg><b id="help">Need Help?</b></div>
      <p>Questions about a balance or a transaction? Our support team can help.</p>
      <ul className="by-help-links">
      <li><a href="#faq-redeem">How to redeem SC<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 6l6 6-6 6" /></svg></a></li>
      <li><a href="#faq-payments">Payment FAQ<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 6l6 6-6 6" /></svg></a></li>
      <li><a href="#faq-pending">Why is my transaction pending?<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 6l6 6-6 6" /></svg></a></li>
      </ul>
      <a className="wl-chat" href="#support"><span className="wl-chat-ic" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 5h16v11H9l-5 4z" /><path d="M8 9.5h8M8 12.5h5" /></svg></span><span><b>Live Chat</b><small>Chat with our support team</small></span><em>24/7</em></a>
      <a className="by-help-cta" href="#support"><svg className="wl-hs" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true"><path d="M4 14v-2a8 8 0 0 1 16 0v2" /><rect x="3" y="13" width="4" height="7" rx="1.5" /><rect x="17" y="13" width="4" height="7" rx="1.5" /></svg><span>Contact Support</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg></a>
      </section>
      </div>
      </div>
      </>
      ) : null}
      {v.showHistory ? (
      <>
      <div className="wl-hist">
      <section className="wl-card wl-tools" aria-label="Search and filter transactions">
      <div className="wl-search">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true"><circle cx="11" cy="11" r="6.5" /><path d="M16 16l4 4" /></svg>
      <label className="lp-sr" htmlFor="wl-q">Search transactions</label>
      <input id="wl-q" type="search" placeholder="Search by transaction ID or description" value={v.q} onInput={v.onQ} autoComplete="off" />
      {v.hasQ ? (
      <><button className="wl-x" type="button" aria-label="Clear search" onClick={v.clearQ}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" /></svg></button></>
      ) : null}
      </div>
      <div className="wl-filters">
      <label className="wl-f"><span>Type</span><select value={v.fType} onChange={v.onType}><option value="all">All types</option><option value="purchase">Purchases</option><option value="reward">Rewards</option><option value="bonus">Bonuses</option><option value="redemption">Redemptions</option><option value="game">Game activity</option></select></label>
      <label className="wl-f"><span>Status</span><select value={v.fStatus} onChange={v.onStatus}><option value="all">All statuses</option><option value="completed">Completed</option><option value="pending">Pending</option><option value="failed">Failed</option><option value="cancelled">Cancelled</option></select></label>
      <label className="wl-f"><span>Currency</span><select value={v.fCur} onChange={v.onCur}><option value="all">GC &amp; SC</option><option value="GC">Gold Coins (GC)</option><option value="SC">Sweepstakes Coins (SC)</option></select></label>
      <label className="wl-f"><span>Date</span><select value={v.fDate} onChange={v.onDate}><option value="all">All time</option><option value="7">Last 7 days</option><option value="30">Last 30 days</option><option value="90">Last 90 days</option><option value="custom">Custom range</option></select></label>
      {v.isCustom ? (
      <>
      <label className="wl-f"><span>From</span><input type="date" value={v.dFrom} max={v.dTo} onChange={v.onFrom} /></label>
      <label className="wl-f"><span>To</span><input type="date" value={v.dTo} min={v.dFrom} onChange={v.onTo} /></label>
      </>
      ) : null}
      <button className="wl-reset" type="button" onClick={v.resetAll} disabled={v.noFilters}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 12a8 8 0 1 1-2.3-5.6M20 4v5h-5" /></svg>Reset</button>
      </div>
      {v.hasChips ? (
      <>
      <div className="wl-chips" aria-label="Active filters">
      {(v.chips || []).map((c, __i8) => (
      <React.Fragment key={__i8}>
      <button className="wl-chip" type="button" onClick={c.clear} aria-label={`Remove filter ${c.label ?? ""}`}>{c.label}<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" aria-hidden="true"><path d="M7 7l10 10M17 7L7 17" /></svg></button>
      </React.Fragment>
      ))}
      </div>
      </>
      ) : null}
      </section>
      <section className="wl-card wl-res" aria-labelledby="res-h">
      <div className="wl-card-h"><h2 id="res-h">Transactions</h2><span className="wl-count-txt" role="status">{v.resultText}</span></div>
      {v.isLoading ? (
      <>
      <div className="wl-skel-rows" aria-hidden="true">
      <div><i className="wl-sk sq" /><span className="wl-sk-col"><i className="wl-sk w50" /><i className="wl-sk w30" /></span><i className="wl-sk w15" /><i className="wl-sk w15" /><i className="wl-sk w10" /></div>
      <div><i className="wl-sk sq" /><span className="wl-sk-col"><i className="wl-sk w60" /><i className="wl-sk w40" /></span><i className="wl-sk w15" /><i className="wl-sk w15" /><i className="wl-sk w10" /></div>
      <div><i className="wl-sk sq" /><span className="wl-sk-col"><i className="wl-sk w40" /><i className="wl-sk w30" /></span><i className="wl-sk w15" /><i className="wl-sk w15" /><i className="wl-sk w10" /></div>
      <div><i className="wl-sk sq" /><span className="wl-sk-col"><i className="wl-sk w70" /><i className="wl-sk w40" /></span><i className="wl-sk w15" /><i className="wl-sk w15" /><i className="wl-sk w10" /></div>
      <div><i className="wl-sk sq" /><span className="wl-sk-col"><i className="wl-sk w50" /><i className="wl-sk w30" /></span><i className="wl-sk w15" /><i className="wl-sk w15" /><i className="wl-sk w10" /></div>
      <div><i className="wl-sk sq" /><span className="wl-sk-col"><i className="wl-sk w60" /><i className="wl-sk w40" /></span><i className="wl-sk w15" /><i className="wl-sk w15" /><i className="wl-sk w10" /></div>
      </div>
      </>
      ) : null}
      {v.histEmpty ? (
      <>
      <div className="wl-empty">
      <img src="/assets/37a67bd426a2bc0f357af02198d57f48.png" alt="" />
      <h3>No transactions yet</h3>
      <p>When you buy coins, collect rewards or redeem SC, every transaction will be listed here.</p>
      <a className="wl-btn is-gold" href={v.nBuy}>Buy SC</a>
      </div>
      </>
      ) : null}
      {v.noResults ? (
      <>
      <div className="wl-empty is-search">
      <span className="wl-empty-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true"><circle cx="11" cy="11" r="6.5" /><path d="M16 16l4 4M8.5 8.5l5 5M13.5 8.5l-5 5" /></svg></span>
      <h3>No matching transactions</h3>
      <p>{v.noResultsText}</p>
      <button className="wl-btn is-ghost" type="button" onClick={v.resetAll}>Clear search &amp; filters</button>
      </div>
      </>
      ) : null}
      {v.hasRows ? (
      <>
      <div className="wl-table-wrap">
      <table className="wl-table">
      <thead><tr><th scope="col">Date</th><th scope="col">Transaction ID</th><th scope="col">Description</th><th scope="col">Type</th><th scope="col" className="is-num">GC</th><th scope="col" className="is-num">SC</th><th scope="col">Status</th><th scope="col"><span className="lp-sr">Details</span></th></tr></thead>
      <tbody>
      {(v.rows || []).map((t, __i10) => (
      <React.Fragment key={__i10}>
      <tr className={t.rowCls} onClick={t.open}>
      <td><span className="wl-d">{t.date}</span><small>{t.time}</small></td>
      <td><code>{t.id}</code></td>
      <td className="wl-td-desc"><span className={`wl-tic ${t.typeCls ?? ""}`} aria-hidden="true"><i /></span><span><b>{t.desc}</b><small>{t.sub}</small></span></td>
      <td>{t.typeLabel}</td>
      <td className="is-num"><span className={`wl-amt ${t.gcCls ?? ""}`}>{t.gcTxt}</span></td>
      <td className="is-num"><span className={`wl-amt ${t.scCls ?? ""}`}>{t.scTxt}</span></td>
      <td><span className={t.pill}>{t.statusLabel}</span></td>
      <td className="is-act"><button className="wl-row-btn" type="button" aria-label={t.aria}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 6l6 6-6 6" /></svg></button></td>
      </tr>
      </React.Fragment>
      ))}
      </tbody>
      </table>
      </div>
      <ul className="wl-cards">
      {(v.rows || []).map((t, __i8) => (
      <React.Fragment key={__i8}>
      <li><button className={`wl-tc ${t.rowCls ?? ""}`} type="button" aria-label={t.aria} onClick={t.open}>
      <span className="wl-tc-top"><span className={`wl-tic ${t.typeCls ?? ""}`} aria-hidden="true"><i /></span><span className="wl-tc-what"><b>{t.desc}</b><small>{t.date} · {t.time}</small></span><span className={t.pill}>{t.statusLabel}</span></span>
      <span className="wl-tc-bot"><span className="wl-tc-meta"><code>{t.id}</code><small>{t.typeLabel}</small></span><span className="wl-tc-amts"><span className={`wl-amt ${t.gcCls ?? ""}`}>{t.gcFull}</span><span className={`wl-amt ${t.scCls ?? ""}`}>{t.scFull}</span></span></span>
      </button></li>
      </React.Fragment>
      ))}
      </ul>
      <nav className="wl-pager" aria-label="Transaction pages">
      <span className="wl-pager-txt">{v.rangeText}</span>
      <div className="wl-pages">
      <button type="button" aria-label="Previous page" disabled={v.prevDis} onClick={v.prev}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 6l-6 6 6 6" /></svg></button>
      {(v.pages || []).map((p, __i9) => (
      <React.Fragment key={__i9}>
      <button type="button" aria-current={p.cur} aria-label={`Page ${p.n ?? ""}`} onClick={p.pick}>{p.n}</button>
      </React.Fragment>
      ))}
      <button type="button" aria-label="Next page" disabled={v.nextDis} onClick={v.next}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 6l6 6-6 6" /></svg></button>
      </div>
      </nav>
      </>
      ) : null}
      </section>
      </div>
      </>
      ) : null}
      </main>
  );
}
