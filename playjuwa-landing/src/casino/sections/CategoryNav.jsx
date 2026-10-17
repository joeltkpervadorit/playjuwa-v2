import React from 'react';

export default function CategoryNav({ v }) {
  return (
    <nav className="cs-cats" aria-label="Game categories">
      {(v.cats || []).map((c, __i3) => (
      <React.Fragment key={__i3}>
      <a className="cs-cat" href={c.href} aria-current={c.cur} onClick={c.pick}><img src={c.icon} alt="" /><span>{c.label}</span></a>
      </React.Fragment>
      ))}
      </nav>
  );
}
