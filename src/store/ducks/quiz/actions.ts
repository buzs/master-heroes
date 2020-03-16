import { action } from 'typesafe-actions';
import { Hero } from '../heroes/types';
import { QuizTypes } from './types';

export const setAmountQuestions = () => action(QuizTypes.SET_AMOUNT_QUESTIONS);

export const updateCurrentAmountQuestions = () =>
  action(QuizTypes.UPDATE_CURRENT_QUESTION);

export const setQuestions = (data: Hero[]) =>
  action(QuizTypes.SET_QUESTIONS, { data });

export const generateQuestions = (amount: number) =>
  action(QuizTypes.GENERATE_QUESTIONS, { amount });

export const resetGame = () => action(QuizTypes.RESET_GAME);
