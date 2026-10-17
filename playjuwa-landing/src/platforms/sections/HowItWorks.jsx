import React from 'react';

export default function HowItWorks({ v }) {
  return (
    <>{v.authOut ? (
      <>
      <ol className="pl-steps" aria-label="How it works">
      <li><span className="pl-step-n">1</span><span><b>Sign up free</b><small>Create your PlayJuwa account in seconds.</small></span></li>
      <li><span className="pl-step-n">2</span><span><b>Unlock credentials</b><small>Every platform login appears on its card.</small></span></li>
      <li><span className="pl-step-n">3</span><span><b>Copy &amp; play</b><small>Copy your username and password, then tap Play.</small></span></li>
      </ol>
      </>
    ) : null}</>
  );
}
