import { AlbumEntity } from '@app/types/album';
import { AlbumsActionTypes } from './actionTypes';
import { AlbumsAction } from './types';

export const getAlbumsRequest = (
  title: string,
  artist: string,
  releaseYear: number,
  genre: string,
  currentPage: number,
): AlbumsAction => {
  return {
    type: AlbumsActionTypes.GET_ALBUMS_REQUEST,
    payload: {
      title,
      artist,
      releaseYear,
      genre,
      currentPage,
    },
  };
};

export const getAlbumsSuccess = (albums: AlbumEntity[], totalPages: number): AlbumsAction => {
  return {
    type: AlbumsActionTypes.GET_ALBUMS_SUCCESS,
    payload: {
      albums,
      totalPages,
    },
  };
};

export const getAlbumsFailure = (error: string): AlbumsAction => {
  return {
    type: AlbumsActionTypes.GET_ALBUMS_FAILURE,
    payload: {
      error,
    },
  };
};

export const getRemoveAlbums = (albumIds: string[]): AlbumsAction => {
  return {
    type: AlbumsActionTypes.REMOVE_ALBUMS,
    payload: {
      ids: albumIds,
    },
  };
};
