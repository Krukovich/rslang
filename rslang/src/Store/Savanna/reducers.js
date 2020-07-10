import { CHANGE_MINIGAMESAVANNA_STATS } from "./actions";
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 743947491a5a5f15e34e9bde205c572b5b1d74db

>>>>>>> be080e4... fix
import { fetchAPI } from "../../Components/Tools/fetchAPI";

const initialState = {
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
    
      }
};
