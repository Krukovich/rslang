<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> a75589ae47d03b4850a1bf439ce22a2a848526b7

import { combineReducers } from "redux";
import { playZonePageReducer } from "./PlayZonePage/reducers";
import { sprintGameReducer } from "./SprintGame/Reducers";
import { fortuneGameReducer } from "./FortuneGame/Reducers";
import { savannaReducer } from "./Savanna/reducers";
import * as Actions from "./Actions";

import { fetchAPI } from '../Components/Tools/fetchAPI';
<<<<<<< HEAD
=======
<<<<<<< HEAD
import { combineReducers } from 'redux';
import { playZonePageReducer } from './PlayZonePage/reducers';
import { sprintGameReducer } from './SprintGame/Reducers'
import { fortuneGameReducer } from './FortuneGame/Reducers'
import { savannaReducer } from "./Savanna/reducers";
import * as Actions from './Actions';
=======
<<<<<<< HEAD
import { combineReducers } from "redux";
import { playZonePageReducer } from "./PlayZonePage/reducers";
import { savannaReducer } from "./Savanna/reducers";
import { sprintGameReducer } from "./SprintGame/Reducers";
import * as Actions from "./Actions";
=======
import { combineReducers } from 'redux';
import { playZonePageReducer } from './PlayZonePage/reducers';
import { sprintGameReducer } from './SprintGame/Reducers';
import { statsReducer } from './Longs/reducers';
import * as Actions from './Actions';
>>>>>>> fix
>>>>>>> fix
>>>>>>> fix
=======

>>>>>>> a75589ae47d03b4850a1bf439ce22a2a848526b7

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
  lastAddWord: {}, // последнее добавленное слово. обект типа {
  //   userId: "5ef6297ef3e215001785c442",
  //   wordId: "5e9f5ee35eb9e72bc21af716",
  //   word: { "difficulty": "weak", "optional": {testFieldString: 'test', testFieldBoolean: true} }
  // }
  allUserWords: [], //слова пользователя, их брать в задание для игр
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
    case Actions.CHANGE_ALL_SETTINGS:
      return {
        ...state,
        ...action.payload,
      };
    case Actions.ADDNEW_NEW_USER_WORD_BY_WORD_ID:
      fetchAPI('setNewUserWordById', action.payload);
      return {
        ...state,
        lastAddWord: action.payload,
        allUserWords: [...state.allUserWords, action.payload]
      };
    case Actions.UPDATE_USER_WORD_BY_WORD_ID:
      fetchAPI('supdateNewUserWordById', action.payload);
      return {
        ...state,
        lastAddWord: action.payload,
        allUserWords: [...state.allUserWords, action.payload]
      };
    case Actions.CHANGE_ALL_SETTINGS:
      return {
        ...state,
        allUserWords: [...action.payload]
      };
    case Actions.ADDNEW_NEW_USER_WORD_BY_WORD_ID:
      fetchAPI('setNewUserWordById', action.payload);
      return {
        ...state,
        lastAddWord: action.payload,
        allUserWords: [...state.allUserWords, action.payload]
      };
    case Actions.UPDATE_USER_WORD_BY_WORD_ID:
      fetchAPI('supdateNewUserWordById', action.payload);
      return {
        ...state,
        lastAddWord: action.payload,
        allUserWords: [...state.allUserWords, action.payload]
      };
    case Actions.ADD_ALL_USER_WORDS_FROM_SERVER:
      console.log('ADD_ALL_USER_WORDS_FROM_SERVER ', action.payloads)
      return {
        ...state,
        allUserWords: [...action.payload]
      };
  }
  return state;
};

export default combineReducers({
  playZone: playZonePageReducer,
  savanna: savannaReducer,
  appSettings: appSettingsReducer,
  sprintGame: sprintGameReducer,
<<<<<<< HEAD
=======
<<<<<<< HEAD
  // miniGamesStats: statsReducer,
>>>>>>> fix
  fortuneGame: fortuneGameReducer,
<<<<<<< HEAD
=======
  miniGamesStats: statsReducer,
>>>>>>> fix
=======

>>>>>>> a75589ae47d03b4850a1bf439ce22a2a848526b7
});
