import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import rootReducer  from './Store/Reducers';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Style/main.scss';

const store = createStore(rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <>
    <Provider store={ store }>
      <BrowserRouter>
        <App />
      </BrowserRouter>      
    </Provider>
  </>,
  document.getElementById('root')
);
