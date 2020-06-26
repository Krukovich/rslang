import React from 'react';
import { Switch } from 'react-router-dom';
import { RouteMap } from './Components/Router/Routes';
import { AppWrapper } from './Components/AppWrapper/AppWrapper'

const App = () => {

  return (
    <>
    <AppWrapper>
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12">
            <RouteMap/>
        </div>
      </div>
    </div>
    </AppWrapper>
    </>
  );
};

export default App;
