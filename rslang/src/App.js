<<<<<<< HEAD
import React from 'react';
import { Switch } from 'react-router-dom';
import { RouteMap } from './Components/Router/Routes';

const App = () => {

  return (
    <div className="container">
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
=======
import React from 'react';
import { Switch } from 'react-router-dom';
import { RouteMap } from './Components/Router/Routes';

const App = () => {

  return (
    <div className="container">
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

>>>>>>> a89fc155d40a754e8553fe66ef2daf77d6d9d3df
