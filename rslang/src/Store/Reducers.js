import { combineReducers } from "redux";
import { playZonePageReducer } from "./PlayZonePage/reducers";
import { sprintGameReducer } from "./SprintGame/Reducers";
import { fortuneGameReducer } from "./FortuneGame/Reducers";
import { savannaReducer } from "./Savanna/reducers";
import * as Actions from "./Actions";

const initialState = {
  level: 1, // number indicating difficult level
  playExampleSound: true, // play example words after selected agree word
  showTranslateWord: true, // show translate word
  showExampleString: true, // show example string
  showExplanationString: true, // show explanation string
  showWordTranscription: true, // show word transcription
  showWordImage: true, // show words image example
  showBtnShowAgreeAnswer: true, // show btn next step
  showBtnDeleteWord: true, // show btn remove a word from learning
  showBtnDifficultWord: true, // show btn add words to a difficult group
  newWordsCount: 20, // number for learning new words
  deleteWords: [], // an array with delete words
  difficultWords: [], // an array with the words in which errors were made
  dayLearningWords: [], //an array of words to learn
};

export const appSettingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.CHANGE_DIFFICULT_LEVEL:
      return {
        ...state,
        level: action.payload,
      };
    case Actions.CHANGE_PLAY_EXAMPLE_SOUND:
      return {
        ...state,
        playExampleSound: action.payload,
      };
    case Actions.CHANGE_SHOW_TRANSLATE_WORD:
      return {
        ...state,
        showTranslateWord: action.payload,
      };
    case Actions.CHANGE_SHOW_EXAMPLE_STRING:
      return {
        ...state,
        showExampleString: action.payload,
      };
    case Actions.CHANGE_SHOW_EXPLANATION_STRING:
      return {
        ...state,
        showExplanationString: action.payload,
      };
    case Actions.CHANGE_SHOW_WORD_TRANSCRIPTION:
      return {
        ...state,
        showWordTranscription: action.payload,
      };
    case Actions.CHANGE_SHOW_WORD_IMAGE:
      return {
        ...state,
        showWordImage: action.payload,
      };
    case Actions.CHANGE_SHOW_BTN_SHOW_AGREE_ANSWER:
      return {
        ...state,
        showBtnShowAgreeAnswer: action.payload,
      };
    case Actions.CHANGE_SHOW_BTN_DELETE_WORD:
      return {
        ...state,
        showBtnDeleteWord: action.payload,
      };
    case Actions.CHANGE_SHOW_BTN_DIFFICULT_WORDS:
      return {
        ...state,
        showBtnDifficultWord: action.payload,
      };
    case Actions.CHANGE_NEW_WORDS_COUNT:
      return {
        ...state,
        newWordsCount: action.payload,
      };
    case Actions.CHANGE_DIFFICULT_WORDS:
      return {
        ...state,
        difficultWords: [...state.difficultWords, action.payload],
      };
    case Actions.CHANGE_DAY_LEARNING_WORDS:
      return {
        ...state,
        dayLearningWords: action.payload,
      };
    case Actions.CHANGE_DELETE_WORDS:
      return {
        ...state,
        deleteWords: [...state.deleteWords, action.payload],
      };
    case Actions.CHANGE_ALL_SETTINGS:
      return {
        ...state,
        ...action.payload,
      };
  }
  return state;
};

export default combineReducers({
  playZone: playZonePageReducer,
  savanna: savannaReducer,
  appSettings: appSettingsReducer,
  sprintGame: sprintGameReducer,
});
