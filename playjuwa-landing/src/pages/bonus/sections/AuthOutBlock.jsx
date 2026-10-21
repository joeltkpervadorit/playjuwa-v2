import React from 'react';

export default function AuthOutBlock({ v }) {
  return (
    <>{v.authOut ? (
      <>
      <section className="rw-cta" aria-labelledby="rw-cta-h">
      <div><h2 id="rw-cta-h">Ready to claim?</h2>
      <p>Create a free account in seconds — no purchase needed to unlock your welcome bonus.</p></div>
      <a className="pj-btn pj-btn-primary pj-btn-lg" href={v.nSignup}>Sign Up Free</a>
      </section>
      </>
    ) : null}</>
  );
}
