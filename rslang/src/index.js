import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { setWordCards } from './Store/PlayZonePage/actions';
import rootReducer  from './Store/Reducers';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Style/main.scss';

const store = createStore(rootReducer);

const mapStateToProps = (store) => {
  return {
    cards: store.playZonePage.cards,
    isNotAgree: store.playZonePage.isNotAgree,
  }
}

const mapActionToProps = {
  setWordCards,
}

const WrapperApp = connect(mapStateToProps, mapActionToProps)(App);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
      <BrowserRouter>
        <WrapperApp />
      </BrowserRouter>      
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
