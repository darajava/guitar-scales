import {Map} from 'immutable';

const initialState = Map({
  selectedPosition: {
    text: "1",
    key: "1",
  },
  positions: {
    '1': {
      text: "1",
      key: "1",
    },
    '2': {
      text: "2",
      key: "2",
    },
    '3': {
      text: "3",
      key: "3",
    },
    '4': {
      text: "4",
      key: "4",
    },
    '5': {
      text: "5",
      key: "5",
    },
  },
});

// Actions
const LOAD_POSITIONS = 'positionState/LOAD_POSITIONS';
const LOAD_SELECTED_POSITION = 'positionState/LOAD_SELECTED_POSITION';
const SET_SELECTED_POSITION = 'positionState/SET_SELECTED_POSITION';

// Action creators
export function setSelectedPosition(selectedPosition) {
  return (dispatch) => {
    dispatch({
        type: SET_SELECTED_POSITION,
        selectedPosition,
    }); 
  }
}


export default function PositionReducer(state = initialState, action = {}) {
  console.log('positionaction, ', action)
  console.log('positionstate, ', state.get());
  switch (action.type) {
    case SET_SELECTED_POSITION:
      return state.set('selectedPosition', state.get('positions')[action.selectedPosition]);
    default:
      return state;
  }
}
