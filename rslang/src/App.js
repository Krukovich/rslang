import React from 'react';
import { Switch } from 'react-router-dom';
import PlayZonePage from './Component/PlayZonePage/PlayZonePage';
import Route from './Router/Routes';

const App = () => {
  
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <PlayZonePage />
        </div>
      </div>
      <Switch>
        {Route}
      </Switch>
    </div>
  );
};

export default App;
