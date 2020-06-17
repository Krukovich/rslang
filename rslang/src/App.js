import React from 'react';
import { Switch } from 'react-router-dom';
import PlayZonePage from './Components/PlayZonePage/PlayZonePage';
import { RouteMap } from './Components/Router/Routes';

const App = () => {
  
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <PlayZonePage />
        </div>
      </div>
      <Switch>
        {RouteMap}
      </Switch>
    </div>
  );
};

export default App;
