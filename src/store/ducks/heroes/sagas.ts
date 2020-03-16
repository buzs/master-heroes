import { call, put } from 'redux-saga/effects';
import api from '../../../services/api';

import { loadSuccess, loadFailure } from './actions';
import { Hero } from './types';

export function* load() {
  try {
    const key = '@HM:allHeroes';
    const storegeString = localStorage.getItem(key);

    if (!storegeString) {
      const res = yield call(api.get, 'all.json');
      localStorage.setItem(key, JSON.stringify(res.data));
    }

    const heroes = <Hero[]>JSON.parse(storegeString || '');

    yield put(loadSuccess(heroes));
  } catch {
    yield put(loadFailure());
  }
}
