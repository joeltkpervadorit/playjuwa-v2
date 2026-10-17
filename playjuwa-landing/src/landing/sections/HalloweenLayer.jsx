import React from 'react';

export default function HalloweenLayer({ v }) {
  return (
    <div className="hw" aria-hidden="true" data-on={v.hwOn} data-wind={v.hwWind}>
      <div className="hw-g" style={{ "--gy": "17vh", "--gr": "22deg", "--gd": "0.23s", "--gs": "-720deg" }}><div className="hw-p hw-witch is-a"><img src="/assets/halloween-witch.png" alt="" /></div></div>
      <div className="hw-g" style={{ "--gy": "25vh", "--gr": "13deg", "--gd": "0.04s", "--gs": "-900deg" }}><div className="hw-p hw-witch is-b"><img src="/assets/halloween-witch.png" alt="" /></div></div>
      <div className="hw-g" style={{ "--gy": "-29vh", "--gr": "-20deg", "--gd": "0.43s", "--gs": "-720deg" }}><div className="hw-p hw-bat is-a"><img src="/assets/halloween-bat-a.png" alt="" /></div></div>
      <div className="hw-g" style={{ "--gy": "-32vh", "--gr": "-9deg", "--gd": "0.09s", "--gs": "-720deg" }}><div className="hw-p hw-bat is-b"><img src="/assets/halloween-bat-b.png" alt="" /></div></div>
      <div className="hw-g" style={{ "--gy": "19vh", "--gr": "22deg", "--gd": "0.27s", "--gs": "-720deg" }}><div className="hw-p hw-bat is-c"><img src="/assets/halloween-bat-c.png" alt="" /></div></div>
      <div className="hw-g" style={{ "--gy": "-3vh", "--gr": "8deg", "--gd": "0.3s", "--gs": "1080deg" }}><div className="hw-p hw-ghost is-a"><img src="/assets/halloween-ghost.png" alt="" /></div></div>
      <div className="hw-g" style={{ "--gy": "12vh", "--gr": "-16deg", "--gd": "0.14s", "--gs": "720deg" }}><div className="hw-p hw-ghost is-b"><img src="/assets/halloween-ghost.png" alt="" /></div></div>
      <div className="hw-g" style={{ "--gy": "-37vh", "--gr": "-26deg", "--gd": "0.34s", "--gs": "-1080deg" }}><div className="hw-p hw-pk is-a"><img src="/assets/halloween-pumpkin.png" alt="" /></div></div>
      <div className="hw-g" style={{ "--gy": "-3vh", "--gr": "10deg", "--gd": "0.43s", "--gs": "-540deg" }}><div className="hw-p hw-pk is-b"><img src="/assets/halloween-pumpkin.png" alt="" /></div></div>
      <div className="hw-g" style={{ "--gy": "-14vh", "--gr": "-23deg", "--gd": "0.17s", "--gs": "1080deg" }}><div className="hw-p hw-pk is-c"><img src="/assets/halloween-pumpkin.png" alt="" /></div></div>
      <div className="hw-g" style={{ "--gy": "-31vh", "--gr": "-16deg", "--gd": "0.15s", "--gs": "900deg" }}><div className="hw-p hw-leaf is-1"><img src="/assets/halloween-leaf-a.png" alt="" /></div></div>
      <div className="hw-g" style={{ "--gy": "-39vh", "--gr": "11deg", "--gd": "0.06s", "--gs": "-540deg" }}><div className="hw-p hw-leaf is-2"><img src="/assets/halloween-leaf-b.png" alt="" /></div></div>
      <div className="hw-g" style={{ "--gy": "-33vh", "--gr": "23deg", "--gd": "0.08s", "--gs": "720deg" }}><div className="hw-p hw-leaf is-3"><img src="/assets/halloween-leaf-c.png" alt="" /></div></div>
      <div className="hw-g" style={{ "--gy": "25vh", "--gr": "-12deg", "--gd": "0.19s", "--gs": "-1080deg" }}><div className="hw-p hw-leaf is-4"><img src="/assets/halloween-leaf-d.png" alt="" /></div></div>
      <div className="hw-g" style={{ "--gy": "10vh", "--gr": "14deg", "--gd": "0.0s", "--gs": "-900deg" }}><div className="hw-p hw-leaf is-5"><img src="/assets/halloween-leaf-b.png" alt="" /></div></div>
      <div className="hw-g" style={{ "--gy": "-14vh", "--gr": "-20deg", "--gd": "0.45s", "--gs": "-540deg" }}><div className="hw-p hw-leaf is-6"><img src="/assets/halloween-leaf-a.png" alt="" /></div></div>
      <div className="hw-g" style={{ "--gy": "-22vh", "--gr": "-22deg", "--gd": "0.12s", "--gs": "900deg" }}><div className="hw-p hw-leaf is-7"><img src="/assets/halloween-leaf-d.png" alt="" /></div></div>
      <div className="hw-g" style={{ "--gy": "9vh", "--gr": "-10deg", "--gd": "0.04s", "--gs": "-720deg" }}><div className="hw-p hw-leaf is-8"><img src="/assets/halloween-leaf-c.png" alt="" /></div></div>
      <div className="hw-g" style={{ "--gy": "7vh", "--gr": "22deg", "--gd": "0.06s", "--gs": "-1080deg" }}><div className="hw-p hw-spider"><i className="hw-thread" /><img src="/assets/halloween-spider.png" alt="" /></div></div>
      <div className="hw-g" style={{ "--gy": "9vh", "--gr": "-12deg", "--gd": "0.14s", "--gs": "-720deg" }}><div className="hw-p hw-cat"><img src="/assets/halloween-cat.png" alt="" /></div></div>
      <div className="hw-g" style={{ "--gy": "-16vh", "--gr": "-25deg", "--gd": "0.09s", "--gs": "1080deg" }}><div className="hw-p hw-star is-a"><img src="/assets/halloween-star.png" alt="" /></div></div>
      <div className="hw-g" style={{ "--gy": "-30vh", "--gr": "9deg", "--gd": "0.05s", "--gs": "540deg" }}><div className="hw-p hw-star is-b"><img src="/assets/halloween-star.png" alt="" /></div></div>
      <div className="hw-g" style={{ "--gy": "-10vh", "--gr": "16deg", "--gd": "0.19s", "--gs": "1080deg" }}><div className="hw-p hw-star is-c"><img src="/assets/halloween-star.png" alt="" /></div></div>
      <div className="hw-g is-sp" style={{ "--gy": "-12vh", "--gr": "6deg", "--gd": ".15s", "--gs": "0deg" }}><i className="hw-sp" style={{ left: "8%", top: "14%" }} /><i className="hw-sp" style={{ left: "22%", top: "38%", animationDelay: "-1.2s" }} /><i className="hw-sp" style={{ left: "41%", top: "9%", animationDelay: "-2.1s" }} /><i className="hw-sp" style={{ left: "57%", top: "27%", animationDelay: "-.6s" }} /><i className="hw-sp" style={{ left: "73%", top: "12%", animationDelay: "-3s" }} /><i className="hw-sp" style={{ left: "88%", top: "33%", animationDelay: "-1.7s" }} /><i className="hw-sp" style={{ left: "14%", top: "62%", animationDelay: "-2.6s" }} /><i className="hw-sp" style={{ left: "36%", top: "78%", animationDelay: "-.3s" }} /><i className="hw-sp" style={{ left: "64%", top: "58%", animationDelay: "-1.4s" }} /><i className="hw-sp" style={{ left: "83%", top: "72%", animationDelay: "-2.3s" }} /><i className="hw-sp" style={{ left: "50%", top: "90%", animationDelay: "-3.4s" }} /><i className="hw-sp" style={{ left: "94%", top: "52%", animationDelay: "-.9s" }} /></div>
      <canvas className="hw-cv" />
      </div>
  );
}
