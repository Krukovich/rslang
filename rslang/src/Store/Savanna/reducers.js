import { CHANGE_MINIGAMESAVANNA_STATS } from "./actions";
import { fetchAPI } from "../../Components/Tools/fetchAPI";

const initialState = {
<<<<<<< HEAD
  minigameSavannaStats: [1, 2, 3], //an array of minigame Savanna stats
=======
  statsSavanna: [
    {"timestamp":1551114322795,"newWords":1},
    {"timestamp":15051224622795,"newWords":2},
    {newWords: 3, timestamp: 1592375922795},
    {"timestamp":1557114322795,"newWords":4},
    {"timestamp":1595122422795,"newWords":5},
    {newWords: 6, timestamp: 1599375922795}
  ]
    
  
>>>>>>> ed1e6808e9abb5e8fef19623e484c6e4c59e3d8b
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
