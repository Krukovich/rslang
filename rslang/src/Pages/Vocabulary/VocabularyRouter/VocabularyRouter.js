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

      <nav className="nav justify-content-center mb-4 mt-3">
        <Link to="/">
          <button type="button" className="btn btn-primary mr-2">
            <span>Изучаемые слова</span>
          </button>
        </Link>
        <Link to="/сложные">
          <button type="button" className="btn btn-light mr-2">
            <span>Сложные слова</span>
          </button>
        </Link>
        <Link to="/удаленные">
          <button type="button" className="btn btn-light mr-2">
            <span>Удаленные слова</span>
          </button>
        </Link>
      </nav>

      <Switch>
        <Route exact path="/">
          <Vocabulary />
        </Route>
        <Route exact path="/сложные">
          <DifficultWords />
        </Route>
        <Route exact path="/удаленные">
          <DeletedWords />
        </Route>
      </Switch>

    </Router>
  )
}

export default VocabularyRouter
