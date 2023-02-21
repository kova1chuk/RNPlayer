import { FETCH_SONGS_REQUEST, FETCH_SONGS_FAILURE, FETCH_SONGS_SUCCESS } from './actionTypes';
import {
  FetchSongsRequest,
  FetchSongsSuccess,
  FetchSongsSuccessPayload,
  FetchSongsFailure,
  FetchSongsFailurePayload,
} from './types';

export const fetchSongsRequest = (): FetchSongsRequest => ({
  type: FETCH_SONGS_REQUEST,
});

export const fetchSongsSuccess = (payload: FetchSongsSuccessPayload): FetchSongsSuccess => ({
  type: FETCH_SONGS_SUCCESS,
  payload,
});

export const fetchSongsFailure = (payload: FetchSongsFailurePayload): FetchSongsFailure => ({
  type: FETCH_SONGS_FAILURE,
  payload,
});
