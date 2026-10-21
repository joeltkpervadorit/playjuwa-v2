import React from 'react';

export default function HalloweenCycloneButton({ v }) {
  return (
    <button className="hw-cy-btn" type="button" aria-label="Play the Halloween cyclone" title="Play the Halloween cyclone" data-on={v.hwOn} onClick={v.hwCyclone}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true"><path d="M3 8h10.5a3 3 0 1 0-3-3" /><path d="M3 12h15a3 3 0 1 1-3 3" /><path d="M3 16h7" /></svg></button>
  );
}
