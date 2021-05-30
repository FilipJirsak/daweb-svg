import React from "react";
import { render } from "react-dom";
import IntervalCz from "./components/IntervalCz";
import Dokumentace from "./components/Dokumentace";
import Knihovny from "./components/Knihovny";
import Editory from "./components/Editory";
import SvgExample from "./components/SvgExample";
import "./style.css";

const App = () => (
  <div className="container">
    <h1>Vektorová grafika SVG</h1>
    <IntervalCz />
    <Dokumentace />
    <Knihovny />
    <Editory />
    <SvgExample />
    <h2>Zdrojové kódy</h2>
    <p>
      Projekt <a href="https://github.com/FilipJirsak/daweb-svg">daweb-svg</a> na GitHubu.
    </p>
  </div>
);

render(<App />, document.querySelector("#app"));
