import {Map} from 'immutable';

const initialState = Map({
  selectedExercise: {
    text: "Scale",
    key: "scale",
  },
  exercises: {
    scale: {
      text: "Scale",
      key: "scale",
    },
    arpeggio: {
      text: "Arpeggio",
      key: 'arpeggio',
    },
  },
});

// Actions
const LOAD_EXERCISES = 'exerciseState/LOAD_EXERCISES';
const LOAD_SELECTED_EXERCISE = 'exerciseState/LOAD_SELECTED_EXERCISE';
const SET_SELECTED_EXERCISE = 'exerciseState/SET_SELECTED_EXERCISE';

// Action creators
export function setSelectedExercise(selectedExercise) {
  return (dispatch) => {
    dispatch({
        type: SET_SELECTED_EXERCISE,
        selectedExercise,
    }); 
  }
}


export default function ExerciseReducer(state = initialState, action = {}) {
  console.log('exerciseaction, ', action)
  console.log('exersicestate, ', state.get());
  switch (action.type) {
    case SET_SELECTED_EXERCISE:
      return state.set('selectedExercise', state.get('exercises')[action.selectedExercise]);
    default:
      return state;
  }
}
