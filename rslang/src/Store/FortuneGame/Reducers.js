import { CHANGE_MINIGAMEFORTUNE_STATS } from "./Actions";
import { fetchAPI } from "../../Components/Tools/fetchAPI";

const initialState = {
  fortuneGame: [],
}

export const fortuneGameReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_MINIGAMEFORTUNE_STATS:
      fetchAPI("users-get-statistics").then((oldObj) => {
        delete oldObj.id;
        oldObj.optional.fortuneGame[action.payload.dateTime] = action.payload.successCount;
        let newObj = oldObj;
        fetchAPI("users-set-statistics", newObj.optional);
      });

      const fortuneGame = state.fortuneGame;
      fortuneGame[action.payload.dateTime] = action.payload.successCount
      return {
        ...state,
        fortuneGame: fortuneGame,
      };
    default:
      return state;
  }
}
