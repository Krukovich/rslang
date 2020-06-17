export const CHANGE_WORD_CARDS = 'CHANGE_WORD_CARDS';

export const setWordCards = (cards) => ({
  type: CHANGE_WORD_CARDS,
  payload: cards,
});
