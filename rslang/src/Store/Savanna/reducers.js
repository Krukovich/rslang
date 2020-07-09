<<<<<<< HEAD
<<<<<<< HEAD
import { CHANGE_MINIGAMESAVANNA_STATS } from "./actions";

const initialState = {
  minigameSavannaStats: [1, 2, 3], //an array of minigame Savanna stats
};
=======
=======
>>>>>>> mini stats from redux
import * as Actions from './actions';


const initialState = {
<<<<<<< HEAD
<<<<<<< HEAD
  minigameSavannaStats: [1,2,3,4,5], //an array of minigame Savanna stats
=======
  minigameSavannaStats: [1, 2, 3], //an array of minigame Savanna stats
>>>>>>> feat: long stats from redux
=======
  minigameSavannaStats: [1,2,3,4,5], //an array of minigame Savanna stats
>>>>>>> mini stats from redux
}
>>>>>>> mini stats from redux

export const savannaReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.CHANGE_MINIGAMESAVANNA_STATS:
      return {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        ...state,
        stats: action.payload,
      };
    default:
      return state;
=======
=======
>>>>>>> mini stats from redux
=======
        ...state,
>>>>>>> refactor
        minigameSavannaStats: action.payload,
      }
>>>>>>> mini stats from redux
  }
};
