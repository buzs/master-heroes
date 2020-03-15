import { call, put } from 'redux-saga/effects';
import rsf from '../../../services/firebase';

// import { QuerySnapshot } from '@firebase/firestore-types';

import { getLeadersSuccess } from './actions';
// import { Leader } from './types';

export function* get() {
  try {
    const leaders = yield call(rsf.database.read, 'leaders');

    yield put(getLeadersSuccess(Object.values(leaders)));
  } catch {}
}

export function* set(action: any) {
  console.log(action.playload, 'aaaaaaaa');
  yield call(rsf.database.create, 'leaders', action.payload.leader);
}

// export function* get() {
//     try {
//       const snapshot: QuerySnapshot<Leader[]> = yield call(
//         rsf.firestore.getCollection,
//         'leaders'
//       );

//       let leaders: Leader[];

//       snapshot.forEach(leader => {
//         leaders = {
//           ...leaders,
//           [leader.id]: leader.data(),
//         };
//       });

//       //@ts-ignore
//       yield put(getLeadersSuccess(leaders));
//     } catch {}
//   }

//   export function* set() {
//     yield call(rsf.firestore.addDocument, 'leaders', {
//       name: 'Gabriel H',
//       score: 248,
//       hits: 4,
//       hitsPorcentege: 47,
//       time: 5000,
//     });
//   }
