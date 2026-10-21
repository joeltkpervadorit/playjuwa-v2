import React from 'react';

export default function Footer({ v }) {
  return (
    <footer className="lp-footer pf" aria-labelledby="pf-title">
      <div className="pf-main">
      <div className="pf-scene" aria-hidden="true">
      <img className="pf-pano" src="/assets/c4b1473782e86c738d698398940e8b2c.jpg" alt="" />
      <i className="pf-shade" />
      <i className="pf-coin is-a" /><i className="pf-coin is-b" /><i className="pf-coin is-c" />
      </div>
      <div className="lp-wrap pf-wrap">
      <h2 className="lp-sr" id="pf-title">PlayJuwa site footer</h2>
      <div className="pf-top">
      <div className="pf-brand">
      <img className="pf-mob-scene" src="/assets/01aed1f3b7feb7dfd0d581563ce3ad91.jpg" alt="" aria-hidden="true" />
      <a className="pf-logo" href="#top" aria-label="PlayJuwa home"><img src="/assets/9048a242fcde0c3b392353f435007399.png" alt="PlayJuwa" /></a>
      <div className="pf-brand-txt"><p className="pf-tag">Play Bigger. Win Brighter.</p>
      <p className="pf-desc">Your destination for casino games and sweepstakes fun.</p></div>
      <ul className="pf-socs" aria-label="PlayJuwa on social media">
      <li><a className="pf-soc is-facebook" href="#facebook" aria-label="PlayJuwa on Facebook"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M14 8.5V6.8c0-.8.5-1 .9-1h2.6V2.1L14.3 2C10.9 2 10.1 4.6 10.1 6.2v2.3H8v3.8h2.1V22H14v-9.7h3l.4-3.8z" /></svg></a></li>
      <li><a className="pf-soc is-instagram" href="#instagram" aria-label="PlayJuwa on Instagram"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7.5 3h9A4.5 4.5 0 0 1 21 7.5v9a4.5 4.5 0 0 1-4.5 4.5h-9A4.5 4.5 0 0 1 3 16.5v-9A4.5 4.5 0 0 1 7.5 3zm0 2A2.5 2.5 0 0 0 5 7.5v9A2.5 2.5 0 0 0 7.5 19h9a2.5 2.5 0 0 0 2.5-2.5v-9A2.5 2.5 0 0 0 16.5 5zM12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm4.8-3.6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" /></svg></a></li>
      <li><a className="pf-soc is-youtube" href="#youtube" aria-label="PlayJuwa on YouTube"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21.6 7.2a2.7 2.7 0 0 0-1.9-1.9C18 4.8 12 4.8 12 4.8s-6 0-7.7.5a2.7 2.7 0 0 0-1.9 1.9C2 8.9 2 12 2 12s0 3.1.4 4.8a2.7 2.7 0 0 0 1.9 1.9c1.7.5 7.7.5 7.7.5s6 0 7.7-.5a2.7 2.7 0 0 0 1.9-1.9c.4-1.7.4-4.8.4-4.8s0-3.1-.4-4.8zM10 15.2V8.8l5.2 3.2z" /></svg></a></li>
      <li><a className="pf-soc is-tiktok" href="#tiktok" aria-label="PlayJuwa on TikTok"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16.5 3c.4 2.2 1.8 3.7 4 4v3.1c-1.5 0-2.9-.4-4-1.2V15a6 6 0 1 1-6-6v3.2a2.8 2.8 0 1 0 2.8 2.8V3z" /></svg></a></li>
      <li><a className="pf-soc is-telegram" href="#telegram" aria-label="PlayJuwa on Telegram"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21.4 4.3 18.3 19c-.2 1-.8 1.3-1.7.8l-4.6-3.4-2.2 2.1c-.2.2-.5.4-1 .4l.3-4.7 8.6-7.8c.4-.3-.1-.5-.6-.2L6.5 12.9 2 11.5c-1-.3-1-1 .2-1.5l17.7-6.8c.8-.3 1.6.2 1.5 1.1z" /></svg></a></li>
      </ul>
      </div>
      <nav className="pf-col" aria-labelledby="pf-h-plat">
      <h3 id="pf-h-plat"><button className="pf-acc-btn" type="button" aria-expanded={v.accPlat} aria-controls="pf-l-plat" onClick={v.accTPlat}><span className="pf-hic" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" /><rect x="3" y="14" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" /></svg></span>Platforms<svg className="pf-acc-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6" /></svg></button></h3>
      <ul id="pf-l-plat" data-open={v.accPlat} className="pf-links"><li><a href="#all-platforms">All Platforms</a></li><li><a href={v.nCasino}>Our Games</a></li><li><a href={v.nCasino}>Casino</a></li><li><a href="#bonus">Bonus</a></li><li><a href="#platforms">Platforms</a></li><li><a href="/link2play">Link2Play</a></li></ul>
      </nav>
      <nav className="pf-col" aria-labelledby="pf-h-sup">
      <h3 id="pf-h-sup"><button className="pf-acc-btn" type="button" aria-expanded={v.accSup} aria-controls="pf-l-sup" onClick={v.accTSup}><span className="pf-hic" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 14v-2a8 8 0 0 1 16 0v2" /><rect x="3" y="13" width="4" height="7" rx="1.5" /><rect x="17" y="13" width="4" height="7" rx="1.5" /></svg></span>Support<svg className="pf-acc-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6" /></svg></button></h3>
      <ul id="pf-l-sup" data-open={v.accSup} className="pf-links"><li><a href="#about">About</a></li><li><a href="#responsible">Responsible Gaming</a></li><li><a href="#privacy">Privacy Policy</a></li><li><a href="#terms">Terms &amp; Conditions</a></li><li><a href="#faq">FAQ</a></li><li><a href="#contact">Contact</a></li><li><a href="#help">Help Center</a></li><li><a href={v.nBlog}>Blog</a></li><li><a href="#support">Support</a></li></ul>
      </nav>
      <nav className="pf-col pf-games" aria-labelledby="pf-h-games">
      <h3 id="pf-h-games"><button className="pf-acc-btn" type="button" aria-expanded={v.accGames} aria-controls="pf-l-games" onClick={v.accTGames}><span className="pf-hic" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 8h10a4 4 0 0 1 4 4.5l-.6 3.3a2.2 2.2 0 0 1-3.8 1L15 15H9l-1.6 1.8a2.2 2.2 0 0 1-3.8-1L3 12.5A4 4 0 0 1 7 8z" /><path d="M7.5 11v3M6 12.5h3M15.5 12h.01M17.5 13.5h.01" /></svg></span>Games<svg className="pf-acc-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6" /></svg></button></h3>
      <ul id="pf-l-games" data-open={v.accGames} className="pf-links pf-games-list">{(v.footGames || []).map((fg, __i8) => (
      <React.Fragment key={__i8}><li><a href={v.nCasino}>{fg}</a></li></React.Fragment>
      ))}</ul>
      </nav>
      <nav className="pf-col pf-legal-col" aria-labelledby="pf-h-leg">
      <h3 id="pf-h-leg"><button className="pf-acc-btn" type="button" aria-expanded={v.accLeg} aria-controls="pf-l-leg" onClick={v.accTLeg}><span className="pf-hic" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l7.5 3v6c0 4.5-3.2 7.8-7.5 9-4.3-1.2-7.5-4.5-7.5-9V6z" /><path d="M8.5 12l2.5 2.5 4.5-5" /></svg></span>Legal<svg className="pf-acc-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6" /></svg></button></h3>
      <ul id="pf-l-leg" data-open={v.accLeg} className="pf-links"><li><a href="#responsible">Responsible Gaming</a></li><li><a href="#about">About PlayJuwa</a></li></ul>
      </nav>
      </div>
      </div>
      </div>
      <div className="pf-bottom">
      <div className="lp-wrap pf-bottom-in">
      <ul className="pf-badges" aria-label="Responsible play">
      <li title="18+ only" aria-label="18 plus only"><b>18+</b></li>
      <li title="Responsible gaming" aria-label="Responsible gaming"><svg viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3l7.5 3v6c0 4.5-3.2 7.8-7.5 9-4.3-1.2-7.5-4.5-7.5-9V6z" /><path d="M8.5 12l2.5 2.5 4.5-5" /></svg></li>
      <li title="No purchase necessary" aria-label="No purchase necessary"><svg viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="4" /><path d="M8.5 12.5l2.5 2.5 4.5-5" /></svg></li>
      <li title="Secure connection" aria-label="Secure connection"><svg viewBox="0 0 24 24" fill="none" stroke="#fbbf24" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="5" y="11" width="14" height="9" rx="2" /><path d="M8 11V8a4 4 0 0 1 8 0v3" /></svg></li>
      <li title="Play responsibly" aria-label="Play responsibly"><svg viewBox="0 0 24 24" fill="none" stroke="#f472b6" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true"><circle cx="12" cy="12" r="8.5" /><circle cx="12" cy="12" r="4.5" /><circle cx="12" cy="12" r="1" fill="#f472b6" /></svg></li>
      </ul>
      <div className="pf-copy"><span>© 2026 Play Juwa. All rights reserved.</span><span>Play only in your browser at playjuwa.com. Play Juwa does not publish an Android app or a Google Play listing. Play Juwa is a free sweepstakes platform. No purchase necessary. Void where prohibited. Must be 18+ to participate. Not available in all states. Sweeps Coins have no cash value until redeemed. T&amp;Cs apply. Please play responsibly.</span></div>
      <nav className="pf-legal" aria-label="Legal"><a href="#terms">Terms &amp; Conditions</a><a href="#privacy">Privacy Policy</a><a href="#sweeps">Sweepstakes Rules</a><a href="#support">Support</a></nav>
      <button className="pf-top-btn" type="button" aria-label="Back to top" onClick={v.toTop}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 19V5M6 11l6-6 6 6" /></svg></button>
      </div>
      </div>
      </footer>
  );
}
