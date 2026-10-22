import React from 'react';

export default function GmOpenBlock({ v }) {
  return (
    <>{v.gmOpen ? (
      <>
      <div className="pj-gm" role="dialog" aria-modal="true" aria-labelledby="pj-gm-title" onKeyDown={v.gmKey}>
      <button className="pj-gm-bd" type="button" aria-label="Close" tabIndex="-1" onClick={v.gmClose} />
      <div className="pj-gm-body">
      <div className="pj-gm-card">
      <div className="pj-gm-hd">
      <button className="pj-gm-fav" type="button" aria-pressed={v.gmFav} aria-label={v.gmFavLabel} onClick={v.gmToggleFav}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" aria-hidden="true"><path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z" /></svg></button>
      <h2 className="pj-gm-title" id="pj-gm-title">{v.gmName}</h2>
      <button className="pj-gm-x" type="button" aria-label="Close" onClick={v.gmClose}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" /></svg></button>
      </div>
      <div className="pj-gm-cur">
      <label className="pj-gm-sel">
      <span className="pj-gm-sel-coin" aria-hidden="true">
      {v.gmCurGc ? (
      <><img src="data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2032%2032%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22a%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%220%22%20y2%3D%221%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22%23fff1a6%22/%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23e39400%22/%3E%3C/linearGradient%3E%3C/defs%3E%3Ccircle%20cx%3D%2216%22%20cy%3D%2216%22%20r%3D%2215%22%20fill%3D%22url%28%23a%29%22%20stroke%3D%22%23a15c00%22%20stroke-width%3D%221.5%22/%3E%3Ccircle%20cx%3D%2216%22%20cy%3D%2216%22%20r%3D%2211%22%20fill%3D%22none%22%20stroke%3D%22%23fff%22%20stroke-opacity%3D%22.45%22%20stroke-width%3D%221.2%22/%3E%3Ctext%20x%3D%2216%22%20y%3D%2221.5%22%20text-anchor%3D%22middle%22%20font-family%3D%22Arial%20Black%2CArial%2Csans-serif%22%20font-weight%3D%22900%22%20font-size%3D%2215%22%20fill%3D%22%237a3e00%22%3EG%3C/text%3E%3C/svg%3E" alt="" /></>
      ) : null}
      {v.gmCurSc ? (
      <><img src="data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2032%2032%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22a%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%220%22%20y2%3D%221%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22%2386efac%22/%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%2316a34a%22/%3E%3C/linearGradient%3E%3C/defs%3E%3Ccircle%20cx%3D%2216%22%20cy%3D%2216%22%20r%3D%2215%22%20fill%3D%22url%28%23a%29%22%20stroke%3D%22%23065f46%22%20stroke-width%3D%221.5%22/%3E%3Ccircle%20cx%3D%2216%22%20cy%3D%2216%22%20r%3D%2211%22%20fill%3D%22none%22%20stroke%3D%22%23fff%22%20stroke-opacity%3D%22.45%22%20stroke-width%3D%221.2%22/%3E%3Ctext%20x%3D%2216%22%20y%3D%2221.5%22%20text-anchor%3D%22middle%22%20font-family%3D%22Arial%20Black%2CArial%2Csans-serif%22%20font-weight%3D%22900%22%20font-size%3D%2215%22%20fill%3D%22%23053d22%22%3ES%3C/text%3E%3C/svg%3E" alt="" /></>
      ) : null}
      </span>
      <span className="pj-gm-sel-val">{v.gmBal}</span>
      <select aria-label="Play with" value={v.gmCur} onChange={v.gmPickCur}>
      <option value="gc">Gold Coins (GC)</option>
      <option value="sc">Sweeps Coins (SC)</option>
      </select>
      <svg className="pj-gm-sel-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6" /></svg>
      </label>
      <a className="pj-gm-buy" href={v.gmBuyHref}>Buy</a>
      </div>
      <div className="pj-gm-info">
      <img className="pj-gm-thumb" src={v.gmImg} alt="" />
      <div className="pj-gm-meta">
      <b>{v.gmName}</b>
      <span className="pj-gm-tag">{v.gmTag}</span>
      <dl className="pj-gm-bals">
      <div><dt>GC Balance</dt><dd><img src="data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2032%2032%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22a%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%220%22%20y2%3D%221%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22%23fff1a6%22/%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23e39400%22/%3E%3C/linearGradient%3E%3C/defs%3E%3Ccircle%20cx%3D%2216%22%20cy%3D%2216%22%20r%3D%2215%22%20fill%3D%22url%28%23a%29%22%20stroke%3D%22%23a15c00%22%20stroke-width%3D%221.5%22/%3E%3Ccircle%20cx%3D%2216%22%20cy%3D%2216%22%20r%3D%2211%22%20fill%3D%22none%22%20stroke%3D%22%23fff%22%20stroke-opacity%3D%22.45%22%20stroke-width%3D%221.2%22/%3E%3Ctext%20x%3D%2216%22%20y%3D%2221.5%22%20text-anchor%3D%22middle%22%20font-family%3D%22Arial%20Black%2CArial%2Csans-serif%22%20font-weight%3D%22900%22%20font-size%3D%2215%22%20fill%3D%22%237a3e00%22%3EG%3C/text%3E%3C/svg%3E" alt="" />{v.gmBalGc}</dd></div>
      <div><dt>SC Balance</dt><dd><img src="data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2032%2032%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22a%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%220%22%20y2%3D%221%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22%2386efac%22/%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%2316a34a%22/%3E%3C/linearGradient%3E%3C/defs%3E%3Ccircle%20cx%3D%2216%22%20cy%3D%2216%22%20r%3D%2215%22%20fill%3D%22url%28%23a%29%22%20stroke%3D%22%23065f46%22%20stroke-width%3D%221.5%22/%3E%3Ccircle%20cx%3D%2216%22%20cy%3D%2216%22%20r%3D%2211%22%20fill%3D%22none%22%20stroke%3D%22%23fff%22%20stroke-opacity%3D%22.45%22%20stroke-width%3D%221.2%22/%3E%3Ctext%20x%3D%2216%22%20y%3D%2221.5%22%20text-anchor%3D%22middle%22%20font-family%3D%22Arial%20Black%2CArial%2Csans-serif%22%20font-weight%3D%22900%22%20font-size%3D%2215%22%20fill%3D%22%23053d22%22%3ES%3C/text%3E%3C/svg%3E" alt="" />{v.gmBalSc}</dd></div>
      </dl>
      </div>
      </div>
      <button className="pj-gm-play" type="button" onClick={v.gmPlay}><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5.5v13l11-6.5z" /></svg>{v.gmPlayText}</button>
      <p className="pj-gm-mode">{v.gmModeText}</p>
      </div>
      <div className="pj-gm-card pj-gm-recs">
      <h3>Also Recommended</h3>
      <div className="pj-gm-rail">
      {(v.gmRecs || []).map((r, __i7) => (
      <React.Fragment key={__i7}>
      <button className="pj-gm-rec" type="button" aria-label={r.label} onClick={r.pick}><img src={r.img} alt="" /></button>
      </React.Fragment>
      ))}
      </div>
      </div>
      </div>
      </div>
      </>
    ) : null}</>
  );
}
