import React from 'react';

export default function AuthOutBlock({ v }) {
  return (
    <>{v.authOut ? (
      <>
      <p className="pl-steps" role="status">Platform credentials and game links are unavailable until their services are connected.</p>
      </>
    ) : null}</>
  );
}
