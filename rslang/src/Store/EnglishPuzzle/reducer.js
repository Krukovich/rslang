import { CHANGE_MINIGAMEPUZZLE_STATS } from "./action";
import { fetchAPI } from "../../Components/Tools/fetchAPI";

const initialState = {
  gamePuzzle: []
};


export const englishPuzzleReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_MINIGAMEPUZZLE_STATS:
      fetchAPI("users-get-statistics").then((oldObj) => {
        debugger;
        delete oldObj.id;
        oldObj.optional.gamePuzzle[action.payload.dateTime] = action.payload.successCount;
        let newObj = oldObj;
        fetchAPI("users-set-statistics", newObj.optional);
      });
      console.log("reducer", action);
      const gamePuzzle = state.gamePuzzle;
      gamePuzzle[action.payload.dateTime] = action.payload.successCount
      return {
        ...state,
        gamePuzzle: gamePuzzle,
      };
    default:
      return state;

  }
};
