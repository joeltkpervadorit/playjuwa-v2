import React from 'react';

export default function BlEmptyBlock({ v }) {
  return (
    <>{v.blEmpty ? (
      <>
      <div className="bl-empty" role="status">
      <b>{v.blEmptyTitle}</b>
      <span>Try a different title or show all articles.</span>
      <button className="pj-btn pj-btn-outline pj-btn-sm" type="button" onClick={v.resetBl}>Show all articles</button>
      </div>
      </>
    ) : null}</>
  );
}
