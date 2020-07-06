<<<<<<< HEAD
import { CHANGE_MINIGAMESAVANNA_STATS } from "./actions";

const initialState = {
  minigameSavannaStats: [1, 2, 3], //an array of minigame Savanna stats
};
=======
import * as Actions from './actions';


const initialState = {
<<<<<<< HEAD
  minigameSavannaStats: [1,2,3,4,5], //an array of minigame Savanna stats
=======
  minigameSavannaStats: [1, 2, 3], //an array of minigame Savanna stats
>>>>>>> feat: long stats from redux
}
>>>>>>> mini stats from redux

export const savannaReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.CHANGE_MINIGAMESAVANNA_STATS:
      return {
<<<<<<< HEAD
        ...state,
        stats: action.payload,
      };
    default:
      return state;
=======
        minigameSavannaStats: action.payload,
      }
>>>>>>> mini stats from redux
  }
};
