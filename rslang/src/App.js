import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Router/Routes'
import MainPage from './MainPage/MainPage'

const App = () => {

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <MainPage />
        </div>
      </div>
      <Switch>
        {Route}
      </Switch>
    </div>
  );
};

export default App;