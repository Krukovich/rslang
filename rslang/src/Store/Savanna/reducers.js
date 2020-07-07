<<<<<<< HEAD
import { CHANGE_MINIGAMESAVANNA_STATS } from "./actions";

import { fetchAPI } from "../../Components/Tools/fetchAPI";

const initialState = {
  statsSavanna: {},
};
=======
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
>>>>>>> mini stats from redux

export const savannaReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_MINIGAMESAVANNA_STATS:
      fetchAPI("users-get-statistics").then((oldObj) => {
        delete oldObj.id;
        oldObj.optional.statsSavanna[action.payload.dateTime] = action.payload.successCount;
        let newObj = oldObj;
        fetchAPI("users-set-statistics", newObj.optional);
      });

      console.log("reducer", action);
      const statsSavanna = state.statsSavanna;
      statsSavanna[action.payload.dateTime] = action.payload.successCount
      return {
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> mini stats from redux
        ...state,
        statsSavanna: statsSavanna,
      };
    default:
      return state;
<<<<<<< HEAD
=======
=======
=======
>>>>>>> mini stats from redux
        minigameSavannaStats: action.payload,
      }
>>>>>>> mini stats from redux
>>>>>>> mini stats from redux
  }
};
