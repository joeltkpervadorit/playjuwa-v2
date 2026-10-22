import React from 'react';

export default function SpinInfo({ v }) {
  return (
    <div className="sp-info">
      <section className="sp-card" aria-labelledby="sp-prz">
      <h3 id="sp-prz">Possible rewards</h3>
      <p>Every spin lands on one of these.</p>
      <ul className="sp-prizes">
      {(v.prizes || []).map((p, __i5) => (
      <React.Fragment key={__i5}><li>{p.label}</li></React.Fragment>
      ))}
      </ul>
      </section>
      <section className="sp-card" aria-labelledby="sp-how">
      <h3 id="sp-how">How it works</h3>
      <p>Free for every player, no purchase needed.</p>
      <ol className="sp-steps">
      <li>Tap the wheel or the spin button.</li>
      <li>Watch it land on your reward.</li>
      <li>Come back after 24 hours for your next free spin.</li>
      </ol>
      </section>
      </div>
  );
}
