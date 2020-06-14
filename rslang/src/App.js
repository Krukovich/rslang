import React from 'react';
import { Switch } from 'react-router-dom';
import PlayZonePage from './Components/PlayZonePage/PlayZonePage';
import Route from './Router/Routes';
import Login from './Components/Login/Login'
import CreateAccount from './Components/CreateAccount/CreateAccount'


const App = () => {
  
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <PlayZonePage />
        </div>
        <Login />
        <CreateAccount />
      </div>
      <Switch>
        {Route}
      </Switch>
    </div>
  );
};

export default App;
