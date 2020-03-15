// import { Hero } from '../heroes/types';

/**
 * Action types
 */

export enum QuizTypes {
  SET_QUESTIONS = '@quiz/SET_QUESTIONS',
  UPDATE_CURRENT_QUESTION = '@quiz/UPDATE_CURRENT_QUESTION',
  RESET_GAME = '@quiz/RESET_GAME',
  SET_AMOUNT_QUESTIONS = '@quiz/SET_AMOUNT_QUESTIONS',
}

/**
 * Data types
 */

/**
 * State type
 */
export interface QuizState {
  readonly currentAmountQuestion: number;
  readonly amountQuestions: number;
}
