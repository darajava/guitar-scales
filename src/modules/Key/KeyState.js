import {Map} from 'immutable';

const initialState = Map({
  selectedKey: {},
  keys: {
    a: {
      text: "A",
      key: "a",
    },
    as: {
      text: "A#/Bb",
      key: "as",
    },
    b: {
      text: "B",
      key: "b",
    },
    c: {
      text: "C",
      key: "c",
    },
    cs: {
      text: "C#/Db",
      key: "cs",
    },
    d: {
      text: "D",
      key: "d",
    },
    ds: {
      text: "D#/Eb",
      key: "ds",
    },
    e: {
      text: "E",
      key: "e",
    },
    f: {
      text: "F",
      key: "f",
    },
    fs: {
      text: "F#/Gb",
      key: "fs",
    },
    g: {
      text: "G",
      key: "g",
    },
    gs: {
      text: "G#/Ab",
      key: "gs",
    }, 
  },
});

// Actions
const SET_SELECTED_KEY = 'keyState/SET_SELECTED_KEY';

// Action creators
export function setSelectedKey(selectedKey) {
  return (dispatch) => {
    dispatch({
        type: SET_SELECTED_KEY,
        selectedKey
    }); 
  }
}


export default function KeyReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_SELECTED_KEY:
      return state.set('selectedKey', state.get('keys')[action.selectedKey]);
    default:
      return state;
  }
}
