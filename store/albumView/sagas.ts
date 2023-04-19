import { AlbumViewActionTypes } from './actionTypes';
import { AlbumViewAction } from './types';
import { AlbumEntity } from '@app/types/album';

export const getAlbumRequest = (albumId: string): AlbumViewAction => {
  return {
    type: AlbumViewActionTypes.GET_ALBUM_VIEW_REQUEST,
    payload: {
      albumId,
    },
  };
};

export const getAlbumSuccess = (album: AlbumEntity): AlbumViewAction => {
  return {
    type: AlbumViewActionTypes.GET_ALBUM_VIEW_SUCCESS,
    payload: {
      album,
    },
  };
};

export const getAlbumFailure = (error: string): AlbumViewAction => {
  return {
    type: AlbumViewActionTypes.GET_ALBUM_VIEW_FAILURE,
    payload: {
      error,
    },
  };
};

export const updateAlbum = (albumName: string): AlbumViewAction => {
  return {
    type: AlbumViewActionTypes.UPDATE_ALBUM_VIEW,
    payload: {
      albumName,
    },
  };
};
