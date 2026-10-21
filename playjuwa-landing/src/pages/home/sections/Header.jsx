import React from 'react';
import { Button } from '../../../components/ds.jsx';

export default function Header({ v }) {
  return (
    <header className="lp-header" onKeyDown={v.onNavKey}>
      <div className="lp-wrap">
      <div className="lp-header-bar">
      <a className="lp-logo" href="#top" aria-label="PlayJuwa home"><img src="/assets/9048a242fcde0c3b392353f435007399.png" alt="PlayJuwa" /></a>
      <div className="nv-right" style={{ marginLeft: "auto" }}>
      <a className="nv-icon-btn nv-search" href={v.nCasino} aria-label="Search games"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true"><circle cx="11" cy="11" r="6.5" /><path d="M16 16l4 4" /></svg><span className="nv-search-ph" aria-hidden="true">Search games, providers…</span></a>
      {v.loggedOut ? (
      <>
      <Button variant="outline" size="sm" href="#login">Login</Button>
      <Button variant="primary" size="sm" href="#signup">Sign Up</Button>
      </>
      ) : null}
      {v.loggedIn ? (
      <>
      <div className="pj-wal" role="group" aria-label="Your wallets">
      <a className="pj-wal-pill is-gc" href={v.nWallet} aria-label={`Gold Coins wallet: ${v.balGc ?? ""} GC`}><img src="data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2032%2032%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22a%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%220%22%20y2%3D%221%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22%23fff1a6%22/%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23e39400%22/%3E%3C/linearGradient%3E%3C/defs%3E%3Ccircle%20cx%3D%2216%22%20cy%3D%2216%22%20r%3D%2215%22%20fill%3D%22url%28%23a%29%22%20stroke%3D%22%23a15c00%22%20stroke-width%3D%221.5%22/%3E%3Ccircle%20cx%3D%2216%22%20cy%3D%2216%22%20r%3D%2211%22%20fill%3D%22none%22%20stroke%3D%22%23fff%22%20stroke-opacity%3D%22.45%22%20stroke-width%3D%221.2%22/%3E%3Ctext%20x%3D%2216%22%20y%3D%2221.5%22%20text-anchor%3D%22middle%22%20font-family%3D%22Arial%20Black%2CArial%2Csans-serif%22%20font-weight%3D%22900%22%20font-size%3D%2215%22%20fill%3D%22%237a3e00%22%3EG%3C/text%3E%3C/svg%3E" alt="" /><span className="pj-wal-v">{v.balGc}</span><span className="pj-wal-t">GC</span></a>
      <a className="pj-wal-pill is-sc" href={v.nWallet} aria-label={`Sweeps Coins wallet: ${v.balSc ?? ""} SC`}><img src="data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2032%2032%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22a%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%220%22%20y2%3D%221%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22%2386efac%22/%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%2316a34a%22/%3E%3C/linearGradient%3E%3C/defs%3E%3Ccircle%20cx%3D%2216%22%20cy%3D%2216%22%20r%3D%2215%22%20fill%3D%22url%28%23a%29%22%20stroke%3D%22%23065f46%22%20stroke-width%3D%221.5%22/%3E%3Ccircle%20cx%3D%2216%22%20cy%3D%2216%22%20r%3D%2211%22%20fill%3D%22none%22%20stroke%3D%22%23fff%22%20stroke-opacity%3D%22.45%22%20stroke-width%3D%221.2%22/%3E%3Ctext%20x%3D%2216%22%20y%3D%2221.5%22%20text-anchor%3D%22middle%22%20font-family%3D%22Arial%20Black%2CArial%2Csans-serif%22%20font-weight%3D%22900%22%20font-size%3D%2215%22%20fill%3D%22%23053d22%22%3ES%3C/text%3E%3C/svg%3E" alt="" /><span className="pj-wal-v">{v.balSc}</span><span className="pj-wal-t">SC</span></a>
      <a className="pj-wal-add" href={v.nBuy} aria-label="Buy coins"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14" /></svg></a>
      </div>
      </>
      ) : null}
      <a className="nv-icon-btn nv-gift" href="#promotions" aria-label="Promotions, new rewards available" onClick={v.pickPromo}><svg viewBox="0 0 32 32" aria-hidden="true"><defs><linearGradient id="nv-gift-g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#c4b5fd" /><stop offset="1" stopColor="#7c3aed" /></linearGradient></defs><rect x="5" y="13" width="22" height="15" rx="3" fill="url(#nv-gift-g)" /><rect x="3" y="9" width="26" height="6" rx="2" fill="#a78bfa" /><rect x="14" y="9" width="4" height="19" fill="#ffd21f" /><path d="M16 9c-2-4-7-5-7-2s5 2 7 2zm0 0c2-4 7-5 7-2s-5 2-7 2z" fill="#ffd21f" /></svg><span className="nv-dot" aria-hidden="true" /></a>
      <button className="nv-menu-btn" type="button" aria-expanded={v.menuOpen} aria-controls="nv-panel" onClick={v.toggleMenu}>
      <svg className="nv-bars" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true"><rect x="4" y="4" width="6.5" height="6.5" rx="2" /><rect x="13.5" y="4" width="6.5" height="6.5" rx="2" /><rect x="4" y="13.5" width="6.5" height="6.5" rx="2" /><rect x="13.5" y="13.5" width="6.5" height="6.5" rx="2" /></svg>
      <span className="nv-menu-label">Menu</span>
      </button>
      </div>
      </div>
      <button className={`nv-backdrop ${v.menuCls ?? ""}`} type="button" tabIndex="-1" aria-label="Close menu" onClick={v.closeMenu} />
      <div className={`nv-panel ${v.menuCls ?? ""}`} id="nv-panel" ref={v.panelRef} role="dialog" aria-modal={v.menuOpen} aria-label="PlayJuwa menu">
      <div className="nv-panel-top">
      <div className="nv-panel-head">
      <b>Menu</b>
      <button className="nv-close" type="button" aria-label="Close menu" onClick={v.closeMenu}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" /></svg></button>
      </div>
      <div className="nv-auth">
      <Button variant="outline" href="#login">Login</Button>
      <Button variant="primary" href="#signup">Sign Up</Button>
      </div>
      </div>
      <div className="nv-sd">
      <nav className="lp-sd-nav">
      <h3 className="lp-sd-h">Lobby</h3>
      <a className="lp-sd-link" href="#platforms" aria-current={v.sdPlat.cur} onClick={v.sdPlat.pick}><span className="lp-sd-ic t-gold" aria-hidden="true"><span className="nv-ic ic-platforms" /></span><span className="lp-sd-label">Platforms</span></a>
      <button className="lp-sd-link" type="button" aria-expanded={v.sdCasinoOpen} aria-controls="nv-sd-casino" onClick={v.sdCasinoToggle}><span className="lp-sd-ic t-violet" aria-hidden="true"><span className="nv-ic ic-casino" /></span><span className="lp-sd-label">Casino</span><span className="lp-sd-chev"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6" /></svg></span></button>
      {v.sdCasinoShow ? (
      <>
      <div className="lp-sd-sub" id="nv-sd-casino">
      {(v.sdCasinoSub || []).map((c, __i9) => (
      <React.Fragment key={__i9}><a href={v.nCasino} onClick={c.pick}>{c.label}</a></React.Fragment>
      ))}
      </div>
      </>
      ) : null}
      <h3 className="lp-sd-h">Menu</h3>
      {(v.sdMenu || []).map((it, __i7) => (
      <React.Fragment key={__i7}>
      <a className="lp-sd-link" href={it.href} aria-current={it.cur} onClick={it.pick}><span className={`lp-sd-ic ${it.tone ?? ""}`} aria-hidden="true"><span className={`nv-ic ic-${it.icon ?? ""}`} /></span><span className="lp-sd-label">{it.label}</span>{it.badge ? (
      <><span className="lp-sd-badge">{it.badge}</span></>
      ) : null}</a>
      </React.Fragment>
      ))}
      <hr className="lp-sd-rule" />
      {(v.sdHelp || []).map((it, __i7) => (
      <React.Fragment key={__i7}>
      <a className="lp-sd-link" href={it.href} aria-current={it.cur} onClick={it.pick}><span className={`lp-sd-ic ${it.tone ?? ""}`} aria-hidden="true"><span className={`nv-ic ic-${it.icon ?? ""}`} /></span><span className="lp-sd-label">{it.label}</span>{it.badge ? (
      <><span className="lp-sd-badge">{it.badge}</span></>
      ) : null}</a>
      </React.Fragment>
      ))}
      </nav>
      <div className="lp-sb-foot">
      <a className="lp-sb-banner" href="#spin" onClick={v.sbSpin} aria-label="Daily rewards: spin the wheel. Spin now">
      <img src="/assets/20eb22d655df983fd0ead079aad2c923.jpg" alt="" />
      <span className="lp-sb-bcopy"><span className="lp-sb-pill"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3 8l4.5 4 4.5-7 4.5 7L21 8l-2 11H5z" /></svg>Daily Rewards</span><b>Spin the <span className="pj-text-gold">Wheel</span></b><i>Spin Now →</i></span>
      </a>
      <div className="lp-sb-row">
      <div className="lp-sb-socs"><a className="lp-sb-soc is-tiktok" href="#tiktok" aria-label="PlayJuwa on TikTok"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16.5 3c.4 2.2 1.8 3.7 4 4v3.1c-1.5 0-2.9-.4-4-1.2V15a6 6 0 1 1-6-6v3.2a2.8 2.8 0 1 0 2.8 2.8V3z" /></svg></a><a className="lp-sb-soc is-instagram" href="#instagram" aria-label="PlayJuwa on Instagram"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7.5 3h9A4.5 4.5 0 0 1 21 7.5v9a4.5 4.5 0 0 1-4.5 4.5h-9A4.5 4.5 0 0 1 3 16.5v-9A4.5 4.5 0 0 1 7.5 3zm0 2A2.5 2.5 0 0 0 5 7.5v9A2.5 2.5 0 0 0 7.5 19h9a2.5 2.5 0 0 0 2.5-2.5v-9A2.5 2.5 0 0 0 16.5 5zM12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm4.8-3.6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" /></svg></a><a className="lp-sb-soc is-youtube" href="#youtube" aria-label="PlayJuwa on YouTube"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21.6 7.2a2.7 2.7 0 0 0-1.9-1.9C18 4.8 12 4.8 12 4.8s-6 0-7.7.5a2.7 2.7 0 0 0-1.9 1.9C2 8.9 2 12 2 12s0 3.1.4 4.8a2.7 2.7 0 0 0 1.9 1.9c1.7.5 7.7.5 7.7.5s6 0 7.7-.5a2.7 2.7 0 0 0 1.9-1.9c.4-1.7.4-4.8.4-4.8s0-3.1-.4-4.8zM10 15.2V8.8l5.2 3.2z" /></svg></a><a className="lp-sb-soc is-telegram" href="#telegram" aria-label="PlayJuwa on Telegram"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21.4 4.3 18.3 19c-.2 1-.8 1.3-1.7.8l-4.6-3.4-2.2 2.1c-.2.2-.5.4-1 .4l.3-4.7 8.6-7.8c.4-.3-.1-.5-.6-.2L6.5 12.9 2 11.5c-1-.3-1-1 .2-1.5l17.7-6.8c.8-.3 1.6.2 1.5 1.1z" /></svg></a><a className="lp-sb-soc is-facebook" href="#facebook" aria-label="PlayJuwa on Facebook"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M14 8.5V6.8c0-.8.5-1 .9-1h2.6V2.1L14.3 2C10.9 2 10.1 4.6 10.1 6.2v2.3H8v3.8h2.1V22H14v-9.7h3l.4-3.8z" /></svg></a></div>
      <span className="lp-sb-div" aria-hidden="true" />
      <button className="lp-sb-sound" type="button" aria-pressed={v.soundOn} aria-label={v.soundLabel} onClick={v.toggleSound}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z" /><path className="lp-sb-on" d="M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11" /><path className="lp-sb-off" d="M16 9.5l5 5M21 9.5l-5 5" /></svg></button>
      </div>
      <a className="lp-sb-chat" href="#support"><span className="lp-sb-chat-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 5h16v11H9l-5 4z" /><path d="M8 9.5h8M8 12.5h5" /></svg></span><span><b>Chat Support</b><small>We’re here to help you</small></span><em>24/7</em><svg className="lp-sb-go" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 6l6 6-6 6" /></svg></a>
      </div>
      </div>
      </div>
      </div>
      </header>
  );
}
