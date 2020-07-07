import * as Actions from './actions';


const initialState = {
  minigameSavannaStats: [1,2,3,4,5], //an array of minigame Savanna stats
}

export const savannaReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.CHANGE_MINIGAMESAVANNA_STATS:
      return {
        minigameSavannaStats: action.payload,
      }
  }
  return state;
}
