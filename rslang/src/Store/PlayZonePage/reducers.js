import {
  CHANGE_WORD_CARDS,
  CHANGE_DAY_LEARNING_WORDS,
  CHANGE_DIFFICULT_WORDS,
  CHANGE_DELETE_WORDS,
  CHANGE_APP_STATS,
  RESTORE_DELETE_WORDS,
} from './actions';
import { fetchAPI } from '../../Components/Tools/fetchAPI';

const initialState = {
  deleteWords: [], // an array with delete words
  difficultWords: [], // an array with the words in which errors were made
  dayLearningWords: [], //an array of words to learn
  appStats: [],
}

export const playZonePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_WORD_CARDS:
      return {
        ...state,
        cards: action.payload,
      };
    case CHANGE_DELETE_WORDS:
      return {
        ...state,
        deleteWords: [...state.deleteWords, action.payload],
      };
    case RESTORE_DELETE_WORDS:
      const newState = [
        ...state.deleteWords.slice(0, action.payload),
        ...state.deleteWords.slice(action.payload + 1)
      ];
      return {
        ...state,
        deleteWords: newState,
      };
    case CHANGE_DAY_LEARNING_WORDS:
      return {
        ...state,
        dayLearningWords: action.payload,
      };
    case CHANGE_DIFFICULT_WORDS:
      return {
        ...state,
        difficultWords: [...state.difficultWords, action.payload],
      };
    case CHANGE_APP_STATS:
      fetchAPI("users-get-statistics").then((oldObj) => {
        delete oldObj.id;
        oldObj.optional.appStats[action.payload.dateTime] = action.payload.successCount;
        let newObj = oldObj;
        fetchAPI("users-set-statistics", newObj.optional);
      });
      const appStats = state.appStats;
      appStats[action.payload.dateTime] = action.payload.successCount
      return {
        ...state,
        appStats: appStats,
      };
  }
  return state;
}
