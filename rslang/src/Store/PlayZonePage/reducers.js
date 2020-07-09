import {
  CHANGE_WORD_CARDS,
  CHANGE_DAY_LEARNING_WORDS,
  CHANGE_DIFFICULT_WORDS,
  CHANGE_DELETE_WORDS,
} from './actions';

const initialState = {
  deleteWords: [], // an array with delete words
  difficultWords: [], // an array with the words in which errors were made
  dayLearningWords: [], //an array of words to learn
}

export const playZonePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_WORD_CARDS:
      return {
        ...state,
        cards: action.payload,
      }
    case CHANGE_DELETE_WORDS:
      return {
        ...state,
        deleteWords: [...state.deleteWords, ...action.payload],
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
  }
  return state;
}
