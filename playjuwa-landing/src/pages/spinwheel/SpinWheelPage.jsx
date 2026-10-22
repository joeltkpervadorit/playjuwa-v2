import { useCallback, useEffect, useRef, useState } from 'react';
import Sidebar from '../../components/Sidebar.jsx';
import SiteHeader from '../../components/SiteHeader.jsx';
import { ROUTES } from '../../routes.js';
import SpinBackground from './sections/SpinBackground.jsx';
import SpinHero from './sections/SpinHero.jsx';
import SpinInfo from './sections/SpinInfo.jsx';
import SpinStatus from './sections/SpinStatus.jsx';
import SpinWheelStage from './sections/SpinWheelStage.jsx';

const SPIN_MS = 5600;
const COOLDOWN_MS = 24 * 60 * 60 * 1000;
const STORAGE_KEY = 'pj-daily-spin';
const PRIZES = ['Bonus SC', 'Mystery Prize', 'Free Spin', 'Lucky Chip', 'Gift Box', 'VIP Reward', 'Extra Spin', 'Free Game'];

function prefersReducedMotion() {
  try {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  } catch (error) {
    return false;
  }
}

function getSavedSpin() {
  try {
    const saved = JSON.parse(window.localStorage.getItem(STORAGE_KEY) || 'null');
    if (saved?.t && Date.now() - saved.t < COOLDOWN_MS) {
      return { lastSpin: saved.t, prize: saved.prize };
    }
  } catch (error) {
    console.warn('Unable to read saved daily spin.', error);
  }
  return { lastSpin: 0, prize: null };
}

export default function SpinWheelPage({ auth }) {
  const signedIn = auth === 'in';
  const [soundOn, setSoundOn] = useState(true);
  const [spin, setSpin] = useState(() => ({
    ...getSavedSpin(),
    now: Date.now(),
    rotation: 0,
    spinning: false,
  }));
  const pendingPrize = useRef(null);
  const spinTimer = useRef(null);

  useEffect(() => {
    if (!spin.lastSpin) return undefined;
    const timer = window.setInterval(() => setSpin((current) => ({ ...current, now: Date.now() })), 1000);
    return () => window.clearInterval(timer);
  }, [spin.lastSpin]);

  useEffect(() => () => window.clearTimeout(spinTimer.current), []);

  const finishSpin = useCallback(() => {
    const prize = pendingPrize.current;
    if (!prize) return;
    window.clearTimeout(spinTimer.current);
    pendingPrize.current = null;
    const timestamp = Date.now();
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ t: timestamp, prize }));
    } catch (error) {
      console.warn('Unable to save daily spin cooldown.', error);
    }
    setSpin((current) => ({
      ...current,
      spinning: false,
      prize,
      lastSpin: timestamp,
      now: timestamp,
    }));
  }, []);

  const doSpin = useCallback(() => {
    const now = Date.now();
    if (!signedIn || spin.spinning || (spin.lastSpin && now - spin.lastSpin < COOLDOWN_MS)) return;

    const index = Math.floor(Math.random() * PRIZES.length);
    const segment = 360 / PRIZES.length;
    const target = (360 - (index * segment + segment / 2) + (Math.random() - 0.5) * segment * 0.7) % 360;
    const currentRotation = ((spin.rotation % 360) + 360) % 360;
    const delta = (((target - currentRotation) % 360) + 720) % 360;
    const reducedMotion = prefersReducedMotion();
    pendingPrize.current = PRIZES[index];
    setSpin((current) => ({
      ...current,
      spinning: true,
      prize: null,
      rotation: current.rotation + (reducedMotion ? 360 : 6 * 360) + delta,
    }));

    window.clearTimeout(spinTimer.current);
    spinTimer.current = window.setTimeout(finishSpin, (reducedMotion ? 800 : SPIN_MS) + 150);
  }, [finishSpin, signedIn, spin.lastSpin, spin.rotation, spin.spinning]);

  const timeLeft = spin.lastSpin ? Math.max(0, COOLDOWN_MS - (spin.now - spin.lastSpin)) : 0;
  const onCooldown = !spin.spinning && timeLeft > 0;
  const formatTime = (value) => String(value).padStart(2, '0');
  const countdown = [
    formatTime(Math.floor(timeLeft / 3600000)),
    formatTime(Math.floor((timeLeft % 3600000) / 60000)),
    formatTime(Math.floor((timeLeft % 60000) / 1000)),
  ].join(':');
  const state = !signedIn ? 'locked' : spin.spinning ? 'spinning' : onCooldown ? 'wait' : 'ready';
  const reducedMotion = prefersReducedMotion();
  const stateContent = {
    locked: ['Locked', 'M7 11V8a5 5 0 0 1 10 0v3M6 11h12v9H6z', 'Daily Spin locked', 'Sign up or log in to unlock your free daily spin.', ''],
    ready: ['Ready', 'M5 12l5 5 9-10', 'Your free spin is ready', 'Tap spin to try your luck today.', ''],
    spinning: ['Spinning', 'M12 3v4M12 17v4M3 12h4M17 12h4', 'Good luck!', 'The wheel is spinning…', ''],
    wait: ['Come back soon', 'M12 7v5l3 2M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z', 'Spin used for today', 'Next free spin available in', countdown],
  }[state];
  const values = {
    ...ROUTES,
    authIn: signedIn,
    authOut: !signedIn,
    locked: !signedIn,
    unlocked: signedIn,
    lockedStr: String(!signedIn),
    stState: onCooldown ? 'wait' : state,
    stTag: stateContent[0],
    stIcon: stateContent[1],
    stTitle: stateContent[2],
    stText: stateContent[3],
    stTime: stateContent[4],
    wheelCls: `lp-wheel ${spin.spinning ? 'is-spinning' : 'is-idle'}`,
    wheelStyle: `transform: rotate(${spin.rotation}deg); transition: transform ${reducedMotion ? 800 : SPIN_MS}ms ${reducedMotion ? 'ease-out' : 'cubic-bezier(0.17, 0.67, 0.12, 0.99)'}`,
    onSpinEnd: (event) => {
      if (event.target === event.currentTarget) finishSpin();
    },
    spin: doSpin,
    spinDisabled: !signedIn || spin.spinning || onCooldown,
    isSpinning: spin.spinning,
    onCooldown,
    hubText: !signedIn ? 'LOCKED' : spin.spinning ? '…' : 'SPIN',
    hubLabel: !signedIn
      ? 'Daily spin is locked. Sign up or log in to unlock it'
      : spin.spinning
        ? 'Wheel is spinning'
        : onCooldown
          ? `Next spin available in ${countdown}`
          : 'Spin the wheel',
    btnText: spin.spinning ? 'Spinning…' : onCooldown ? `Come back in ${countdown}` : 'Spin Now',
    hasResult: signedIn && Boolean(spin.prize) && !spin.spinning,
    resultLabel: spin.prize || '',
    prizes: PRIZES.map((label) => ({ label })),
    soundOn: String(soundOn),
    soundLabel: soundOn ? 'Mute sound' : 'Unmute sound',
    toggleSound: () => setSoundOn((value) => !value),
    sbSpin: () => {},
  };

  return (
    <div className="by spinwheel-page">
      <Sidebar v={values} />
      <div className="by-shell">
        <SiteHeader />
        <main className="cs-main sp-main" id="top">
          <SpinBackground />
          <SpinHero v={values} />
          <SpinStatus v={values} />
          <SpinWheelStage v={values} />
          <SpinInfo v={values} />
        </main>
      </div>
    </div>
  );
}
