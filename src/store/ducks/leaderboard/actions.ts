import { action } from 'typesafe-actions';
import { LeaderboardTypes, Leader } from './types';

export const getLeadersRequest = () =>
  action(LeaderboardTypes.GET_LEADERS_REQUEST);
export const getLeadersSuccess = (data: Leader[]) =>
  action(LeaderboardTypes.GET_LEADERS_SUCCESS, { data });
export const setLeader = (leader: Leader) =>
  action(LeaderboardTypes.SET_LEADER, { leader });
