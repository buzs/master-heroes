import { action } from 'typesafe-actions';
import { HeroesTypes, Hero } from './types';

export const loadRequest = () =>
	action(HeroesTypes.LOAD_REQUEST);
export const loadSuccess = (data: Hero[]) =>
	action(HeroesTypes.LOAD_SUCCESS, { data });
export const loadFailure = () =>
	action(HeroesTypes.LOAD_FAILURE);
