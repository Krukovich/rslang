import React from "react";
import { Translation } from 'react-i18next';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

import Vocabulary from "../vocabulary.jsx";
import DifficultWords from "../DifficultWords/DifficultWords.jsx";
import DeletedWords from "../DeletedWords/DeletedWords.jsx";

const VocabularyRouter = () => {
  return (
    <Router>
      <nav className="nav justify-content-center mb-3 mt-5 pt-3">
        <NavLink
          to="/learning-words"
          className="btn btn-light mr-2"
          activeClassName="btn btn-primary text-white mr-2"
        >
          {<Translation>
            {
              (t) => <>{t('voc.1')}</>
            }
          </Translation>}
        </NavLink>
        <NavLink
          to="/difficult-words"
          className="btn btn-light mr-2"
          activeClassName="btn btn-primary text-white mr-2"
        >
          {<Translation>
            {
              (t) => <>{t('voc.2')}</>
            }
          </Translation>}
        </NavLink>
        <NavLink
          to="/deleted-words"
          className="btn btn-light mr-2"
          activeClassName="btn btn-primary text-white mr-2"
        >
          {<Translation>
            {
              (t) => <>{t('voc.3')}</>
            }
          </Translation>}
        </NavLink>
      </nav>

      <Switch>
        <Route exact path="/learning-words">
          <Vocabulary />
        </Route>
        <Route exact path="/difficult-words">
          <DifficultWords />
        </Route>
        <Route exact path="/deleted-words">
          <DeletedWords />
        </Route>
      </Switch>
    </Router>
  );
};

export default VocabularyRouter;
