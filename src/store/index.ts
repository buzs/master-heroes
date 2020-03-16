import { createStore, applyMiddleware, Store, Action } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import createSagaMiddleware from 'redux-saga';
import thunkMiddleware from 'redux-thunk';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from './ducks/rootReducer';
import rootSaga from './ducks/rootSaga';

import { HeroesState } from './ducks/heroes/types';
import { ScoreState } from './ducks/score/types';
import { QuizState } from './ducks/quiz/types';
import { LeaderboardState } from './ducks/leaderboard/types';

export interface AppAction extends Action {
  payload?: any;
}

export interface ApplicationState {
  heroes: HeroesState;
  score: ScoreState;
  quiz: QuizState;
  leaderboard: LeaderboardState;
}

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: '@HMP',
  storage,
  blacklist: ['score', 'leaderboard'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store: Store<ApplicationState> = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware, sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;
