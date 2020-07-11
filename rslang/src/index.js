import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux";
import rootReducer from "./Store/Reducers";
import App from "./App";
import { fetchAPI } from "./Components/Tools/fetchAPI";
import { getCookie } from "./Components/Tools/getCookie";

import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import "./Style/main.scss";

function renderApplication(data = {}) {
  if (Object.keys(data).length === 0) {
    data = {
      level: 1, // number indicating difficult level
      playExampleSound: true, // play example words after selected agree word
      showTranslateWord: true, // show translate word
      showExampleString: true, // show example string
      showExplanationString: true, // show explanation string
      showWordTranscription: true, // show word transcription
      showWordImage: true, // show words image example
      showBtnShowAgreeAnswer: true, // show btn next step
      showBtnDeleteWord: true, // show btn remove a word from learning
      showBtnDifficultWord: true, // show btn add words to a difficult group
      newWordsCount: 20, // number for learning new words
    };
  }
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
    ReactDOM.render(<div>Loading</div>, document.getElementById("root"));
    console.log("work");
    fetchAPI("getSettings").then((data) => renderApplication(data));
  } else {
    renderApplication();
  }
}

main();
