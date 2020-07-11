const initialState = {
  difficulty: localStorage.getItem('sprintDifficulty') === null ? 0 : localStorage.getItem('sprintDifficulty'),
  level: localStorage.getItem('sprintLvl') === null ? 0 : localStorage.getItem('sprintLvl'),
}

export function sprintGameReducer(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_DIFF':
      return {
        difficulty: action.payload
      }
    case 'CHANGE_LVL':
      return {
        level: action.payload
      }
    default:
      return state
  }
}