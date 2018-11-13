import React from "react";
import ReactDOM from "react-dom";
import Root from "./Root";
import { Provider } from "mobx-react";
import RootStore from "./stores";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";

const roots = new  RootStore();

ReactDOM.render(
  <Provider {...roots}>
    <Root />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
