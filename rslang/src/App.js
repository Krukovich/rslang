import React from 'react';
import { Route, Switch } from 'react-router-dom'

const App = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          Hello Word
        </div>
      </div>
      <Switch>
          <Route path="/" exact render={() => <h1>Home Page</h1>}/>
          {/* <Route path="/login" exact component={Login}/> */}
          {/* <Route path="/about" component={About}/> */}
          {/* <Route path="/minigames/:name" component={MiniGames}/> */}
          <Route render={() => <h1 style={{color: 'red', textAlign: 'center'}}>404 not found</h1>}/>
        </Switch>
    </div>
  );
};

export default App;
