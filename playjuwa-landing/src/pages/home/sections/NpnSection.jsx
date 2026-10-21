import React from 'react';
import { Button } from '../../../components/ds.jsx';

export default function NpnSection({ v }) {
  return (
    <section className="lp-sec lp-npn" aria-labelledby="npn-title">
      <div className="lp-npn-stage" aria-hidden="true">
      <div className="lp-npn-glow" />
      <svg className="lp-npn-waves" viewBox="0 0 400 240" preserveAspectRatio="none"><defs><linearGradient id="npn-w1" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#7c3aed" stopOpacity="0" /><stop offset=".45" stopColor="#c084fc" /><stop offset="1" stopColor="#ffb800" stopOpacity="0" /></linearGradient><linearGradient id="npn-w2" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#ffb800" stopOpacity="0" /><stop offset=".55" stopColor="#ffd21f" /><stop offset="1" stopColor="#a855f7" stopOpacity="0" /></linearGradient></defs><path className="w1" d="M-10 150 C60 110 120 190 200 150 S330 105 410 145" stroke="url(#npn-w1)" /><path className="w2" d="M-10 175 C70 140 140 210 210 170 S340 135 410 168" stroke="url(#npn-w2)" /><path className="w3" d="M-10 120 C80 90 150 160 220 125 S340 85 410 118" stroke="url(#npn-w1)" /></svg>
      <i className="lp-npn-spark s1" /><i className="lp-npn-spark s2" /><i className="lp-npn-spark s3" /><i className="lp-npn-spark s4" /><i className="lp-npn-spark s5" /><i className="lp-npn-spark s6" /><i className="lp-npn-spark s7" /><i className="lp-npn-spark s8" />
      <div className="lp-npn-slot"><img src="/assets/e5a35fe9e31e5958bb10fb5273e0e3de.webp" alt="" /></div>
      </div>
      <svg className="lp-npn-trails" viewBox="0 0 600 200" preserveAspectRatio="none" aria-hidden="true"><defs><linearGradient id="npn-t1" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#a855f7" stopOpacity="0" /><stop offset=".5" stopColor="#c084fc" /><stop offset="1" stopColor="#ffb800" stopOpacity=".9" /></linearGradient><linearGradient id="npn-t2" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#7c3aed" stopOpacity="0" /><stop offset="1" stopColor="#a855f7" /></linearGradient></defs><path d="M0 170 C150 150 260 200 380 160 S540 120 600 135" fill="none" stroke="url(#npn-t1)" strokeWidth="2" /><path d="M40 190 C180 165 300 205 420 175 S560 150 600 160" fill="none" stroke="url(#npn-t2)" strokeWidth="1.4" /><path d="M120 200 C260 180 360 196 470 182 S570 168 600 176" fill="none" stroke="url(#npn-t1)" strokeWidth="1" opacity=".6" /></svg>
      <div className="lp-npn-copy">
      <h2 id="npn-title">No Purchase <span className="pj-text-gold">Necessary.</span></h2>
      <p>Play instantly — discover the free bonuses across our website.</p>
      <Button variant="primary" href="#signup">Start Playing Now</Button>
      </div>
      </section>
  );
}
