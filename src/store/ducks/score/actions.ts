import { action } from 'typesafe-actions';
import { ScoreTypes } from './types';

export const addPoint = () => action(ScoreTypes.ADD_POINT);
