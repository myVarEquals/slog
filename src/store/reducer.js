import uuidv1 from '../../node_modules/uuid/v1';

const initialState = {
    addExercise: false,
    exerciseArray: []
}

const reducer = (state = initialState, action) => {
    switch ( action.type ) {
        case 'CONCAT_EXERCISE_ARRAY':
            let isUnique = true;
            let newExerciseInput = null;

            state.exerciseArray.map(curr => {      
                if (curr.id === action.payload.id) {
                    isUnique = false;
                }
            });
                
            if (isUnique) {
        
                newExerciseInput = {
                    id: uuidv1(),
                    name: action.payload.exerciseName,
                    sets: [
                    ...action.payload.setsPerformed
                    ]
                }
                    
            }

            return {
                addExercise: false,
                exerciseArray: state.exerciseArray.concat(newExerciseInput)
            }
        case 'SPLICE_EXERCISE_ARRAY':
            
            let currExercises = [...state.exerciseArray];
            console.log(currExercises);
            console.log(action.payload.id);
            // action.payload.id
            return {
                ...state,
                exerciseArray: currExercises.filter(curr => curr.id !== action.payload.id)
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