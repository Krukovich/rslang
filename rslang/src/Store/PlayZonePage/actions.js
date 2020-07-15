export const CHANGE_WORD_CARDS = 'CHANGE_WORD_CARDS';
export const ADD_DIFFICULT_WORDS = "ADD_DIFFICULT_WORDS";
export const CHANGE_DAY_LEARNING_WORDS = "CHANGE_DAY_LEARNING_WORDS";
export const ADD_DELETED_WORDS = "ADD_DELETED_WORDS";
export const CHANGE_APP_STATS = 'CHANGE_APP_STATS';
export const REMOVE_DELETED_WORDS = 'REMOVE_DELETE_WORDS';
export const DELETE_DIFFICULT_WORDS = 'DELETE_DIFFICULT_WORDS';
export const CHANGE_NEW_WORDS = 'CHANGE_NEW_WORDS';

export const setNewWords = (number) => ({
  type: CHANGE_NEW_WORDS,
  payload: number,
});

export const setWordCards = (cards) => ({
  type: CHANGE_WORD_CARDS,
  payload: cards,
});

export const setDifficultWords = (array) => ({
  type: ADD_DIFFICULT_WORDS,
  payload: array,
});

export const setDayLearningWords = (array) => ({
  type: CHANGE_DAY_LEARNING_WORDS,
  payload: array,
});

export const setDeleteWords = (array) => ({
  type: ADD_DELETED_WORDS,
  payload: array,
});

export const setAppStats = (stats) => ({
  type: CHANGE_APP_STATS,
  payload: stats,
})

export const restoreDeleteWords = (array) => ({
  type: REMOVE_DELETED_WORDS,
  payload: array,
})

export const deleteDifficultWords = (array) => ({
  type: DELETE_DIFFICULT_WORDS,
  payload: array,
})
