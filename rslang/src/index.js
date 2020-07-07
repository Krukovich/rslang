import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux";
import rootReducer from "./Store/Reducers";
import App from "./App";
import { fetchAPI } from "./Components/Tools/fetchAPI";
import { getCookie } from "./Components/Tools/GetCoocke";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Style/main.scss";


function renderApplication(data ={}){
  if(Object.keys(data).length === 0){
    data = {
      level: 1,
      playExampleSound: true, 
      showTranslateWord: true, 
      showExampleString: true, 
      showExplanationString: true, 
      showWordTranscription: true, 
      showWordImage: false, 
      showBtnShowAgreeAnswer: true,
      showBtnDeleteWord: true, 
      showBtnDifficultWord: true, 
      newWordsCount: 5,
      
    };
  }
  const settings = data;
  const store = createStore(rootReducer, {
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

function main (){
  if(getCookie('userId')){
    ReactDOM.render(
      <div>Loading</div>,
      document.getElementById('root')
    );
    console.log('work')
    fetchAPI('getSettings')
    .then((data)=>renderApplication(data))
    
  }
  else{  
    renderApplication();
  }
}

main()