// import { Hero } from '../heroes/types';

/**
 * Action types
 */

export enum LeaderboardTypes {
  GET_LEADERS_REQUEST = '@leaderboard/GET_LEADERS_REQUEST',
  GET_LEADERS_SUCCESS = '@leaderboard/GET_LEADERS_SUCCESS',
  SET_LEADER = '@leaderboard/SET_LEADER',
}

/**
 * Data types
 */
export interface Leader {
  readonly id?: number;
  readonly name: string;
  readonly score: number;
  readonly hits: number;
  readonly hitsPercentege: number;
  readonly time: number;
}

/**
 * State type
 */
export interface LeaderboardState {
  leader: Leader | null;
  data: Leader[];
}
