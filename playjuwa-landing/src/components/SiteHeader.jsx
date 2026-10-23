import React, { useState } from 'react';
import { Button } from './ds.jsx';
import { useSession } from '../lib/session.js';
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
            <a className="by-ava" href="/wallet" aria-label="Profile and wallet">
              <b>J</b>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </a>
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
