import React from 'react';

export default function HalloweenToggle({ v }) {
  return (
    <button className="hw-toggle" type="button" aria-pressed={v.hwOn} aria-label={v.hwLabel} title={v.hwLabel} onClick={v.hwToggle}><img src="/assets/61905eca8a3a9d25829f656536f23a6c.png" alt="" /></button>
  );
}
