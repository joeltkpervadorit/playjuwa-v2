import React from 'react';
import { css } from '../css.js';

export default function TourOpenBlock({ v }) {
  return (
    <>{v.tourOpen ? (
      <>
      <div className="pj-tour" role="dialog" aria-modal="true" aria-label="PlayJuwa quick tour" onKeyDown={v.tourKey}>
      <button className="pj-tour-bd" type="button" aria-label="Close tour" tabIndex="-1" onClick={v.tourSkip} />
      <div className="pj-tour-frame" onPointerDown={v.tourDown} onPointerUp={v.tourUp}>
      <button className="pj-tour-x" type="button" aria-label="Close tour" onClick={v.tourSkip}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" /></svg></button>
      <div className="pj-tour-track" style={css(v.tourTrack)}>
      {(v.tourSlides || []).map((s, __i6) => (
      <React.Fragment key={__i6}>
      <div className="pj-tour-slide" aria-hidden={s.hidden}>
      <div className="pj-tour-card" style={css(s.style)}>
      <img src={s.img} alt={s.alt} draggable="false" />
      <button className="pj-tour-hit is-skip" type="button" style={css(s.skipStyle)} tabIndex={s.tab} aria-label="Skip tour" onClick={v.tourSkip} />
      <button className="pj-tour-hit is-next" type="button" style={css(s.nextStyle)} tabIndex={s.tab} aria-label={s.nextLabel} onClick={v.tourNext} />
      </div>
      </div>
      </React.Fragment>
      ))}
      </div>
      <p className="pj-tour-step" aria-live="polite">{v.tourStepText}</p>
      </div>
      </div>
      </>
    ) : null}</>
  );
}
