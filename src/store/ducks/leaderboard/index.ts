import { Reducer } from 'redux';
import { LeaderboardState, LeaderboardTypes } from './types';

const INITIAL_STATE: LeaderboardState = {
  leader: null,
  data: [],
};

const reducer: Reducer<LeaderboardState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LeaderboardTypes.GET_LEADERS_REQUEST:
      return { ...state };
    case LeaderboardTypes.GET_LEADERS_SUCCESS:
      return { ...state, data: action.payload.data };
    case LeaderboardTypes.SET_LEADER:
      return { ...state, leader: action.payload.leader };
    default:
      return state;
  }
};

export default reducer;
