import {Map} from 'immutable';

const initialState = Map({
  selectedScale: {
    text: "Major Pentatonic",
    pattern: [2, 2, 3, 2, 3],
    key: 'majorPentatonic',
    type: 'scale',
  },
  scales: {
    naturalMinor: {
      text: "Natural Minor",
      pattern: [2, 1, 2, 2, 1, 2, 2],
      key: 'naturalMinor',
      type: 'scale',
    },
    harmonicMinor: {
      text: "Harmonic Minor",
      pattern: [2, 1, 2, 2, 1, 3, 1],
      key: 'harmonicMinor',
      type: 'scale',
    },
    major: {
      text: "Major",
      pattern: [2, 2, 1, 2, 2, 2, 1],
      key: 'major',
      type: 'scale',
    },
    majorPentatonic: {
      text: "Major Pentatonic",
      pattern: [2, 2, 3, 2, 3],
      key: 'majorPentatonic',
      type: 'scale',
    },
    minorPentatonic: {
      text: "Minor Pentatonic",
      pattern: [3, 2, 2, 3, 2],
      key: 'minorPentatonic',
      type: 'scale',
    },
    bluesPentatonic: {
      text: "Blues Pentatonic",
      pattern: [3, 2, 1, 1, 3, 2],
      key: 'bluesPentatonic',
      type: 'scale',
    },
    chromatic: {
      text: "Chromatic",
      pattern: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      key: 'chromatic',
      type: 'scale',
    },
    majorArpeggio: {
      pattern: [4, 3, 5],
      text: "Major",
      key: "majorArpeggio",
      type: 'arpeggio',
    },
    minorArpeggio: {
      pattern: [3, 4, 5],
      text: "Minor",
      key: "minorArpeggio",
      type: 'arpeggio',
    },
    major7Arpeggio: {
      pattern: [4, 3, 4, 1],
      text: "Major 7",
      key: "major7Arpeggio",
      type: 'arpeggio',
    },
    minor7Arpeggio: {
      pattern: [3, 4, 4, 1],
      text: "Minor 7",
      key: "minor7Arpeggio",
      type: 'arpeggio',
    },
    augmentedArpeggio: {
      pattern: [4, 4, 4],
      text: "Augmented",
      key: "augmentedArpeggio",
      type: 'arpeggio',
    },
    diminishedArpeggio: {
      pattern: [3, 3, 6],
      text: "Diminished",
      key: "diminishedArpeggio",
      type: 'arpeggio',
    },
    augmented7Arpeggio: {
      pattern: [4, 4, 2, 2],
      text: "Augmented 7",
      key: "augmented7Arpeggio",
      type: 'arpeggio',
    },
    diminished7Arpeggio: {
      pattern: [3, 3, 3, 3],
      text: "Diminished 7",
      key: "diminished7Arpeggio",
      type: 'arpeggio',
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
