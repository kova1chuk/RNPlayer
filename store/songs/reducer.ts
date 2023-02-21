import { FETCH_SONGS_REQUEST, FETCH_SONGS_SUCCESS, FETCH_SONGS_FAILURE } from './actionTypes';

import { SongsActions, SongsState } from './types';

const initialState: SongsState = {
  pending: false,
  songs: [],
  error: null,
};

export default (state = initialState, action: SongsActions) => {
  switch (action.type) {
    case FETCH_SONGS_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case FETCH_SONGS_SUCCESS:
      return {
        ...state,
        pending: false,
        songs: action.payload.songs,
        error: null,
      };
    case FETCH_SONGS_FAILURE:
      return {
        ...state,
        pending: false,
        songs: [],
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};
