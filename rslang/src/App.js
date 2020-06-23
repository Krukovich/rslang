import React from 'react';
import { Switch } from 'react-router-dom';
import { RouteMap } from './Components/Router/Routes';

const App = () => {

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12">
          <Switch>
            {RouteMap}
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default App;
