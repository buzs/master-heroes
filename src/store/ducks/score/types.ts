/**
 * Action types
 */

export enum ScoreTypes {
  ADD = '@score/ADD',
  RESET = '@score/RESET',
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
