import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import './DailyBonusModal.css';

const STORAGE_KEY = 'pj_daily_bonus_seen';
const IMAGE = '/assets/daily-bonus.webp';

function todayKey() {
  const date = new Date();
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}

function hasSeenToday() {
  try {
    return window.localStorage.getItem(STORAGE_KEY) === todayKey();
  } catch {
    return false;
  }
}

function markSeenToday() {
  try {
    window.localStorage.setItem(STORAGE_KEY, todayKey());
  } catch {}
}

export default function DailyBonusModal({ blocked, onClaim }) {
  const [ready, setReady] = useState(false);
  const [open, setOpen] = useState(false);
  const dialogRef = useRef(null);
  const returnFocusRef = useRef(null);

  useEffect(() => {
    let timer;
    const onLoad = () => {
      timer = window.setTimeout(() => setReady(true), 3000);
    };

    if (document.readyState === 'complete') onLoad();
    else window.addEventListener('load', onLoad, { once: true });

    return () => {
      window.removeEventListener('load', onLoad);
      window.clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (!ready || blocked || open || hasSeenToday()) return undefined;

    let cancelled = false;
    const image = new Image();
    const show = () => {
      if (cancelled || hasSeenToday()) return;
      markSeenToday();
      setOpen(true);
    };

    image.onload = show;
    image.src = IMAGE;
    if (image.complete) show();

    return () => {
      cancelled = true;
      image.onload = null;
    };
  }, [blocked, open, ready]);

  useEffect(() => {
    if (!open) return undefined;

    const dialog = dialogRef.current;
    const previousOverflow = document.documentElement.style.overflow;
    returnFocusRef.current = document.activeElement;
    document.documentElement.style.overflow = 'hidden';

    const focusable = () => Array.from(dialog.querySelectorAll('button:not(:disabled):not(.pj-db-bd)'));
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        setOpen(false);
      } else if (event.key === 'Tab') {
        const items = focusable();
        const first = items[0];
        const last = items[items.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', onKeyDown, true);
    focusable()[0]?.focus({ preventScroll: true });

    return () => {
      document.removeEventListener('keydown', onKeyDown, true);
      document.documentElement.style.overflow = previousOverflow;
      returnFocusRef.current?.focus?.({ preventScroll: true });
    };
  }, [open]);

  if (!open) return null;

  const close = () => setOpen(false);
  const claim = () => {
    close();
    onClaim();
  };

  return createPortal(
    <div className="pj-db" ref={dialogRef} role="dialog" aria-modal="true" aria-label="Daily Bonus: 15,000 GC, 0.5 SC and a 100% bonus">
      <button className="pj-db-bd" type="button" tabIndex="-1" aria-label="Close daily bonus" onClick={close} />
      <div className="pj-db-card">
        <img
          className="pj-db-img"
          src={IMAGE}
          width="1375"
          height="938"
          alt="Daily Bonus. Claim your free reward: 15,000 GC, 0.5 SC and +100% bonus."
          draggable="false"
          decoding="async"
        />
        <button className="pj-db-cta" type="button" aria-label="Claim now" onClick={claim} />
        <button className="pj-db-x" type="button" aria-label="Close daily bonus" onClick={close} />
      </div>
    </div>,
    document.body
  );
}