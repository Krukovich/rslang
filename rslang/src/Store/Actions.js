export const CHANGE_DIFFICULT_LEVEL = 'CHANGE_DIFFICULT_LEVEL';
export const CHANGE_SHOW_TRANSLATE_WORD = 'CHANGE_SHOW_TRANSLATE_WORD';
export const CHANGE_SHOW_EXAMPLE_STRING = 'CHANGE_SHOW_EXAMPLE_STRING';
export const CHANGE_SHOW_EXPLANATION_STRING = 'CHANGE_SHOW_EXPLANATION_STRING';
export const CHANGE_SHOW_WORD_TRANSLATE = 'CHANGE_SHOW_WORD_TRANSLATE';
export const CHANGE_SHOW_WORD_IMAGE = 'CHANGE_SHOW_WORD_IMAGE';
export const CHANGE_SHOW_BTN_SHOW_AGREE_ANSWER = 'CHANGE_SHOW_BTN_SHOW_AGREE_ANSWER';
export const CHANGE_SHOW_BTN_DELETE_WORD = 'CHANGE_SHOW_BTN_DELETE_WORD';
export const CHANGE_SHOW_DIFFICULT_WORDS = 'CHANGE_SHOW_DIFFICULT_WORDS';
export const CHANGE_NEW_WORDS_COUNT = 'CHANGE_NEW_WORDS_COUNT';
export const CHANGE_DIFFICULT_WORDS = 'CHANGE_DIFFICULT_WORDS';
export const CHANGE_DAY_LEARNING_WORDS = 'CHANGE_DAY_LEARNING_WORDS';

const initialState = {
  settings: { // global app settings
    level: 1, // number indicating difficult level
    showTranslateWord: true, // show translate word
    showExampleString: true, // show example string
    showExplanationString: true, // show explanation string
    showWordsTranslate: true, // show word transcription
    showWordImage: true, // show words image example
    showBtnShowAgreeAnswer: true, // show btn next step
    showBtnDeleteWord: true, // show btn remove a word from learning
    showBtnDifficultWord: true, // show btn add words to a difficult group
    newWordsCount: 5, // number for learning new words
  },
  difficultWords: [], // an array with the words in which errors were made
  dayLearningWords: [], //an array of words to learn
}

export const appSettings = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_DIFFICULT_LEVEL:
      return {
        ...state,
        level: action.payload,
      }
    case CHANGE_SHOW_TRANSLATE_WORD:
      return {
        ...state,
        level: action.payload,
      }
    case CHANGE_SHOW_EXAMPLE_STRING:
      return {
        ...state,
        level: action.payload,
      }
    case CHANGE_SHOW_EXPLANATION_STRING:
        return {
          ...state,
          level: action.payload,
      }
    case CHANGE_SHOW_WORD_TRANSLATE:
      return {
        ...state,
        level: action.payload,
      }
    case CHANGE_SHOW_WORD_IMAGE:
      return {
        ...state,
        level: action.payload,
      }
    case CHANGE_SHOW_BTN_SHOW_AGREE_ANSWER:
        return {
          ...state,
          level: action.payload,
      }
    case CHANGE_SHOW_BTN_DELETE_WORD:
        return {
          ...state,
          level: action.payload,
      }
    case CHANGE_SHOW_DIFFICULT_WORDS:
      return {
        ...state,
        level: action.payload,
      }
    case CHANGE_NEW_WORDS_COUNT:
      return {
        ...state,
        level: action.payload,
      }
    case CHANGE_DIFFICULT_WORDS:
      return {
        ...state,
        level: action.payload,
      }
    case CHANGE_DAY_LEARNING_WORDS:
      return {
        ...state,
        level: action.payload,
      }          
  }
  return state;
}

