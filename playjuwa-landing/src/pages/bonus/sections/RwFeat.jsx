import React from 'react';
import { css } from '../css.js';

export default function RwFeat({ v }) {
  return (
    <div className="rw-feat">
      <section className="rw-lounge" id="vip" aria-labelledby="rw-lounge-h">
      <span className="rw-lounge-glow" aria-hidden="true" />
      <i className="rw-pt p1" aria-hidden="true" /><i className="rw-pt p3" aria-hidden="true" /><i className="rw-pt p5" aria-hidden="true" />
      <div className="rw-lounge-top">
      <div className="rw-lounge-txt">
      <span className="rw-eyebrow">VIP Rewards</span>
      <h2 id="rw-lounge-h">Bonus <span className="pj-text-gold">Lounge</span></h2>
      <p>{v.loungeSub}</p>
      </div>
      <span className="rw-lounge-crown" aria-hidden="true"><img src={v.vipIcon} alt="" /></span>
      </div>
      <div className="rw-ladder">
      <div className="rw-ladder-h"><b>{v.loungeTitle}</b><span>{v.loungeMeta}</span></div>
      <div className="rw-ladder-track" role="img" aria-label={v.loungeAria}>
      <span className="rw-ladder-line" aria-hidden="true"><span className="rw-ladder-fill" style={css(v.loungeFill)} /></span>
      <ol>
      {(v.ladder || []).map((t, __i7) => (
      <React.Fragment key={__i7}><li className={`rw-rung is-${t.key ?? ""}`} data-state={t.state}>{t.cur ? (
      <><em>You</em></>
      ) : null}<i aria-hidden="true" /><span>{t.label}</span></li></React.Fragment>
      ))}
      </ol>
      </div>
      <p className="rw-ladder-perk"><img src={v.coinbackIcon} alt="" aria-hidden="true" /><span><b>CoinBack</b> unlocks at Platinum</span></p>
      </div>
      <a className="pj-btn pj-btn-primary rw-lounge-cta" href={v.loungeHref}>{v.loungeCta}<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg></a>
      </section>
      <section className="rw-tour" id="tournament" aria-labelledby="rw-tour-h">
      <span className="rw-tour-rays" aria-hidden="true" />
      <span className="rw-tour-glow" aria-hidden="true" />
      <span className="rw-tour-embers" aria-hidden="true"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></span>
      <div className="rw-tour-copy">
      <span className="rw-tour-tag"><i aria-hidden="true" />Tournament</span>
      <h2 id="rw-tour-h"><span className="pj-text-gold">Coming soon</span></h2>
      <p className="rw-tour-sub">Get ready to compete!</p>
      <ul className="rw-tour-list">
      <li><span aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 4 14h6l-1 8 9-12h-6z" /></svg></span>Exciting challenges</li>
      <li><span aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="8" width="18" height="13" rx="2" /><path d="M12 8v13M3 12h18M12 8c-2-4-6-4-6-1.5S9 8 12 8zm0 0c2-4 6-4 6-1.5S15 8 12 8z" /></svg></span>Amazing rewards</li>
      <li><span aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20V12M10 20V6M16 20v-9M22 20H2" /></svg></span>Top rankings</li>
      </ul>
      </div>
      <span className="rw-tour-art" aria-hidden="true"><span className="rw-tour-aura" /><span className="rw-tour-flame f1" /><span className="rw-tour-flame f2" /><span className="rw-tour-flame f3" /><span className="rw-tour-beams" /><svg className="rw-trophy" viewBox="0 0 160 180"><defs><linearGradient id="rwTgH" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#9a5200" /><stop offset=".28" stopColor="#f7b500" /><stop offset=".46" stopColor="#fff4b8" /><stop offset=".6" stopColor="#ffd23a" /><stop offset=".85" stopColor="#d98a00" /><stop offset="1" stopColor="#8a4600" /></linearGradient><linearGradient id="rwTgV" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#fff6c8" /><stop offset=".5" stopColor="#ffc21a" /><stop offset="1" stopColor="#b86400" /></linearGradient><linearGradient id="rwTgB" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#5a2a12" /><stop offset="1" stopColor="#2a1006" /></linearGradient><radialGradient id="rwTgS" cx="50%" cy="50%" r="50%"><stop offset="0" stopColor="#ffffff" /><stop offset=".6" stopColor="#fff3b0" /><stop offset="1" stopColor="#ffd34d" /></radialGradient><clipPath id="rwTcup"><path d="M38 26h84v30c0 30-19 51-42 55-23-4-42-25-42-55z" /></clipPath></defs><g className="rw-tr-laurel" fill="#e9a300" stroke="#8a4a00" strokeWidth=".8"><ellipse cx="26" cy="118" rx="5" ry="10" transform="rotate(-35 26 118)" /><ellipse cx="20" cy="100" rx="4.5" ry="9" transform="rotate(-15 20 100)" /><ellipse cx="19" cy="82" rx="4" ry="8" transform="rotate(5 19 82)" /><ellipse cx="38" cy="132" rx="5" ry="9" transform="rotate(-62 38 132)" /><ellipse cx="134" cy="118" rx="5" ry="10" transform="rotate(35 134 118)" /><ellipse cx="140" cy="100" rx="4.5" ry="9" transform="rotate(15 140 100)" /><ellipse cx="141" cy="82" rx="4" ry="8" transform="rotate(-5 141 82)" /><ellipse cx="122" cy="132" rx="5" ry="9" transform="rotate(62 122 132)" /></g><path d="M40 36H22c0 20 9 31 24 34M120 36h18c0 20-9 31-24 34" fill="none" stroke="#8a4600" strokeWidth="10" strokeLinecap="round" /><path d="M40 36H22c0 20 9 31 24 34M120 36h18c0 20-9 31-24 34" fill="none" stroke="url(#rwTgV)" strokeWidth="6.5" strokeLinecap="round" /><path d="M38 26h84v30c0 30-19 51-42 55-23-4-42-25-42-55z" fill="url(#rwTgH)" stroke="#8a4600" strokeWidth="2" /><g clipPath="url(#rwTcup)"><path d="M50 30c-3 26 4 48 20 62" stroke="#fff" strokeOpacity=".55" strokeWidth="5" fill="none" strokeLinecap="round" /><rect className="rw-tr-shine" x="-40" y="10" width="22" height="120" fill="#fff" opacity=".55" transform="skewX(-20)" /></g><ellipse cx="80" cy="26" rx="42" ry="7" fill="url(#rwTgV)" stroke="#8a4600" strokeWidth="2" /><ellipse cx="80" cy="26" rx="34" ry="4" fill="#b86400" opacity=".55" /><circle cx="80" cy="60" r="17" fill="#8a4600" opacity=".35" /><circle cx="80" cy="58" r="16" fill="url(#rwTgS)" stroke="#c77700" strokeWidth="1.5" /><path className="rw-tr-star" d="M80 46l3.8 7.7 8.5 1.2-6.2 6 1.5 8.4L80 65.3l-7.6 4 1.5-8.4-6.2-6 8.5-1.2z" fill="#f59e0b" stroke="#a15c00" strokeWidth="1" /><path d="M72 108h16l-2 16h-12z" fill="url(#rwTgH)" stroke="#8a4600" strokeWidth="1.6" /><ellipse cx="80" cy="110" rx="12" ry="4" fill="url(#rwTgV)" stroke="#8a4600" strokeWidth="1.4" /><path d="M58 124h44l6 14H52z" fill="url(#rwTgH)" stroke="#8a4600" strokeWidth="1.8" /><rect x="44" y="138" width="72" height="26" rx="5" fill="url(#rwTgB)" stroke="#1a0904" strokeWidth="1.5" /><rect x="58" y="144" width="44" height="13" rx="3" fill="url(#rwTgV)" stroke="#8a4600" strokeWidth="1" /><path d="M64 150.5h32" stroke="#8a4600" strokeWidth="1.6" strokeLinecap="round" opacity=".7" /><circle cx="50" cy="151" r="3" fill="#a855f7" stroke="#e9d5ff" strokeWidth=".8" /><circle cx="110" cy="151" r="3" fill="#a855f7" stroke="#e9d5ff" strokeWidth=".8" /></svg><i className="rw-tour-spk k1" /><i className="rw-tour-spk k2" /><i className="rw-tour-spk k3" /><i className="rw-tour-spk k4" /><i className="rw-tour-spk k5" /></span>
      </section>
      </div>
  );
}
