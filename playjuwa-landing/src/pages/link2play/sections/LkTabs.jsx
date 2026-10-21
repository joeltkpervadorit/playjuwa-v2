import React from 'react';

export default function LkTabs({ v }) {
  return (
    <div className="lk-tabs" role="tablist" aria-label="Filter games">
      {(v.lkTabs || []).map((t, __i3) => (
      <React.Fragment key={__i3}><button className={`lk-tab is-${t.key ?? ""}`} type="button" role="tab" aria-selected={t.on} aria-controls="lk-grid" onClick={t.pick}><span className="lk-tab-ic" aria-hidden="true" />{t.label}</button></React.Fragment>
      ))}
      </div>
  );
}
