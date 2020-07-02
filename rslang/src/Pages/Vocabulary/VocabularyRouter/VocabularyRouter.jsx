import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import Vocabulary from '../vocabulary';
import DifficultWords from '../DifficultWords/DifficultWords';
import DeletedWords from '../DeletedWords/DeletedWords';

const VocabularyRouter = () => {
  return (
    <Router>

      <nav className="nav justify-content-center mb-4 mt-5">
        <Link to="/vocabulary">
          <button type="button" className="btn btn-primary mr-2 mt-5">
            <span>Изучаемые слова</span>
          </button>
        </Link>
        <Link to="/difficult-words">
          <button type="button" className="btn btn-light mr-2 mt-5">
            <span>Сложные слова</span>
          </button>
        </Link>
        <Link to="/delete-words">
          <button type="button" className="btn btn-light mr-2 mt-5">
            <span>Удаленные слова</span>
          </button>
        </Link>
      </nav>

      <Switch>
        <Route exact path="/vocabulary">
          <Vocabulary />
        </Route>
        <Route exact path="/difficult-words">
          <DifficultWords />
        </Route>
        <Route exact path="/delete-words">
          <DeletedWords />
        </Route>
      </Switch>

    </Router>
  )
}

export default VocabularyRouter
