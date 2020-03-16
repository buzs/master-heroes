import { call, put } from 'redux-saga/effects';
import rsf from '../../../services/firebase';

// import { QuerySnapshot } from '@firebase/firestore-types';

import { getLeadersSuccess } from './actions';
// import { Leader } from './types';

export function* get() {
  try {
    const leaders = yield call(rsf.database.read, 'leaders');

    yield put(getLeadersSuccess(Object.values(leaders)));
  } catch {
    console.log('Erro connect to Database');
  }
}

// Send to DB
export function* set(action: any) {
  yield call(rsf.database.create, 'leaders', action.payload.leader);
}
