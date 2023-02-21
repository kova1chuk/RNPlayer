import { FETCH_SONGS_REQUEST, FETCH_SONGS_SUCCESS, FETCH_SONGS_FAILURE } from './actionTypes';

export interface ISong {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface SongsState {
  pending: boolean;
  songs: ISong[];
  error: string | null;
}

export interface FetchSongsSuccessPayload {
  songs: ISong[];
}

export interface FetchSongsFailurePayload {
  error: string;
}

export interface FetchSongsRequest {
  type: typeof FETCH_SONGS_REQUEST;
}

export type FetchSongsSuccess = {
  type: typeof FETCH_SONGS_SUCCESS;
  payload: FetchSongsSuccessPayload;
};

export type FetchSongsFailure = {
  type: typeof FETCH_SONGS_FAILURE;
  payload: FetchSongsFailurePayload;
};

export type SongsActions = FetchSongsRequest | FetchSongsSuccess | FetchSongsFailure;
