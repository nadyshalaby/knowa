import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import App from "./components/App";

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
