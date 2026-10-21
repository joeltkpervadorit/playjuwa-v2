import React from 'react';

export default function Header2({ v }) {
  return (
    <header className="bl-hero">
      <div className="bl-hero-txt">
      <p className="bl-eyebrow">Blog</p>
      <h1>Latest News &amp; <span className="pj-text-gold">Guides</span></h1>
      <p>Stay updated with the latest tips, updates and promotions from PlayJuwa.</p>
      </div>
      <div className="bl-art" aria-hidden="true">
      <span className="bl-spark s1" /><span className="bl-spark s2" />
      <span className="bl-clip"><i /><i /><i /></span>
      <img className="bl-crown" src="/assets/015aac39deb6c72faa9708e19c86fa17.png" alt="" />
      <svg className="bl-bulb" viewBox="0 0 34 42"><defs><radialGradient id="blb" cx=".4" cy=".35" r=".8"><stop offset="0" stopColor="#fff3b0" /><stop offset=".6" stopColor="#ffc21a" /><stop offset="1" stopColor="#ff8a00" /></radialGradient></defs><path d="M17 1C8.7 1 2 7.5 2 15.6c0 5 2.6 8 5 10.6 1.4 1.5 2 3 2 4.8h16c0-1.8.6-3.300 2-4.800 2.400-2.600 5-5.600 5-10.600C32 7.500 25.300 1 17 1z" fill="url(#blb)" /><rect x="10" y="32" width="14" height="4" rx="2" fill="#8b4dff" /><rect x="12" y="37" width="10" height="4" rx="2" fill="#6128d6" /></svg>
      <span className="bl-coin c1">$</span><span className="bl-coin c2">$</span>
      </div>
      </header>
  );
}
