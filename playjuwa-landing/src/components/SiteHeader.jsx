import React from 'react';
import { Button } from './ds.jsx';
import { useSession } from '../lib/session.js';

function WalletPill({ type, balance, label }) {
  return (
    <a className={`pj-wal-pill is-${type}`} href="/wallet" aria-label={`${label}: ${balance}`}>
      <span className="pj-header-coin" aria-hidden="true">{type === 'gc' ? 'G' : 'S'}</span>
      <span className="pj-wal-v">{balance}</span>
      <span className="pj-wal-t">{type.toUpperCase()}</span>
    </a>
  );
}

export default function SiteHeader() {
  const { auth, balSc, balGc } = useSession();
  const loggedIn = auth === 'in';

  return (
    <header className="by-top pj-site-header">
      <a className="by-logo" href="/" aria-label="PlayJuwa home">
        <img src="/assets/9048a242fcde0c3b392353f435007399.png" alt="PlayJuwa" />
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
            <div className="pj-wal" role="group" aria-label="Your wallets">
              <WalletPill type="gc" balance={balGc} label="Gold Coins balance" />
              <WalletPill type="sc" balance={balSc} label="Sweepstakes Coins balance" />
            </div>
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
      </div>
    </header>
  );
}
