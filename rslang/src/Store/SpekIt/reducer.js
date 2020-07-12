import { CHANGE_SPEAKIT_STATS } from "./action";
import { fetchAPI } from "../../Components/Tools/fetchAPI";

const initialState = {
  speakIt: []
};


export const speakItReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SPEAKIT_STATS:
      fetchAPI("users-get-statistics").then((oldObj) => {
        delete oldObj.id;
        oldObj.optional.speakIt[action.payload.dateTime] = action.payload.successCount;
        let newObj = oldObj;
        fetchAPI("users-set-statistics", newObj.optional);
      });
      const speakIt = state.speakIt;
      speakIt[action.payload.dateTime] = action.payload.successCount
      return {
        ...state,
        speakIt: speakIt,
      };
    default:
      return state;
  }
};
