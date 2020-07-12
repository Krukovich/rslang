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

      <nav className="nav justify-content-center mb-3 mt-5 pt-3">
        <Link to="/learning-words">
          <button type="button" className="btn btn-primary mr-2">
            <span>Изучаемые слова</span>
          </button>
        </Link>
        <Link to="/difficult-words">
          <button type="button" className="btn btn-light mr-2">
            <span>Сложные слова</span>
          </button>
        </Link>
        <Link to="/deleted-words">
          <button type="button" className="btn btn-light mr-2">
            <span>Удаленные слова</span>
          </button>
        </Link>
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
          {/* <DeletedWords posts={currentPost} restore={restore}/> */}
        </Route>
      </Switch>

    </Router>
  )
}

export default VocabularyRouter
