import { CHANGE_MINIGAMESAVANNA_STATS } from './actions';


const initialState = {
  minigameSavannaStats: [], //an array of minigame Savanna stats
}

export const savannaReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_MINIGAMESAVANNA_STATS:
      return {
        ...state,
        stats: action.payload,
      }
  }
  return state;
}
