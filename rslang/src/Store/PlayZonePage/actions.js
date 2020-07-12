export const CHANGE_WORD_CARDS = 'CHANGE_WORD_CARDS';
export const CHANGE_DIFFICULT_WORDS = "CHANGE_DIFFICULT_WORDS";
export const CHANGE_DAY_LEARNING_WORDS = "CHANGE_DAY_LEARNING_WORDS";
export const CHANGE_DELETE_WORDS = "CHANGE_DELETE_WORDS";
export const CHANGE_APP_STATS = 'CHANGE_APP_STATS';
export const RESTORE_DELETE_WORDS = 'RESTORE_DELETE_WORDS';

export const setWordCards = (cards) => ({
  type: CHANGE_WORD_CARDS,
  payload: cards,
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

export const setAppStats = (stats) => ({
  type: CHANGE_APP_STATS,
  payload: stats,
})

export const restoreDeleteWords = (array) => ({
  type: RESTORE_DELETE_WORDS,
  payload: array,
})
