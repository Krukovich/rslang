import React from 'react';

import { connect } from 'react-redux';
import { Switch } from 'react-router-dom';
import PlayZonePage from './Components/PlayZonePage/PlayZonePage';
import Route from './Router/Routes';
import { setWordCards } from './Store/PlayZonePage/actions';

const mapStateToProps = (store) => {
  const {
    settings,
    dayLearningWords,
    difficultWords,
  } = store.appSettings;

  return {
    settings: settings,
    difficultWords: difficultWords,
    dayLearningWords: dayLearningWords,
    cards: store.playZone.cards,
  }
}

const mapActionToProps = {
  setWordCards,
}

const WrapperPlayZonePage = connect(mapStateToProps, mapActionToProps)(PlayZonePage);

const App = () => {

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <WrapperPlayZonePage />
        </div>
      </div>
      <Switch>
        {Route}
      </Switch>
    </div>
  );
};

export default App;
