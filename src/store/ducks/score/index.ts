import { Reducer } from 'redux';
import { ScoreState, ScoreTypes } from './types';

const INITIAL_STATE: ScoreState = {
  points: 0,
  hits: 0,
};

const reducer: Reducer<ScoreState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ScoreTypes.ADD_POINT:
      return {
        ...state,
        points: state.points + 20,
        hits: state.hits + 1,
      };
    default:
      return state;
  }
};

export default reducer;
