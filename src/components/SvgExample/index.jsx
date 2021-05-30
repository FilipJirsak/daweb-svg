import React, { useState } from "react";
import "./style.css";

export default () => {
  const [active, setActive] = useState(false);

  return (
    <>
      <h2>Příklad</h2>
      <p>Kolečko a čtverec reagují na najetí myši, obdélník „Click me!“ na kliknutí.</p>
      <svg width="600" height="600" viewBox="0 0 100 100">
        <defs>
          <path id="stadion" d="M 10,30 h20 a5,5 90,1,1 0,10 h-20 a5,5 90,1,1 0,-10 z" />
        </defs>
        <circle cx="10" cy="10" r="5" className="circle" />
        <rect x="20" y="5" width="10" height="10" className="rect" />
        <polygon points="35,5 45,5 40,15" className="polygon" />
        <rect x="50" y="5" width="40" height="10" className={"text" + (active ? " active" : "")} onClick={() => setActive((oldState) => !oldState)} />
        <text x="70" y="12" className="text">
          Click me!
        </text>
        <line x1="0" x2="50" y1="25" y2="25" className="line" />
        <circle cx="2" cy="25" r="2" className="circle-on-line" />

        <use href="#stadion" className="path" />
        <circle r="2" className="circle-on-path">
          <animateMotion dur="5s" repeatCount="indefinite">
            <mpath href="#stadion" />
          </animateMotion>
        </circle>
      </svg>
    </>
  );
};
