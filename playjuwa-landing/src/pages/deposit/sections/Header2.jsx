import React from 'react';

export default function Header2({ v }) {
  return (
    <header className="dp-head">
      <div className="dp-hero">
      <div className="dp-hero-txt">
      <span className="dp-eyebrow"><img src="/assets/edbab742e888b020a93dd88ac36e1531.png" alt="" />Wallet · Buy SC</span>
      <h1>Deposit</h1>
      <p>Add funds to your account and start playing.</p>
      </div>
      <img className="dp-hero-art" src="/assets/d1572a66fda661829704c1c2c3e5d3c7.webp" alt="" />
      </div>
      <ol className="dp-steps" aria-label="Deposit progress">
      {(v.steps || []).map((s, __i4) => (
      <React.Fragment key={__i4}><li className="dp-step" data-state={s.state} aria-current={s.cur}><span className="dp-step-n">{s.n}</span><span className="dp-step-l">{s.label}</span></li></React.Fragment>
      ))}
      </ol>
      </header>
  );
}
