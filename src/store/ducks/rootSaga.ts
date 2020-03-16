import { all, takeLatest } from 'redux-saga/effects';

import { HeroesTypes } from './heroes/types';
import { load } from './heroes/sagas';

import { LeaderboardTypes } from './leaderboard/types';
import { get, set } from './leaderboard/sagas';

import { QuizTypes } from './quiz/types';
import { popQuestions, resetGame } from './quiz/sagas';

export default function* rootSaga() {
  // console.log('aaa');
  return yield all([
    takeLatest(HeroesTypes.LOAD_REQUEST, load),
    takeLatest(LeaderboardTypes.GET_LEADERS_REQUEST, get),
    takeLatest(LeaderboardTypes.SET_LEADER, set),
    takeLatest(QuizTypes.GENERATE_QUESTIONS, popQuestions),
    takeLatest(QuizTypes.RESET_GAME, resetGame),
  ]);
}
