import { CHANGE_MINIGAMESPRINT_STATS } from "./Actions";
import { fetchAPI } from "../../Components/Tools/fetchAPI";

const initialState = {
  sprintGame: [],
}

export const sprintGameReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_MINIGAMESPRINT_STATS:
      fetchAPI("users-get-statistics").then((oldObj) => {
        delete oldObj.id;
        oldObj.optional.sprintGame[action.payload.dateTime] = action.payload.successCount;
        let newObj = oldObj;
        fetchAPI("users-set-statistics", newObj.optional);
      });

      const sprintGame = state.sprintGame;
      sprintGame[action.payload.dateTime] = action.payload.successCount
      return {
        ...state,
        sprintGame: sprintGame,
      };
    default:
      return state;
  }
}
