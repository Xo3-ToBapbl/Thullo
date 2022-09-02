import React from "react";
import ReactDOM from "react-dom/client";

import "./styles/index.css";
import Application from "./application/Application";

ReactDOM
  .createRoot(document.getElementById("root"))
  .render(
    <React.StrictMode>
      <Application />
    </React.StrictMode>
);