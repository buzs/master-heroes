/**
 * Action types
 */

export enum ScoreTypes {
  ADD_POINT = '@score/ADD_POINT',
}

/**
 * Data types
 */

/**
 * State type
 */
export interface ScoreState {
  readonly points: number;
  readonly hits: number;
}
