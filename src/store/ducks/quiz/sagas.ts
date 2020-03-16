import { put, select } from 'redux-saga/effects';
import Router from 'next/router';

import { rangeArray, objectEqual } from '../../../utils';

import { setQuestions } from '../quiz/actions';
import { Hero } from '../heroes/types';
import { QuizAction } from '../quiz/types';

import { ApplicationState } from '../../../store';
import { resetScore } from '../score/actions';

export function* popQuestions(action: QuizAction) {
  const allHeroes = yield select(
    (state: ApplicationState) => state.heroes.data
  );

  const heroesGenerate = generateHero(allHeroes, action.payload.amount);

  yield put(setQuestions(heroesGenerate));
}

export function* resetGame() {
  yield put(resetScore());
  Router.push('/');
}

// FUNCTIONS

function generateHero(allHeroes: Hero[], amount: number) {
  let heroesGenerate: Hero[] = [];
  console.log('sec ac');
  for (let i = 0; i < amount * 3; i++) {
    const hero = rangeArray(allHeroes);
    if (heroesGenerate.every(obj => !objectEqual(obj, hero))) {
      heroesGenerate.push(hero);
    } else {
      i--;
    }
  }

  return heroesGenerate;
}
