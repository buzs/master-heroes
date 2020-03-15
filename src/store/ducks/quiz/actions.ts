import { action } from 'typesafe-actions';
import { QuizTypes } from './types';

export const setAmountQuestions = () => action(QuizTypes.SET_AMOUNT_QUESTIONS);

export const updateCurrentAmountQuestions = () =>
  action(QuizTypes.UPDATE_CURRENT_QUESTION);
