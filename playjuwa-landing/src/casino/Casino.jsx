/* PlayJuwa casino page.
 * State, effects and animation logic live in this class component; markup lives in ./sections.
 * renderVals() computes every value the markup reads (passed down as `v`).
 */
import '../styles/casino.css';
import React from 'react';
import { FOOTER_GAMES } from '../data/catalogs.js';
import { ROUTES } from './routes.js';
import { blob } from './assets.js';
import Sidebar from './sections/Sidebar.jsx';
import Header from './sections/Header.jsx';
import PromoCarousel from './sections/PromoCarousel.jsx';
import DailySpinCard from './sections/DailySpinCard.jsx';
import CategoryNav from './sections/CategoryNav.jsx';
import PromoTiles from './sections/PromoTiles.jsx';
import GameRails from './sections/GameRails.jsx';
import SiteFooter from '../landing/sections/Footer.jsx';
import MobileTabBar from '../landing/sections/MobileTabBar.jsx';

const FAVORITES_STORAGE_KEY = 'playjuwa-casino-favorites';

function loadFavorites() {
  try {
    const favorites = JSON.parse(window.localStorage.getItem(FAVORITES_STORAGE_KEY) || '{}');
    return favorites && typeof favorites === 'object' && !Array.isArray(favorites) ? favorites : {};
  } catch (error) {
    return {};
  }
}

export default class Casino extends React.Component {
  constructor(props) { super(props); this.state = { casOpen: true, cat: 'all', slide: 0, favs: loadFavorites(), sound: true, ftAcc: '' }; }
  componentDidMount() { document.title = 'PlayJuwa — Casino'; this.installTapFx(); this.installMotion(); var self = this; if (!this.rm()) this._t = setInterval(function () { self.setState({ slide: (self.state.slide + 1) % 3 }); }, 6000); }
  componentWillUnmount() { clearInterval(this._t); }
  rm() { try { return window.matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) { return false; } }
  navLinks() {
    return ROUTES;
  }
  navTo(href) {
    try { var a = document.createElement('a'); a.setAttribute('href', href); a.style.display = 'none'; document.body.appendChild(a); a.click(); setTimeout(function () { try { a.remove(); } catch (x) {} }, 0); } catch (e) {}
  }
  installTapFx() {
    try {
      if (typeof window === 'undefined' || window.__pjTapFx) return;
      window.__pjTapFx = true;
      var mq = window.matchMedia ? window.matchMedia('(prefers-reduced-motion: reduce)') : null;
      var cv = document.createElement('canvas');
      cv.setAttribute('aria-hidden', 'true');
      cv.className = 'pj-tapfx';
      cv.style.cssText = 'position:fixed;left:0;top:0;width:100vw;height:100vh;pointer-events:none;z-index:2147483000;display:block';
      document.body.appendChild(cv);
      var ctx = cv.getContext('2d'), W = 0, H = 0, DPR = 1, fx = [], raf = 0, last = 0;
      var size = function () { DPR = Math.min(2, window.devicePixelRatio || 1); W = window.innerWidth; H = window.innerHeight; cv.width = Math.round(W * DPR); cv.height = Math.round(H * DPR); };
      size(); window.addEventListener('resize', size, { passive: true });
      var COLS = ['#a855f7', '#c084fc', '#7c3aed', '#ffd21f', '#ffb800', '#ff8a00', '#fff3b0'];
      var coarse = window.matchMedia && window.matchMedia('(pointer: coarse)').matches;
      var ease = function (t) { return 1 - Math.pow(1 - t, 3); };
      var star = function (x, y, r, rot) {
        ctx.beginPath();
        for (var i = 0; i < 8; i++) { var a = rot + i * Math.PI / 4, rr = i % 2 ? r * 0.28 : r; ctx.lineTo(x + Math.cos(a) * rr, y + Math.sin(a) * rr); }
        ctx.closePath(); ctx.fill();
      };
      var rrect = function (x, y, w, h, r) {
        r = Math.max(0, Math.min(r, w / 2, h / 2));
        ctx.beginPath(); ctx.moveTo(x + r, y); ctx.arcTo(x + w, y, x + w, y + h, r); ctx.arcTo(x + w, y + h, x, y + h, r); ctx.arcTo(x, y + h, x, y, r); ctx.arcTo(x, y, x + w, y, r); ctx.closePath();
      };
      var burst = function (x, y, el) {
        var now = performance.now(), n = coarse ? 10 : 14, parts = [], sp = [];
        for (var i = 0; i < n; i++) {
          var a = Math.random() * Math.PI * 2, v = 90 + Math.random() * 170;
          parts.push({ a: a, v: v, r: 1.4 + Math.random() * 2.2, c: COLS[(Math.random() * COLS.length) | 0], life: 420 + Math.random() * 260 });
        }
        for (var j = 0; j < 4; j++) {
          var b = Math.random() * Math.PI * 2, d = 14 + Math.random() * 30;
          sp.push({ x: Math.cos(b) * d, y: Math.sin(b) * d, r: 3 + Math.random() * 3.5, delay: 40 + Math.random() * 160, rot: Math.random() * Math.PI });
        }
        var box = null;
        if (el) {
          var rc = el.getBoundingClientRect();
          if (rc.width > 4 && rc.height > 4 && rc.width < W * 0.95 && rc.height < 400) {
            var br = parseFloat((getComputedStyle(el).borderTopLeftRadius || '0')) || 0;
            box = { x: rc.left, y: rc.top, w: rc.width, h: rc.height, r: br };
          }
        }
        var rays = [], nr = coarse ? 6 : 8, base = Math.random() * Math.PI;
        for (var m = 0; m < nr; m++) rays.push({ a: base + m * Math.PI * 2 / nr + (Math.random() - 0.5) * 0.35, len: 30 + Math.random() * 26, d: Math.random() * 50, gold: m % 2 === 0 });
        fx.push({ t0: now, x: x, y: y, parts: parts, sp: sp, box: box, rays: rays, rot: Math.PI / 4 * (Math.random() < 0.5 ? 0 : 1) + (Math.random() - 0.5) * 0.3 });
        if (fx.length > 8) fx.shift();
        if (!raf) { last = now; raf = requestAnimationFrame(loop); }
      };
      var loop = function (now) {
        ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
        ctx.clearRect(0, 0, W, H);
        ctx.globalCompositeOperation = 'lighter';
        for (var k = fx.length - 1; k >= 0; k--) {
          var f = fx[k], t = now - f.t0, alive = false;
          // element feedback: soft gold/purple outline pulse
          if (f.box && t < 420) {
            alive = true;
            var p = t / 420, g = ease(p) * 6, b = f.box;
            var grd = ctx.createLinearGradient(b.x, b.y, b.x + b.w, b.y + b.h);
            grd.addColorStop(0, 'rgba(255,210,31,' + (0.85 * (1 - p)) + ')');
            grd.addColorStop(1, 'rgba(168,85,247,' + (0.85 * (1 - p)) + ')');
            ctx.save(); ctx.strokeStyle = grd; ctx.lineWidth = 2 * (1 - p) + 0.5; ctx.shadowColor = 'rgba(255,184,0,' + (0.7 * (1 - p)) + ')'; ctx.shadowBlur = 14;
            rrect(b.x - g, b.y - g, b.w + 2 * g, b.h + 2 * g, b.r + g); ctx.stroke(); ctx.restore();
            ctx.save(); rrect(b.x, b.y, b.w, b.h, b.r); ctx.clip();
            var rg = ctx.createRadialGradient(f.x, f.y, 0, f.x, f.y, Math.max(b.w, b.h) * (0.25 + ease(p) * 0.9));
            rg.addColorStop(0, 'rgba(255,236,170,' + (0.28 * (1 - p)) + ')'); rg.addColorStop(1, 'rgba(168,85,247,0)');
            ctx.fillStyle = rg; ctx.fillRect(b.x, b.y, b.w, b.h); ctx.restore();
          }
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
      window.__pjBurst = function (x, y, big) { if (mq && mq.matches) return; burst(x, y, null); if (big) { setTimeout(function () { burst(x - 18, y + 6, null); }, 70); setTimeout(function () { burst(x + 18, y - 4, null); }, 140); } };
      var SEL = 'a,button,[role="button"],[role="tab"],[role="radio"],input[type="submit"],input[type="button"],summary,label,select';
      var down = null;
      var fire = function (e) {
        if (mq && mq.matches) return;
        var el = e.target && e.target.closest ? e.target.closest(SEL) : null;
        if (el && (el.disabled || el.getAttribute('aria-disabled') === 'true')) el = null;
        burst(e.clientX, e.clientY, el);
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
    var self = this, st = this.state, D = {"icon": {"all": "782c820e9e1b26dfadb1a4d49bab2719", "live": "e4cb5e7cf093bf6b11181df1f74b0e93", "slots": "bd3a13271369c5f1ca62806a588be8a2", "fish": "4325f6ff1e3f4f1353d5bde6ab26ae74", "table": "4537394c82b9912eb7558cc100facfe7", "crash": "51e2d61c87dcab4fb76db635a117176f", "shoot": "95ac6e9cd71ad92dae039c1eb67d61ff", "buffalo": "d627b014c0b7e7550285133651211903", "instant": "8b8cb9f4405570833724478b34fc206e", "keno": "8ca3747ad1b676a5d83c7780030e49b8", "scratch": "0462d3435532fd76d47b6a6c6a8a20b4", "lottery": "577f1ae53954782bd5e1e8c1ea25a75b", "other": "0a4e6364ca433d8ea084df834314c640"}, "top": [["Hip Hop Panda", "Juwa", "de577c6851183ccea538d1b61a9e0682"], ["Wild Bandito", "PG Soft", "5ce5e05f5073f0e5c359de1244096e90"], ["Fortune Gods", "JILI", "978b12fad8c09a141254bc1544741dd4"], ["Dragon Legend", "JILI", "3f0bb356bd279490389e75b9da3c5fa7"], ["Leprechaun Riches", "PG Soft", "3b706b86752f07b3a340c38b6ec76d61"], ["Prosperity Lion", "Juwa", "88460db91c407b4514b454f43a01c225"], ["Candy Stash", "Pragmatic", "46419f21102630c9d72cf4b1749a97b2"], ["Witch Academy", "PG Soft", "ff3c2ccdacb6d64d900d4ee8b83c3cf1"], ["Calaveras Explosivas", "PG Soft", "f07113b1538a361449f52b36e8bb880b"], ["Zeus Attack", "Pragmatic", "5a528149ed982d1f74e80ba52e7194cc"]], "live": [["Baccarat", "Live", "151dcf8691403fc0fb6ad01f5a997afd"], ["Blackjack", "Live", "a10f4b71f0ff2b811a3dd3f98e1101ab"], ["Roulette", "Live", "df514278796b3691231892d5ba62ae4f"], ["Auto Roulette", "Live", "c1eddc13acb8505383c101e21d7f1f87"], ["Mini Roulette", "Live", "b4941eced517175a51f323c4783c8963"], ["Royal Place 1", "Live", "99b2e1b64895ceac458552c4ac22cbd5"], ["Royal Place 2", "Live", "15291ee25036cabbc7aa980a2ec17d4e"], ["Prime Roulette", "Live", "16ff4b7421a73f0e91459325c147b697"], ["Blackjack 2", "Live", "3231d0397f4ef1ffe553222ae0126a29"], ["Sic Bo", "Live", "d9f5334557c0815b3d79d85634b16455"]], "fish": [["King Octopus", "Juwa", "ac296fb0f7019a9624e6aab50532f6da"], ["Golden Dragon", "JILI", "b6facf5817d4fa404da5ddbd72995a0f"], ["KA Fish Hunter", "Spadegaming", "ba17fd1b349f78dea58f3f4b71e8ea1a"], ["Giant Fish Hunter", "JILI", "48a842315ee2ff1ed40b7fda7c828138"], ["Cai Shen Dao", "Juwa", "a98928bc0e345eab62a688cc68d97dcc"], ["Force of Dragon", "Pragmatic", "261d80bb3a270b995777c172a994687c"], ["Mermaid Hunter", "JILI", "d1bcd892181b98497c81c265cb681991"], ["Fishing War", "Juwa", "182a1bddfeddda377795f09b5c5299e0"], ["Fishing God", "Spadegaming", "8ee6947ba666062adf5d5fb5a414f518"], ["Ocean Princess", "JILI", "c3c45f343d425ca497d04e84ffe57872"]], "pop": [["Prosperity Lion", "Juwa", "9eef4307de015a8cea479955be838787"], ["Jungle Delight", "PG Soft", "b83c58437c28ecf2897fd6d1c0216d3e"], ["Cruise Royale", "Pragmatic", "6be118eebfed7ef14253f69b335b3cea"], ["Gem Saviour Sword", "PG Soft", "6a011e10d58307b3c750b4cab009332a"], ["Fortune Gods", "JILI", "65998903853dc0ba422f3c1974f6cddb"], ["Double Fortune", "PG Soft", "8d2a57377d65f01317b3573120b317f2"], ["Wild Bandito", "PG Soft", "1b500b8f0a0f43d53c652a76b595f957"], ["Wild Fireworks", "JILI", "2ab0bd8691794d809d833c8877c9e8bd"], ["Mr. Hallow-Win", "PG Soft", "1236099598c1b8e596cc69fc0bf58863"], ["Ganesha Gold", "JILI", "ee6202c26bd91ede4a3af0fc99298d3e"]], "pool": [["Gates of Olympus", "Pragmatic", "465a51d403e678e64441532e50e3897f"], ["Sweet Bonanza", "Pragmatic", "1851879c4e7466387aae61a16f0481c4"], ["Sugar Rush", "Pragmatic", "f9a9bb9f59652473942de85edc285551"], ["Wanted Dead or a Wild", "Hacksaw", "510a90e88d6c156c2b5247a6dc300a15"], ["Big Bass Bonanza", "Pragmatic", "3ed25dbcd31a8ff7c9417da650e88a56"], ["Starlight Princess", "Pragmatic", "f3b07a565ef3dc7f5634ab2a7c1d0386"], ["Buffalo King", "Pragmatic", "691e21b1e1618a6bff487d6015465b5b"], ["Golden Dragon", "Juwa", "4ed2d0f528be5f28c36ea3ac4961f12a"], ["Wild West Gold", "Pragmatic", "4ea575a096a4e3fe49790cad98073582"], ["The Dog House", "Pragmatic", "59ca7f792d9e90b3cc960b43e815def9"], ["Cleocatra", "Pragmatic", "b91da345ef186445cac10d8dd6732d57"], ["Fruit Party", "Pragmatic", "a87c4d111e363536e7a1ad2096cd9a61"], ["Book of Dead", "Play'n GO", "2df025679ab4a4bb55a24db7bf85f5a8"], ["Money Tree", "Pragmatic", "555f8044dc4ec5b6553337c7317c82e4"], ["Hot to Burn", "Pragmatic", "e3dac8c4ae74090b4af61c815c4399a9"], ["Joker's Jewels", "Pragmatic", "5aad78d4a22e763cdcda88f4f6a56ec2"], ["Dragon Tiger", "Juwa", "0dadf2742e6ed9d1edb5e5f57a067b8b"], ["Fortune Ox", "PG Soft", "a3fc1196e80c1554a17ae4697de11abd"], ["Aztec Gems", "Pragmatic", "f88dbe9dd5056566fd9a546ce50141a4"], ["5 Lions Megaways", "Pragmatic", "efdaa2f1a67f574b45ba59099b3ab695"], ["Fishing God", "Spadegaming", "6af97b6065090864c9860ded4ef138d9"], ["Candy Stash", "Pragmatic", "ef62da4b74d88c8c72ee4630bbfaaddb"], ["San Quentin Ways", "Nolimit City", "40ee24a239a244885d941aab35402849"], ["Thunderstruck II", "Microgaming", "05f01eabab8372a5c940df2a97c1a4a6"]]};
    var B = function (i) { return blob(i); };
    var CATS = [['all','All Games','top'],['live','Live Casino','live'],['slots','Slots','slots'],['fish','Fishing','fishing'],['table','Table Games','table'],['crash','Crash Game','crash'],['shoot','Shooting','shooting'],['buffalo','Buffalo Blast','buffalo'],['instant','Instant Win','instant'],['keno','Keno','keno'],['scratch','Scratch Cards','scratch'],['lottery','Lottery','lottery'],['other','Other','other']];
    var catItem = function (c) { return { label: c[1], icon: B(D.icon[c[0]]), href: '#' + c[2], cur: st.cat === c[0] ? 'page' : 'false', pick: function () { self.setState({ cat: c[0] }); } }; };
    var pool = D.pool;
    var rot = function (n, off) { var out = []; for (var i = 0; i < n; i++) out.push(pool[(off + i * 5) % pool.length]); return out; };
    var mk = function (arr, key, opts) {
      opts = opts || {};
      return arr.map(function (g, i) {
        var k = key + i, fav = !!st.favs[k];
        return { rank: String(i + 1), rankLen: String(String(i + 1).length), title: g[0], prov: g[1], img: B(g[2]), label: 'Play ' + g[0] + ' by ' + g[1], hot: !!(opts.hot && i === 0), live: !!opts.live,
          fav: fav ? 'true' : 'false', favLabel: (fav ? 'Remove ' : 'Add ') + g[0] + (fav ? ' from favorites' : ' to favorites'),
          toggleFav: function () {
            var f = Object.assign({}, self.state.favs); f[k] = !fav;
            self.setState({ favs: f }, function () {
              try { window.localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(f)); } catch (e) {}
            });
          } };
      });
    };
    var scroll = function (dir) { return function (e) { var r = e.currentTarget.closest('.cs-sec').querySelector('.cs-rail'); if (r) r.scrollBy({ left: dir * r.clientWidth * 0.8, behavior: self.rm() ? 'auto' : 'smooth' }); }; };
    var SEC = [
      { id: 'top', title: 'Top 10 Games', sub: 'Most popular games right now', icon: 'all', games: mk(D.top, 'top', { hot: true }), kind: 'is-rank is-top' },
      { id: 'live', title: 'Live Casino', sub: 'Real tables · Real dealers', icon: 'live', games: mk(D.live, 'live', { live: true }), kind: 'is-live',
        strip: true, stripId: 'signup', stripCls: 'is-npn', stripImg: '/assets/npn-slot.webp', stripEye: 'Sweepstakes', stripTitle: 'No Purchase Necessary', stripT1: 'No Purchase', stripT2: 'Necessary.', stripText: 'Play instantly.', stripHi: 'Find free bonuses.', stripCta: 'Play Now', stripHref: NL.nSignup },
      { id: 'fishing', title: 'Top 10 Fishing Games', sub: 'Ranked by players this week', icon: 'fish', games: mk(D.fish, 'fish'), kind: 'is-rank' },
      { id: 'popular', title: 'Popular Games', sub: 'Most played and trending games', icon: 'crash', games: mk(D.pop, 'pop') },
      { id: 'slots', title: 'Slots', sub: 'Spin. Win. Repeat.', icon: 'slots', games: mk(rot(10, 0), 'slots'),
        strip: true, stripCls: 'is-spin', stripImg: B('fccc2e4b39d728604e2e82f2acef0a46'), stripEye: 'Daily Rewards', stripTitle: 'Spin the Wheel', stripT1: 'Spin', stripT2: 'the Wheel', stripText: 'Spin every 24 hours for a', stripHi: 'free reward.', stripCta: 'Spin Now', stripHref: NL.nHome },
      { id: 'table', title: 'Table Games', sub: 'Classic games, real thrills', icon: 'table', games: mk(D.live.slice(2).concat(D.live.slice(0, 2)), 'table', { live: true }) },
      { id: 'crash', title: 'Crash Game', sub: 'Cash out before it crashes', icon: 'crash', games: mk(rot(10, 1), 'crash') },
      { id: 'shooting', title: 'Shooting', sub: 'Aim, fire, collect', icon: 'shoot', games: mk(D.fish.slice(5).concat(D.fish.slice(0, 5)), 'shoot') },
      { id: 'buffalo', title: 'Buffalo Blast', sub: 'Stampede of wins', icon: 'buffalo', games: mk(rot(10, 2), 'buf') },
      { id: 'instant', title: 'Instant Win', sub: 'Quick games, instant results', icon: 'instant', games: mk(rot(10, 3), 'inst') },
      { id: 'keno', title: 'Keno', sub: 'Pick your numbers', icon: 'keno', games: mk(rot(10, 4), 'keno') },
      { id: 'scratch', title: 'Scratch Cards', sub: 'Scratch and reveal', icon: 'scratch', games: mk(rot(10, 6), 'scr') },
      { id: 'other', title: 'Other', sub: 'More games to explore', icon: 'other', games: mk(rot(10, 7), 'oth') }
    ].map(function (s) { return Object.assign({ strip: false, stripId: '', stripCls: '', stripImg: '', stripEye: '', stripTitle: '', stripT1: '', stripT2: '', stripHi: '', stripText: '', stripCta: '', stripHref: '#', kind: '' }, s, { hid: 'cs-h-' + s.id, icon: B(D.icon[s.icon]), scrollL: scroll(-1), scrollR: scroll(1) }); });
    var SLIDES = [
      { cls: 'is-a', img: B('7c9e82f0bbbf0acc214a4e95ecabf79e'), eyebrow: 'Welcome offer', t1: 'Super Bonus', t2: '+100% on First Purchase', text: 'Play bigger and enjoy more at PlayJuwa.', cta: 'Buy SC Now', href: NL.nBuy },
      { cls: 'is-b', img: B('73cb9e20c8d075e4f2e52d78b5633abc'), eyebrow: 'All your games', t1: 'One Account.', t2: '20+ Platforms', text: 'All your favorite games in one place.', cta: 'Play Now', href: '#games' },
      { cls: 'is-c', img: B('8f14686d83e94ff65cd7af7fe492e7f9'), eyebrow: 'Sweepstakes', t1: 'No Purchase', t2: 'Necessary', text: 'Play instantly — discover the free bonuses across our website.', cta: 'Start Playing', href: NL.nSignup }
    ];
    return {
      ...NL, nPlatforms: '/#platforms', nPromotions: '/#promotions', nSupport: '/#support', tabCasino: 'page',
      goBuyBtn: function () { self.navTo(NL.nBuy); }, goAcctBtn: function () { self.navTo(NL.nWallet); },
      balSc: '104.00', balGc: '0',
      casOpen: st.casOpen ? 'true' : 'false', casShow: st.casOpen, toggleCas: function () { self.setState({ casOpen: !self.state.casOpen }); },
      subCats: CATS.map(function (c, i) { var it = catItem(c); if (i === 0) it.label = 'All Casino Games'; return it; }),
      cats: CATS.map(catItem),
      slides: SLIDES.map(function (s, i) { var on = st.slide === i; return Object.assign({}, s, { on: on ? 'true' : 'false', hidden: on ? 'false' : 'true', tab: on ? '0' : '-1' }); }),
      dots: SLIDES.map(function (s, i) { return { on: st.slide === i ? 'true' : 'false', label: 'Show promotion ' + (i + 1), pick: function () { self.setState({ slide: i }); } }; }),
      prevSlide: function () { self.setState({ slide: (self.state.slide + 2) % 3 }); },
      nextSlide: function () { self.setState({ slide: (self.state.slide + 1) % 3 }); },
      promos: [
        { cls: 'is-live', img: B('6ec97fb8ca715d0bcf15d6aeabb7ecdc'), title: 'Live Casino', sub: 'Real dealers. Real tables.', cta: 'Play Now', href: '#live' },
        { cls: 'is-slots', img: B('9a5a2fab2b7d43d23e45027c2cdbd069'), title: 'Slots', sub: 'Spin. Win. Repeat.', cta: 'Explore', href: '#slots' },
        { cls: 'is-fish', img: B('3e4778148413d7699c781939f08216e4'), title: 'Fishing Games', sub: 'Hunt big rewards.', cta: 'Play Now', href: '#fishing' },
        { cls: 'is-table', img: B('6f4bd2e6c760be3af86b570c66280813'), title: 'Table Games', sub: 'Classic games. Real thrills.', cta: 'Play Now', href: '#table' }
      ],
      sections: SEC,
      footGames: FOOTER_GAMES,
      accPlat: st.ftAcc === 'plat' ? 'true' : 'false',
      accSup: st.ftAcc === 'sup' ? 'true' : 'false',
      accGames: st.ftAcc === 'games' ? 'true' : 'false',
      accLeg: st.ftAcc === 'leg' ? 'true' : 'false',
      accTPlat: function () { self.setState({ ftAcc: self.state.ftAcc === 'plat' ? '' : 'plat' }); },
      accTSup: function () { self.setState({ ftAcc: self.state.ftAcc === 'sup' ? '' : 'sup' }); },
      accTGames: function () { self.setState({ ftAcc: self.state.ftAcc === 'games' ? '' : 'games' }); },
      accTLeg: function () { self.setState({ ftAcc: self.state.ftAcc === 'leg' ? '' : 'leg' }); },
      toTop: function () {
        try { window.scrollTo({ top: 0, behavior: self.rm() ? 'auto' : 'smooth' }); }
        catch (e) { window.scrollTo(0, 0); }
      },
      soundOn: st.sound ? 'true' : 'false', soundLabel: st.sound ? 'Mute sound' : 'Unmute sound', toggleSound: function () { self.setState({ sound: !self.state.sound }); }
    };
  }

  render() {
    const v = this.renderVals();
    return (
      <div className="by" id="top">
        <Sidebar v={v} />
        <div className="by-shell">
          <Header v={v} />
          <main className="cs-main" id="casino">
            <div className="cs-hero">
              <PromoCarousel v={v} />
              <DailySpinCard v={v} />
            </div>
            <CategoryNav v={v} />
            <PromoTiles v={v} />
            <GameRails v={v} />
          </main>
          <SiteFooter v={v} />
        </div>
        <MobileTabBar v={v} />
      </div>
    );
  }
}

Casino.defaultProps = { device: '' };
