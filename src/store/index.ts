import { createStore, applyMiddleware, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import createSagaMiddleware from 'redux-saga';
import thunkMiddleware from 'redux-thunk';

import rootReducer from './ducks/rootReducer';
import rootSaga from './ducks/rootSaga';

import { HeroesState } from './ducks/heroes/types';
import { ScoreState } from './ducks/score/types';
import { QuizState } from './ducks/quiz/types';
import { LeaderboardState } from './ducks/leaderboard/types';

export interface ApplicationState {
  heroes: HeroesState;
  score: ScoreState;
  quiz: QuizState;
  leaderboard: LeaderboardState;
}

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunkMiddleware),
    applyMiddleware(sagaMiddleware)
  )
);

sagaMiddleware.run(rootSaga);

export default store;
