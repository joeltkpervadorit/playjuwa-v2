import React from 'react';
import { Button } from '../../../components/ds.jsx';

export default function FinalSection({ v }) {
  return (
    <section className="lp-sec lp-final" aria-labelledby="final-title">
      <div className="lp-final-stage" aria-hidden="true"><div className="lp-fin-glow" /><div className="lp-fin-glow is-b" /><i className="lp-fin-spark f1" /><i className="lp-fin-spark f2" /><i className="lp-fin-spark f3" /><i className="lp-fin-spark f4" /><i className="lp-fin-spark f5" /><i className="lp-fin-spark f6" /><div className="lp-fin-girl"><img src="/assets/4e326e9950615abdbcd7ae0b493ebb8a.webp" alt="" /></div></div>
      <div className="lp-final-copy">
      <h2 id="final-title">One Account. <span className="pj-text-gold">20+ Platforms</span> + Instant Casino.</h2>
      <p>Get started with one account and explore the available games and platforms.</p>
      <Button variant="primary" size="lg" pill={v.yes} arrow={v.yes} href="#signup">Create Free Account</Button>
      </div>
      </section>
  );
}
