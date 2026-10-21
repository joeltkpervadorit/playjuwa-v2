/* Page CSS is injected while a page is mounted and removed when it unmounts.
 * The pages share a base shell but each one has its own tuned rules, so loading them
 * all globally would let one page's CSS override another's.
 */
import React, { useLayoutEffect, useState } from 'react';

export function withPageStyles(Page, css, id) {
  function Styled(props) {
    const [ready, setReady] = useState(false);
    useLayoutEffect(() => {
      const el = document.createElement('style');
      el.setAttribute('data-pj-page', id);
      el.textContent = css;
      document.head.appendChild(el);
      setReady(true);
      return () => el.remove();
    }, []);
    // render only after the stylesheet is in place -> no unstyled flash
    return ready ? <Page {...props} /> : null;
  }
  Styled.displayName = 'Styled(' + id + ')';
  return Styled;
}
