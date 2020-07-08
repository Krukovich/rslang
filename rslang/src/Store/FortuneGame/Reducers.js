const initialState = {
  difficulty: localStorage.getItem('fortuneDifficulty') === null ? 0 : localStorage.getItem('fortuneDifficulty'),
}

export function fortuneGameReducer(state = initialState, action) {

  switch (action.type) {
    case 'CHANGE_DIFF':
      return {
        difficulty: action.payload
      }
    default:
      return state
  }
}
