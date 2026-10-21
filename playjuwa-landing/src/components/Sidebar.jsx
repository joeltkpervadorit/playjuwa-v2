import React, { useState } from 'react';
import { ROUTES } from '../routes.js';

const lobbyItems = [
  { label: 'Platforms', icon: 'platforms', tone: 't-gold', href: ROUTES.nPlatforms },
  { label: 'Casino', icon: 'casino', tone: 't-violet', href: ROUTES.nCasino },
];

const menuItems = [
  { label: 'Daily Spin', icon: 'spin', tone: 't-cyan', href: ROUTES.nHome + '#spin' },
  { label: 'Daily Bonus', icon: 'gift', tone: 't-gold', href: ROUTES.nBonus, badge: 'Free' },
  { label: 'Promotions', icon: 'promo', tone: 't-orange', href: ROUTES.nBonus },
  { label: 'Referral', icon: 'referral', tone: 't-green', href: ROUTES.nHome + '#referral' },
  { label: 'VIP', icon: 'vip', tone: 't-gold', href: ROUTES.nHome + '#vip' },
  { label: 'Buy SC', icon: 'buy', tone: 't-green', href: ROUTES.nBuy },
  { label: 'Withdraw SC', icon: 'withdraw', tone: 't-red', href: ROUTES.nWithdraw },
  { label: 'Wallet', icon: 'wallet', tone: 't-violet', href: ROUTES.nWallet },
  { label: 'Transactions', icon: 'history', tone: 't-cyan', href: ROUTES.nTx },
];

const helpItems = [
  { label: 'How to play?', icon: 'play', tone: 't-cyan', href: ROUTES.nHome + '#how' },
  { label: 'Support', icon: 'support', tone: 't-cyan', href: ROUTES.nChat },
  { label: 'How to Install', icon: 'install', tone: 't-gold', href: ROUTES.nHome + '#install' },
  { label: 'Blog posts', icon: 'blog', tone: 't-violet', href: ROUTES.nBlog },
];

const casinoItems = ['All Casino Games', 'Slots', 'Live Casino', 'Fishing', 'Table Games'];

function NavigationLink({ item }) {
  return (
    <a className="lp-sd-link" href={item.href}>
      <span className={`lp-sd-ic ${item.tone}`} aria-hidden="true">
        <span className={`nv-ic ic-${item.icon}`} />
      </span>
      <span className="lp-sd-label">{item.label}</span>
      {item.badge ? <span className="lp-sd-badge">{item.badge}</span> : null}
    </a>
  );
}

export default function Sidebar({ v }) {
  const [casinoOpen, setCasinoOpen] = useState(false);
  const isLanding = Boolean(v.sdPlat);

  return (
    <aside className={`${isLanding ? 'lp-side' : 'by-side'} lp-sd pj-shared-sidebar`} aria-label="Main navigation">
      <a className={isLanding ? 'lp-side-logo' : 'by-side-logo'} href={ROUTES.nHome} aria-label="PlayJuwa home">
        <img src="/assets/9048a242fcde0c3b392353f435007399.png" alt="PlayJuwa" />
      </a>
      <nav className="lp-sd-nav">
        <h3 className="lp-sd-h">Lobby</h3>
        {lobbyItems.map((item) => (
          <React.Fragment key={item.label}>
            {item.label === 'Casino' ? (
              <button
                className="lp-sd-link"
                type="button"
                aria-expanded={casinoOpen}
                aria-controls="pj-sidebar-casino"
                onClick={() => setCasinoOpen((open) => !open)}
              >
                <span className={`lp-sd-ic ${item.tone}`} aria-hidden="true">
                  <span className={`nv-ic ic-${item.icon}`} />
                </span>
                <span className="lp-sd-label">{item.label}</span>
                <span className="lp-sd-chev" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
              </button>
            ) : <NavigationLink item={item} />}
          </React.Fragment>
        ))}
        {casinoOpen ? (
          <div className="lp-sd-sub cs-sub" id="pj-sidebar-casino">
            {casinoItems.map((label) => <a key={label} href={ROUTES.nCasino}>{label}</a>)}
          </div>
        ) : null}
        <h3 className="lp-sd-h">Menu</h3>
        {menuItems.map((item) => <NavigationLink key={item.label} item={item} />)}
        <hr className="lp-sd-rule" />
        {helpItems.map((item) => <NavigationLink key={item.label} item={item} />)}
      </nav>
      <div className="lp-sb-foot">
        <a className="lp-sb-banner" href={ROUTES.nHome + '#spin'} onClick={v.sbSpin} aria-label="Daily rewards: spin the wheel. Spin now">
          <img src="/assets/20eb22d655df983fd0ead079aad2c923.jpg" alt="" loading="lazy" decoding="async" />
          <span className="lp-sb-bcopy">
            <span className="lp-sb-pill">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3 8l4.5 4 4.5-7 4.5 7L21 8l-2 11H5z" /></svg>
              Daily Rewards
            </span>
            <b>Spin the <span className="pj-text-gold">Wheel</span></b>
            <i>Spin Now →</i>
          </span>
        </a>
        <div className="lp-sb-row">
          <div className="lp-sb-socs">
            <a className="lp-sb-soc is-tiktok" href="#tiktok" aria-label="PlayJuwa on TikTok"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16.5 3c.4 2.2 1.8 3.7 4 4v3.1c-1.5 0-2.9-.4-4-1.2V15a6 6 0 1 1-6-6v3.2a2.8 2.8 0 1 0 2.8 2.8V3z" /></svg></a>
            <a className="lp-sb-soc is-instagram" href="#instagram" aria-label="PlayJuwa on Instagram"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7.5 3h9A4.5 4.5 0 0 1 21 7.5v9a4.5 4.5 0 0 1-4.5 4.5h-9A4.5 4.5 0 0 1 3 16.5v-9A4.5 4.5 0 0 1 7.5 3zm0 2A2.5 2.5 0 0 0 5 7.5v9A2.5 2.5 0 0 0 7.5 19h9a2.5 2.5 0 0 0 2.5-2.5v-9A2.5 2.5 0 0 0 16.5 5zM12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm4.8-3.6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" /></svg></a>
            <a className="lp-sb-soc is-youtube" href="#youtube" aria-label="PlayJuwa on YouTube"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21.6 7.2a2.7 2.7 0 0 0-1.9-1.9C18 4.8 12 4.8 12 4.8s-6 0-7.7.5a2.7 2.7 0 0 0-1.9 1.9C2 8.9 2 12 2 12s0 3.1.4 4.8a2.7 2.7 0 0 0 1.9 1.9c1.7.5 7.7.5 7.7.5s6 0 7.7-.5a2.7 2.7 0 0 0 1.9-1.9c.4-1.7.4-4.8.4-4.8s0-3.1-.4-4.8zM10 15.2V8.8l5.2 3.2z" /></svg></a>
            <a className="lp-sb-soc is-telegram" href="#telegram" aria-label="PlayJuwa on Telegram"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21.4 4.3 18.3 19c-.2 1-.8 1.3-1.7.8l-4.6-3.4-2.2 2.1c-.2.2-.5.4-1 .4l.3-4.7 8.6-7.8c.4-.3-.1-.5-.6-.2L6.5 12.9 2 11.5c-1-.3-1-1 .2-1.5l17.7-6.8c.8-.3 1.6.2 1.5 1.1z" /></svg></a>
            <a className="lp-sb-soc is-facebook" href="#facebook" aria-label="PlayJuwa on Facebook"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M14 8.5V6.8c0-.8.5-1 .9-1h2.6V2.1L14.3 2C10.9 2 10.1 4.6 10.1 6.2v2.3H8v3.8h2.1V22H14v-9.7h3l.4-3.8z" /></svg></a>
          </div>
          <span className="lp-sb-div" aria-hidden="true" />
          <button className="lp-sb-sound" type="button" aria-pressed={v.soundOn} aria-label={v.soundLabel} onClick={v.toggleSound}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z" />
              <path className="lp-sb-on" d="M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11" />
              <path className="lp-sb-off" d="M16 9.5l5 5M21 9.5l-5 5" />
            </svg>
          </button>
        </div>
        <a className="lp-sb-chat" href={ROUTES.nChat}>
          <span className="lp-sb-chat-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 5h16v11H9l-5 4z" /><path d="M8 9.5h8M8 12.5h5" /></svg></span>
          <span><b>Chat Support</b><small>We’re here to help you</small></span>
          <em>24/7</em>
          <svg className="lp-sb-go" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 6l6 6-6 6" /></svg>
        </a>
      </div>
    </aside>
  );
}
