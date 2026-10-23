/* PlayJuwa landing page.
 * State, effects and animation logic live in this class component; markup lives in ./sections.
 * renderVals() computes every value the markup reads (passed down as `v`).
 */
import React from 'react';
import { ROUTES } from './routes.js';
import { blob } from './assets.js';
import { SPIN_PRIZES } from '../data/spinPrizes.js';
import { CATEGORIES, FAQ_ITEMS, FOOTER_GAMES, GAMES, HERO_SLIDES_DESKTOP, HERO_SLIDES_MOBILE, HOT_GAMES, NEW_GAMES, PAYMENTS, PLATFORMS, RECENT_WINS, REVIEWS } from '../data/catalogs.js';
import DailyBonusModal from './sections/DailyBonusModal.jsx';
import HalloweenLayer from './sections/HalloweenLayer.jsx';
import HalloweenCycloneButton from './sections/HalloweenCycloneButton.jsx';
import HalloweenToggle from './sections/HalloweenToggle.jsx';
import Background from './sections/Background.jsx';
import Sidebar from './sections/Sidebar.jsx';
import Header from './sections/Header.jsx';
import LoginPrompt from './sections/LoginPrompt.jsx';
import AuthModal from './sections/AuthModal.jsx';
import HeroImgsSection from './sections/HeroImgsSection.jsx';
import QuickActions from './sections/QuickActions.jsx';
import WinsSection from './sections/WinsSection.jsx';
import PlatformsSection from './sections/PlatformsSection.jsx';
import SlotsSection from './sections/SlotsSection.jsx';
import NpnSection from './sections/NpnSection.jsx';
import PopularSection from './sections/PopularSection.jsx';
import GamesSection from './sections/GamesSection.jsx';
import SpinSection from './sections/SpinSection.jsx';
import HowSection from './sections/HowSection.jsx';
import WeeklySection from './sections/WeeklySection.jsx';
import SupportSection from './sections/SupportSection.jsx';
import PromotionsSection from './sections/PromotionsSection.jsx';
import FaqSection from './sections/FaqSection.jsx';
import FinalSection from './sections/FinalSection.jsx';
import Footer from './sections/Footer.jsx';

export default class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = { menuOpen: !!props.menuOpen, walletOpen: !!props.walletOpen, active: 'home', cat: 'All Games', faq: 3, favs: {}, sound: true, loginAsk: '', auth: props.authOpen || '', authDone: false, authErr: {}, pwShown: false, heroSlide: 0, cfi: 0, rot: 0, spinning: false, prize: null, lastSpin: 0, now: Date.now(), ftOpen: false, ftAcc: '', hw: true, hwWind: '' };
    this.SPIN_MS = 5600; this.COOLDOWN = 24 * 60 * 60 * 1000;
    this.PRIZES = SPIN_PRIZES;
  }
  componentDidMount() { this.installTapFx(); this.installMotion(); this.installNpnPop();
    var selfV = this;
    this._onVw = function () { var w = window.innerWidth || 1440; if ((w >= 1024) !== ((selfV.state.vw || 1440) >= 1024)) selfV.setState({ vw: w, heroSlide: 0 }); };
    try { this.setState({ vw: window.innerWidth || 1440 }); window.addEventListener('resize', this._onVw); } catch (e) {}
    var saved = null;
    try { saved = JSON.parse(window.localStorage.getItem('pj-daily-spin') || 'null'); } catch (e) {}
    if (saved && saved.t && Date.now() - saved.t < this.COOLDOWN) this.setState({ lastSpin: saved.t, prize: saved.prize });
    var self = this;
    this._tick = setInterval(function () { if (self.state.lastSpin) self.setState({ now: Date.now() }); }, 1000);
    this.startHero();
    this._onDocKey = function (e) { if (e.key === 'Escape' && self.state.auth) self.setState({ auth: '', authDone: false, authErr: {} }); };
    document.addEventListener('keydown', this._onDocKey);
    this.scheduleWind(true);
  }
  scheduleWind(first) {
    // Random, infrequent Halloween cyclone. Normal loops run most of the time.
    var self = this;
    clearTimeout(this._windT);
    if (this.reducedMotion()) return;
    var wait = first ? 4500 + Math.random() * 2500 : 45000 + Math.random() * 60000;
    this._windT = setTimeout(function () {
      if (!self.state.hw || (!first && (document.hidden || Math.random() < 0.25))) { self.scheduleWind(false); return; }
      self.startCyclone();
    }, wait);
  }
  stopCyclone() {
    cancelAnimationFrame(this._cyRaf); this._cyRaf = 0;
    clearTimeout(this._windT);
    (this._cyAnims || []).forEach(function (a) { try { a.cancel(); } catch (e) {} });
    this._cyAnims = [];
    document.querySelectorAll('.hw-g').forEach(function (g) { g.style.zIndex = ''; g.style.transformOrigin = ''; g.style.filter = ''; });
    var cv = document.querySelector('.hw-cv'); if (cv) { var c = cv.getContext('2d'); c.clearRect(0, 0, cv.width, cv.height); }
  }
  startCyclone(focusY) {
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
  startHero() {
    var self = this;
    clearInterval(this._heroTimer);
    if (this.reducedMotion()) return;
    this._heroTimer = setInterval(function () { self.setState({ heroSlide: (self.state.heroSlide + 1) % (self._heroN || 5) }); }, 5000);
  }
  componentWillUnmount() { try { window.removeEventListener('resize', this._onVw); } catch (e) {} this.stopCyclone(); document.removeEventListener('keydown', this._onDocKey); clearInterval(this._tick); clearInterval(this._heroTimer); clearTimeout(this._spinTimer); clearTimeout(this._bonusSpinTimer); }
  reducedMotion() { try { return window.matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) { return false; } }
  doSpin() {
    var st = this.state;
    if (st.spinning || (st.lastSpin && Date.now() - st.lastSpin < this.COOLDOWN)) return;
    var n = this.PRIZES.length, seg = 360 / n;
    var idx = Math.floor(Math.random() * n);
    var jitter = (Math.random() - 0.5) * seg * 0.7;
    var target = (360 - (idx * seg + seg / 2) + jitter) % 360;
    var current = ((st.rot % 360) + 360) % 360;
    var delta = (((target - current) % 360) + 720) % 360;
    var turns = this.reducedMotion() ? 1 : 6;
    this._pendingIdx = idx;
    this.setState({ spinning: true, prize: null, rot: st.rot + turns * 360 + delta });
    var self = this;
    clearTimeout(this._spinTimer);
    this._spinTimer = setTimeout(function () { self.finishSpin(); }, (this.reducedMotion() ? 800 : this.SPIN_MS) + 150);
  }
  finishSpin() {
    if (!this.state.spinning) return;
    clearTimeout(this._spinTimer);
    var prize = this.PRIZES[this._pendingIdx], t = Date.now();
    try { window.localStorage.setItem('pj-daily-spin', JSON.stringify({ t: t, prize: prize })); } catch (e) {}
    this.setState({ spinning: false, prize: prize, lastSpin: t, now: t });
  }
  openAuth(mode) { this.setState({ auth: mode, authDone: false, authErr: {}, pwShown: false, loginAsk: '', menuOpen: false }); }
  validate(mode, f) {
    var e = {}, v = function (n) { return (f[n] && f[n].value || '').trim(); };
    if (mode === 'login') {
      if (!v('id')) e.id = 'Enter your username or email.';
      if (!v('lpw')) e.lpw = 'Enter your password.';
      return e;
    }
    if (!/^[A-Za-z0-9_]{3,20}$/.test(v('user'))) e.user = 'Use 3–20 letters, numbers or underscores.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v('email'))) e.email = 'Enter a valid email address.';
    if (v('phone').replace(/\D/g, '').length < 10) e.phone = 'Enter a valid phone number.';
    var pw = f.pw ? f.pw.value : '';
    if (pw.length < 8 || !/[A-Za-z]/.test(pw) || !/\d/.test(pw)) e.pw = 'At least 8 characters with a letter and a number.';
    if (!f.pw2 || f.pw2.value !== pw || !pw) e.pw2 = 'Passwords do not match.';
    if (!f.terms || !f.terms.checked) e.terms = 'Please confirm you are 18+ and accept the terms.';
    return e;
  }
  componentDidUpdate(prevProps, prevState) {
    var st = this.state;
    if ((st.auth && (st.auth !== prevState.auth || prevState.authDone !== st.authDone)) ) {
      if (!prevState.auth) this._authReturn = document.activeElement;
      setTimeout(function () { var el = document.querySelector(st.authDone ? '.lp-au-done .lp-au-submit' : '.lp-au-form input'); if (el) el.focus({ preventScroll: true }); }, 40);
    }
    if (!st.auth && prevState.auth && this._authReturn && this._authReturn.focus) this._authReturn.focus({ preventScroll: true });
    if (this.state.loginAsk && !prevState.loginAsk) { this._loginReturn = document.activeElement; var self0 = this; setTimeout(function () { var c = document.querySelector('.lp-modal-card .pj-btn'); if (c) c.focus({ preventScroll: true }); }, 30); }
    if (!this.state.loginAsk && prevState.loginAsk && this._loginReturn && this._loginReturn.focus) this._loginReturn.focus({ preventScroll: true });
    if (this.state.menuOpen && !prevState.menuOpen) {
      this._returnFocus = document.activeElement;
      var panel = this._panelRef && this._panelRef.current;
      if (panel) {
        var first = Array.prototype.find.call(panel.querySelectorAll('a,button'), function (el) { return el.offsetParent !== null; });
        if (first) first.focus({ preventScroll: true });
      }
    }
    if (!this.state.menuOpen && prevState.menuOpen && this._returnFocus && this._returnFocus.focus) {
      this._returnFocus.focus({ preventScroll: true });
    }
  }
  cfGo(step) {
    var n = this._cfN || 12;
    this.setState({ cfi: (((this.state.cfi + step) % n) + n) % n });
  }
  cfTrack(el) { return el && el.querySelector ? el.querySelector('.lp-cf-track') : null; }
  cfSpacing(el) {
    var v = 0; try { v = parseFloat(getComputedStyle(el).getPropertyValue('--sp')); } catch (e) {}
    return v || 120;
  }
  gameVals(g, gi) {
    var self = this, fav = !!(this.state.favs && this.state.favs[g.title + gi]);
    return Object.assign({}, g, { playLabel: 'Play ' + g.title + ' by ' + g.provider, fav: fav ? 'true' : 'false', favLabel: (fav ? 'Remove ' : 'Add ') + g.title + (fav ? ' from favorites' : ' to favorites'), toggleFav: function () { var f = Object.assign({}, self.state.favs); f[g.title + gi] = !fav; self.setState({ favs: f }); } });
  }
  scrollReviews(dir) {
    var el = this._revRef && this._revRef.current;
    if (el) el.scrollBy({ left: dir * el.clientWidth * 0.75, behavior: 'smooth' });
  }
  navLinks() {
    return ROUTES;
  }
  navTo(href) {
    try { var a = document.createElement('a'); a.setAttribute('href', href); a.style.display = 'none'; document.body.appendChild(a); a.click(); setTimeout(function () { try { a.remove(); } catch (x) {} }, 0); } catch (e) {}
  }
  claimDailyBonus() {
    this.setState({ active: 'spin', menuOpen: false, walletOpen: false });
    var section = document.getElementById('spin');
    if (section) section.scrollIntoView({ behavior: this.reducedMotion() ? 'auto' : 'smooth', block: 'start' });
    clearTimeout(this._bonusSpinTimer);
    this._bonusSpinTimer = setTimeout(() => this.doSpin(), 750);
  }
  installNpnPop() {
    try {
      if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      var els = document.querySelectorAll('.lp-npn-stage,.lp-pop-group,.lp-final-stage');
      [].forEach.call(els, function (st) {
        if (st.__pjn) return; st.__pjn = 1;
        var go = function () { st.removeAttribute('data-wait'); st.setAttribute('data-in', ''); };
        var r = st.getBoundingClientRect();
        if (!('IntersectionObserver' in window) || (r.top < (window.innerHeight || 800) && r.bottom > 0)) { go(); return; }
        st.setAttribute('data-wait', '');
        var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { io.disconnect(); go(); } }); }, { threshold: 0.2 });
        io.observe(st);
      });
    } catch (e) {}
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
      var REVEAL = '.lp-sec-head,.lp-st,.lp-gcard,.lp-hot-card,.lp-plat,.lp-promo,.lp-rev,.lp-qa-cell,.lp-hstep,.lp-faq-item,.lp-wl-row,.lp-spin-card,.cs-head,.cs-card,.cs-promo,.cs-cat,.cs-strip,.by-card,.by-p,.wl-card,.wl-qa-btn,.wl-rc,.wd-m,.pf-col';
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
    var self = this;
    if (!this._revRef) this._revRef = React.createRef();
    var winsLoop = RECENT_WINS.concat(RECENT_WINS).map(function (w, i) {
      return Object.assign({}, w, { noImg: !w.img, dup: i >= RECENT_WINS.length ? 'true' : 'false', amountNum: w.amount.replace(' SC', '') });
    });
    var platforms = PLATFORMS;
    var cats = CATEGORIES.map(function (category) {
      return { label: category.label, icon: blob(category.assetId), pressed: self.state.cat === category.label ? 'true' : 'false', pick: function () { self.setState({ cat: category.label }); } };
    });
    var games = GAMES, payments = PAYMENTS, reviews = REVIEWS, faqData = FAQ_ITEMS;
    var faqs = faqData.map(function (f, i) {
      var open = self.state.faq === i;
      return { q: f.q, a: f.a, id: 'faq-' + i, open: open ? 'true' : 'false', cls: open ? 'lp-faq-item is-open' : 'lp-faq-item', toggle: function () { self.setState({ faq: open ? -1 : i }); } };
    });
    var footGames = FOOTER_GAMES;
    if (!this._panelRef) this._panelRef = React.createRef();
    var active = this.state.active;
    var go = function (key) { return function () { self.setState({ active: key, menuOpen: false, walletOpen: false }); }; };
    var cur = function (key) { return active === key ? 'page' : 'false'; };
    var topLinks = [
      { key: 'games', label: 'Games', icon: 'games', href: '#games' },
      { key: 'platforms', label: 'Platforms', icon: 'platforms', href: ROUTES.nPlatforms },
      { key: 'casino', label: 'Casino', icon: 'casino', href: ROUTES.nCasino },
      { key: 'promotions', label: 'Promotions', icon: 'promo', href: '#promotions' }
    ].map(function (l) { return Object.assign(l, { current: cur(l.key), pick: go(l.key) }); });
    var groupData = [
      { title: 'Play', cls: 'nv-group-play', items: [
        { key: 'home', label: 'Home', icon: 'home', href: '#top' },
        { key: 'games', label: 'Games', icon: 'games', href: '#games' },
        { key: 'casino', label: 'Casino', icon: 'casino', href: ROUTES.nCasino },
        { key: 'platforms', label: 'Platforms', icon: 'platforms', href: ROUTES.nPlatforms },
        { key: 'link2play', label: 'Link2Play', icon: 'link', href: '#link2play' } ] },
      { title: 'Rewards', cls: 'nv-group-rewards', items: [
        { key: 'spin', label: 'Daily Spin', icon: 'spin', href: ROUTES.nSpin },
        { key: 'promotions', label: 'Promotions', icon: 'promo', href: '#promotions' },
        { key: 'vip', label: 'VIP', icon: 'vip', href: '#vip' },
        { key: 'referral', label: 'Referral', icon: 'referral', href: '#referral' } ] },
      { title: 'Help', cls: 'nv-group-help', items: [
        { key: 'support', label: 'Support', icon: 'support', href: '#support' },
        { key: 'install', label: 'How to Install', icon: 'install', href: '#install' },
        { key: 'blog', label: 'Blog Posts', icon: 'blog', href: '#blog' } ] }
    ];
    var groups = groupData.map(function (g) {
      return { title: g.title, cls: g.cls, items: g.items.map(function (it) { return Object.assign(it, { current: cur(it.key), pick: it.key === 'spin' ? askSpin : go(it.key), href: it.href }); }) };
    });
    var menuOpen = this.state.menuOpen;
    var askFor = function (why) { return function () { self.setState({ menuOpen: false, walletOpen: false }); }; };
    var askSpin = askFor('spin'), askWallet = askFor('wallet');
    var LOGIN_COPY = { spin: { title: 'Log in to Spin', text: 'Log in or create a free account to spin the wheel. You can spin every 24 hours.' }, wallet: { title: 'Log in to use your wallet', text: 'Log in or create a free account to deposit and withdraw SC.' } };
    var lc = LOGIN_COPY[this.state.loginAsk] || LOGIN_COPY.spin;
    var stS = this.state, left = stS.lastSpin ? Math.max(0, this.COOLDOWN - (stS.now - stS.lastSpin)) : 0;
    var onCooldown = !stS.spinning && left > 0;
    var pad = function (v) { return (v < 10 ? '0' : '') + v; };
    var hms = pad(Math.floor(left / 3600000)) + ':' + pad(Math.floor(left / 60000) % 60) + ':' + pad(Math.floor(left / 1000) % 60);
    var heroDesk = (this.state.vw || 1440) >= 1024;
    var heroSet = heroDesk ? HERO_SLIDES_DESKTOP : HERO_SLIDES_MOBILE;
    this._heroN = heroSet.length;
    var rm = this.reducedMotion();
    return {
      ...NL,
      yes: true,
      askSpin: askSpin,
      askWallet: askWallet,
      heroSlides: (heroSet).map(function (h, i) { var on = self.state.heroSlide % heroSet.length === i; return Object.assign({ fit: '' }, h, { on: on ? 'true' : 'false', hidden: on ? 'false' : 'true' }); }),
      heroDots: heroSet.map(function (h, i) { var on = self.state.heroSlide % heroSet.length === i; return { on: on ? 'true' : 'false', label: 'Show slide ' + (i + 1) + ' of ' + heroSet.length, pick: function () { self.setState({ heroSlide: i }); self.startHero(); } }; }),
      authDelegate: function (e) {
        if (e.defaultPrevented) return;
        var a = e.target && e.target.closest ? e.target.closest('a[href="#login"],a[href="#signup"]') : null;
        if (!a || (a.closest && a.closest('.lp-au'))) return;
        e.preventDefault(); self.openAuth(a.getAttribute('href') === '#login' ? 'login' : 'signup');
      },
      artA: this.state.auth === 'login' ? 'Welcome back to' : 'Sign Up & Get', artB: this.state.auth === 'login' ? 'PlayJuwa' : 'Rewards',
      authOpen: !!this.state.auth,
      authForm: !!this.state.auth && !this.state.authDone,
      authDone: !!this.state.authDone,
      isLogin: this.state.auth === 'login', isSignup: this.state.auth === 'signup',
      tabLogin: this.state.auth === 'login' ? 'true' : 'false', tabSignup: this.state.auth === 'signup' ? 'true' : 'false',
      authTitle: this.state.auth === 'login' ? 'Welcome back' : 'Create your account',
      authSub: this.state.auth === 'login' ? 'Log in to play, spin the wheel and manage your wallet.' : 'Join PlayJuwa in under a minute.',
      doneTitle: this.state.auth === 'login' ? 'You’re logged in' : 'Account created',
      doneText: this.state.auth === 'login' ? 'Welcome back to PlayJuwa.' : 'Welcome to PlayJuwa! Your account is ready.',
      err: ['id', 'lpw', 'user', 'email', 'phone', 'ref', 'pw', 'pw2', 'terms'].reduce(function (o, k) { var m = self.state.authErr[k] || ''; o[k] = { on: m ? 'true' : 'false', msg: m }; return o; }, {}),
      pwType: this.state.pwShown ? 'text' : 'password',
      pwShown: this.state.pwShown ? 'true' : 'false',
      pwToggleLabel: this.state.pwShown ? 'Hide password' : 'Show password',
      togglePw: function () { self.setState({ pwShown: !self.state.pwShown }); },
      toLogin: function () { self.setState({ auth: 'login', authErr: {}, pwShown: false }); },
      toSignup: function () { self.setState({ auth: 'signup', authErr: {}, pwShown: false }); },
      closeAuth: function () { self.setState({ auth: '', authDone: false, authErr: {} }); },
      authKey: function (e) { if (e.key === 'Escape') self.setState({ auth: '', authDone: false, authErr: {} }); },
      submitLogin: function (e) { e.preventDefault(); var form = e.currentTarget, er = self.validate('login', form.elements); self.setState({ authErr: er, authDone: !Object.keys(er).length }); if (Object.keys(er).length) { var f = form.querySelector('[name="' + Object.keys(er)[0] + '"]'); if (f) f.focus(); } else self.props.onLogin(Object.fromEntries(new FormData(form).entries())); },
      submitSignup: function (e) { e.preventDefault(); var form = e.currentTarget, er = self.validate('signup', form.elements); self.setState({ authErr: er, authDone: !Object.keys(er).length }); if (Object.keys(er).length) { var f = form.querySelector('[name="' + Object.keys(er)[0] + '"]'); if (f) f.focus(); } else self.props.onSignup(Object.fromEntries(new FormData(form).entries())); },
      loginOpen: !!this.state.loginAsk,
      loginTitle: lc.title,
      loginText: lc.text,
      closeLogin: function () { self.setState({ loginAsk: '' }); },
      wheelCls: 'lp-wheel ' + (stS.spinning ? 'is-spinning' : 'is-idle'),
      wheelStyle: 'transform: rotate(' + stS.rot + 'deg); transition: transform ' + (rm ? 800 : this.SPIN_MS) + 'ms ' + (rm ? 'ease-out' : 'cubic-bezier(0.17, 0.67, 0.12, 0.99)'),
      onSpinEnd: function (e) { if (e && e.target === e.currentTarget) self.finishSpin(); },
      spin: function () { self.doSpin(); },
      spinDisabled: stS.spinning || onCooldown,
      isSpinning: stS.spinning,
      onCooldown: onCooldown,
      hubText: stS.spinning ? '…' : 'SPIN',
      hubLabel: stS.spinning ? 'Wheel is spinning' : (onCooldown ? 'Next spin available in ' + hms : 'Spin the wheel'),
      btnText: stS.spinning ? 'Spinning…' : (onCooldown ? 'Come back in ' + hms : 'Spin Now'),
      statusPre: stS.spinning ? 'Good luck! The wheel is spinning' : (onCooldown ? 'Next spin available in' : 'Your free spin is'),
      statusVal: stS.spinning ? '' : (onCooldown ? hms : 'ready'),
      hasResult: !!stS.prize && !stS.spinning,
      resultLabel: stS.prize || '',
      resetSpin: function () { try { window.localStorage.removeItem('pj-daily-spin'); } catch (e) {} self.setState({ lastSpin: 0, prize: null }); },
      topLinks: topLinks,
      nPlatforms: ROUTES.nPlatforms,
      groups: groups,
      menuOpen: menuOpen,
      menuCls: menuOpen ? 'is-open' : '',
      walletOpen: this.state.walletOpen,
      walletCls: this.state.walletOpen ? 'is-open' : '',
      panelRef: this._panelRef,
      toggleMenu: function () { self.setState({ menuOpen: !self.state.menuOpen, walletOpen: false }); },
      closeMenu: function () { self.setState({ menuOpen: false }); },
      toggleWallet: function () { self.setState({ walletOpen: !self.state.walletOpen, menuOpen: false }); },
      onNavKey: function (e) { if (e.key === 'Escape' && (self.state.menuOpen || self.state.walletOpen)) self.setState({ menuOpen: false, walletOpen: false }); },
      onModalKey: function (e) { if (e.key === 'Escape') self.setState({ loginAsk: '' }); },
      tabGames: cur('games'), tabPlat: cur('platforms'), tabPromo: cur('promotions'), tabChat: cur('support'),
      pickGames: go('games'), pickPlat: go('platforms'), pickPromo: go('promotions'), pickChat: go('support'),
      winsLoop: winsLoop,
      platforms: platforms,
      cats: cats,
      sbSpin: askSpin, soundOn: this.state.sound ? 'true' : 'false', soundLabel: this.state.sound ? 'Mute sound' : 'Unmute sound', toggleSound: function () { self.setState({ sound: !self.state.sound }); },
      sdPlat: { cur: cur('platforms'), pick: go('platforms') },
      sdCasinoOpen: this.state.sdCasino ? 'true' : 'false', sdCasinoShow: !!this.state.sdCasino,
      sdCasinoToggle: function () { self.setState({ sdCasino: !self.state.sdCasino }); },
      sdCasinoSub: ['Live Casino', 'Slots', 'Fishing', 'Table Games'].map(function (c) { return { label: c, pick: function () { self.setState({ cat: c === 'Table Games' ? 'Table' : c, active: 'games' }); } }; }),
      sdMenu: [
        { key: 'spin', label: 'Daily Spin', icon: 'spin', tone: 't-cyan', href: ROUTES.nSpin, pick: askSpin },
        { key: 'bonus', label: 'Daily Bonus', icon: 'gift', tone: 't-gold', href: '#spin', pick: askSpin, badge: 'Free' },
        { key: 'promotions', label: 'Promotions', icon: 'promo', tone: 't-orange', href: '#promotions' },
        { key: 'referral', label: 'Referral', icon: 'referral', tone: 't-green', href: '#referral' },
        { key: 'vip', label: 'VIP', icon: 'vip', tone: 't-gold', href: '#vip' },
        { key: 'buy', label: 'Buy SC', icon: 'buy', tone: 't-green', href: NL.nBuy, pick: askWallet },
        { key: 'withdraw', label: 'Withdraw SC', icon: 'withdraw', tone: 't-red', href: NL.nWithdraw, pick: askWallet }
      ].map(function (it) { return Object.assign({ badge: '' }, it, { cur: cur(it.key), pick: it.pick || go(it.key) }); }),
      sdHelp: [
        { key: 'how', label: 'How to play?', icon: 'play', tone: 't-cyan', href: '#how' },
        { key: 'support', label: 'Support', icon: 'support', tone: 't-cyan', href: '#support' },
        { key: 'install', label: 'How to Install', icon: 'install', tone: 't-gold', href: '#install' },
        { key: 'blog', label: 'Blog posts', icon: 'blog', tone: 't-violet', href: '#blog' }
      ].map(function (it) { return Object.assign({ badge: '' }, it, { cur: cur(it.key), pick: go(it.key) }); }),
      side: ['home', 'games', 'casino', 'sports', 'fishing', 'promotions', 'vip', 'install'].reduce(function (o, k) { var hrefs = { home: '#top', games: '#games', casino: '#casino', sports: '#games', fishing: '#games', promotions: '#promotions', vip: '#vip', install: '#install' }; o[k] = { href: hrefs[k], cur: cur(k), pick: go(k) }; return o; }, {}),
      navCats: [['All Games', '29cd32975e6275e55556949bbd89f9d9'], ['Slots', 'd2c0ee62cfa06ed88061a3c4b57c138c'], ['Live Casino', '46ae9af9c6c39e4a491d60354b364cab'], ['Sports', '4d3297527ffea7287d9902bde25d384d'], ['Fishing', 'c888fdae96901a2b78b39a37a60b7b27']].map(function (n) { var c = n[0]; return { label: c, icon: blob(n[1]), current: self.state.cat === c ? 'true' : 'false', pick: function () { self.setState({ cat: c, active: 'games' }); } }; }),
      games: games.map(function (g, gi) {
        var fav = !!(self.state.favs && self.state.favs[g.title + gi]);
        return Object.assign({}, g, { playLabel: 'Play ' + g.title + ' by ' + g.provider, fav: fav ? 'true' : 'false', favLabel: (fav ? 'Remove ' : 'Add ') + g.title + (fav ? ' from favorites' : ' to favorites'), toggleFav: function () { var f = Object.assign({}, self.state.favs); f[g.title + gi] = !fav; self.setState({ favs: f }); } });
      }),
      hotGames: [
        ['Gates of Olympus', '465a51d403e678e64441532e50e3897f'],
        ['Sweet Bonanza', '1851879c4e7466387aae61a16f0481c4'],
        ['Sugar Rush', 'f9a9bb9f59652473942de85edc285551'],
        ['Wanted Dead or a Wild', '510a90e88d6c156c2b5247a6dc300a15'],
        ['Big Bass Bonanza', '3ed25dbcd31a8ff7c9417da650e88a56'],
        ['Starlight Princess', 'f3b07a565ef3dc7f5634ab2a7c1d0386'],
        ['Buffalo King', '691e21b1e1618a6bff487d6015465b5b'],
        ['Golden Dragon', '4ed2d0f528be5f28c36ea3ac4961f12a'],
        ['Wild West Gold', '4ea575a096a4e3fe49790cad98073582'],
        ['The Dog House', '59ca7f792d9e90b3cc960b43e815def9'],
        ['Cleocatra', 'b91da345ef186445cac10d8dd6732d57'],
        ['Fruit Party', 'a87c4d111e363536e7a1ad2096cd9a61'],
        ['Book of Dead', '2df025679ab4a4bb55a24db7bf85f5a8'],
        ['Money Tree', '555f8044dc4ec5b6553337c7317c82e4'],
        ['Hot to Burn', 'e3dac8c4ae74090b4af61c815c4399a9'],
        ['Joker\'s Jewels', '5aad78d4a22e763cdcda88f4f6a56ec2'],
        ['Dragon Tiger', '0dadf2742e6ed9d1edb5e5f57a067b8b'],
        ['Fortune Ox', 'a3fc1196e80c1554a17ae4697de11abd'],
        ['Aztec Gems', 'f88dbe9dd5056566fd9a546ce50141a4'],
        ['5 Lions Megaways', 'efdaa2f1a67f574b45ba59099b3ab695'],
        ['Fishing God', '6af97b6065090864c9860ded4ef138d9'],
        ['Candy Stash', 'ef62da4b74d88c8c72ee4630bbfaaddb'],
        ['San Quentin Ways', '40ee24a239a244885d941aab35402849'],
        ['Thunderstruck II', '05f01eabab8372a5c940df2a97c1a4a6']
      ].map(function (h) { return { label: 'Play ' + h[0], img: blob(h[1]) }; }),
      cfCards: (function () {
        var list = games, n = list.length, cfi = self.state.cfi; self._cfN = n;
        return list.map(function (g, i) {
          var d = i - cfi; if (d > n / 2) d -= n; if (d < -n / 2) d += n;
          var ad = Math.abs(d), on = d === 0;
          return { img: g.img, on: on ? 'true' : 'false', ad: String(Math.min(ad, 4)), hidden: on ? 'false' : 'true', tab: on ? '0' : '-1',
            label: 'Play ' + g.title + ' by ' + g.provider,
            style: '--d:' + d + ';--ad:' + Math.min(ad, 4) + ';z-index:' + (20 - ad),
            click: function (e) { if (self._cfMoved) { e.preventDefault(); return; } if (!on) { e.preventDefault(); self.setState({ cfi: i }); } } };
        });
      })(),
      cfTitle: games[this.state.cfi % games.length].title,
      cfProv: games[this.state.cfi % games.length].provider,
      cfPos: (this.state.cfi % games.length + 1) + ' / ' + games.length,
      cfWheel: function (e) {
        var dx = e.deltaX, dy = e.deltaY;
        var d = Math.abs(dx) > Math.abs(dy) ? dx : (e.shiftKey ? dy : 0);
        if (!d || Math.abs(d) < 4) return;
        if (e.cancelable) e.preventDefault();
        var now = Date.now(); if (self._cfWheelT && now - self._cfWheelT < 260) return;
        self._cfWheelT = now; self.cfGo(d > 0 ? 1 : -1);
      },
      cfPrev: function () { self.cfGo(-1); },
      cfNext: function () { self.cfGo(1); },
      cfKey: function (e) { if (e.key === 'ArrowLeft') { e.preventDefault(); self.cfGo(-1); } else if (e.key === 'ArrowRight') { e.preventDefault(); self.cfGo(1); } },
      cfDown: function (e) {
        if (e.button !== undefined && e.button !== 0) return;
        if (e.target.closest && e.target.closest('.lp-cf-nav')) return;
        self._cfStart = e.clientX; self._cfDx = 0; self._cfMoved = false; self._cfEl = e.currentTarget; self._cfPid = e.pointerId;
      },
      cfMove: function (e) {
        if (self._cfStart == null) return;
        var dx = e.clientX - self._cfStart, el = self._cfEl, tr = self.cfTrack(el);
        if (!self._cfMoved && Math.abs(dx) > 6) { self._cfMoved = true; try { el.setPointerCapture(self._cfPid); } catch (er) {} if (tr) tr.classList.add('is-drag'); }
        if (self._cfMoved && tr) { self._cfDx = dx; tr.style.setProperty('--dx', dx + 'px'); }
      },
      cfUp: function () {
        if (self._cfStart == null) return;
        var el = self._cfEl, tr = self.cfTrack(el), dx = self._cfDx || 0, sp = self.cfSpacing(el);
        self._cfStart = null;
        if (tr) { tr.classList.remove('is-drag'); tr.style.setProperty('--dx', '0px'); }
        if (self._cfMoved) {
          var steps = Math.round(-dx / sp); if (steps === 0 && Math.abs(dx) > 40) steps = dx < 0 ? 1 : -1;
          if (steps) self.cfGo(Math.max(-3, Math.min(3, steps)));
          setTimeout(function () { self._cfMoved = false; }, 0);
        }
      },
      gamesPopular: games.slice(0, 6).map(function (g, gi) { return self.gameVals(g, gi); }),
      gamesNew: [
        { title: 'Gates of Olympus', provider: 'Pragmatic Play', img: '/assets/new-gates-of-olympus.jpg' },
        { title: 'Sweet Bonanza', provider: 'Pragmatic Play', img: '/assets/new-sweet-bonanza.jpg' },
        { title: 'Wild West Gold', provider: 'Pragmatic Play', img: '/assets/new-wild-west-gold.jpg' },
        { title: 'CleoCatra', provider: 'Pragmatic Play', img: '/assets/new-cleocatra.jpg' },
        { title: 'Fishing God', provider: 'JILI', img: '/assets/new-fishing-god.jpg' },
        { title: 'Hot to Burn', provider: 'Pragmatic Play', img: '/assets/new-hot-to-burn.jpg' }
      ].map(function (g, gi) { return self.gameVals(g, gi + 100); }),
      payments: payments,
      reviews: reviews.map(function (r, i) { return Object.assign({}, r, { cls: i % 2 ? 'lp-rev is-violet' : 'lp-rev' }); }),
      revRef: this._revRef,
      revPrev: function () { self.scrollReviews(-1); },
      revNext: function () { self.scrollReviews(1); },
      faqs: faqs,
      footGames: footGames,
      ftTop: footGames.slice(0, 6), ftMore: footGames.slice(6), ftOpen: !!this.state.ftOpen, ftOpenAttr: this.state.ftOpen ? 'true' : 'false',
      ftMoreLabel: this.state.ftOpen ? 'Show fewer' : '+' + (footGames.length - 6) + ' more',
      ftToggle: function () { self.setState({ ftOpen: !self.state.ftOpen }); },
      accPlat: this.state.ftAcc === 'plat' ? 'true' : 'false', accSup: this.state.ftAcc === 'sup' ? 'true' : 'false', accGames: this.state.ftAcc === 'games' ? 'true' : 'false', accLeg: this.state.ftAcc === 'leg' ? 'true' : 'false',
      accTPlat: function () { self.setState({ ftAcc: self.state.ftAcc === 'plat' ? '' : 'plat' }); },
      accTSup: function () { self.setState({ ftAcc: self.state.ftAcc === 'sup' ? '' : 'sup' }); },
      accTGames: function () { self.setState({ ftAcc: self.state.ftAcc === 'games' ? '' : 'games' }); },
      accTLeg: function () { self.setState({ ftAcc: self.state.ftAcc === 'leg' ? '' : 'leg' }); },
      hwWind: this.state.hwWind || 'none',
      hwOn: this.state.hw ? 'true' : 'false', hwLabel: this.state.hw ? 'Turn off Halloween effects' : 'Turn on Halloween effects',
      hwCyclone: function (e) { if (!self.state.hw || self._cyRaf) return; self.startCyclone(e && e.clientY != null ? e.clientY : null); },
      hwToggle: function () { self.stopCyclone(); self.setState({ hw: !self.state.hw, hwWind: '' }); self.scheduleWind(false); },
      toTop: function () { var rm = false; try { rm = window.matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (x) {} try { window.scrollTo({ top: 0, behavior: rm ? 'auto' : 'smooth' }); } catch (x) { window.scrollTo(0, 0); } }
    };
  }

  render() {
    const v = this.renderVals();
    return (
      <div className="lp" onClick={v.authDelegate}>
        <HalloweenLayer v={v} />
        <HalloweenCycloneButton v={v} />
        <HalloweenToggle v={v} />
        <Background v={v} />
        <Sidebar v={v} />
        <Header v={v} />
        <LoginPrompt v={v} />
        <AuthModal v={v} />
        <HeroImgsSection v={v} />
        <QuickActions v={v} />
        <WinsSection v={v} />
        <PlatformsSection v={v} />
        <SlotsSection v={v} />
        <NpnSection v={v} />
        <PopularSection v={v} />
        <GamesSection v={v} />
        <SpinSection v={v} />
        <HowSection v={v} />
        <WeeklySection v={v} />
        <SupportSection v={v} />
        <PromotionsSection v={v} />
        <FaqSection v={v} />
        <FinalSection v={v} />
        <Footer v={v} />
        <DailyBonusModal
          blocked={!!(this.state.auth || this.state.loginAsk || this.state.menuOpen || this.state.walletOpen)}
          onClaim={() => this.claimDailyBonus()}
        />
      </div>
    );
  }
}

Landing.defaultProps = { device: '', menuOpen: false, walletOpen: false, authOpen: '', onLogin() {}, onSignup() {} };
