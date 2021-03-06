import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import configureStore from "./store";
import { Provider } from "react-redux";
import App from "./components/views/App";
import { Store } from "redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./assets/styles/index.scss";

const store: Store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path={["/:id", "/"]}>
        <App />
      </Route>
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
