import React, { useEffect, Suspense } from "react";
import RouteMap from "./Components/Router/Routes";
import { connect } from 'react-redux';

import {
  setDayLearningWords,
  setDeleteWords,
  setDifficultWords,
  setNewWords,
} from './Store/PlayZonePage/actions';
import { AppWrapper } from "./Components/AppWrapper/AppWrapper";
import { fetchAPI } from './Components/Tools/fetchAPI';
import {
  addStandardUserWords,
  filterOutDifficultWords,
  filterOutDeletedWords,
  saveWordsInLocalStorage,
  getUserWordsById,
  getRandomPage,
  shuffle,
} from './service';
import { MAX_PAGE } from './constant';
import Spinner from './Components/Spinner/Spinner';

const mapStateToProps = (state) => {
  return {
    level: state.appSettings.level,
    count: state.appSettings.newWordsCount,
  };
}

const mapActionToProps = {
  setNewWords,
  setDayLearningWords,
  setDeleteWords,
  setDifficultWords,
}

const App = (props) => {
  
  useEffect(() => {
    fetchAPI('words', { page: getRandomPage(MAX_PAGE), group: props.level, count: props.count }).then((words) => {
      fetchAPI('getAllUserWords').then((userWords) => {
        if (userWords.length === 0) {
          addStandardUserWords();
          props.setDayLearningWords(words);
        }
      
        getUserWordsById(userWords).then((list) => {
          const deleteWords = filterOutDeletedWords(list, userWords);
          if (deleteWords.length) {
            props.setDeleteWords(deleteWords);
          }

          const difficultWords = filterOutDifficultWords(list, userWords);
          if (difficultWords.length) {
            props.setDifficultWords(difficultWords);
          }

          const wordsToLearn = list.filter((word) =>
            !deleteWords.find((deleteWord) => deleteWord.id === word.id));

            if (wordsToLearn.length <= Number(props.count)) {
              const tempArray = words.slice(0, words.length - userWords.length);
              props.setNewWords(tempArray.length);
              const newArray = [...wordsToLearn, ...tempArray];
              props.setDayLearningWords(shuffle(newArray));
              saveWordsInLocalStorage(newArray);
            } else {
              props.setDayLearningWords(shuffle(wordsToLearn.slice(0, props.count)));
              saveWordsInLocalStorage(wordsToLearn);
            }
        });
      });
    });
  });

  return (

    <Suspense fallback={<Spinner />}>
      <AppWrapper>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <RouteMap />
            </div>
          </div>
        </div>
      </AppWrapper>
    </Suspense>
  );
};

export default connect(mapStateToProps, mapActionToProps)(App);
