import {Map} from 'immutable';

const initialState = Map({
  selectedPractice: {},
  practices: {},
});

// Actions
const LOAD_PRACTICES = 'practiceState/LOAD_PRACTICES';
const LOAD_SELECTED_PRACTICE = 'practiceState/LOAD_SELECTED_PRACTICE';
const SET_SELECTED_PRACTICE = 'practiceState/SET_SELECTED_PRACTICE';

// Action creators
export function setSelectedPractice(selectedPractice) {
  return (dispatch) => {
    dispatch({
        type: SET_SELECTED_PRACTICE,
        selectedPractice,
    }); 
  }
}


export default function PracticeReducer(state = initialState, action = {}) {
  console.log('practiceaction, ', action)
  console.log('practicestate, ', state.get());
  switch (action.type) {
    case SET_SELECTED_PRACTICE:
      return state.set('selectedPractice', state.get('practices')[action.selectedPractice]);
    default:
      return state;
  }
}
