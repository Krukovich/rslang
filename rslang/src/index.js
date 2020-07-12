import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux";
import rootReducer from "./Store/Reducers";

import App from "./App";
import Spinner from "./Components/Spinner/Spinner";
import { fetchAPI } from "./Components/Tools/fetchAPI";
import { getCookie } from "./Components/Tools/getCookie";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./Style/main.scss";

function renderApplication(data = {}) {
  const settings = data;
  const store = createStore(
    rootReducer,
    {
      appSettings: settings,
    },
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    document.getElementById("root")
  );
}

function main() {
  if (getCookie("userId")) {
    ReactDOM.render(
      <div>
        <Spinner />
      </div>,
      document.getElementById("root")
    );
    fetchAPI("getSettings").then((data) => renderApplication(data));
  } else {
    renderApplication();
  }
}

main();
