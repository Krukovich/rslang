const initialState = {
    difficulty: localStorage.getItem('sprintDifficulty') === null ? 0 : localStorage.getItem('sprintDifficulty'),
}

export function sprintGameReducer(state = initialState, action) {

    switch (action.type) {
        case 'CHANGE_DIFF':
            return {
                difficulty: action.payload
            }
        default:
            return state
    }
}