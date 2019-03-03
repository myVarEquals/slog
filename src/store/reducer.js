const initialState = {
    addExercise: false
}

const reducer = (state = initialState, action) => {
    switch ( action.type ) {
        case 'CONCAT_EXERCISE':
            return {
                ...state
            }
        case 'ADD_EXERCISE':
            let updatedAdd = !state.addExercise
            return {
                ...state,
                addExercise: updatedAdd
            }
        default:
            return state;
    }
}

export default reducer;