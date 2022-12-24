import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ConfigSetter from "./ConfigSetter";
import "./index.css";

import config from "../config.json";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ConfigSetter />
    <App config={config} />
  </React.StrictMode>
);
