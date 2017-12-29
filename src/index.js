import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "lib/semantic/semantic.min.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
