import { Reducer } from 'redux';
import { AlbumsActionTypes } from './actionTypes';
import { AlbumState, initialAlbumState, AlbumsAction } from './types';

const albumsReducer: Reducer<AlbumState, AlbumsAction> = (state = initialAlbumState, action) => {
  switch (action.type) {
    case AlbumsActionTypes.GET_ALBUMS_REQUEST: {
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    }
    case AlbumsActionTypes.GET_ALBUMS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        data: action.payload.albums,
      };
    }
    case AlbumsActionTypes.GET_ALBUMS_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };
    }
    case AlbumsActionTypes.REMOVE_ALBUMS: {
      const newList = state.data.filter((album) => !action.payload.ids.includes(album.id));

      return {
        ...state,
        data: newList,
      };
    }
    default:
      return state;
  }
};

export default albumsReducer;
