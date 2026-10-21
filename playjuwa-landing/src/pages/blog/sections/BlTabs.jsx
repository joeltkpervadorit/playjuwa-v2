import React from 'react';

export default function BlTabs({ v }) {
  return (
    <div className="bl-tabs" role="tablist" aria-label="Filter articles by category">
      {(v.blTabs || []).map((t, __i3) => (
      <React.Fragment key={__i3}><button className="bl-tab" type="button" role="tab" aria-selected={t.on} aria-controls="bl-grid" onClick={t.pick}><span className={`bl-ic is-${t.key ?? ""}`} aria-hidden="true" />{t.label}</button></React.Fragment>
      ))}
      </div>
  );
}
