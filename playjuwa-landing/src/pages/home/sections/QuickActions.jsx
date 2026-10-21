import React from 'react';

export default function QuickActions({ v }) {
  return (
    <nav className="lp-qa" aria-label="Quick actions">
      <div className="lp-qa-cell"><a className="lp-qa-btn is-deposit" href={v.nBuy} onClick={v.askWallet}><img className="lp-qa-art" src="/assets/dbc51d031b09a9cdc4a788d2f66697ef.png" alt="" /><span className="lp-qa-label"><b>Deposit</b><small>Add funds to your wallet</small></span><span className="lp-qa-go" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span></a></div>
      <div className="lp-qa-cell"><a className="lp-qa-btn is-withdraw" href={v.nWithdraw} onClick={v.askWallet}><img className="lp-qa-art" src="/assets/38ea820f3e7de32d885d17a01e38ea64.png" alt="" /><span className="lp-qa-label"><b>Withdraw</b><small>Get your winnings</small></span><span className="lp-qa-go" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span></a></div>
      <div className="lp-qa-cell"><a className="lp-qa-btn is-vip" href="#vip"><span className="lp-qa-hot">Hot</span><img className="lp-qa-art" src="/assets/8fea50ee59cae7582ca9e527e06f5c10.png" alt="" /><span className="lp-qa-label"><b>VIP Games</b><small>Exclusive VIP rewards</small></span><span className="lp-qa-go" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span></a></div>
      <div className="lp-qa-cell"><a className="lp-qa-btn is-download" href="#install"><img className="lp-qa-art" src="/assets/69537f4e28e82493c3821c57446f4ad1.png" alt="" /><span className="lp-qa-label"><b>Download</b><small>Play on your device</small></span><span className="lp-qa-go" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span></a></div>
      </nav>
  );
}
