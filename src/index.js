import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { getStore } from "./system/store";
import { App } from "./system/app";
import "./index.scss";

const store = getStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

ReactDOM.render(<App />, document.getElementById("root"));
