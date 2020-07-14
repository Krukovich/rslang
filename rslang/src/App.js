import React, { useEffect } from "react";
import RouteMap from "./Components/Router/Routes";
import { connect } from 'react-redux';

import {
  setDayLearningWords,
  setDeleteWords,
  setDifficultWords,
} from './Store/PlayZonePage/actions';
import { AppWrapper } from "./Components/AppWrapper/AppWrapper";
import { fetchAPI } from './Components/Tools/fetchAPI';
import {
  addStandardUserWords,
  filterOutDifficultWords,
  filterOutDeletedWords,
  saveWordsInLocalStorage,
  getRandomPage,
} from './service';

const mapStateToProps = (state) => {
  return {
    level: state.appSettings.level
  };
}

const mapActionToProps = {
  setDayLearningWords,
  setDeleteWords,
  setDifficultWords,
}

const App = (props) => {

  useEffect(() => {
    fetchAPI('words', {page: 1, group: 1}).then((words) => {
      fetchAPI('getAllUserWords').then(
        (userWords) => {
          if(userWords.length === 0 ) {
            addStandardUserWords();
          }
          const deleteWords = filterOutDeletedWords(words, userWords);
          if (deleteWords.length) {
            props.setDeleteWords(deleteWords);
          }

          const difficultWords = filterOutDifficultWords(words, userWords);
          if (difficultWords.length) {
            props.setDifficultWords(difficultWords);
          }

          const wordsToLearn = words.filter((word) =>
            !deleteWords.find((deleteWord) => deleteWord.id === word.id));
          props.setDayLearningWords(wordsToLearn);
          saveWordsInLocalStorage(words);
        });
    });
  });

  return (
    <AppWrapper>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <RouteMap />
          </div>
        </div>
      </div>
    </AppWrapper>
  );
};

export default connect(mapStateToProps, mapActionToProps)(App);
