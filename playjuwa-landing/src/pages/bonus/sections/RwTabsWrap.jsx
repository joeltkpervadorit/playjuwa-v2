import React from 'react';

export default function RwTabsWrap({ v }) {
  return (
    <div className="rw-tabs-wrap">
      <div className="rw-tabs" role="tablist" aria-label="Bonus categories">
      {(v.tabs || []).map((t, __i4) => (
      <React.Fragment key={__i4}><button className="rw-tab" type="button" role="tab" id={t.id} aria-selected={t.on} aria-controls="rw-offers" onClick={t.pick}><img src={t.icon} alt="" aria-hidden="true" />{t.label}<span className="rw-tab-n">{t.n}</span></button></React.Fragment>
      ))}
      </div>
      </div>
  );
}
