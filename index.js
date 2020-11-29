import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Portfolio from "./Components.js/Portfolio";
import "./index.css";

ReactDOM.render(
  <Router>
    <Portfolio />
  </Router>,
  document.getElementById("root")
);
