import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Router/Routes'
import MainPage from './Pages/MainPage/MainPage'

const App = () => {

  return (
    <div className="container-fluid">
      <MainPage />

      <Switch>
        {Route}
      </Switch>
    </div>
  );
};

export default App;