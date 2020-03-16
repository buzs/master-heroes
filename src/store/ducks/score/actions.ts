import { action } from 'typesafe-actions';
import { ScoreTypes } from './types';

export const addScore = () => action(ScoreTypes.ADD);
export const resetScore = () => action(ScoreTypes.RESET);
