import { CHANGE_MINIGAMESAVANNA_STATS } from "./actions";
import { CHANGE_MINIGAMEAUDIOCALL_STATS } from "./actions";
import { fetchAPI } from "../../Components/Tools/fetchAPI";

const initialState = {
  statsSavanna: [],
  statsAudioCall: [],
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

      const statsSavanna = state.statsSavanna;
      statsSavanna[action.payload.dateTime] = action.payload.successCount;
      return {
        ...state,
        statsSavanna: statsSavanna,
      };
    case CHANGE_MINIGAMEAUDIOCALL_STATS:
      fetchAPI("users-get-statistics").then((oldObj) => {
        delete oldObj.id;
        oldObj.optional.audioCall[action.payload.dateTime] =
          action.payload.successCount;
        let newObj = oldObj;
        fetchAPI("users-set-statistics", newObj.optional);
      });

      const statsAudioCall = state.statsAudioCall;
      statsAudioCall[action.payload.dateTime] = action.payload.successCount;
      return {
        ...state,
        statsAudioCall: statsAudioCall,
      };
    default:
      return state;
  }
};
