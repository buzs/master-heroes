import {
	createStore,
	applyMiddleware,
	Store
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import createSagaMiddleware from 'redux-saga';
import thunkMiddleware from 'redux-thunk';

import { HeroesState } from './ducks/heroes/types';

import rootReducer from './ducks/rootReducer';
import rootSaga from './ducks/rootSaga';

export interface ApplicationState {
	heroes: HeroesState;
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
