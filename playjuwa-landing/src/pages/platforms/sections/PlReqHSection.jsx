import React from 'react';

export default function PlReqHSection({ v }) {
  return (
    <section className="pl-request" aria-labelledby="pl-req-h">
      <div><h2 id="pl-req-h">Don’t see your platform?</h2><p>Tell our team which platform you play — we add new ones every month.</p></div>
      <a className="pl-btn is-primary" href="#support">Request a platform</a>
      </section>
  );
}
