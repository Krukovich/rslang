import React from 'react';
import { Switch } from 'react-router-dom';
import { RouteMap } from './Components/Router/Routes';
import Vocabulary from './Pages/Vocabulary/vocabulary';

const App = () => {

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
<<<<<<< HEAD
        <Switch>
          {RouteMap}
        </Switch>
        <Vocabulary />
=======
          <Switch>
            {RouteMap}
          </Switch>
>>>>>>> develop
        </div>
      </div>
    </div>
  );
};

export default App;
