<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
=======
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
>>>>>>> 26cb3f65a6992e584b05da96a56ea8e689c992b2
