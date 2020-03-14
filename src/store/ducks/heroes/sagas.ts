import { call, put } from 'redux-saga/effects';
import api from '../../../services/api';

import {
	loadSuccess,
	loadFailure
} from './actions';

export function* load() {
	try {
		const res = yield call(
			api.get,
			'all.json'
		);

		localStorage.setItem(
			'@HM:allHeroes',
			res.data
		);

		yield put(loadSuccess(res.data));
	} catch {
		yield put(loadFailure());
	}
}
