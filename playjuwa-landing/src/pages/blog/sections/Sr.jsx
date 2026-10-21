import React from 'react';

export default function Sr({ v }) {
  return (
    <p className="lp-sr" role="status" aria-live="polite">{v.blCount}</p>
  );
}
