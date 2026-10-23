/* PlayJuwa casino page.
 * State, effects and animation logic live in this class component; markup lives in ./sections.
 * renderVals() computes every value the markup reads (passed down as `v`).
 */
import React from 'react';
import { ROUTES } from './routes.js';
import { blob } from './assets.js';
import Sidebar from './sections/Sidebar.jsx';
import Header from '../../components/SiteHeader.jsx';
import Withdraw from './sections/Withdraw.jsx';
import ConfirmOpenBlock from './sections/ConfirmOpenBlock.jsx';
import HasSelBlock from './sections/HasSelBlock.jsx';
import Footer from './sections/Footer.jsx';

export default class WithdrawPage extends React.Component {
  constructor(props) {
    super(props);
    var d = props.demo || '';
    var D = {"asOf": "2026-10-13T11:00", "balances": {"gc": 245800, "sc": 37.2, "scAvailable": 30.7, "scRedeemable": 18.5}, "config": {"limits": {"min": 10, "max": 500}, "methods": [{"key": "bank", "name": "Bank Account", "sub": "Checking or savings account"}, {"key": "card", "name": "Debit Card", "sub": "Payout to an eligible debit card"}, {"key": "wallet", "name": "E-Wallet", "sub": "Digital wallet payout", "disabled": true, "disabledReason": "Not available yet"}]}, "savedPayout": {"name": "Joel M", "routing": "123456789", "acct": "000123454821", "acct2": "000123454821", "atype": "checking", "cname": "", "cnum": "", "exp": ""}, "newRequest": {"id": "PJ-7K2Q8MZR", "ref": "RD-40933106"}, "history": [{"id": "PJ-7K2H1TPD", "ref": "RD-40918275", "ts": "2026-10-10T18:22", "amount": 25.0, "method": "Bank Account •••• 4821", "status": "pending"}, {"id": "PJ-7K28LMW2", "ref": "RD-40877102", "ts": "2026-10-04T09:30", "amount": 15.0, "method": "Bank Account •••• 4821", "status": "cancelled"}, {"id": "PJ-7K21WQ9C", "ref": "RD-40765539", "ts": "2026-09-27T15:51", "amount": 40.0, "method": "Bank Account •••• 4821", "status": "completed"}, {"id": "PJ-7K1V2XQA", "ref": "RD-40702218", "ts": "2026-09-20T12:04", "amount": 20.0, "method": "Debit Card •••• 1180", "status": "rejected", "reason": "The name on the payout account didn’t match the name on your PlayJuwa account."}, {"id": "PJ-7K1RQV7G", "ref": "RD-40590120", "ts": "2026-09-12T20:02", "amount": 30.0, "method": "Debit Card •••• 1180", "status": "failed"}, {"id": "PJ-7K1N4KD8", "ref": "RD-40511873", "ts": "2026-08-28T10:40", "amount": 50.0, "method": "Bank Account •••• 4821", "status": "completed"}, {"id": "PJ-7K1J9TB2", "ref": "RD-40466250", "ts": "2026-08-14T17:15", "amount": 12.5, "method": "Bank Account •••• 4821", "status": "completed"}, {"id": "PJ-7K1E6GW5", "ref": "RD-40402917", "ts": "2026-07-30T08:55", "amount": 35.0, "method": "Debit Card •••• 1180", "status": "completed"}, {"id": "PJ-7K19ZP3H", "ref": "RD-40350044", "ts": "2026-07-12T21:33", "amount": 10.0, "method": "Bank Account •••• 4821", "status": "cancelled"}]};
    var saved = d !== 'elig-payout';
    var f0 = saved ? Object.assign({}, D.savedPayout) : { name: '', routing: '', acct: '', acct2: '', atype: 'checking', cname: '', cnum: '', exp: '' };
    var st = {
      step: 'overview', load: d === 'loading' ? 'loading' : d === 'elig-error' ? 'error' : 'ready',
      elig: { 'elig-insufficient': 'insufficient', 'elig-verify': 'verify', 'elig-profile': 'profile', 'elig-unavailable': 'unavailable' }[d] || 'ok',
      saved: saved, method: null, f: f0, showErr: false, methodErr: false, reveal: {},
      amt: '', amtTried: false, agree: false, agreeErr: false,
      confirm: false, submitting: false, submitErr: false, result: null, resId: null,
      hStatus: 'all', hDate: 'all', dFrom: '', dTo: '', page: 1, sel: null, copied: false, hEmpty: d === 'history-empty', sound: true
    };
    // demo presets for canvas boards
    var flow = function (o) { Object.assign(st, { method: 'bank' }, o); };
    if (d === 'method') flow({ step: 'method', method: null });
    if (d === 'details') flow({ step: 'details' });
    if (d === 'details-errors') flow({ step: 'details', f: Object.assign({}, f0, { routing: '12345', acct: '9981', acct2: '9918', name: '' }), showErr: true });
    if (d === 'elig-payout') { st.step = 'overview'; }
    if (d === 'payout-missing') flow({ step: 'details', saved: false, f: { name: '', routing: '', acct: '', acct2: '', atype: 'checking', cname: '', cnum: '', exp: '' }, showErr: true });
    if (d === 'amount') flow({ step: 'amount', amt: '12.00' });
    if (d === 'amount-empty') flow({ step: 'amount', amt: '', amtTried: true });
    if (d === 'amount-min') flow({ step: 'amount', amt: '5', amtTried: true });
    if (d === 'amount-max') flow({ step: 'amount', amt: '750', amtTried: true });
    if (d === 'amount-insufficient') flow({ step: 'amount', amt: '40', amtTried: true });
    if (d === 'review') flow({ step: 'review', amt: '12.00' });
    if (d === 'submit-error') flow({ step: 'review', amt: '12.00', agree: true, submitErr: true });
    if (d === 'confirm') flow({ step: 'review', amt: '12.00', agree: true, confirm: true });
    if (d === 'processing') flow({ step: 'processing', amt: '12.00', agree: true, submitting: true });
    if (d === 'result-submitted') flow({ step: 'result', amt: '12.00', result: 'submitted' });
    var R = { 'result-pending': 'pending', 'result-completed': 'completed', 'result-failed': 'failed', 'result-rejected': 'rejected', 'result-cancelled': 'cancelled' }[d];
    if (R) { var h = D.history.filter(function (x) { return x.status === R; })[0]; st.step = 'result'; st.result = R; st.resId = h.id; }
    if (d === 'history-detail') st.sel = D.history[0].id;
    if (d === 'history-filtered') { st.hStatus = 'completed'; st.hDate = '90'; }
    this.state = st;
    this._key = this.onKey.bind(this);
  }
  componentDidMount() { this.installHalloween(); this.installTapFx(); this.installMotion(); document.addEventListener('keydown', this._key); }
  componentWillUnmount() { document.removeEventListener('keydown', this._key); clearTimeout(this._t); clearTimeout(this._ct); }
  onKey(e) {
    if (e.key !== 'Escape') return;
    if (this.state.sel) this.setState({ sel: null });
    else if (this.state.confirm && !this.state.submitting) this.setState({ confirm: false });
  }
  top() { try { window.scrollTo({ top: 0 }); } catch (x) {} }
  navLinks() {
    return ROUTES;
  }
  navTo(href) {
    try { var a = document.createElement('a'); a.setAttribute('href', href); a.style.display = 'none'; document.body.appendChild(a); a.click(); setTimeout(function () { try { a.remove(); } catch (x) {} }, 0); } catch (e) {}
  }
  installHalloween() {
    try {
      if (typeof window === 'undefined' || window.__pjHw || document.querySelector('.hw')) return;
      window.__pjHw = true;
      var KEY = 'pj_hw';
      var on = true; try { on = localStorage.getItem(KEY) !== 'off'; } catch (e) {}
      if (!document.getElementById('pj-hw-css')) { var st = document.createElement('style'); st.id = 'pj-hw-css'; st.textContent = ".hw{position:fixed;inset:0;z-index:30;overflow:hidden;pointer-events:none;contain:layout paint}\n.hw[data-on=\"false\"]{display:none}\n.hw-p{position:absolute;left:0;top:0;will-change:transform;opacity:0}\n.hw-p img{display:block;width:100%;height:auto;will-change:transform}\n.hw-witch{width:150px;filter:drop-shadow(0 0 14px rgba(255,140,40,.45))}\n.hw-witch.is-a{animation:hw-witch-a 32s linear infinite}\n.hw-witch.is-a img{animation:hw-bob 2.4s ease-in-out infinite}\n.hw-witch.is-b{width:96px;animation:hw-witch-b 40s linear -18s infinite;filter:drop-shadow(0 0 10px rgba(168,85,247,.5)) blur(.4px)}\n.hw-witch.is-b img{transform:scaleX(-1);animation:hw-bob-flip 2.8s ease-in-out infinite}\n@keyframes hw-witch-a{\n  0%{transform:translate(-20vw,16vh) rotate(-6deg);opacity:0}\n  2%{opacity:.95}\n  10%{transform:translate(12vw,8vh) rotate(-2deg)}\n  20%{transform:translate(38vw,20vh) rotate(4deg)}\n  30%{transform:translate(64vw,10vh) rotate(-4deg)}\n  40%{transform:translate(92vw,22vh) rotate(3deg)}\n  44%{transform:translate(112vw,14vh);opacity:.95}\n  45%,100%{transform:translate(112vw,14vh);opacity:0}}\n@keyframes hw-witch-b{\n  0%{transform:translate(110vw,62vh);opacity:0}\n  3%{opacity:.75}\n  14%{transform:translate(70vw,52vh)}\n  26%{transform:translate(36vw,66vh)}\n  38%{transform:translate(4vw,54vh)}\n  42%{transform:translate(-18vw,60vh);opacity:.75}\n  43%,100%{transform:translate(-18vw,60vh);opacity:0}}\n@keyframes hw-bob{50%{transform:translateY(-10px) rotate(2deg)}}\n@keyframes hw-bob-flip{0%,100%{transform:scaleX(-1)}50%{transform:scaleX(-1) translateY(-8px)}}\n.hw-bat{width:70px;filter:drop-shadow(0 0 8px rgba(168,85,247,.55))}\n.hw-bat img{animation:hw-flap .32s ease-in-out infinite alternate;transform-origin:50% 40%}\n.hw-bat.is-a{animation:hw-bat-a 18s ease-in-out infinite}\n.hw-bat.is-b{width:52px;animation:hw-bat-b 22s ease-in-out -7s infinite}\n.hw-bat.is-c{width:40px;animation:hw-bat-a 26s ease-in-out -15s infinite;filter:drop-shadow(0 0 6px rgba(168,85,247,.5)) blur(.6px)}\n@keyframes hw-flap{from{transform:scaleY(1) scaleX(1)}to{transform:scaleY(.62) scaleX(1.06)}}\n@keyframes hw-bat-a{\n  0%{transform:translate(105vw,30vh);opacity:0}\n  4%{opacity:.9}\n  15%{transform:translate(78vw,12vh)}\n  25%{transform:translate(55vw,34vh)}\n  35%{transform:translate(30vw,18vh)}\n  46%{transform:translate(-12vw,28vh);opacity:.9}\n  47%,100%{transform:translate(-12vw,28vh);opacity:0}}\n@keyframes hw-bat-b{\n  0%{transform:translate(-10vw,46vh);opacity:0}\n  4%{opacity:.85}\n  14%{transform:translate(18vw,30vh)}\n  26%{transform:translate(44vw,48vh)}\n  38%{transform:translate(72vw,36vh)}\n  50%{transform:translate(108vw,44vh);opacity:.85}\n  51%,100%{transform:translate(108vw,44vh);opacity:0}}\n.hw-ghost{width:72px;filter:drop-shadow(0 0 14px rgba(196,181,253,.55))}\n.hw-ghost img{animation:hw-float 3.2s ease-in-out infinite}\n.hw-ghost.is-a{animation:hw-ghost-a 46s linear infinite}\n.hw-ghost.is-b{width:54px;animation:hw-ghost-b 54s linear -24s infinite}\n@keyframes hw-float{0%,100%{transform:translateY(0) rotate(-4deg)}50%{transform:translateY(-14px) rotate(4deg) scale(1.03)}}\n@keyframes hw-ghost-a{\n  0%{transform:translate(-12vw,72vh);opacity:0}\n  4%{opacity:.8}\n  20%{transform:translate(20vw,60vh)}\n  40%{transform:translate(48vw,76vh)}\n  60%{transform:translate(78vw,64vh)}\n  76%{transform:translate(110vw,70vh);opacity:.8}\n  77%,100%{transform:translate(110vw,70vh);opacity:0}}\n@keyframes hw-ghost-b{\n  0%{transform:translate(104vw,40vh);opacity:0}\n  5%{opacity:.7}\n  25%{transform:translate(70vw,48vh)}\n  45%{transform:translate(40vw,36vh)}\n  65%{transform:translate(10vw,46vh)}\n  78%{transform:translate(-12vw,40vh);opacity:.7}\n  79%,100%{transform:translate(-12vw,40vh);opacity:0}}\n.hw-pk{width:48px;filter:drop-shadow(0 0 10px rgba(255,140,40,.6))}\n.hw-pk img{animation:hw-spin 6s linear infinite}\n.hw-pk.is-a{animation:hw-fall 24s cubic-bezier(.45,0,.75,1) -2s infinite;--x:18vw;--dx:6vw}\n.hw-pk.is-b{width:38px;animation:hw-fall 30s cubic-bezier(.45,0,.75,1) -14s infinite;--x:66vw;--dx:-5vw}\n.hw-pk.is-c{width:30px;animation:hw-fall 36s cubic-bezier(.45,0,.75,1) -25s infinite;--x:86vw;--dx:-8vw}\n@keyframes hw-spin{to{rotate:360deg}}\n@keyframes hw-fall{\n  0%{transform:translate(var(--x),-10vh);opacity:0}\n  2%{opacity:.85}\n  30%{transform:translate(calc(var(--x) + var(--dx)),110vh);opacity:.85}\n  31%,100%{transform:translate(calc(var(--x) + var(--dx)),110vh);opacity:0}}\n.hw-leaf{width:24px;opacity:0}\n.hw-leaf img{animation:hw-sway 3.6s ease-in-out infinite}\n.hw-leaf.is-1{--x:6vw;animation:hw-leaf 16s linear -1s infinite}\n.hw-leaf.is-2{--x:24vw;width:30px;animation:hw-leaf 20s linear -9s infinite}\n.hw-leaf.is-3{--x:38vw;width:18px;animation:hw-leaf 14s linear -5s infinite}\n.hw-leaf.is-4{--x:52vw;animation:hw-leaf 22s linear -13s infinite}\n.hw-leaf.is-5{--x:67vw;width:20px;animation:hw-leaf 18s linear -3s infinite}\n.hw-leaf.is-6{--x:79vw;width:28px;animation:hw-leaf 24s linear -17s infinite}\n.hw-leaf.is-7{--x:91vw;width:18px;animation:hw-leaf 15s linear -8s infinite}\n.hw-leaf.is-8{--x:45vw;width:22px;animation:hw-leaf 26s linear -21s infinite}\n@keyframes hw-sway{0%,100%{transform:translateX(-14px) rotate(-25deg)}50%{transform:translateX(14px) rotate(30deg)}}\n@keyframes hw-leaf{\n  0%{transform:translate(var(--x),-6vh);opacity:0}\n  5%{opacity:.75}\n  50%{transform:translate(calc(var(--x) - 6vw),50vh)}\n  92%{opacity:.75}\n  100%{transform:translate(calc(var(--x) + 4vw),106vh);opacity:0}}\n.hw-sp{position:absolute;width:6px;height:6px;border-radius:50%;background:radial-gradient(circle,#fff 0 30%,#ffd166 45%,rgba(255,184,0,0) 70%);box-shadow:0 0 8px 2px rgba(255,184,0,.45);animation:hw-tw 3.8s ease-in-out infinite;opacity:0}\n.hw-sp:nth-child(even){background:radial-gradient(circle,#fff 0 30%,#c084fc 45%,rgba(168,85,247,0) 70%);box-shadow:0 0 8px 2px rgba(168,85,247,.5)}\n@keyframes hw-tw{0%,100%{opacity:0;transform:scale(.4)}50%{opacity:.9;transform:scale(1.2) translateY(-6px)}}\n.hw-toggle{position:fixed;left:14px;bottom:14px;z-index:46;display:grid;place-items:center;width:44px;height:44px;padding:0;border:0;border-radius:50%;cursor:pointer;background:rgba(20,14,44,.85);box-shadow:inset 0 0 0 1.5px rgba(255,140,40,.6),0 0 16px rgba(255,140,40,.35);transition:box-shadow .2s ease,translate .2s ease}\n.hw-toggle img{width:28px;height:auto;transition:filter .2s ease}\n.hw-toggle[aria-pressed=\"false\"] img{filter:grayscale(1) brightness(.7)}\n.hw-toggle[aria-pressed=\"false\"]{box-shadow:inset 0 0 0 1.5px rgba(255,255,255,.2)}\n.hw-toggle:hover{translate:0 -2px}\n.hw-toggle:focus-visible{outline:2px solid var(--focus);outline-offset:2px}\n@media (min-width:1024px){.hw-toggle{left:calc(var(--side,200px) + 14px)}}\n@media (max-width:1023px){.hw-witch{width:110px}.hw-witch.is-b{width:72px}.hw-bat{width:54px}.hw-bat.is-b{width:42px}.hw-ghost{width:56px}.hw-leaf.is-7,.hw-leaf.is-8,.hw-pk.is-c{display:none}}\n@media (max-width:640px){.hw-witch{width:88px}.hw-witch.is-b,.hw-bat.is-c,.hw-ghost.is-b,.hw-leaf.is-5,.hw-leaf.is-6{display:none}.hw-bat{width:44px}.hw-ghost{width:46px}.hw-pk{width:34px}.hw-pk.is-b{width:28px}.hw-sp:nth-of-type(n+8){display:none}.hw-toggle{bottom:76px;left:10px;width:40px;height:40px}}\n.hw-bat.is-b img,.hw-bat.is-c img{animation-duration:.22s}\n.hw-bat.is-b{width:70px}\n.hw-bat.is-c{width:56px}\n.hw-spider{width:60px;left:72vw;transform:translateY(-100%);opacity:.95;animation:hw-spider 20s ease-in-out -4s infinite}\n.hw-spider img{position:relative;animation:hw-wiggle 1.6s ease-in-out infinite;filter:drop-shadow(0 0 8px rgba(255,140,40,.35))}\n.hw-thread{position:absolute;left:50%;bottom:70%;width:1px;height:60vh;background:linear-gradient(180deg,rgba(255,255,255,0),rgba(255,255,255,.45))}\n@keyframes hw-spider{0%,62%,100%{transform:translateY(-110%)}14%,48%{transform:translateY(26vh)}22%{transform:translateY(22vh)}32%{transform:translateY(28vh)}}\n@keyframes hw-wiggle{0%,100%{rotate:-6deg}50%{rotate:6deg}}\n.hw-cat{width:96px;opacity:1;animation:hw-cat 34s ease-in-out -10s infinite}\n.hw-cat img{filter:drop-shadow(0 0 10px rgba(255,140,40,.35))}\n@keyframes hw-cat{0%,58%,100%{transform:translate(-120px,calc(100vh - 80px))}66%,86%{transform:translate(-14px,calc(100vh - 118px))}72%{transform:translate(-14px,calc(100vh - 118px)) rotate(4deg)}}\n.hw-star{width:34px;opacity:0;animation:hw-star 5s ease-in-out infinite}\n.hw-star.is-a{left:30vw;top:22vh}\n.hw-star.is-b{left:78vw;top:46vh;width:26px;animation-delay:-1.8s}\n.hw-star.is-c{left:12vw;top:68vh;width:30px;animation-delay:-3.3s}\n@keyframes hw-star{0%,100%{opacity:0;transform:scale(.3) rotate(0)}45%,55%{opacity:.95;transform:scale(1) rotate(45deg)}}\n@media (min-width:1024px){.hw-cat{left:var(--side,200px)}}\n@media (max-width:640px){.hw-spider{width:44px;left:78vw}.hw-cat{width:70px;animation-name:hw-cat-m}.hw-star.is-c{display:none}@keyframes hw-cat-m{0%,58%,100%{transform:translate(-90px,calc(100vh - 130px))}66%,86%{transform:translate(-10px,calc(100vh - 160px))}}}\n.hw-g{position:absolute;inset:0}\n.hw-cv{position:absolute;left:0;top:0;z-index:2;pointer-events:none;-webkit-mask-image:linear-gradient(180deg,transparent,#000 12%,#000 88%,transparent);mask-image:linear-gradient(180deg,transparent,#000 12%,#000 88%,transparent)}\n.hw[data-wind=\"cyclone\"] .hw-p,.hw[data-wind=\"cyclone\"] .hw-sp{animation-play-state:paused}\n.hw[data-wind=\"cyclone\"] .hw-bat img{animation-play-state:running;animation-duration:.12s}\n.hw[data-wind=\"cyclone\"] .hw-g .hw-p img{animation-play-state:running}\n.hw[data-wind=\"calm\"] .hw-g{opacity:0}\n.hw[data-wind=\"return\"] .hw-g{animation:hw-back 1.6s ease-out both}\n@keyframes hw-back{from{opacity:0;transform:translateY(12px) scale(.96)}to{opacity:1;transform:none}}\n.hw-cy-btn{position:fixed;left:66px;bottom:14px;z-index:46;display:grid;place-items:center;width:44px;height:44px;padding:0;border:0;border-radius:50%;cursor:pointer;color:#fde68a;background:radial-gradient(circle at 35% 30%,#7c3aed,#2a1466);box-shadow:inset 0 0 0 1.5px rgba(192,132,252,.7),0 0 18px rgba(168,85,247,.55);transition:translate .2s ease,box-shadow .2s ease}\n.hw-cy-btn svg{width:22px;height:22px}\n.hw-cy-btn:hover{translate:0 -2px;box-shadow:inset 0 0 0 1.5px #e9d5ff,0 0 24px rgba(168,85,247,.8)}\n.hw-cy-btn:focus-visible{outline:2px solid var(--focus);outline-offset:2px}\n.hw-cy-btn[data-on=\"false\"]{display:none}\n@media (min-width:1024px){.hw-cy-btn{left:calc(var(--side,200px) + 66px)}}\n@media (max-width:640px){.hw-cy-btn{bottom:76px;left:58px;width:40px;height:40px}}\n@media (prefers-reduced-motion: reduce){.hw-cy-btn{display:none}}\n@media (prefers-reduced-motion: reduce){.hw{display:none}.hw-toggle{display:none}}"; document.head.appendChild(st); }
      var wrap = document.createElement('div'); wrap.className = 'pj-hw-root'; wrap.innerHTML = "<div class=\"hw\" aria-hidden=\"true\" data-on=\"true\" data-wind=\"none\">\n  <div class=\"hw-g\" style=\"--gy:17vh;--gr:22deg;--gd:0.23s;--gs:-720deg\"><div class=\"hw-p hw-witch is-a\"><img src=\"/assets/495f2c38239df26b23e87c223493432d.png\" alt=\"\"></div></div>\n  <div class=\"hw-g\" style=\"--gy:25vh;--gr:13deg;--gd:0.04s;--gs:-900deg\"><div class=\"hw-p hw-witch is-b\"><img src=\"/assets/495f2c38239df26b23e87c223493432d.png\" alt=\"\"></div></div>\n  <div class=\"hw-g\" style=\"--gy:-29vh;--gr:-20deg;--gd:0.43s;--gs:-720deg\"><div class=\"hw-p hw-bat is-a\"><img src=\"/assets/9a5f7b235079cc7f00dd27aa5f892bad.png\" alt=\"\"></div></div>\n  <div class=\"hw-g\" style=\"--gy:-32vh;--gr:-9deg;--gd:0.09s;--gs:-720deg\"><div class=\"hw-p hw-bat is-b\"><img src=\"/assets/de34a42524a4fe2c56b4d16272049230.png\" alt=\"\"></div></div>\n  <div class=\"hw-g\" style=\"--gy:19vh;--gr:22deg;--gd:0.27s;--gs:-720deg\"><div class=\"hw-p hw-bat is-c\"><img src=\"/assets/ede659f3bf422ec41a47524d01b105d4.png\" alt=\"\"></div></div>\n  <div class=\"hw-g\" style=\"--gy:-3vh;--gr:8deg;--gd:0.3s;--gs:1080deg\"><div class=\"hw-p hw-ghost is-a\"><img src=\"/assets/51edca3418118ad688f6c88857e32468.png\" alt=\"\"></div></div>\n  <div class=\"hw-g\" style=\"--gy:12vh;--gr:-16deg;--gd:0.14s;--gs:720deg\"><div class=\"hw-p hw-ghost is-b\"><img src=\"/assets/51edca3418118ad688f6c88857e32468.png\" alt=\"\"></div></div>\n  <div class=\"hw-g\" style=\"--gy:-37vh;--gr:-26deg;--gd:0.34s;--gs:-1080deg\"><div class=\"hw-p hw-pk is-a\"><img src=\"/assets/61905eca8a3a9d25829f656536f23a6c.png\" alt=\"\"></div></div>\n  <div class=\"hw-g\" style=\"--gy:-3vh;--gr:10deg;--gd:0.43s;--gs:-540deg\"><div class=\"hw-p hw-pk is-b\"><img src=\"/assets/61905eca8a3a9d25829f656536f23a6c.png\" alt=\"\"></div></div>\n  <div class=\"hw-g\" style=\"--gy:-14vh;--gr:-23deg;--gd:0.17s;--gs:1080deg\"><div class=\"hw-p hw-pk is-c\"><img src=\"/assets/61905eca8a3a9d25829f656536f23a6c.png\" alt=\"\"></div></div>\n  <div class=\"hw-g\" style=\"--gy:-31vh;--gr:-16deg;--gd:0.15s;--gs:900deg\"><div class=\"hw-p hw-leaf is-1\"><img src=\"/assets/7f2f2ec99f86f72bb5d87942dbac861c.png\" alt=\"\"></div></div>\n  <div class=\"hw-g\" style=\"--gy:-39vh;--gr:11deg;--gd:0.06s;--gs:-540deg\"><div class=\"hw-p hw-leaf is-2\"><img src=\"/assets/e57428c8f00a005232c5259aa5d46888.png\" alt=\"\"></div></div>\n  <div class=\"hw-g\" style=\"--gy:-33vh;--gr:23deg;--gd:0.08s;--gs:720deg\"><div class=\"hw-p hw-leaf is-3\"><img src=\"/assets/fbb9ddf36730ab128ca99230a8d30b0c.png\" alt=\"\"></div></div>\n  <div class=\"hw-g\" style=\"--gy:25vh;--gr:-12deg;--gd:0.19s;--gs:-1080deg\"><div class=\"hw-p hw-leaf is-4\"><img src=\"/assets/d85eaee803a38fd181f2a8ee7c99e9da.png\" alt=\"\"></div></div>\n  <div class=\"hw-g\" style=\"--gy:10vh;--gr:14deg;--gd:0.0s;--gs:-900deg\"><div class=\"hw-p hw-leaf is-5\"><img src=\"/assets/e57428c8f00a005232c5259aa5d46888.png\" alt=\"\"></div></div>\n  <div class=\"hw-g\" style=\"--gy:-14vh;--gr:-20deg;--gd:0.45s;--gs:-540deg\"><div class=\"hw-p hw-leaf is-6\"><img src=\"/assets/7f2f2ec99f86f72bb5d87942dbac861c.png\" alt=\"\"></div></div>\n  <div class=\"hw-g\" style=\"--gy:-22vh;--gr:-22deg;--gd:0.12s;--gs:900deg\"><div class=\"hw-p hw-leaf is-7\"><img src=\"/assets/d85eaee803a38fd181f2a8ee7c99e9da.png\" alt=\"\"></div></div>\n  <div class=\"hw-g\" style=\"--gy:9vh;--gr:-10deg;--gd:0.04s;--gs:-720deg\"><div class=\"hw-p hw-leaf is-8\"><img src=\"/assets/fbb9ddf36730ab128ca99230a8d30b0c.png\" alt=\"\"></div></div>\n  <div class=\"hw-g\" style=\"--gy:7vh;--gr:22deg;--gd:0.06s;--gs:-1080deg\"><div class=\"hw-p hw-spider\"><i class=\"hw-thread\"></i><img src=\"/assets/36d431344b3a750347d36748360dbd1a.png\" alt=\"\"></div></div>\n  <div class=\"hw-g\" style=\"--gy:9vh;--gr:-12deg;--gd:0.14s;--gs:-720deg\"><div class=\"hw-p hw-cat\"><img src=\"/assets/a398c4807f5f7465cc38ca1e473c61f0.png\" alt=\"\"></div></div>\n  <div class=\"hw-g\" style=\"--gy:-16vh;--gr:-25deg;--gd:0.09s;--gs:1080deg\"><div class=\"hw-p hw-star is-a\"><img src=\"/assets/f193206eca5f92ab1309d6d0d079912f.png\" alt=\"\"></div></div>\n  <div class=\"hw-g\" style=\"--gy:-30vh;--gr:9deg;--gd:0.05s;--gs:540deg\"><div class=\"hw-p hw-star is-b\"><img src=\"/assets/f193206eca5f92ab1309d6d0d079912f.png\" alt=\"\"></div></div>\n  <div class=\"hw-g\" style=\"--gy:-10vh;--gr:16deg;--gd:0.19s;--gs:1080deg\"><div class=\"hw-p hw-star is-c\"><img src=\"/assets/f193206eca5f92ab1309d6d0d079912f.png\" alt=\"\"></div></div>\n  <div class=\"hw-g is-sp\" style=\"--gy:-12vh;--gr:6deg;--gd:.15s;--gs:0deg\"><i class=\"hw-sp\" style=\"left:8%;top:14%\"></i><i class=\"hw-sp\" style=\"left:22%;top:38%;animation-delay:-1.2s\"></i><i class=\"hw-sp\" style=\"left:41%;top:9%;animation-delay:-2.1s\"></i><i class=\"hw-sp\" style=\"left:57%;top:27%;animation-delay:-.6s\"></i><i class=\"hw-sp\" style=\"left:73%;top:12%;animation-delay:-3s\"></i><i class=\"hw-sp\" style=\"left:88%;top:33%;animation-delay:-1.7s\"></i><i class=\"hw-sp\" style=\"left:14%;top:62%;animation-delay:-2.6s\"></i><i class=\"hw-sp\" style=\"left:36%;top:78%;animation-delay:-.3s\"></i><i class=\"hw-sp\" style=\"left:64%;top:58%;animation-delay:-1.4s\"></i><i class=\"hw-sp\" style=\"left:83%;top:72%;animation-delay:-2.3s\"></i><i class=\"hw-sp\" style=\"left:50%;top:90%;animation-delay:-3.4s\"></i><i class=\"hw-sp\" style=\"left:94%;top:52%;animation-delay:-.9s\"></i></div>\n  <canvas class=\"hw-cv\"></canvas>\n</div>\n<button class=\"hw-cy-btn\" type=\"button\" aria-label=\"Play the Halloween cyclone\" title=\"Play the Halloween cyclone\" data-on=\"true\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.2\" stroke-linecap=\"round\" aria-hidden=\"true\"><path d=\"M3 8h10.5a3 3 0 1 0-3-3\"></path><path d=\"M3 12h15a3 3 0 1 1-3 3\"></path><path d=\"M3 16h7\"></path></svg></button>\n<button class=\"hw-toggle\" type=\"button\" aria-pressed=\"true\" aria-label=\"Turn off Halloween effects\" title=\"Turn off Halloween effects\"><img src=\"/assets/61905eca8a3a9d25829f656536f23a6c.png\" alt=\"\"></button>";
      while (wrap.firstChild) document.body.appendChild(wrap.firstChild);
      var layer = document.querySelector('.hw'), cy = document.querySelector('.hw-cy-btn'), tg = document.querySelector('.hw-toggle');
      var H = {
        state: { hw: on, hwWind: '', heroSlide: 0 },
        reducedMotion: function () { try { return window.matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) { return false; } },
        setState: function (o) { for (var k in o) this.state[k] = o[k]; this.paint(); },
        paint: function () {
          var s = this.state, v = s.hw ? 'true' : 'false', lab = s.hw ? 'Turn off Halloween effects' : 'Turn on Halloween effects';
          if (layer) { layer.setAttribute('data-on', v); layer.setAttribute('data-wind', s.hwWind || 'none'); }
          if (cy) cy.setAttribute('data-on', v);
          if (tg) { tg.setAttribute('aria-pressed', v); tg.setAttribute('aria-label', lab); tg.setAttribute('title', lab); }
        },
      scheduleWind: function (first) {
        // Random, infrequent Halloween cyclone. Normal loops run most of the time.
        var self = this;
        clearTimeout(this._windT);
        if (this.reducedMotion()) return;
        var wait = first ? 4500 + Math.random() * 2500 : 45000 + Math.random() * 60000;
        this._windT = setTimeout(function () {
          if (!self.state.hw || (!first && (document.hidden || Math.random() < 0.25))) { self.scheduleWind(false); return; }
          self.startCyclone();
        }, wait);
      },
      stopCyclone: function () {
        cancelAnimationFrame(this._cyRaf); this._cyRaf = 0;
        clearTimeout(this._windT);
        (this._cyAnims || []).forEach(function (a) { try { a.cancel(); } catch (e) {} });
        this._cyAnims = [];
        document.querySelectorAll('.hw-g').forEach(function (g) { g.style.zIndex = ''; g.style.transformOrigin = ''; g.style.filter = ''; });
        var cv = document.querySelector('.hw-cv'); if (cv) { var c = cv.getContext('2d'); c.clearRect(0, 0, cv.width, cv.height); }
      },
      startCyclone: function (focusY) {
        var self = this, layer = document.querySelector('.hw'), cv = layer && layer.querySelector('.hw-cv');
        if (!layer || !cv || !cv.getContext) { this.scheduleWind(false); return; }
        this.stopCyclone();
        // ---- viewport (capped band on very tall preview boards)
        var W = window.innerWidth, H = window.innerHeight, top = 0, fullH = H;
        if (H > 1800) { H = Math.max(844, Math.min(1150, W * 0.76)); if (focusY != null) top = Math.max(0, Math.min(fullH - H, focusY - H / 2)); }
        var small = W < 700;
        var dir = Math.random() < 0.5 ? 1 : -1;                       // spin direction
        var C0 = [W * (0.5 + (Math.random() - 0.5) * 0.12), H * (0.48 + (Math.random() - 0.5) * 0.1)];
        var Rmax = Math.hypot(W, H) * 0.62, Rmin = Math.min(W, H) * 0.035;
        var SQ = 0.86;                                                  // slight perspective squash
        // ---- canvas
        var scale = Math.min(1, 1400 / Math.max(W, H)) * Math.min(window.devicePixelRatio || 1, small ? 1.5 : 1.25);
        cv.width = Math.round(W * scale); cv.height = Math.round(H * scale);
        cv.style.width = W + 'px'; cv.style.height = H + 'px'; cv.style.top = top + 'px';
        var ctx = cv.getContext('2d'); ctx.setTransform(scale, 0, 0, scale, 0, 0);
        var COLS = [[255, 182, 222], [196, 170, 255], [255, 214, 120], [170, 230, 255], [255, 160, 200], [216, 190, 255], [255, 200, 160], [180, 245, 220]];
        // spiral streaks: r = Rmax * e^(-k*theta); each streak is an arc-window travelling inward while the whole field rotates
        var NA = small ? 12 : 20, arms = [];
        var K = 0.16, TH = Math.log(Rmax / Rmin) / K;                   // theta span from rim to eye
        for (var i = 0; i < NA; i++) arms.push({ c: COLS[i % COLS.length], ph: (i / NA) * 6.283 + Math.random() * 0.4, th: Math.random() * TH, len: 2.2 + Math.random() * 3.2, v: 0.45 + Math.random() * 0.5, w: 0.7 + Math.random() * 1.3, k: K * (0.85 + Math.random() * 0.3) });
        // circular orbit trails (true arcs) for soft glowing particles
        var NO = small ? 50 : 120, orbs = [];
        for (var j = 0; j < NO; j++) orbs.push({ r: Rmin * 1.5 + Math.pow(Math.random(), 0.7) * Rmax * 0.95, a: Math.random() * 6.283, len: 0.12 + Math.random() * 0.35, gold: Math.random() < 0.5, sz: 0.8 + Math.random() * 1.8 });
        var CUTE = ['#ffb6de', '#ffd978', '#c9b6ff', '#aee6ff', '#ffc7a8'], NC = small ? 10 : 22, cuties = [];
        for (var cq = 0; cq < NC; cq++) cuties.push({ heart: Math.random() < 0.5, col: CUTE[cq % CUTE.length], r: Rmax * (0.3 + Math.random() * 0.65), a: Math.random() * 6.283, rot: Math.random() * 6.283, vr: (Math.random() - 0.5) * 4, ph: Math.random() * 6.283, size: (small ? 12 : 17) + Math.random() * 10 });
        var leafSrc = Array.prototype.slice.call(layer.querySelectorAll('.hw-leaf img'), 0, 4);
        var NL = small ? 6 : 12, leaves = [];
        for (var q = 0; q < NL; q++) leaves.push({ img: leafSrc[q % Math.max(1, leafSrc.length)], r: Rmax * (0.35 + Math.random() * 0.6), a: Math.random() * 6.283, rot: Math.random() * 6.283, vr: (Math.random() - 0.5) * 10, size: (small ? 16 : 22) + Math.random() * 16 });
        // ---- lightning: fractal bolts striking from the rim into the eye
        var bolts = [], nextBolt = 0, flash = 0;
        var makeBolt = function (from, to, depth, wid) {
          var seg = [from, to], disp = Math.hypot(to[0] - from[0], to[1] - from[1]) * 0.22;
          for (var d = 0; d < (small ? 5 : 6); d++) {
            var ns = [seg[0]];
            for (var s = 0; s < seg.length - 1; s++) {
              var a = seg[s], b = seg[s + 1], mx = (a[0] + b[0]) / 2, my = (a[1] + b[1]) / 2, nx = -(b[1] - a[1]), ny = b[0] - a[0], nl = Math.hypot(nx, ny) || 1, o = (Math.random() - 0.5) * disp;
              ns.push([mx + nx / nl * o, my + ny / nl * o], b);
            }
            seg = ns; disp *= 0.55;
          }
          var out = [{ pts: seg, w: wid }];
          if (depth < 2) for (var k = 0; k < 2; k++) {
            var i = Math.floor(seg.length * (0.25 + Math.random() * 0.5)), p = seg[i], ang = Math.atan2(to[1] - from[1], to[0] - from[0]) + (Math.random() - 0.5) * 1.6, L = Math.hypot(to[0] - from[0], to[1] - from[1]) * (0.25 + Math.random() * 0.3);
            out = out.concat(makeBolt(p, [p[0] + Math.cos(ang) * L, p[1] + Math.sin(ang) * L], depth + 1, wid * 0.55));
          }
          return out;
        };
        var strike = function (c) {
          var ang = Math.random() * 6.283, R0 = Rmax * (0.55 + Math.random() * 0.4);
          var from = [c[0] + Math.cos(ang) * R0, c[1] + Math.sin(ang) * R0 * SQ];
          var end = [c[0] + (Math.random() - 0.5) * Rmin * 2, c[1] + (Math.random() - 0.5) * Rmin * 2];
          bolts.push({ segs: makeBolt(from, end, 0, small ? 2.2 : 3), life: 0, max: 220 + Math.random() * 160, gold: Math.random() < 0.4 });
          flash = 1;
        };
        // ---- timeline (ms)
        var T_BUILD = 900, T_PEAK = 1800, T_FADE = 3700, T_END = 4900, T_CAPTURE = 700;
        var ease = function (x) { return x < 0 ? 0 : x > 1 ? 1 : x * x * (3 - 2 * x); };
        var inten = function (t) { return t < T_BUILD ? 0.3 * ease(t / T_BUILD) : t < T_PEAK ? 0.3 + 0.7 * ease((t - T_BUILD) / (T_PEAK - T_BUILD)) : t < T_FADE ? 1 : 1 - ease((t - T_FADE) / (T_END - T_FADE)); };
        // angular speed grows toward the eye (like a real vortex)
        var omega = function (r) { return 1.3 * dir * (0.9 + 3.2 * Math.pow(Rmin / Math.max(r, Rmin), 0.45) * 2.2); };
        var center = function (t) { var u = t / T_END; return [C0[0] + Math.sin(u * 3.1) * W * 0.03, C0[1] + Math.cos(u * 2.3) * H * 0.025]; };
        var P = function (c, r, a) { return [c[0] + Math.cos(a) * r, c[1] + Math.sin(a) * r * SQ]; };
        this.setState({ hwWind: 'cyclone' });
        // ---- capture every visible Halloween element and swirl it round the eye, then fling it out
        var anims = this._cyAnims = [];
        setTimeout(function () {
          if (!self._cyRaf) return;
          var ce = center(T_CAPTURE + 800);
          layer.querySelectorAll('.hw-g').forEach(function (g) {
            var kids = g.querySelectorAll('.hw-p, .hw-sp'), vis = false, bx = 0, by = 0, cnt = 0;
            kids.forEach(function (el) { var cs = getComputedStyle(el); if (cs.display === 'none' || +cs.opacity < 0.05) return; var r = el.getBoundingClientRect(); if (r.width < 1) return; vis = true; bx += r.left + r.width / 2; by += r.top + r.height / 2; cnt++; });
            var near = Math.random() < 0.5;
            g.style.zIndex = near ? '3' : '1';
            if (!vis) { anims.push(g.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 600, fill: 'forwards' })); return; }
            var cx = bx / cnt, cy = by / cnt, ccx = ce[0], ccy = ce[1] + top;
            g.style.transformOrigin = cx + 'px ' + cy + 'px';
            if (!near) g.style.filter = 'blur(1.2px) brightness(.85)';
            var dx0 = cx - ccx, dy0 = (cy - ccy) / SQ, r0 = Math.max(90, Math.hypot(dx0, dy0)), a0 = Math.atan2(dy0, dx0);
            var turns = 1.3 + Math.random() * 1.1, spin = dir * (540 + Math.random() * 900), far = Math.hypot(W, H) * 1.1, frames = [], N = 30;
            for (var s = 0; s <= N; s++) {
              var u = s / N, a = a0 + dir * 6.283 * turns * (u + 0.6 * u * u), r;
              r = u < 0.6 ? r0 * (1 - 0.7 * ease(u / 0.6)) : r0 * 0.3 + (far - r0 * 0.3) * Math.pow((u - 0.6) / 0.4, 1.7);
              var x = ccx + Math.cos(a) * r, y = ccy + Math.sin(a) * r * SQ;
              var sc = near ? 1 + 0.5 * Math.sin(Math.PI * Math.min(1, u * 1.25)) : 1 - 0.45 * Math.sin(Math.PI * u);
              frames.push({ transform: 'translate(' + (x - cx).toFixed(1) + 'px,' + (y - cy).toFixed(1) + 'px) rotate(' + (spin * u).toFixed(1) + 'deg) scale(' + sc.toFixed(3) + ')', opacity: u > 0.84 ? Math.max(0, 1 - (u - 0.84) / 0.16) : 1 });
            }
            anims.push(g.animate(frames, { duration: 1900 + Math.random() * 600, delay: Math.min(500, r0 / Rmax * 500) + Math.random() * 150, easing: 'cubic-bezier(.4,.05,.6,.95)', fill: 'forwards' }));
          });
        }, T_CAPTURE);
        // ---- render loop
        var t0 = performance.now(), last = t0;
        var frame = function (now) {
          if (!self.state.hw) { self.stopCyclone(); self.setState({ hwWind: '' }); self.scheduleWind(false); return; }
          var t = now - t0, dt = Math.min(50, now - last) / 1000; last = now;
          var I = inten(t), c = center(t), ts = t / 1000;
          ctx.globalCompositeOperation = 'destination-out';
          ctx.fillStyle = 'rgba(0,0,0,' + (t > T_FADE ? 0.18 : 0.26) + ')'; ctx.fillRect(0, 0, W, H);
          ctx.globalCompositeOperation = 'lighter';
          if (I > 0.02) {
            var reach = Rmax * (0.35 + 0.65 * ease(I * 1.3));            // cyclone grows outward while building
            // haze + glowing eye
            var g1 = ctx.createRadialGradient(c[0], c[1], 0, c[0], c[1], reach * 0.75);
            g1.addColorStop(0, 'rgba(255,190,230,' + (0.09 * I) + ')'); g1.addColorStop(0.3, 'rgba(200,170,255,' + (0.045 * I) + ')'); g1.addColorStop(1, 'rgba(200,170,255,0)');
            ctx.fillStyle = g1; ctx.fillRect(0, 0, W, H);
            var g2 = ctx.createRadialGradient(c[0], c[1], 0, c[0], c[1], Rmin * 2.6);
            g2.addColorStop(0, 'rgba(255,250,240,' + (0.28 * I) + ')'); g2.addColorStop(0.4, 'rgba(255,200,230,' + (0.14 * I) + ')'); g2.addColorStop(1, 'rgba(255,182,222,0)');
            ctx.fillStyle = g2; ctx.beginPath(); ctx.arc(c[0], c[1], Rmin * 2.6, 0, 6.283); ctx.fill();
            // spiral wind ribbons
            arms.forEach(function (am) {
              am.th += am.v * dt * (0.6 + 1.8 * I);
              if (am.th > TH) { am.th -= TH; am.len = 2.2 + Math.random() * 3.2; }
              var steps = small ? 36 : 56, pts = [];
              for (var s = 0; s <= steps; s++) {
                var th = am.th - am.len + am.len * s / steps; if (th < 0) continue;
                var r = Rmax * Math.exp(-am.k * th); if (r > reach) continue;
                var a = am.ph + dir * th + omega(r) * ts * 0.6;
                var p = P(c, r, a); p.push(r, s / steps); pts.push(p);
              }
              if (pts.length < 3) return;
              var col = am.c, n = pts.length;
              [[26 * am.w, 0.035], [10 * am.w, 0.08], [4.5 * am.w, 0.2], [2.2 * am.w, 0.45], [1.1, 0.55]].forEach(function (L, li) {
                ctx.lineCap = 'round'; ctx.lineJoin = 'round';
                var CH = 6;                                            // stroke in chunks so the ribbon tapers & fades at both ends
                for (var b = 0; b < CH; b++) {
                  var i0 = Math.floor(b * (n - 1) / CH), i1 = Math.floor((b + 1) * (n - 1) / CH); if (i1 <= i0) continue;
                  var mid = (b + 0.5) / CH, taper = Math.sin(Math.PI * mid), rr = pts[Math.floor((i0 + i1) / 2)][2];
                  var depthW = 0.45 + 0.75 * Math.min(1, rr / (Rmax * 0.5));
                  ctx.lineWidth = L[0] * taper * depthW * (small ? 0.7 : 1);
                  var al = L[1] * I * (0.25 + 0.75 * taper);
                  ctx.strokeStyle = li === 4 ? 'rgba(255,248,235,' + al + ')' : 'rgba(' + col[0] + ',' + col[1] + ',' + col[2] + ',' + al + ')';
                  ctx.beginPath(); ctx.moveTo(pts[i0][0], pts[i0][1]);
                  for (var m = i0 + 1; m < i1; m++) { var mx = (pts[m][0] + pts[m + 1][0]) / 2, my = (pts[m][1] + pts[m + 1][1]) / 2; ctx.quadraticCurveTo(pts[m][0], pts[m][1], mx, my); }
                  ctx.lineTo(pts[i1][0], pts[i1][1]); ctx.stroke();
                }
              });
            });
            // glowing particles on circular orbits (drawn as true arcs → perfectly round motion trails)
            orbs.forEach(function (o) {
              if (o.r > reach) return;
              o.a += omega(o.r) * dt * 0.7;
              o.r -= dt * (24 + 1600 / o.r) * I; if (o.r < Rmin * 1.2) o.r = Rmax * (0.5 + Math.random() * 0.45);
              var a1 = o.a, a0 = o.a - dir * o.len;
              ctx.save(); ctx.translate(c[0], c[1]); ctx.scale(1, SQ);
              ctx.strokeStyle = o.gold ? 'rgba(255,224,150,' + (0.6 * I) + ')' : 'rgba(255,200,235,' + (0.6 * I) + ')';
              ctx.lineWidth = o.sz; ctx.lineCap = 'round'; ctx.beginPath(); ctx.arc(0, 0, o.r, Math.min(a0, a1), Math.max(a0, a1)); ctx.stroke();
              ctx.fillStyle = 'rgba(255,250,240,' + (0.9 * I) + ')'; ctx.beginPath(); ctx.arc(Math.cos(a1) * o.r, Math.sin(a1) * o.r, o.sz * 0.9, 0, 6.283); ctx.fill();
              ctx.restore();
            });
            // cute hearts & stars twirling round the vortex
            ctx.globalCompositeOperation = 'source-over';
            cuties.forEach(function (cu) {
              cu.a += omega(cu.r) * dt * 0.6; cu.r -= dt * (30 + 1400 / cu.r) * I; cu.rot += cu.vr * dt; cu.ph += dt * 4;
              if (cu.r < Rmin * 1.6) cu.r = Rmax * (0.55 + Math.random() * 0.4);
              if (cu.r > reach) return;
              var p = P(c, cu.r, cu.a), z = cu.size * (0.75 + 0.15 * Math.sin(cu.ph)) * (0.6 + 0.5 * Math.min(1, cu.r / (Rmax * 0.5)));
              ctx.save(); ctx.globalAlpha = Math.min(1, I * 1.3) * 0.95; ctx.translate(p[0], p[1]); ctx.rotate(cu.rot); ctx.scale(z / 10, z / 10);
              ctx.shadowColor = cu.col; ctx.shadowBlur = 12; ctx.fillStyle = cu.col; ctx.beginPath();
              if (cu.heart) { ctx.moveTo(0, 3); ctx.bezierCurveTo(-10, -4, -5, -11, 0, -6); ctx.bezierCurveTo(5, -11, 10, -4, 0, 3); }
              else { for (var v = 0; v < 10; v++) { var rr = v % 2 ? 4 : 10, aa = v * Math.PI / 5 - Math.PI / 2; ctx.lineTo(Math.cos(aa) * rr, Math.sin(aa) * rr); } ctx.closePath(); }
              ctx.fill(); ctx.restore();
            });
            // leaves riding the vortex
            ctx.globalCompositeOperation = 'source-over';
            leaves.forEach(function (lf) {
              lf.a += omega(lf.r) * dt * 0.7; lf.r -= dt * (40 + 2000 / lf.r) * I; lf.rot += lf.vr * dt;
              if (lf.r < Rmin * 1.5) { lf.r = Rmax * (0.6 + Math.random() * 0.35); }
              if (lf.r > reach || !lf.img || !lf.img.complete || !lf.img.naturalWidth) return;
              var p = P(c, lf.r, lf.a), sz = lf.size * (0.6 + 0.5 * Math.min(1, lf.r / (Rmax * 0.5)));
              ctx.save(); ctx.globalAlpha = Math.min(1, I * 1.3); ctx.translate(p[0], p[1]); ctx.rotate(lf.rot); try { ctx.drawImage(lf.img, -sz / 2, -sz / 2, sz, sz); } catch (e) {} ctx.restore();
            });
          }
          // lightning strikes during the peak
          /* lightning removed */
          if (bolts.length) {
            ctx.globalCompositeOperation = 'lighter'; ctx.lineCap = 'round'; ctx.lineJoin = 'round';
            bolts = bolts.filter(function (bo) {
              bo.life += dt * 1000; if (bo.life > bo.max) return false;
              var k = 1 - bo.life / bo.max, fl = (Math.random() < 0.25 ? 0.4 : 1) * k;
              var glow = bo.gold ? '255,190,80' : '200,140,255';
              bo.segs.forEach(function (sg) {
                [[sg.w * 7, 'rgba(' + glow + ',' + (0.12 * fl) + ')'], [sg.w * 2.6, 'rgba(' + glow + ',' + (0.45 * fl) + ')'], [sg.w, 'rgba(255,255,255,' + (0.95 * fl) + ')']].forEach(function (L) {
                  ctx.lineWidth = L[0]; ctx.strokeStyle = L[1]; ctx.beginPath(); ctx.moveTo(sg.pts[0][0], sg.pts[0][1]);
                  for (var m = 1; m < sg.pts.length; m++) ctx.lineTo(sg.pts[m][0], sg.pts[m][1]); ctx.stroke();
                });
              });
              return true;
            });
          }
          if (flash > 0.01) { var gf = ctx.createRadialGradient(c[0], c[1], 0, c[0], c[1], Rmax * 0.8); gf.addColorStop(0, 'rgba(235,215,255,' + (0.22 * flash) + ')'); gf.addColorStop(1, 'rgba(160,100,255,0)'); ctx.fillStyle = gf; ctx.fillRect(0, 0, W, H); flash *= 0.8; }
          if (t < T_END + 400) { self._cyRaf = requestAnimationFrame(frame); return; }
          ctx.clearRect(0, 0, W, H);
          self._cyRaf = 0;
          self.setState({ hwWind: 'calm' });
          (self._cyAnims || []).forEach(function (a) { try { a.cancel(); } catch (e) {} });
          self._cyAnims = [];
          document.querySelectorAll('.hw-g').forEach(function (g) { g.style.zIndex = ''; g.style.transformOrigin = ''; g.style.filter = ''; });
          self._windT = setTimeout(function () {
            self.setState({ hwWind: 'return' });
            self._windT = setTimeout(function () { self.setState({ hwWind: '' }); self.scheduleWind(false); }, 1600);
          }, 900);
        };
        this._cyRaf = requestAnimationFrame(frame);
      }
      };
      H.paint();
      if (tg) tg.addEventListener('click', function () { H.stopCyclone(); var nv = !H.state.hw; try { localStorage.setItem(KEY, nv ? 'on' : 'off'); } catch (e) {} H.setState({ hw: nv, hwWind: '' }); H.scheduleWind(false); });
      if (cy) cy.addEventListener('click', function (e) { if (!H.state.hw || H._cyRaf) return; H.startCyclone(e && e.clientY != null ? e.clientY : null); });
      H.scheduleWind(true);
      window.__pjHwCtl = H;
    } catch (err) {}
  }
  installTapFx() {
    try {
      if (typeof window === 'undefined' || window.__pjTapFx) return;
      window.__pjTapFx = true;
      var mq = window.matchMedia ? window.matchMedia('(prefers-reduced-motion: reduce)') : null;
      var cv = document.createElement('canvas');
      cv.setAttribute('aria-hidden', 'true');
      cv.className = 'pj-tapfx';
      cv.style.cssText = 'position:fixed;left:0;top:0;pointer-events:none;z-index:2147483000;display:block';
      document.body.appendChild(cv);
      var ctx = cv.getContext('2d'), W = 0, H = 0, DPR = 1, fx = [], raf = 0, last = 0;
      var size = function () { DPR = Math.min(2, window.devicePixelRatio || 1); W = window.innerWidth; H = window.innerHeight; cv.width = Math.round(W * DPR); cv.height = Math.round(H * DPR); cv.style.width = W + 'px'; cv.style.height = H + 'px'; };
      size(); window.addEventListener('resize', size, { passive: true });
      var COLS = ['#a855f7', '#c084fc', '#7c3aed', '#ffd21f', '#ffb800', '#ff8a00', '#fff3b0'];
      var coarse = window.matchMedia && window.matchMedia('(pointer: coarse)').matches;
      var ease = function (t) { return 1 - Math.pow(1 - t, 3); };
      var star = function (x, y, r, rot) {
        ctx.beginPath();
        for (var i = 0; i < 8; i++) { var a = rot + i * Math.PI / 4, rr = i % 2 ? r * 0.28 : r; ctx.lineTo(x + Math.cos(a) * rr, y + Math.sin(a) * rr); }
        ctx.closePath(); ctx.fill();
      };
      var burst = function (x, y) {
        var now = performance.now(), n = coarse ? 10 : 14, parts = [], sp = [];
        for (var i = 0; i < n; i++) {
          var a = Math.random() * Math.PI * 2, v = 90 + Math.random() * 170;
          parts.push({ a: a, v: v, r: 1.4 + Math.random() * 2.2, c: COLS[(Math.random() * COLS.length) | 0], life: 420 + Math.random() * 260 });
        }
        for (var j = 0; j < 4; j++) {
          var b = Math.random() * Math.PI * 2, d = 14 + Math.random() * 30;
          sp.push({ x: Math.cos(b) * d, y: Math.sin(b) * d, r: 3 + Math.random() * 3.5, delay: 40 + Math.random() * 160, rot: Math.random() * Math.PI });
        }
        var rays = [], nr = coarse ? 6 : 8, base = Math.random() * Math.PI;
        for (var m = 0; m < nr; m++) rays.push({ a: base + m * Math.PI * 2 / nr + (Math.random() - 0.5) * 0.35, len: 30 + Math.random() * 26, d: Math.random() * 50, gold: m % 2 === 0 });
        fx.push({ t0: now, x: x, y: y, parts: parts, sp: sp, rays: rays, rot: Math.PI / 4 * (Math.random() < 0.5 ? 0 : 1) + (Math.random() - 0.5) * 0.3 });
        if (fx.length > 8) fx.shift();
        if (!raf) { last = now; raf = requestAnimationFrame(loop); }
      };
      var loop = function (now) {
        ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
        ctx.clearRect(0, 0, W, H);
        ctx.globalCompositeOperation = 'lighter';
        for (var k = fx.length - 1; k >= 0; k--) {
          var f = fx[k], t = now - f.t0, alive = false;
          // lens-flare star: crossed light streaks that snap open then shrink
          if (t < 440) {
            alive = true;
            var q = t / 440, op = q < 0.18 ? q / 0.18 : 1 - (q - 0.18) / 0.82, L = (coarse ? 26 : 34) * (0.55 + ease(Math.min(1, q * 2.2)) * 0.6) * (1 - q * 0.35);
            ctx.save(); ctx.translate(f.x, f.y); ctx.rotate(f.rot);
            for (var a2 = 0; a2 < 4; a2++) {
              var len = a2 % 2 ? L * 0.62 : L, thick = a2 % 2 ? 1.6 : 2.4;
              var lg = ctx.createLinearGradient(0, 0, len, 0);
              lg.addColorStop(0, 'rgba(255,248,220,' + op + ')'); lg.addColorStop(0.35, 'rgba(255,196,40,' + (0.85 * op) + ')'); lg.addColorStop(1, 'rgba(168,85,247,0)');
              ctx.fillStyle = lg; ctx.beginPath(); ctx.moveTo(0, -thick); ctx.lineTo(len, 0); ctx.lineTo(0, thick); ctx.closePath(); ctx.fill();
              ctx.rotate(Math.PI / 2);
            }
            ctx.restore();
          }
          // light streaks: thin tapered rays shooting outward
          for (var ri = 0; ri < f.rays.length; ri++) {
            var ry = f.rays[ri], tr = t - ry.d, dr = 380;
            if (tr < 0) { alive = true; continue; } if (tr > dr) continue; alive = true;
            var er = ease(tr / dr), r0 = 8 + er * ry.len * 0.75, r1 = 8 + er * ry.len, al = 1 - tr / dr;
            var x0 = f.x + Math.cos(ry.a) * r0, y0 = f.y + Math.sin(ry.a) * r0, x1 = f.x + Math.cos(ry.a) * r1, y1 = f.y + Math.sin(ry.a) * r1;
            var sg = ctx.createLinearGradient(x0, y0, x1, y1);
            sg.addColorStop(0, 'rgba(124,58,237,0)'); sg.addColorStop(0.4, ry.gold ? 'rgba(255,138,0,' + (0.5 * al) + ')' : 'rgba(168,85,247,' + (0.5 * al) + ')'); sg.addColorStop(1, ry.gold ? 'rgba(255,200,40,' + al + ')' : 'rgba(216,180,254,' + al + ')');
            ctx.save(); ctx.strokeStyle = sg; ctx.lineWidth = 2.8 * al + 0.6; ctx.lineCap = 'round'; ctx.shadowColor = ry.gold ? '#ff8a00' : '#a855f7'; ctx.shadowBlur = 8;
            ctx.beginPath(); ctx.moveTo(x0, y0); ctx.lineTo(x1, y1); ctx.stroke(); ctx.restore();
          }
          // particles
          for (var i = 0; i < f.parts.length; i++) {
            var pt = f.parts[i]; if (t > pt.life) continue; alive = true;
            var u = t / pt.life, dist = ease(u) * pt.v * 0.42, px = f.x + Math.cos(pt.a) * dist, py = f.y + Math.sin(pt.a) * dist + u * u * 10;
            ctx.globalAlpha = 1 - u; ctx.fillStyle = pt.c; ctx.shadowColor = pt.c; ctx.shadowBlur = 8;
            ctx.beginPath(); ctx.arc(px, py, pt.r * (1 - u * 0.6), 0, Math.PI * 2); ctx.fill();
          }
          // twinkles
          for (var s = 0; s < f.sp.length; s++) {
            var st = f.sp[s], ts = t - st.delay, sd = 380; if (ts < 0) { alive = true; continue; } if (ts > sd) continue; alive = true;
            var w = Math.sin(Math.PI * ts / sd);
            ctx.globalAlpha = w; ctx.fillStyle = s % 2 ? '#fff3b0' : '#e9d5ff'; ctx.shadowColor = s % 2 ? '#ffb800' : '#a855f7'; ctx.shadowBlur = 10;
            star(f.x + st.x, f.y + st.y - ts * 0.02, st.r * w, st.rot + ts * 0.004);
          }
          ctx.globalAlpha = 1; ctx.shadowBlur = 0;
          if (!alive) fx.splice(k, 1);
        }
        ctx.globalCompositeOperation = 'source-over';
        if (fx.length) raf = requestAnimationFrame(loop); else { raf = 0; ctx.clearRect(0, 0, W, H); }
      };
      window.__pjBurst = function (x, y, big) { if (mq && mq.matches) return; burst(x, y); if (big) { setTimeout(function () { burst(x - 18, y + 6); }, 70); setTimeout(function () { burst(x + 18, y - 4); }, 140); } };
      var down = null;
      var fire = function (e) {
        if (mq && mq.matches) return;
        burst(e.clientX, e.clientY);
      };
      document.addEventListener('pointerdown', function (e) {
        if (e.button > 0) return;
        if (e.pointerType === 'mouse') { fire(e); down = null; }
        else down = { x: e.clientX, y: e.clientY, t: performance.now() };
      }, { capture: true, passive: true });
      document.addEventListener('pointerup', function (e) {
        if (!down || e.pointerType === 'mouse') return;
        var d = down; down = null;
        if (Math.abs(e.clientX - d.x) < 12 && Math.abs(e.clientY - d.y) < 12 && performance.now() - d.t < 700) fire(e);
      }, { capture: true, passive: true });
      document.addEventListener('pointercancel', function () { down = null; }, { capture: true, passive: true });
      document.addEventListener('touchstart', function () {}, { passive: true });
    } catch (err) {}
  }
  installMotion() {
    try {
      if (typeof window === 'undefined' || window.__pjMotion) return;
      window.__pjMotion = true;
      var mq = window.matchMedia ? window.matchMedia('(prefers-reduced-motion: reduce)') : null;
      if (mq && mq.matches) return;
      var root = document.documentElement;
      root.classList.add('pjm');
      var css = [
        '@media (prefers-reduced-motion: no-preference){',
        /* game cards: gentle lift on the art tile (Main grid cards had zoom + glow but no lift) */
        '.pjm .lp-gcard-art{transition:translate .3s cubic-bezier(.16,1,.3,1),box-shadow .3s ease}',
        '.pjm .lp-gcard:hover .lp-gcard-art{translate:0 -4px}',
        /* animated active states */
        '.pjm .tb-tab[aria-current="page"] .tb-ic,.pjm .lp-cat[aria-current="page"] .lp-cat-ic,.pjm .cs-cat[aria-current="page"] img,.pjm .lp-sd-link[aria-current="page"] .lp-sd-ic,.pjm .by-m[aria-checked="true"],.pjm .by-a[aria-checked="true"],.pjm .wd-m[aria-checked="true"]{animation:pjm-pop .42s cubic-bezier(.34,1.56,.64,1)}',
        '@keyframes pjm-pop{0%{scale:.86}55%{scale:1.08}100%{scale:1}}',
        /* image skeleton shimmer while artwork loads */
        '.pjm img[data-pjm-ld]{background-color:rgba(30,22,72,.9);background-image:linear-gradient(100deg,transparent 30%,rgba(196,181,253,.16) 50%,transparent 70%);background-size:220% 100%;animation:pjm-sh 1.15s linear infinite}',
        '@keyframes pjm-sh{from{background-position:120% 0}to{background-position:-120% 0}}',
        /* spin wheel: pointer ticks are driven per segment instead of a constant jitter */
        '.pjm-wheel .lp-wheel.is-spinning .lp-wheel-pointer{animation:none}',
        '}'
      ].join('\n');
      var st = document.createElement('style'); st.setAttribute('data-pjm', ''); st.textContent = css; document.head.appendChild(st);

      var SPRING = 'cubic-bezier(.34,1.56,.64,1)', OUT = 'cubic-bezier(.16,1,.3,1)';
      var anim = function (el, kf, o) { try { return el.animate(kf, o); } catch (e) { return null; } };

      /* ---------- 1. tactile press feedback (composes with existing transforms via the scale property) ---------- */
      var PRESS = '.pj-btn,.lp-qa-btn,.lp-viewall,.lp-spin-btn,.lp-wheel-hub,.lp-au-submit,.lp-hstep-cta,.lp-chip,.lp-plat,.lp-promo,.lp-hot-card,.lp-gcard-link,.lp-sb-banner,.lp-faq-q,.by-buy,.by-m,.by-p,.by-a,.by-help-cta,.cs-btn,.cs-seeall,.cs-arr,.cs-bnav,.cs-spin,.cs-strip,.cs-card-a,.cs-promo,.wl-btn,.wl-qa-btn,.wl-chip,.wl-pill-link,.wl-rc,.wl-tc,.wd-m,.wd-q,.wd-max,.wd-edit,.wd-ck-cta,.pf-top-btn';
      var pressed = null, pressAnim = null, pressTimer = 0, pressPt = null;
      var release = function (soft) {
        clearTimeout(pressTimer); pressTimer = 0;
        if (!pressed) return;
        var el = pressed; pressed = null;
        var wasDown = !!pressAnim;
        if (pressAnim) { try { pressAnim.cancel(); } catch (e) {} pressAnim = null; }
        if (!wasDown) return;
        if (soft === true) anim(el, [{ scale: '.955' }, { scale: '1' }], { duration: 180, easing: 'ease-out' });
        else anim(el, [{ scale: '.955' }, { scale: '1.025', offset: .55 }, { scale: '1' }], { duration: 340, easing: 'ease-out' });
      };
      var pressNow = function () { pressTimer = 0; if (pressed) pressAnim = anim(pressed, [{ scale: '1' }, { scale: '.955' }], { duration: 110, easing: 'ease-out', fill: 'forwards' }); };
      document.addEventListener('pointermove', function (e) {
        if (!pressed || !pressPt) return;
        if (Math.abs(e.clientX - pressPt.x) > 7 || Math.abs(e.clientY - pressPt.y) > 7) release(true);
      }, { capture: true, passive: true });
      document.addEventListener('scroll', function () { if (pressed) release(true); }, { capture: true, passive: true });
      document.addEventListener('pointerdown', function (e) {
        if (e.button > 0) return;
        var el = e.target && e.target.closest ? e.target.closest(PRESS) : null;
        if (!el || el.disabled || el.getAttribute('aria-disabled') === 'true' || el.closest('.hw,.lp-cf,.lp-header,.by-top,.nv-tabbar')) return;
        release(true);
        pressed = el; pressPt = { x: e.clientX, y: e.clientY };
        if (e.pointerType === 'mouse') pressNow(); else pressTimer = setTimeout(pressNow, 70);
      }, { capture: true, passive: true });
      document.addEventListener('pointerup', function () {
        if (pressed && !pressAnim && pressTimer) { clearTimeout(pressTimer); pressNow(); }
        release(false);
      }, { capture: true, passive: true });
      ['pointercancel', 'dragstart'].forEach(function (t) { document.addEventListener(t, function () { release(true); }, { capture: true, passive: true }); });

      /* ---------- 2. scroll reveals with staggered card entrances ---------- */
      var REVEAL = '.lp-sec-head,.lp-st,.lp-gcard,.lp-hot-card,.lp-plat,.lp-promo,.lp-why-card,.lp-rev,.lp-qa-cell,.lp-hstep,.lp-faq-item,.lp-wl-row,.lp-spin-card,.cs-head,.cs-card,.cs-promo,.cs-cat,.cs-strip,.by-card,.by-p,.wl-card,.wl-qa-btn,.wl-rc,.wd-m,.pf-col';
      var seen = new WeakSet(), queue = [], qTimer = 0;
      var flush = function () {
        qTimer = 0;
        var items = queue.splice(0, queue.length);
        items.sort(function (a, b) { var ra = a.getBoundingClientRect(), rb = b.getBoundingClientRect(); return (ra.top - rb.top) || (ra.left - rb.left); });
        items.forEach(function (el, i) {
          anim(el, [{ opacity: 0, translate: '0 18px' }, { opacity: 1, translate: '0 0' }], { duration: 520, delay: Math.min(i, 9) * 55, easing: OUT, fill: 'backwards' });
        });
      };
      var io = 'IntersectionObserver' in window ? new IntersectionObserver(function (ents) {
        ents.forEach(function (en) {
          if (!en.isIntersecting) return;
          io.unobserve(en.target);
          queue.push(en.target);
        });
        if (queue.length && !qTimer) qTimer = setTimeout(flush, 16);
      }, { rootMargin: '0px 0px -6% 0px', threshold: 0.08 }) : null;
      var vh = function () { return window.innerHeight || 800; };
      var track = function (el, initial) {
        if (seen.has(el)) return; seen.add(el);
        if (!io) return;
        var par = el.parentElement;
        if (par) { var ox = getComputedStyle(par).overflowX; if ((ox === 'auto' || ox === 'scroll') && par.scrollWidth > par.clientWidth + 2) return; }
        var r = el.getBoundingClientRect();
        if (initial && r.top < vh() && r.bottom > 0) return; // already on screen at load: never hide it
        io.observe(el);
      };
      var scan = function (node, initial) {
        if (!node || node.nodeType !== 1) return;
        if (node.matches && node.matches(REVEAL)) track(node, initial);
        if (node.querySelectorAll) { var l = node.querySelectorAll(REVEAL); for (var i = 0; i < l.length; i++) track(l[i], initial); }
      };

      /* ---------- 3. artwork: skeleton shimmer while loading, soft fade-in when ready ---------- */
      var ART = '.lp-gcard-art img,.lp-hot-card img,.lp-plat img,.lp-promo img,.lp-cf-card img,.cs-art img,.cs-promo img,.cs-card-a img,.lp-why-art';
      var prepImg = function (img) {
        if (img.__pjm) return; img.__pjm = 1;
        if (img.complete && img.naturalWidth) return;
        img.setAttribute('data-pjm-ld', '');
        var done = function (ok) {
          img.removeAttribute('data-pjm-ld');
          if (ok) anim(img, [{ opacity: 0 }, { opacity: 1 }], { duration: 380, easing: 'ease-out' });
        };
        img.addEventListener('load', function () { done(true); }, { once: true });
        img.addEventListener('error', function () { done(false); }, { once: true });
      };
      var scanImgs = function (node) {
        if (!node || node.nodeType !== 1) return;
        if (node.tagName === 'IMG' && node.matches(ART)) prepImg(node);
        if (node.querySelectorAll) { var l = node.querySelectorAll(ART); for (var i = 0; i < l.length; i++) if (l[i].tagName === 'IMG') prepImg(l[i]); }
      };

      /* ---------- 4. feedback panels: success pops (with a burst), errors shake, others slide in ---------- */
      var FEED = '.lp-spin-result,.lp-au-done,.by-alert,.wd-alert,.wd-err,.wd-res-ic,.wl-state,.wl-dr-status,.wd-proc';
      var feedback = function (el) {
        var host = el.closest('section,.wl-card,.by-card') || el;
        var cls = ((el.className && el.className.baseVal !== undefined ? el.className.baseVal : el.className) || '') + ' ' + (host.className || '');
        if (/is-err|error|fail|reject/i.test(cls)) {
          anim(el, [{ translate: '0 0' }, { translate: '-6px 0' }, { translate: '5px 0' }, { translate: '-3px 0' }, { translate: '2px 0' }, { translate: '0 0' }], { duration: 420, easing: 'ease-out' });
          return;
        }
        var good = /is-ok|success|complete|submitted|lp-spin-result|lp-au-done|wd-res-ic/i.test(cls) && !/pend|cancel|warn/i.test(cls);
        anim(el, [{ opacity: 0, scale: '.86' }, { opacity: 1, scale: '1.04', offset: .6 }, { opacity: 1, scale: '1' }], { duration: 480, easing: OUT });
        if (good && window.__pjBurst) {
          setTimeout(function () {
            var r = el.getBoundingClientRect();
            if (r.width && r.bottom > 0 && r.top < vh()) window.__pjBurst(r.left + Math.min(r.width / 2, 40), r.top + r.height / 2, true);
          }, 120);
        }
      };

      /* ---------- 5. wallet balances: count up on first show, glow when the value changes ---------- */
      var BAL = '.wl-bal-v,.by-bal';
      var numRe = /(\d[\d,]*(?:\.\d+)?)/;
      var textNodeOf = function (el) {
        var w = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null), n;
        while ((n = w.nextNode())) if (numRe.test(n.nodeValue) && !(n.parentNode && n.parentNode.classList && n.parentNode.classList.contains('lp-sr'))) return n;
        return null;
      };
      var countUp = function (el) {
        if (el.__pjmBal) return; el.__pjmBal = 1;
        var tn = textNodeOf(el); if (!tn) return;
        var full = tn.nodeValue, m = full.match(numRe); if (!m) return;
        var str = m[1], target = parseFloat(str.replace(/,/g, '')); if (!isFinite(target) || target <= 0) return;
        var dec = (str.split('.')[1] || '').length, comma = str.indexOf(',') >= 0, t0 = performance.now(), D = 900;
        var fmt = function (v) { var s = v.toFixed(dec); if (comma) { var p = s.split('.'); p[0] = p[0].replace(/\B(?=(\d{3})+(?!\d))/g, ','); s = p.join('.'); } return s; };
        el.__pjmCounting = true;
        var step = function (now) {
          if (!tn.parentNode) { el.__pjmCounting = false; return; }
          var p = Math.min(1, (now - t0) / D), e = 1 - Math.pow(1 - p, 3);
          tn.nodeValue = p < 1 ? full.replace(str, fmt(target * e)) : full;
          if (p < 1) requestAnimationFrame(step); else setTimeout(function () { el.__pjmCounting = false; }, 0);
        };
        requestAnimationFrame(step);
        el.__pjmLast = full;
      };
      var balChanged = function (el) {
        if (el.__pjmCounting) return;
        var tn = textNodeOf(el); if (!tn) return;
        if (el.__pjmLast === undefined) { el.__pjmLast = tn.nodeValue; return; }
        if (tn.nodeValue === el.__pjmLast) return;
        el.__pjmLast = tn.nodeValue;
        anim(el, [{ filter: 'brightness(1)' }, { filter: 'brightness(1.6) drop-shadow(0 0 10px rgba(255,200,40,.85))', offset: .3 }, { filter: 'brightness(1)' }], { duration: 700, easing: 'ease-out' });
        anim(el, [{ scale: '1' }, { scale: '1.06', offset: .3 }, { scale: '1' }], { duration: 520, easing: SPRING });
      };
      var scanBal = function (node, initial) {
        if (!node || node.nodeType !== 1) return;
        var list = node.matches && node.matches(BAL) ? [node] : [];
        if (node.querySelectorAll) list = list.concat([].slice.call(node.querySelectorAll(BAL)));
        list.forEach(function (el) {
          if (el.classList.contains('wl-bal-v')) { var r = el.getBoundingClientRect(); if (r.width && r.top < vh() * 1.5) countUp(el); }
          else if (el.__pjmLast === undefined) { var tn = textNodeOf(el); el.__pjmLast = tn ? tn.nodeValue : ''; }
        });
      };

      /* ---------- 6. spin & win: per-segment pointer ticks, landing settle, reward reveal ---------- */
      root.classList.add('pjm-wheel');
      var wheelWas = false, lastSeg = null, lastTick = 0, wheelRaf = 0;
      var wheelLoop = function () {
        wheelRaf = 0;
        var wheel = document.querySelector('.lp-wheel');
        if (!wheel) return;
        var spinning = wheel.classList.contains('is-spinning');
        if (spinning) {
          var rotEl = wheel.querySelector('.lp-wheel-rot'), ptr = wheel.querySelector('.lp-wheel-pointer');
          var tr = rotEl ? getComputedStyle(rotEl).transform : 'none', ang = 0;
          if (tr && tr !== 'none') { var mm = tr.match(/matrix\(([^)]+)\)/); if (mm) { var v = mm[1].split(','); ang = Math.atan2(parseFloat(v[1]), parseFloat(v[0])) * 180 / Math.PI; } }
          var seg = Math.floor(((ang % 360) + 360) % 360 / 45);
          var now = performance.now();
          if (lastSeg !== null && seg !== lastSeg && ptr) {
            var gap = now - lastTick; lastTick = now;
            var d = Math.max(70, Math.min(260, gap * 0.9));
            anim(ptr, [{ rotate: '0deg' }, { rotate: '-16deg', offset: .25 }, { rotate: '0deg' }], { duration: d, easing: 'ease-out' });
          }
          lastSeg = seg;
          wheelWas = true;
          wheelRaf = requestAnimationFrame(wheelLoop);
        } else if (wheelWas) {
          wheelWas = false; lastSeg = null;
          anim(wheel, [{ rotate: '0deg' }, { rotate: '2.2deg', offset: .3 }, { rotate: '-1deg', offset: .65 }, { rotate: '0deg' }], { duration: 620, easing: 'ease-out' });
          var hub = wheel.querySelector('.lp-wheel-hub');
          if (hub) anim(hub, [{ scale: '1' }, { scale: '1.18', offset: .35 }, { scale: '1' }], { duration: 560, easing: SPRING });
          if (window.__pjBurst) { var r = wheel.getBoundingClientRect(); window.__pjBurst(r.left + r.width / 2, r.top + r.height * 0.05, true); }
        }
      };
      var kickWheel = function () { if (!wheelRaf) wheelRaf = requestAnimationFrame(wheelLoop); };

      /* ---------- logo shine: fit the shine layer exactly over each logo image ---------- */
      var fitLogos = function () {
        var ls = document.querySelectorAll('.lp-logo,.lp-side-logo,.by-logo,.by-side-logo');
        for (var i = 0; i < ls.length; i++) {
          var a = ls[i], im = a.querySelector('img'); if (!im) continue;
          var ra = a.getBoundingClientRect(), ri = im.getBoundingClientRect(); if (!ri.width) continue;
          a.style.setProperty('--lgx', (ri.left - ra.left) + 'px'); a.style.setProperty('--lgy', (ri.top - ra.top) + 'px');
          a.style.setProperty('--lgw', ri.width + 'px'); a.style.setProperty('--lgh', ri.height + 'px');
        }
      };
      fitLogos(); setTimeout(fitLogos, 600); window.addEventListener('resize', fitLogos, { passive: true });
      document.addEventListener('load', function (e) { if (e.target && e.target.tagName === 'IMG' && e.target.closest && e.target.closest('.lp-logo,.lp-side-logo,.by-logo,.by-side-logo')) fitLogos(); }, true);

      /* ---------- observe the page ---------- */
      var body = document.body;
      scan(body, true); scanImgs(body); scanBal(body, true);
      var mo = new MutationObserver(function (muts) {
        for (var i = 0; i < muts.length; i++) {
          var m = muts[i];
          if (m.type === 'childList') {
            for (var j = 0; j < m.addedNodes.length; j++) {
              var n = m.addedNodes[j];
              if (n.nodeType !== 1) { if (n.nodeType === 3 && n.parentNode && n.parentNode.closest && n.parentNode.closest(BAL)) balChanged(n.parentNode.closest(BAL)); continue; }
              if (n.closest && n.closest('.hw')) continue;
              scan(n, false); scanImgs(n); scanBal(n, false);
              if (n.matches && n.matches(FEED)) feedback(n);
              else if (n.querySelector) { var fb = n.querySelector(FEED); if (fb) feedback(fb); }
            }
            var bt = m.target && m.target.closest ? m.target.closest(BAL) : null; if (bt) balChanged(bt);
          } else if (m.type === 'characterData') {
            var p = m.target.parentNode, b = p && p.closest ? p.closest(BAL) : null; if (b) balChanged(b);
          } else if (m.type === 'attributes' && m.target.classList && m.target.classList.contains('lp-wheel')) {
            kickWheel();
          }
        }
      });
      mo.observe(body, { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: ['class'] });
      kickWheel();
    } catch (err) {}
  }
  renderVals() {
    var NL = this.navLinks();
    var self = this, st = this.state, D = {"asOf": "2026-10-13T11:00", "balances": {"gc": 245800, "sc": 37.2, "scAvailable": 30.7, "scRedeemable": 18.5}, "config": {"limits": {"min": 10, "max": 500}, "methods": [{"key": "bank", "name": "Bank Account", "sub": "Checking or savings account"}, {"key": "card", "name": "Debit Card", "sub": "Payout to an eligible debit card"}, {"key": "wallet", "name": "E-Wallet", "sub": "Digital wallet payout", "disabled": true, "disabledReason": "Not available yet"}]}, "savedPayout": {"name": "Joel M", "routing": "123456789", "acct": "000123454821", "acct2": "000123454821", "atype": "checking", "cname": "", "cnum": "", "exp": ""}, "newRequest": {"id": "PJ-7K2Q8MZR", "ref": "RD-40933106"}, "history": [{"id": "PJ-7K2H1TPD", "ref": "RD-40918275", "ts": "2026-10-10T18:22", "amount": 25.0, "method": "Bank Account •••• 4821", "status": "pending"}, {"id": "PJ-7K28LMW2", "ref": "RD-40877102", "ts": "2026-10-04T09:30", "amount": 15.0, "method": "Bank Account •••• 4821", "status": "cancelled"}, {"id": "PJ-7K21WQ9C", "ref": "RD-40765539", "ts": "2026-09-27T15:51", "amount": 40.0, "method": "Bank Account •••• 4821", "status": "completed"}, {"id": "PJ-7K1V2XQA", "ref": "RD-40702218", "ts": "2026-09-20T12:04", "amount": 20.0, "method": "Debit Card •••• 1180", "status": "rejected", "reason": "The name on the payout account didn’t match the name on your PlayJuwa account."}, {"id": "PJ-7K1RQV7G", "ref": "RD-40590120", "ts": "2026-09-12T20:02", "amount": 30.0, "method": "Debit Card •••• 1180", "status": "failed"}, {"id": "PJ-7K1N4KD8", "ref": "RD-40511873", "ts": "2026-08-28T10:40", "amount": 50.0, "method": "Bank Account •••• 4821", "status": "completed"}, {"id": "PJ-7K1J9TB2", "ref": "RD-40466250", "ts": "2026-08-14T17:15", "amount": 12.5, "method": "Bank Account •••• 4821", "status": "completed"}, {"id": "PJ-7K1E6GW5", "ref": "RD-40402917", "ts": "2026-07-30T08:55", "amount": 35.0, "method": "Debit Card •••• 1180", "status": "completed"}, {"id": "PJ-7K19ZP3H", "ref": "RD-40350044", "ts": "2026-07-12T21:33", "amount": 10.0, "method": "Bank Account •••• 4821", "status": "cancelled"}]}, C = D.config;
    var NOW = new Date(D.asOf);
    var BAL = st.elig === 'insufficient' ? Object.assign({}, D.balances, { scRedeemable: 0 }) : D.balances;
    var STATUS = { pending: 'Pending', completed: 'Completed', failed: 'Failed', rejected: 'Rejected', cancelled: 'Cancelled', submitted: 'Submitted' };
    var PILL = { pending: 'by-pill is-wait', completed: 'by-pill is-ok', failed: 'by-pill is-err', rejected: 'by-pill is-err', cancelled: 'by-pill is-off', submitted: 'by-pill is-wait' };
    var sc = function (n) { return Number(n).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }); };
    var dt = function (s) { return new Date(s); };
    var fDate = function (s) { return dt(s).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }); };
    var fTime = function (s) { return dt(s).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' }); };
    var fLong = function (s) { return dt(s).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' }) + ' · ' + fTime(s); };
    var last4 = function (v) { v = String(v || '').replace(/\D/g, ''); return v ? '•••• ' + v.slice(-4) : '—'; };
    var M = {}; C.methods.forEach(function (m) { M[m.key] = m; });
    var loading = st.load === 'loading', error = st.load === 'error', ready = st.load === 'ready';

    // ---------- details validation ----------
    var f = st.f, digits = function (v) { return String(v || '').replace(/\D/g, ''); };
    var luhn = function (n) { var s = 0, alt = false; for (var i = n.length - 1; i >= 0; i--) { var x = +n[i]; if (alt) { x *= 2; if (x > 9) x -= 9; } s += x; alt = !alt; } return s % 10 === 0; };
    var errs = {};
    if (st.method === 'bank') {
      if (!f.name.trim()) errs.name = 'Enter the account holder’s full name.'; else if (!/^[A-Za-z][A-Za-z .'-]{1,}$/.test(f.name.trim())) errs.name = 'Use letters only, as shown on your bank account.';
      if (!digits(f.routing)) errs.routing = 'Enter your 9-digit routing number.'; else if (digits(f.routing).length !== 9) errs.routing = 'Routing numbers are exactly 9 digits.';
      var a = digits(f.acct);
      if (!a) errs.acct = 'Enter your account number.'; else if (a.length < 4 || a.length > 17) errs.acct = 'Account numbers are 4 to 17 digits.';
      if (!digits(f.acct2)) errs.acct2 = 'Re-enter your account number.'; else if (digits(f.acct2) !== a) errs.acct2 = 'Account numbers don’t match.';
    }
    if (st.method === 'card') {
      if (!f.cname.trim()) errs.cname = 'Enter the name on the card.';
      var cn = digits(f.cnum);
      if (!cn) errs.cnum = 'Enter your 16-digit card number.'; else if (cn.length !== 16 || !luhn(cn)) errs.cnum = 'This card number isn’t valid. Check it and try again.';
      var m = /^(\d{2})\s*\/\s*(\d{2})$/.exec(f.exp || '');
      if (!f.exp) errs.exp = 'Enter the expiry date (MM/YY).';
      else if (!m || +m[1] < 1 || +m[1] > 12) errs.exp = 'Use the format MM/YY.';
      else { var ey = 2000 + +m[2], em = +m[1]; if (ey < NOW.getFullYear() || (ey === NOW.getFullYear() && em < NOW.getMonth() + 1)) errs.exp = 'This card has expired.'; }
    }
    var errKeys = Object.keys(errs);
    var setF = function (k, fmt) { return function (e) { var v = e.currentTarget.value; if (fmt) v = fmt(v); var o = Object.assign({}, self.state.f); o[k] = v; self.setState({ f: o }); }; };
    var onlyDigits = function (n) { return function (v) { return v.replace(/\D/g, '').slice(0, n); }; };
    var cardFmt = function (v) { return v.replace(/\D/g, '').slice(0, 16).replace(/(\d{4})(?=\d)/g, '$1 '); };
    var expFmt = function (v) { var x = v.replace(/\D/g, '').slice(0, 4); return x.length > 2 ? x.slice(0, 2) + '/' + x.slice(2) : x; };
    var fieldDefs = st.method === 'bank' ? [
      { k: 'name', label: 'Account holder name', ph: 'Full name on the account', ac: 'name', mode: 'text', max: 60, wide: 'is-wide' },
      { k: 'routing', label: 'Routing number', ph: '9 digits', ac: 'off', mode: 'numeric', max: 9, fmt: onlyDigits(9) },
      { k: 'acct', label: 'Account number', ph: '4–17 digits', ac: 'off', mode: 'numeric', max: 17, fmt: onlyDigits(17), secret: true },
      { k: 'acct2', label: 'Confirm account number', ph: 'Re-enter account number', ac: 'off', mode: 'numeric', max: 17, fmt: onlyDigits(17), secret: true, wide: 'is-wide' }
    ] : st.method === 'card' ? [
      { k: 'cname', label: 'Name on card', ph: 'Full name as printed', ac: 'cc-name', mode: 'text', max: 60, wide: 'is-wide' },
      { k: 'cnum', label: 'Debit card number', ph: '1234 5678 9012 3456', ac: 'off', mode: 'numeric', max: 19, fmt: cardFmt, secret: true },
      { k: 'exp', label: 'Expiry (MM/YY)', ph: 'MM/YY', ac: 'off', mode: 'numeric', max: 5, fmt: expFmt }
    ] : [];
    var fields = fieldDefs.map(function (x) {
      var showE = st.showErr && errs[x.k];
      var rev = !!st.reveal[x.k];
      return {
        id: 'wd-' + x.k, label: x.label, ph: x.ph, ac: x.ac, mode: x.mode, max: String(x.max), wide: x.wide || '',
        type: x.secret && !rev ? 'password' : 'text', value: f[x.k] || '',
        hasErr: showE ? 'true' : 'false', msg: showE ? errs[x.k] : (x.secret ? 'Hidden for your security — tap the eye to check it.' : ''),
        onInput: setF(x.k, x.fmt),
        canReveal: !!x.secret, revealed: rev ? 'true' : 'false', revealLabel: (rev ? 'Hide ' : 'Show ') + x.label.toLowerCase(),
        toggle: function () { var r = Object.assign({}, self.state.reveal); r[x.k] = !r[x.k]; self.setState({ reveal: r }); }
      };
    });
    var payoutNum = st.method === 'bank' ? f.acct : st.method === 'card' ? f.cnum : '';
    var payoutMask = st.method ? (st.method === 'bank' ? (f.atype === 'savings' ? 'Savings ' : 'Checking ') + last4(payoutNum) : 'Card ' + last4(payoutNum)) : '—';

    // ---------- amount validation ----------
    var raw = String(st.amt || '').trim(), n = Number(raw), amtErr = '';
    var red = BAL.scRedeemable;
    if (!raw) amtErr = 'Enter an amount to redeem.';
    else if (!/^\d+(\.\d{1,2})?$/.test(raw) || !(n > 0)) amtErr = 'Enter a valid SC amount, for example 25.00.';
    else if (C.limits.min != null && n < C.limits.min) amtErr = 'The minimum per request is ' + sc(C.limits.min) + ' SC.';
    else if (C.limits.max != null && n > C.limits.max) amtErr = 'The maximum per request is ' + sc(C.limits.max) + ' SC.';
    else if (n > red) amtErr = 'Insufficient redeemable SC. You can redeem up to ' + sc(red) + ' SC.';
    var amtOk = !amtErr;
    var maxAllowed = C.limits.max != null ? Math.min(red, C.limits.max) : red;
    var amtShowPlain = amtOk ? sc(n) + ' SC' : '—';

    // ---------- eligibility ----------
    var E = st.elig;
    var checks = [
      { label: 'Identity verification', sub: E === 'verify' ? 'Verification required before redeeming' : 'Verified', cls: E === 'verify' ? 'is-bad' : 'is-ok', hasCta: E === 'verify', cta: 'Verify account', href: '#verify', act: function () {} },
      { label: 'Profile details', sub: E === 'profile' ? 'Add your address and date of birth' : 'Complete', cls: E === 'profile' ? 'is-bad' : 'is-ok', hasCta: E === 'profile', cta: 'Complete profile', href: '#profile', act: function () {} },
      { label: 'Payout details', sub: st.saved ? 'Bank account ' + last4(D.savedPayout.acct) + ' on file' : 'No payout method on file yet', cls: st.saved ? 'is-ok' : 'is-warn', hasCta: !st.saved && E === 'ok', cta: 'Add payout details', href: '#withdraw', act: function (e) { if (e && e.preventDefault) e.preventDefault(); start(); } },
      { label: 'Redeemable SC', sub: red > 0 ? sc(red) + ' SC available to redeem' : 'You have no redeemable SC right now', cls: red > 0 ? 'is-ok' : 'is-bad', hasCta: red <= 0, cta: 'Play games', href: NL.nCasino, act: function () {} }
    ];
    var BLOCK = {
      insufficient: ['is-warn', 'Not enough redeemable SC', 'You need redeemable Sweepstakes Coins to submit a request. Redeemable SC is shown on your account as you play.'],
      verify: ['is-err', 'Account verification required', 'Verify your identity to unlock redemptions. It only needs to be done once.'],
      profile: ['is-warn', 'Complete your profile', 'Add the missing profile details so we can process redemptions for your account.'],
      unavailable: ['is-off', 'Redemptions are temporarily unavailable', 'We’re unable to accept new redemption requests right now. Your balance isn’t affected — please check back later.']
    }[E];
    var blocked = !!BLOCK || red <= 0;
    var start = function () { if (blocked) return; self.setState({ step: 'method', methodErr: false, showErr: false, amtTried: false, agree: false, agreeErr: false, submitErr: false, result: null }); self.top(); };
    var facts = [
      { k: 'Minimum per request', v: C.limits.min != null ? sc(C.limits.min) + ' SC' : 'Not set', mock: true, cls: '' },
      { k: 'Maximum per request', v: C.limits.max != null ? sc(C.limits.max) + ' SC' : 'Not set', mock: true, cls: '' },
      { k: 'Fees', v: 'To be confirmed', mock: true, cls: 'is-muted' },
      { k: 'Processing time', v: 'To be confirmed', mock: true, cls: 'is-muted' }
    ];

    // ---------- steps ----------
    var ORDER = ['method', 'details', 'amount', 'review'];
    var LABELS = ['Payment Method', 'Details', 'Amount', 'Review', 'Submit'];
    var idx = ORDER.indexOf(st.step); if (st.step === 'processing' || st.step === 'result') idx = 4;
    var steps = LABELS.map(function (l, i) { return { n: i < idx ? '✓' : String(i + 1), label: l, cls: i < idx ? 'is-done' : i === idx ? 'is-cur' : '', cur: i === idx ? 'step' : 'false' }; });
    var go = function (s) { self.setState({ step: s }); self.top(); };
    var next = function () {
      if (st.step === 'method') { if (!st.method) { self.setState({ methodErr: true }); return; } go('details'); }
      else if (st.step === 'details') { if (errKeys.length) { self.setState({ showErr: true }); setTimeout(function () { var el = document.querySelector('.wd-field[data-err="true"] input'); if (el) el.focus(); }, 30); return; } go('amount'); }
      else if (st.step === 'amount') { if (!amtOk) { self.setState({ amtTried: true }); var el = document.getElementById('wd-amt'); if (el) el.focus(); return; } self.setState({ amt: n.toFixed(2) }); go('review'); }
      else if (st.step === 'review') { if (!st.agree) { self.setState({ agreeErr: true }); return; } self.setState({ confirm: true, submitErr: false }); setTimeout(function () { var b = document.querySelector('[data-wd-cancel]'); if (b) b.focus(); }, 40); }
    };
    var back = function () { var i = ORDER.indexOf(st.step); if (i <= 0) { self.setState({ step: 'overview' }); self.top(); } else go(ORDER[i - 1]); };
    var submit = function () {
      if (self.state.submitting) return; // duplicate-submission guard
      self.setState({ submitting: true, confirm: false, step: 'processing' }); self.top();
      clearTimeout(self._t);
      var fail = (self.props.demo || '') === 'submit-fail-demo';
      self._t = setTimeout(function () {
        if (fail) self.setState({ submitting: false, step: 'review', submitErr: true });
        else self.setState({ submitting: false, step: 'result', result: 'submitted' });
      }, 1800);
    };

    // ---------- results ----------
    var RES = {
      submitted: { cls: 'is-wait', title: 'Redemption request submitted', msg: 'Your request has been received and is now awaiting review. No funds have been sent yet — you’ll see each status update in your redemption history.', next: ['Our team reviews the request.', 'You may be contacted if anything needs checking.', 'Track the status any time in Redemption History.'] },
      pending: { cls: 'is-wait', title: 'Redemption pending', msg: 'This request is still being reviewed and processed. There’s nothing you need to do right now.', next: ['The request stays pending while it’s reviewed.', 'Status changes appear in Redemption History.', 'Contact support if you have questions — include the reference.'] },
      completed: { cls: 'is-ok', title: 'Redemption completed', msg: 'This request has been marked as completed by our payments team.', next: ['Check the payout account you selected.', 'If you can’t find the payout, contact support with the reference.'] },
      failed: { cls: 'is-err', title: 'Redemption failed', msg: 'We couldn’t complete this request. Check your payout details and submit a new request, or contact support with the reference.', next: ['Confirm your payout details are correct.', 'Submit a new request when ready.', 'Contact support if the problem continues.'], retry: true },
      rejected: { cls: 'is-err', title: 'Redemption request rejected', msg: 'This request didn’t meet the redemption requirements and won’t be processed.', next: ['Review the reason below.', 'Update your details or account information.', 'Contact support if you think this is a mistake.'] },
      cancelled: { cls: 'is-off', title: 'Redemption cancelled', msg: 'This request was cancelled and no payout will be made for it.', next: ['You can submit a new request at any time.', 'Contact support if you didn’t cancel it.'] }
    };
    var res = { cls: '', pill: '', statusLabel: '', title: '', msg: '', ref: '', id: '', amt: '', method: '', date: '', next: [], canRetry: false, hasReason: false, reason: '' };
    if (st.result) {
      var r = RES[st.result];
      var hx = st.resId ? D.history.filter(function (x) { return x.id === st.resId; })[0] : null;
      res = {
        cls: r.cls, pill: PILL[st.result] + ' is-lg', statusLabel: st.result === 'submitted' ? 'Pending review' : STATUS[st.result], title: r.title, msg: r.msg,
        ref: hx ? hx.ref : D.newRequest.ref, id: hx ? hx.id : D.newRequest.id,
        amt: hx ? sc(hx.amount) + ' SC' : amtShowPlain, method: hx ? hx.method : (st.method ? M[st.method].name + ' ' + last4(payoutNum) : '—'),
        date: hx ? fLong(hx.ts) : fLong(D.asOf),
        next: r.next.map(function (t) { return { t: t }; }), canRetry: !!r.retry && !blocked,
        hasReason: !!(hx && hx.reason), reason: hx ? hx.reason || '' : ''
      };
    }

    // ---------- history ----------
    var H = st.hEmpty ? [] : D.history;
    var pad = function (x) { return (x < 10 ? '0' : '') + x; };
    var day = function (d) { return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()); };
    var minD = null, maxD = null;
    if (st.hDate === '30' || st.hDate === '90') { var mm = new Date(NOW); mm.setDate(mm.getDate() - Number(st.hDate)); minD = day(mm); }
    if (st.hDate === 'custom') { minD = st.dFrom || null; maxD = st.dTo || null; }
    var HF = H.filter(function (x) { if (st.hStatus !== 'all' && x.status !== st.hStatus) return false; var dd = x.ts.slice(0, 10); if (minD && dd < minD) return false; if (maxD && dd > maxD) return false; return true; });
    var PER = 6, pages = Math.max(1, Math.ceil(HF.length / PER)), page = Math.min(st.page, pages), s0 = (page - 1) * PER;
    var mcls = function (name) { return /card/i.test(name) ? 'm-card' : 'm-bank'; };
    var hRows = HF.slice(s0, s0 + PER).map(function (x) {
      return { id: x.id, ref: x.ref, date: fDate(x.ts), time: fTime(x.ts), amt: sc(x.amount) + ' SC', amtCls: (x.status === 'failed' || x.status === 'rejected' || x.status === 'cancelled') ? 'is-void' : 'is-neg',
        method: x.method, mCls: mcls(x.method), pill: PILL[x.status], statusLabel: STATUS[x.status], rowCls: '',
        aria: 'View details: ' + sc(x.amount) + ' SC redemption, ' + fDate(x.ts) + ', ' + STATUS[x.status],
        open: function () { self.setState({ sel: x.id, copied: false }); setTimeout(function () { var b = document.querySelector('[data-wl-close]'); if (b) b.focus(); }, 60); } };
    });
    var setH = function (k) { return function (e) { var o = { page: 1 }; o[k] = e.currentTarget.value; self.setState(o); }; };
    var hNoFilter = st.hStatus === 'all' && st.hDate === 'all';
    var selX = st.sel ? D.history.filter(function (x) { return x.id === st.sel; })[0] : null;
    var d = { amt: '', stCls: '', pill: '', statusLabel: '', title: '', msg: '', id: '', ref: '', dateLong: '', method: '', canRetry: false, hasReason: false, reason: '' };
    if (selX) { var rr = RES[selX.status]; d = { amt: sc(selX.amount) + ' SC', stCls: { pending: 'is-wait', completed: 'is-ok', failed: 'is-err', rejected: 'is-err', cancelled: '' }[selX.status], pill: PILL[selX.status], statusLabel: STATUS[selX.status], title: rr.title, msg: rr.msg, id: selX.id, ref: selX.ref, dateLong: fLong(selX.ts), method: selX.method, canRetry: (selX.status === 'failed' || selX.status === 'cancelled') && !blocked, hasReason: !!selX.reason, reason: selX.reason || '' }; }

    var isFlow = ORDER.indexOf(st.step) >= 0;
    var quickVals = [10, 15].filter(function (v) { return v <= maxAllowed && (C.limits.min == null || v >= C.limits.min); });
    var quick = quickVals.map(function (v) { return { label: sc(v) + ' SC', on: amtOk && n === v ? 'true' : 'false', pick: function () { self.setState({ amt: v.toFixed(2), amtTried: true }); } }; });
    quick.push({ label: 'Max · ' + sc(maxAllowed), on: amtOk && n === maxAllowed ? 'true' : 'false', pick: function () { self.setState({ amt: maxAllowed.toFixed(2), amtTried: true }); } });

    return {
      ...NL, goBuyBtn: function () { self.navTo(NL.nBuy); }, goAcctBtn: function () { self.navTo(NL.nWallet); },
      soundOn: st.sound ? 'true' : 'false', soundLabel: st.sound ? 'Mute sound' : 'Unmute sound', toggleSound: function () { self.setState({ sound: !self.state.sound }); },
      balSc: ready ? sc(D.balances.sc) : '—', balGc: ready ? Number(D.balances.gc).toLocaleString('en-US') : '—',
      inFlow: st.step !== 'overview', crumb: st.step === 'overview' ? 'Withdraw SC' : st.step === 'result' ? 'Request status' : 'New request',
      pageTitle: st.step === 'overview' ? 'Withdraw SC' : st.step === 'result' ? 'Redemption Status' : 'Redeem SC',
      pageSub: st.step === 'overview' ? 'Redeem eligible Sweepstakes Coins and track your redemption requests.' : 'Follow the steps to submit a redemption request for review.',
      goOverview: function (e) { if (e && e.preventDefault) e.preventDefault(); if (self.state.submitting) return; self.setState({ step: 'overview' }); self.top(); },
      isLoading: loading, isError: error, isReady: ready,
      retry: function () { self.setState({ load: 'loading' }); clearTimeout(self._t); self._t = setTimeout(function () { self.setState({ load: 'ready' }); }, 900); },
      showOverview: st.step === 'overview' && !error,
      // balances
      scTotal: sc(BAL.sc), scAvail: sc(BAL.scAvailable), scRedeem: sc(red),
      // eligibility
      checks: checks, eligPill: blocked ? (E === 'unavailable' ? 'by-pill is-off' : 'by-pill is-err') : 'by-pill is-ok', eligLabel: blocked ? 'Action needed' : 'Eligible', eligIcCls: blocked ? 'is-red' : 'is-green',
      hasBlock: !!BLOCK, blockCls: BLOCK ? BLOCK[0] : '', blockTitle: BLOCK ? BLOCK[1] : '', blockText: BLOCK ? BLOCK[2] : '',
      cantWithdraw: blocked, startFlow: start,
      ctaHint: blocked ? 'Resolve the item above to continue.' : 'Takes about a minute. You’ll review everything before submitting.',
      facts: facts,
      // flow
      showFlow: isFlow, steps: steps, stepNum: String(Math.min(idx + 1, 5)), stepName: LABELS[Math.min(idx, 4)],
      isMethod: st.step === 'method', isDetails: st.step === 'details', isAmount: st.step === 'amount', isReview: st.step === 'review',
      methods: C.methods.map(function (m) { var on = st.method === m.key; return { name: m.name, sub: m.sub, mCls: 'm-' + m.key, cls: (on ? 'is-on' : '') + (m.disabled ? ' is-dis' : ''), on: on ? 'true' : 'false', dis: m.disabled ? 'true' : 'false', isDis: !!m.disabled, disReason: m.disabledReason || '', saved: st.saved && m.key === 'bank', savedMask: last4(D.savedPayout.acct),
        pick: function () { if (m.disabled) return; var o = { method: m.key, methodErr: false, showErr: false }; if (m.key !== self.state.method) { o.f = (m.key === 'bank' && self.state.saved) ? Object.assign({}, D.savedPayout) : Object.assign({}, self.state.f, m.key === 'card' ? { cname: '', cnum: '', exp: '' } : { name: '', routing: '', acct: '', acct2: '' }); } self.setState(o); } }; }),
      methodErr: st.methodErr,
      methodName: st.method ? M[st.method].name : '—',
      usingSaved: st.method === 'bank' && st.saved && !st.showErr, missingPayout: st.showErr && !st.saved && errKeys.length > 0 && !digits(f.acct) && !digits(f.cnum),
      detailsInvalid: st.showErr && errKeys.length > 0 && !( !st.saved && !digits(f.acct) && !digits(f.cnum)), errCount: errKeys.length === 1 ? '1 field needs' : errKeys.length + ' fields need',
      fields: fields, isBank: st.method === 'bank',
      atChecking: f.atype !== 'savings' ? 'true' : 'false', atSavings: f.atype === 'savings' ? 'true' : 'false',
      setChecking: function () { self.setState({ f: Object.assign({}, self.state.f, { atype: 'checking' }) }); },
      setSavings: function () { self.setState({ f: Object.assign({}, self.state.f, { atype: 'savings' }) }); },
      // amount
      amt: st.amt, onAmt: function (e) { var v = e.currentTarget.value.replace(/[^\d.]/g, ''); self.setState({ amt: v }); },
      useMax: function () { self.setState({ amt: maxAllowed.toFixed(2), amtTried: true }); },
      amtHasErr: st.amtTried && !amtOk ? 'true' : 'false', amtRole: st.amtTried && !amtOk ? 'alert' : 'status',
      amtMsg: st.amtTried && !amtOk ? amtErr : (amtOk ? 'Looks good.' : 'Enter up to 2 decimal places.'),
      limitText: (C.limits.min != null ? sc(C.limits.min) : '—') + ' – ' + (C.limits.max != null ? sc(C.limits.max) : '—') + ' SC',
      quick: quick,
      amtShow: amtOk ? '− ' + sc(n) + ' SC' : '—', remainShow: amtOk ? sc(red - n) + ' SC' : '—', amtShowPlain: amtShowPlain,
      // review
      payoutMask: payoutMask, payoutMaskShort: st.method ? last4(payoutNum) : '', payoutName: st.method === 'bank' ? (f.name || '—') : st.method === 'card' ? (f.cname || '—') : '—',
      editMethod: function () { go('method'); }, editDetails: function () { go('details'); }, editAmount: function () { go('amount'); },
      agree: st.agree, agreeErr: st.agreeErr ? 'true' : 'false', agreeErrB: !!st.agreeErr, toggleAgree: function (e) { self.setState({ agree: e.currentTarget.checked, agreeErr: false }); },
      submitErr: st.submitErr,
      // actions
      back: back, backLabel: st.step === 'method' ? 'Cancel' : 'Back', next: next, nextDis: st.submitting,
      nextLabel: st.step === 'review' ? 'Submit Request' : 'Continue',
      // summary
      sumMethod: st.method ? M[st.method].name : 'Not selected', sumPayout: st.method && (st.step !== 'method') ? payoutMask : '—', sumAmount: amtOk && (st.step === 'amount' || st.step === 'review') ? sc(n) + ' SC' : '—', sumRemain: amtOk && (st.step === 'amount' || st.step === 'review') ? sc(red - n) + ' SC' : '—',
      // confirm / processing / result
      confirmOpen: st.confirm, closeConfirm: function () { if (!self.state.submitting) self.setState({ confirm: false }); },
      submit: submit, submitting: st.submitting, submitLabel: st.submitting ? 'Submitting…' : 'Yes, Submit Request',
      isProcessing: st.step === 'processing', isResult: st.step === 'result', res: res,
      toHistory: function () { self.setState({ step: 'overview' }); setTimeout(function () { var h = document.getElementById('redemption-history'); if (h) h.scrollIntoView({ block: 'start' }); }, 50); },
      // history
      histCount: ready ? (hNoFilter ? H.length + ' requests' : HF.length + ' of ' + H.length + ' requests') : '',
      hStatus: st.hStatus, hDate: st.hDate, dFrom: st.dFrom, dTo: st.dTo, hCustom: st.hDate === 'custom',
      onHStatus: setH('hStatus'), onHDate: setH('hDate'), onFrom: setH('dFrom'), onTo: setH('dTo'),
      hReset: function () { self.setState({ hStatus: 'all', hDate: 'all', dFrom: '', dTo: '', page: 1 }); }, hNoFilter: hNoFilter,
      hEmptyAll: ready && H.length === 0, hNoMatch: ready && H.length > 0 && HF.length === 0, hHasRows: ready && HF.length > 0,
      hRows: hRows, hRange: HF.length ? 'Showing ' + (s0 + 1) + '–' + (s0 + hRows.length) + ' of ' + HF.length : '',
      hPages: Array.apply(null, Array(pages)).map(function (_, i) { return { n: String(i + 1), cur: i + 1 === page ? 'page' : 'false', pick: function () { self.setState({ page: i + 1 }); } }; }),
      hPrevDis: page <= 1, hNextDis: page >= pages,
      hPrev: function () { self.setState({ page: Math.max(1, page - 1) }); }, hNext: function () { self.setState({ page: Math.min(pages, page + 1) }); },
      // drawer
      hasSel: !!selX, d: d, closeSel: function () { self.setState({ sel: null }); },
      retryFromDetail: function () { self.setState({ sel: null }); start(); },
      copyLabel: st.copied ? 'Copied' : 'Copy',
      copyId: function () { try { navigator.clipboard.writeText(selX ? selX.id : ''); } catch (x) {} self.setState({ copied: true }); clearTimeout(self._ct); self._ct = setTimeout(function () { self.setState({ copied: false }); }, 1500); }
    };
  }

  render() {
    const v = this.renderVals();
    return (
      <div className="by">
        <Sidebar v={v} />
        <div className="by-shell">
          <Header v={v} />
          <Withdraw v={v} />
          <ConfirmOpenBlock v={v} />
          <HasSelBlock v={v} />
          <Footer v={v} />
        </div>
      </div>
    );
  }
}

WithdrawPage.defaultProps = { device: '' };
