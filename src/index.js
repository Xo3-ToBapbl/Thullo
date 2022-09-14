import "./localization/Internationalization";
import "./styles/index.css";
import React from "react";
import store from "./application/ApplicationStore";
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux'

import Application from "./application/Application";

ReactDOM
  .createRoot(document.getElementById("root"))
  .render(
    <React.StrictMode>
      <Provider store={store}>
          <Application />
      </Provider>
    </React.StrictMode>
);