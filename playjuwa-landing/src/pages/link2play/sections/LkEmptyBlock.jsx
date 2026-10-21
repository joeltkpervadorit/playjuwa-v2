import React from 'react';

export default function LkEmptyBlock({ v }) {
  return (
    <>{v.lkEmpty ? (
      <>
      <div className="lk-empty" role="status">
      <b>No games match “{v.lq}”</b>
      <span>Try another name or show all games.</span>
      <button className="pj-btn pj-btn-outline pj-btn-sm" type="button" onClick={v.resetAll}>Show all games</button>
      </div>
      </>
    ) : null}</>
  );
}
