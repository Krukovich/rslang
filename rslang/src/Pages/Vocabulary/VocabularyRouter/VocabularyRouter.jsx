import React from "react";
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
          Изучаемые слова
        </NavLink>
        <NavLink
          to="/difficult-words"
          className="btn btn-light mr-2"
          activeClassName="btn btn-primary text-white mr-2"
        >
          Сложные слова
        </NavLink>
        <NavLink
          to="/deleted-words"
          className="btn btn-light mr-2"
          activeClassName="btn btn-primary text-white mr-2"
        >
          Удаленные слова
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
