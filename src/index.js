import "./localization/internationalization";
import "./styles/index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import Application from "./application/Application";
import store from "./application/applicationStore";
import { Provider } from "react-redux";

const isStrictMode = true;
const application = <Provider store={store} children={<Application />}/>;
const rootContent = isStrictMode ? <React.StrictMode children={application}/> : application;

ReactDOM
  .createRoot(document.getElementById("root"))
  .render(rootContent);
