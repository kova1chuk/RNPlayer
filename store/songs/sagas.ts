import axios from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';

import { fetchSongsFailure, fetchSongsSuccess } from './actions';
import { FETCH_SONGS_REQUEST } from './actionTypes';
import { ISong } from './types';

const getSongss = () => axios.get<ISong[]>('https://jsonplaceholder.typicode.com/songs');

/*
  Worker Saga: Fired on FETCH_SONGS_REQUEST action
*/
function* fetchSongsSaga() {
  try {
    const response: AxiosResponse<any[]> = yield call(getSongss);
    // const response = { data: [] };
    put(
      fetchSongsSuccess({
        songs: response.data,
      }),
    );
  } catch (e: any) {
    put(
      fetchSongsFailure({
        error: e.message,
      }),
    );
  }
}

/*
  Starts worker saga on latest dispatched `FETCH_SONGS_REQUEST` action.
  Allows concurrent increments.
*/
function* todoSaga() {
  yield all([takeLatest(FETCH_SONGS_REQUEST, fetchSongsSaga)]);
}

export default todoSaga;
