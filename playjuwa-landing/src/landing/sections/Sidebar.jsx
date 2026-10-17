import React from 'react';

export default function Sidebar({ v }) {
  return (
    <aside className="lp-side lp-sd" aria-label="Main navigation">
      <a className="lp-side-logo" href="#top" aria-label="PlayJuwa home"><img src="/assets/logo.png" alt="PlayJuwa" /></a>
      <nav className="lp-sd-nav">
      <h3 className="lp-sd-h">Lobby</h3>
      <a className="lp-sd-link" href="#platforms" aria-current={v.sdPlat.cur} onClick={v.sdPlat.pick}><span className="lp-sd-ic t-gold" aria-hidden="true"><span className="nv-ic ic-platforms" /></span><span className="lp-sd-label">Platforms</span></a>
      <button className="lp-sd-link" type="button" aria-expanded={v.sdCasinoOpen} aria-controls="lp-sd-casino" onClick={v.sdCasinoToggle}><span className="lp-sd-ic t-violet" aria-hidden="true"><span className="nv-ic ic-casino" /></span><span className="lp-sd-label">Casino</span><span className="lp-sd-chev"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6" /></svg></span></button>
      {v.sdCasinoShow ? (
      <>
      <div className="lp-sd-sub" id="lp-sd-casino">
      {(v.sdCasinoSub || []).map((c, __i6) => (
      <React.Fragment key={__i6}><a href={v.nCasino} onClick={c.pick}>{c.label}</a></React.Fragment>
      ))}
      </div>
      </>
      ) : null}
      <h3 className="lp-sd-h">Menu</h3>
      {(v.sdMenu || []).map((it, __i4) => (
      <React.Fragment key={__i4}>
      <a className="lp-sd-link" href={it.href} aria-current={it.cur} onClick={it.pick}><span className={`lp-sd-ic ${it.tone ?? ""}`} aria-hidden="true"><span className={`nv-ic ic-${it.icon ?? ""}`} /></span><span className="lp-sd-label">{it.label}</span>{it.badge ? (
      <><span className="lp-sd-badge">{it.badge}</span></>
      ) : null}</a>
      </React.Fragment>
      ))}
      <hr className="lp-sd-rule" />
      {(v.sdHelp || []).map((it, __i4) => (
      <React.Fragment key={__i4}>
      <a className="lp-sd-link" href={it.href} aria-current={it.cur} onClick={it.pick}><span className={`lp-sd-ic ${it.tone ?? ""}`} aria-hidden="true"><span className={`nv-ic ic-${it.icon ?? ""}`} /></span><span className="lp-sd-label">{it.label}</span>{it.badge ? (
      <><span className="lp-sd-badge">{it.badge}</span></>
      ) : null}</a>
      </React.Fragment>
      ))}
      </nav>
      <div className="lp-sb-foot">
      <a className="lp-sb-banner" href="#spin" onClick={v.sbSpin} aria-label="Daily rewards: spin the wheel. Spin now">
      <img src="/assets/sb-banner.jpg" alt="" />
      <span className="lp-sb-bcopy"><span className="lp-sb-pill"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3 8l4.5 4 4.5-7 4.5 7L21 8l-2 11H5z" /></svg>Daily Rewards</span><b>Spin the <span className="pj-text-gold">Wheel</span></b><i>Spin Now →</i></span>
      </a>
      <div className="lp-sb-row">
      <div className="lp-sb-socs"><a className="lp-sb-soc is-tiktok" href="#tiktok" aria-label="PlayJuwa on TikTok"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16.5 3c.4 2.2 1.8 3.7 4 4v3.1c-1.5 0-2.9-.4-4-1.2V15a6 6 0 1 1-6-6v3.2a2.8 2.8 0 1 0 2.8 2.8V3z" /></svg></a><a className="lp-sb-soc is-instagram" href="#instagram" aria-label="PlayJuwa on Instagram"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7.5 3h9A4.5 4.5 0 0 1 21 7.5v9a4.5 4.5 0 0 1-4.5 4.5h-9A4.5 4.5 0 0 1 3 16.5v-9A4.5 4.5 0 0 1 7.5 3zm0 2A2.5 2.5 0 0 0 5 7.5v9A2.5 2.5 0 0 0 7.5 19h9a2.5 2.5 0 0 0 2.5-2.5v-9A2.5 2.5 0 0 0 16.5 5zM12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm4.8-3.6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" /></svg></a><a className="lp-sb-soc is-youtube" href="#youtube" aria-label="PlayJuwa on YouTube"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21.6 7.2a2.7 2.7 0 0 0-1.9-1.9C18 4.8 12 4.8 12 4.8s-6 0-7.7.5a2.7 2.7 0 0 0-1.9 1.9C2 8.9 2 12 2 12s0 3.1.4 4.8a2.7 2.7 0 0 0 1.9 1.9c1.7.5 7.7.5 7.7.5s6 0 7.7-.5a2.7 2.7 0 0 0 1.9-1.9c.4-1.7.4-4.8.4-4.8s0-3.1-.4-4.8zM10 15.2V8.8l5.2 3.2z" /></svg></a><a className="lp-sb-soc is-telegram" href="#telegram" aria-label="PlayJuwa on Telegram"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21.4 4.3 18.3 19c-.2 1-.8 1.3-1.7.8l-4.6-3.4-2.2 2.1c-.2.2-.5.4-1 .4l.3-4.7 8.6-7.8c.4-.3-.1-.5-.6-.2L6.5 12.9 2 11.5c-1-.3-1-1 .2-1.5l17.7-6.8c.8-.3 1.6.2 1.5 1.1z" /></svg></a><a className="lp-sb-soc is-facebook" href="#facebook" aria-label="PlayJuwa on Facebook"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M14 8.5V6.8c0-.8.5-1 .9-1h2.6V2.1L14.3 2C10.9 2 10.1 4.6 10.1 6.2v2.3H8v3.8h2.1V22H14v-9.7h3l.4-3.8z" /></svg></a></div>
      <span className="lp-sb-div" aria-hidden="true" />
      <button className="lp-sb-sound" type="button" aria-pressed={v.soundOn} aria-label={v.soundLabel} onClick={v.toggleSound}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z" /><path className="lp-sb-on" d="M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11" /><path className="lp-sb-off" d="M16 9.5l5 5M21 9.5l-5 5" /></svg></button>
      </div>
      <a className="lp-sb-chat" href="#support"><span className="lp-sb-chat-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 5h16v11H9l-5 4z" /><path d="M8 9.5h8M8 12.5h5" /></svg></span><span><b>Chat Support</b><small>We’re here to help you</small></span><em>24/7</em><svg className="lp-sb-go" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 6l6 6-6 6" /></svg></a>
      </div>
      </aside>
  );
}
