<<<<<<< HEAD
import { CHANGE_MINIGAMESAVANNA_STATS } from "./actions";
=======
import * as Actions from './actions';
>>>>>>> mini stats from redux

import { fetchAPI } from "../../Components/Tools/fetchAPI";

const initialState = {
<<<<<<< HEAD
  minigameSavannaStats: [1, 2, 3], //an array of minigame Savanna stats
};


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
        ...state,
        statsSavanna: statsSavanna,
      };
    default:
      return state;
    
=======
  minigameSavannaStats: [1,2,3,4,5], //an array of minigame Savanna stats
}

export const savannaReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.CHANGE_MINIGAMESAVANNA_STATS:
      return {
        minigameSavannaStats: action.payload,
>>>>>>> mini stats from redux
      }
};
