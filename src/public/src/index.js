import React from "react";
import ReactDOM from "react-dom";
import WebPage from "./components/WebPage";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <WebPage />
  </Provider>,
  document.getElementById("root")
);
