import {
  CHANGE_WORD_CARDS,
  CHANGE_DAY_LEARNING_WORDS,
  ADD_DIFFICULT_WORDS,
  ADD_DELETED_WORDS,
  CHANGE_APP_STATS,
  REMOVE_DELETED_WORDS,
  DELETE_DIFFICULT_WORDS,
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
    case ADD_DELETED_WORDS:
      return {
        ...state,
        deleteWords: [...state.deleteWords, ...action.payload],
      };
    case REMOVE_DELETED_WORDS:
      const newList = state.deleteWords.filter((item) => item.id !== action.payload)
      return { ...state, deleteWords: newList }
    case CHANGE_DAY_LEARNING_WORDS:
      return {
        ...state,
        dayLearningWords: action.payload,
      };
    case DELETE_DIFFICULT_WORDS:
      const list = state.difficultWords.filter((item) => item.id !== action.payload)
      debugger;
      return { ...state, difficultWords: list }
    case ADD_DIFFICULT_WORDS:
      return {
        ...state,
        difficultWords: [...state.difficultWords, ...action.payload],
      };
    case CHANGE_APP_STATS:
      fetchAPI("users-get-statistics").then((oldObj) => {
        delete oldObj.id;
        oldObj.optional.appStats[action.payload.dateTime] = action.payload.successCount;
        let newObj = oldObj;
        fetchAPI("users-set-statistics", newObj.optional);
      });
      return {
        ...state,
        appStats: {...state.appStats, [action.payload.dateTime]: action.payload.successCount},
      };
  }
  return state;
}
