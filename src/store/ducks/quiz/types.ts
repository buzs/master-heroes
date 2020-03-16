import { Hero } from '../heroes/types';
import { AppAction } from '../../index';
/**
 * Action types
 */
export enum QuizTypes {
  GENERATE_QUESTIONS = '@quiz/GENERATE_QUESTIONS',
  SET_QUESTIONS = '@quiz/SET_QUESTIONS',
  UPDATE_CURRENT_QUESTION = '@quiz/UPDATE_CURRENT_QUESTION',
  RESET_GAME = '@quiz/RESET_GAME',
  SET_AMOUNT_QUESTIONS = '@quiz/SET_AMOUNT_QUESTIONS',
}

export interface QuizAction extends AppAction {
  type: 'LOG_ACTION';
  payload: {
    amount: number;
  };
}

/**
 * Data types
 */

/**
 * State type
 */
export interface QuizState {
  readonly questions: Hero[] | [];
  readonly currentAmountQuestion: number;
  readonly amountQuestions: number;
  readonly currentQuestion: Hero | undefined;
}
