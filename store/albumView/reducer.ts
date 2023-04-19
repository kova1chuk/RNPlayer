import { Reducer } from 'redux';
import { AlbumViewActionTypes } from './actionTypes';
import { AlbumViewState, initialAlbumViewState, AlbumViewAction } from './types';

const albumViewReducer: Reducer<AlbumViewState, AlbumViewAction> = (
  state = initialAlbumViewState,
  action,
) => {
  switch (action.type) {
    case AlbumViewActionTypes.GET_ALBUM_VIEW_REQUEST: {
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    }
    case AlbumViewActionTypes.GET_ALBUM_VIEW_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        albumName: action.payload.album,
      };
    }
    case AlbumViewActionTypes.GET_ALBUM_VIEW_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };
    }
    case AlbumViewActionTypes.UPDATE_ALBUM_VIEW: {
      return { ...state, albumName: action.payload.albumName };
    }
    default:
      return state;
  }
};

export default albumViewReducer;
