import React from 'react';
import { Switch } from 'react-router-dom';
import PlayZone from './Component/PlayZone/PlayZone';
import Route from './Router/Routes';

const App = () => {
  
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <PlayZone />
        </div>
      </div>
      <Switch>
        {Route}
      </Switch>
    </div>
  );
};

export default App;