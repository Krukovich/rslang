const initialState = {
    difficulty: 0,
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