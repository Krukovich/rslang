import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Router/Routes';

const App = () => {

  return (
    <div className="container-fluid">
      <Switch>
        {Route}
      </Switch>
    </div>
  );
};

export default App;