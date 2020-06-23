import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { RouteMap } from './Components/Router/Routes';
import { AppWrapper } from './Components/AppWrapper/AppWrapper'

const App = () => {

  return (
    <>
    <AppWrapper>
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <Switch>          
            {RouteMap}            
          </Switch>          
        </div>
      </div>
    </div>
    </AppWrapper>
    </>
  );
};

export default App;
