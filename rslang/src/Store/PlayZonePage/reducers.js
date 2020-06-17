import { CHANGE_WORD_CARDS } from './actions';
import { wordCards } from '../../constant';

const initialState = {
  settings: { // global app settings
    level: 1, // number indicating difficult level
    show_translate_word: true, // show translate word
    show_example_string: true, // show example string
    show_explanation_string: true, // show explanation string
    show_words_translate: true, // show word transcription
    show_word_image: true, // show words image example
    show_btn_show_agree_answer: true, // show btn next step
    show_btn_delete_word: true, // show btn remove a word from learning
    show_btn_difficult_word: true, // show btn add words to a difficult group
    new_words_count: 5,
  },
  difficult_words: [], // an array with the words in which errors were made
  day_learning_words: [], //an array of words to learn
  cards: wordCards[1],
}

export const playZonePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_WORD_CARDS:
      return {
        ...state,
        cards: action.payload,
      }
  }
  return state;
}
