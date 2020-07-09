import { CHANGE_MINIGAMESAVANNA_STATS } from "./actions";
import { CHANGE_LEVEL } from "./actions";

import { fetchAPI } from "../../Components/Tools/fetchAPI";

const initialState = {
  statsSavanna: {},
  levelR: 1,
};

export const savannaReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_MINIGAMESAVANNA_STATS:
      fetchAPI("users-get-statistics").then((oldObj) => {
        delete oldObj.id;
        oldObj.optional.statsSavanna[action.payload.dateTime] =
          action.payload.successCount;
        let newObj = oldObj;
        fetchAPI("users-set-statistics", newObj.optional);
      });

      console.log("reducer", action);
      const statsSavanna = state.statsSavanna;
      statsSavanna[action.payload.dateTime] = action.payload.successCount;
      return {
        ...state,
        statsSavanna: statsSavanna,
      };
    case CHANGE_LEVEL:
      return {
        ...state,
        level: action.payload,
      };
    default:
      return state;
  }
};
