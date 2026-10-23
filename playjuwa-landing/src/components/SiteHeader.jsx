import React, { useEffect, useRef, useState } from 'react';
import { Button } from './ds.jsx';
import { endTestSession, isTestLoginEnabled, useSession } from '../lib/session.js';
import '../styles/profile-menu.css';
import { setMenuOpen, useMenuOpen } from '../lib/navMenu.js';

const COINS = [
  { type: 'sc', label: 'Sweepstakes Coins' },
  { type: 'gc', label: 'Gold Coins' },
];

// Each page mounts its own header, so the chosen coin is kept outside the component
// to survive navigation instead of snapping back to GC.
let lastCoin = 'gc';

function MenuButton() {
  const open = useMenuOpen();
  return (
    <button
      className="nv-menu-btn pj-global-menu-btn"
      type="button"
      aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
      aria-expanded={open}
      aria-controls="pj-mobile-sidebar"
      onClick={() => setMenuOpen((value) => !value)}
    >
      <svg className="nv-bars" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
        <rect x="4" y="4" width="6.5" height="6.5" rx="2" />
        <rect x="13.5" y="4" width="6.5" height="6.5" rx="2" />
        <rect x="4" y="13.5" width="6.5" height="6.5" rx="2" />
        <rect x="13.5" y="13.5" width="6.5" height="6.5" rx="2" />
      </svg>
    </button>
  );
}

function CoinSelector({ balGc, balSc }) {
  const [active, setActiveState] = useState(lastCoin);
  const setActive = (type) => {
    lastCoin = type;
    setActiveState(type);
  };
  const balance = active === 'gc' ? balGc : balSc;
  const current = COINS.find((coin) => coin.type === active);

  return (
    <div className={`pj-wal is-${active}`} role="group" aria-label="Your wallets">
      <div className="pj-wal-toggle" role="radiogroup" aria-label="Choose coin">
        {COINS.map(({ type, label }) => (
          <button
            key={type}
            className={`pj-header-coin is-${type}`}
            type="button"
            role="radio"
            aria-checked={active === type}
            aria-label={label}
            onClick={() => setActive(type)}
          >
            {type.toUpperCase()}
          </button>
        ))}
      </div>
      <a className="pj-wal-bal" href="/wallet" aria-label={`${current.label} balance: ${balance}. Open wallet`}>
        <span className="pj-wal-v">{balance}</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </a>
    </div>
  );
}

const Icon = ({ children }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {children}
  </svg>
);

const MENU_GROUPS = [
  {
    title: 'Account',
    links: [
      { label: 'Profile', href: '/wallet', icon: <><circle cx="12" cy="8" r="4" /><path d="M4 20c1.5-4 4.5-6 8-6s6.5 2 8 6" /></> },
      { label: 'Wallet', href: '/wallet', icon: <><rect x="3" y="6" width="18" height="13" rx="3" /><path d="M16 12.5h2M3 10h18" /></> },
      { label: 'Transactions', href: '/wallet?view=history', icon: <><path d="M7 4v14M7 18l-3-3M7 18l3-3M17 20V6M17 6l-3 3M17 6l3 3" /></> },
      { label: 'Settings', href: '/wallet?view=settings', icon: <><circle cx="12" cy="12" r="3" /><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" /></> },
    ],
  },
  {
    title: 'Explore',
    links: [
      { label: 'Casino', href: '/casino', icon: <><rect x="4" y="4" width="16" height="16" rx="3" /><circle cx="9" cy="9" r="1" /><circle cx="15" cy="15" r="1" /></> },
      { label: 'Platforms', href: '/platforms', icon: <><rect x="3" y="5" width="18" height="12" rx="2" /><path d="M8 21h8" /></> },
      { label: 'Buy Coins', href: '/deposit', icon: <><circle cx="12" cy="12" r="8" /><path d="M12 8v8M8 12h8" /></> },
      { label: 'Promotions', href: '/bonus', icon: <><path d="M20 12v8H4v-8M2 7h20v5H2zM12 22V7M12 7c-3 0-4-4-1-4s2 4 1 4zM12 7c3 0 4-4 1-4s-2 4-1 4z" /></> },
      { label: 'Daily Spin', href: '/spinwheel', icon: <><circle cx="12" cy="12" r="8" /><path d="M12 4v8l5 3" /></> },
      { label: 'Support', href: '/chat', icon: <><path d="M4 5h16v11H9l-5 4z" /></> },
    ],
  },
];

function ProfileMenu() {
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    const onPointerDown = (event) => {
      if (rootRef.current && !rootRef.current.contains(event.target)) setOpen(false);
    };
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpen(false);
        rootRef.current?.querySelector('.by-ava')?.focus();
      }
    };
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  const logOut = () => {
    setOpen(false);
    if (isTestLoginEnabled()) endTestSession();
    window.location.assign('/');
  };

  return (
    <div className={`pj-pm${open ? ' is-open' : ''}`} ref={rootRef}>
      <button
        className="by-ava"
        type="button"
        aria-label="Account menu"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls="pj-profile-menu"
        onClick={() => setOpen((value) => !value)}
      >
        <b>J</b>
        <Icon><path d="M6 9l6 6 6-6" /></Icon>
      </button>
      <div className="pj-pm-panel" id="pj-profile-menu" role="menu" aria-hidden={!open} onClick={(event) => { if (event.target.closest('a[href]')) setOpen(false); }}>
        <div className="pj-pm-head">
          <b aria-hidden="true">J</b>
          <div>
            <span>My Account</span>
            <small>PlayJuwa Member</small>
          </div>
        </div>
        {MENU_GROUPS.map((group) => (
          <div className={`pj-pm-group${group.title === 'Explore' ? ' is-grid' : ''}`} key={group.title}>
            <div className="pj-pm-h">{group.title}</div>
            {group.links.map((link) => (
              <a className="pj-pm-link" role="menuitem" href={link.href} key={link.label}>
                <Icon>{link.icon}</Icon>
                {link.label}
              </a>
            ))}
          </div>
        ))}
        <button className="pj-pm-out" type="button" role="menuitem" onClick={logOut}>
          <Icon><path d="M9 4H5v16h4M16 8l4 4-4 4M20 12H9" /></Icon>
          Log Out
        </button>
      </div>
    </div>
  );
}

export default function SiteHeader() {
  const { auth, balSc, balGc } = useSession();
  const loggedIn = auth === 'in';

  return (
    <header className="by-top pj-site-header">
      <a className="by-logo" href="/" aria-label="PlayJuwa home">
        <img src="/assets/9048a242fcde0c3b392353f435007399.png" alt="PlayJuwa" width="480" height="240" decoding="async" fetchPriority="high" />
      </a>
      <a className="by-search" href="/casino#search" aria-label="Search games">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
          <circle cx="11" cy="11" r="6.5" />
          <path d="M16 16l4 4" />
        </svg>
        <span>Search games, providers…</span>
      </a>
      <div className="by-right pj-site-header-actions">
        {loggedIn ? (
          <>
            <CoinSelector balGc={balGc} balSc={balSc} />
            <a className="by-plus" href="/deposit" aria-label="Add funds">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" aria-hidden="true">
                <path d="M12 5v14M5 12h14" />
              </svg>
            </a>
            <button className="by-ic" type="button" aria-label="Notifications, 1 unread">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 3a6 6 0 0 0-6 6v3.6L4.3 15.4A1 1 0 0 0 5.2 17h13.6a1 1 0 0 0 .9-1.6L18 12.6V9a6 6 0 0 0-6-6zm0 18a2.5 2.5 0 0 0 2.4-2h-4.8A2.5 2.5 0 0 0 12 21z" />
              </svg>
              <i />
            </button>
            <ProfileMenu />
          </>
        ) : (
          <div className="pj-header-auth">
            <Button variant="primary" size="sm" href="/signup">Sign Up</Button>
            <Button variant="outline" size="sm" href="/login">Login</Button>
          </div>
        )}
        <MenuButton />
      </div>
    </header>
  );
}
