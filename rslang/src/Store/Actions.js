export const CHANGE_DIFFICULT_LEVEL = 'CHANGE_DIFFICULT_LEVEL';
export const CHANGE_PLAY_EXAMPLE_SOUND = 'CHANGE_PLAY_EXAMPLE_SOUND';
export const CHANGE_SHOW_TRANSLATE_WORD = 'CHANGE_SHOW_TRANSLATE_WORD';
export const CHANGE_SHOW_EXAMPLE_STRING = 'CHANGE_SHOW_EXAMPLE_STRING';
export const CHANGE_SHOW_EXPLANATION_STRING = 'CHANGE_SHOW_EXPLANATION_STRING';
export const CHANGE_SHOW_WORD_TRANSCRIPTION = 'CHANGE_SHOW_WORD_TRANSCRIPTION';
export const CHANGE_SHOW_WORD_IMAGE = 'CHANGE_SHOW_WORD_IMAGE';
export const CHANGE_SHOW_BTN_SHOW_AGREE_ANSWER = 'CHANGE_SHOW_BTN_SHOW_AGREE_ANSWER';
export const CHANGE_SHOW_BTN_DELETE_WORD = 'CHANGE_SHOW_BTN_DELETE_WORD';
export const CHANGE_NEW_WORDS_COUNT = 'CHANGE_NEW_WORDS_COUNT';
export const CHANGE_DIFFICULT_WORDS = 'CHANGE_DIFFICULT_WORDS';
export const CHANGE_DAY_LEARNING_WORDS = 'CHANGE_DAY_LEARNING_WORDS';
export const CHANGE_DELETE_WORDS = 'CHANGE_DELETE_WORDS';
export const CHANGE_SHOW_BTN_DIFFICULT_WORDS = 'CHANGE_SHOW_BTN_DIFFICULT_WORDS'

export const setSitingLevel = (level) => ({
  type: CHANGE_DIFFICULT_LEVEL,
  payload: level,
});

export const setPlayExampleSound = (flag) => ({
  type: CHANGE_PLAY_EXAMPLE_SOUND,
  payload: flag,
})

export const setShowTranslateWord = (flag) => ({
  type: CHANGE_SHOW_TRANSLATE_WORD,
  payload: flag,
});

export const setShowExampleString = (flag) => ({
  type: CHANGE_SHOW_EXAMPLE_STRING,
  payload: flag,
});

export const setShowWordTranscription = (flag) => ({
  type: CHANGE_SHOW_WORD_TRANSCRIPTION,
  payload: flag
});

export const setShowExplanationString = (flag) => ({
  type: CHANGE_SHOW_EXPLANATION_STRING,
  payload: flag,
});


export const setWordImage = (flag) => ({
  type: CHANGE_SHOW_WORD_IMAGE,
  payload: flag,
});

export const setShowBtnAgreeAnswer = (flag) => ({
  type: CHANGE_SHOW_BTN_SHOW_AGREE_ANSWER,
  payload: flag,
});

export const setShowBtnDeleteWord = (flag) => ({
  type: CHANGE_SHOW_BTN_DELETE_WORD,
  payload: flag,
});

export const setShowBtnDifficultWord = (flag) => ({
  type: CHANGE_SHOW_BTN_DIFFICULT_WORDS,
  payload: flag,
});

export const setNewWordsCount = (number) => ({
  type: CHANGE_NEW_WORDS_COUNT,
  payload: number,
});

export const setDifficultWords = (array) => ({
  type: CHANGE_DIFFICULT_WORDS,
  payload: array,
});

export const setDayLearningWords = (array) => ({
  type: CHANGE_DAY_LEARNING_WORDS,
  payload: array,
});

export const setDeleteWords = (array) => ({
  type: CHANGE_DELETE_WORDS,
  payload: array,
});
