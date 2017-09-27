import { fromJS } from 'immutable';
import { combineReducers } from 'redux-immutable';

import KeyReducer from '../modules/Key/KeyState';
import ScaleReducer from '../modules/Scale/ScaleState';
import ExerciseReducer from '../modules/Exercise/ExerciseState';
import PositionReducer from '../modules/Position/PositionState';
import PracticeReducer from '../modules/Practice/PracticeState';

export default function createReducer() {
  return combineReducers({
    practiceState: PracticeReducer,
    positionState: PositionReducer,
    exerciseState: ExerciseReducer,
    keyState: KeyReducer,
    scaleState: ScaleReducer,
  })
}
