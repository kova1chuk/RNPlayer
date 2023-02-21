import { all, fork } from 'redux-saga/effects';

import songsSaga from './songs/sagas';

export function* rootSaga() {
  // yield all([fork(songsSaga)]);
}
