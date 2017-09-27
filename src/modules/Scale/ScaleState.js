import {Map} from 'immutable';

const initialState = Map({
  selectedScale: {},
  scales: {
    naturalMinor: {
      text: "Natural Minor",
      pattern: [2, 1, 2, 2, 1, 2, 2],
      key: 'naturalMinor',
    },
    harmonicMinor: {
      text: "Harmonic Minor",
      pattern: [2, 1, 2, 2, 1, 3, 1],
      key: 'harmonicMinor',
    },
    major: {
      text: "Major",
      pattern: [2, 2, 1, 2, 2, 2, 1],
      key: 'major',
    },
    majorPentatonic: {
      text: "Major Pentatonic",
      pattern: [2, 2, 3, 2, 3],
      key: 'majorPentatonic',
    },
    minorPentatonic: {
      text: "Minor Pentatonic",
      pattern: [3, 2, 2, 3, 2],
      key: 'minorPentatonic',
    },
    bluesPentatonic: {
      text: "Blues Pentatonic",
      pattern: [3, 2, 1, 1, 3, 2],
      key: 'bluesPentatonic',
    },
    chromatic: {
      text: "Chromatic",
      pattern: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      key: 'chromatic',
    },
  },
});

// Actions
const SET_SELECTED_SCALE = 'keyState/SET_SELECTED_SCALE';

// Action creators
export function setSelectedScale(selectedScale) {
  return (dispatch) => {
    dispatch({
        type: SET_SELECTED_SCALE,
        selectedScale,
    }); 
  }
}


export default function ScaleReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_SELECTED_SCALE:
      return state.set('selectedScale', state.get('scales')[action.selectedScale]);
    default:
      return state;
  }
}
