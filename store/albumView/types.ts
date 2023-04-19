import { TrackEntity } from '@app/types/track';
import { AlbumViewActionTypes } from './actionTypes';
import { AlbumEntity } from '@app/types/album';

export interface AlbumViewEntity {
  id: string;
  albumName: string;
  artist: string;
  releaseYear: number;
  tracks: TrackEntity[];
}

export interface AlbumViewState {
  loading: boolean;
  data: AlbumViewEntity;
  error: string | null;
}

export const initialAlbumViewState: AlbumViewState = {
  loading: false,
  data: (() => {
    const tracks: TrackEntity[] = [];

    for (let j = 1; j <= 5; j++) {
      const track: TrackEntity = {
        id: `album-track${j}`,
        title: `Track ${j}`,
        artist: 'Artist',
        album: 'Album',
        duration: 300,
        releaseYear: 2000 + Math.floor(Math.random() * 21),
        genre: 'Pop',
      };

      tracks.push(track);
    }
    tracks.unshift({
      id: 'album-track custom',
      title: 'Track custom',
      artist: 'Artist',
      album: 'Album',
      duration: 300,
      releaseYear: 2000 + Math.floor(Math.random() * 21),
      genre: 'Pop',
    });

    const mockAlbumView: AlbumViewEntity = {
      id: 'album',
      albumName: 'Album',
      artist: 'Artist',
      releaseYear: 2000 + Math.floor(Math.random() * 21),
      tracks,
    };

    return mockAlbumView;
  })(),
  error: null,
};

interface GetAlbumRequestAction {
  type: AlbumViewActionTypes.GET_ALBUM_VIEW_REQUEST;
  payload: {
    albumId: string;
  };
}

interface GetAlbumSuccessAction {
  type: AlbumViewActionTypes.GET_ALBUM_VIEW_SUCCESS;
  payload: {
    album: AlbumEntity;
  };
}

interface GetAlbumFailureAction {
  type: AlbumViewActionTypes.GET_ALBUM_VIEW_FAILURE;
  payload: {
    error: string;
  };
}

interface UpdateAlbumAction {
  type: AlbumViewActionTypes.UPDATE_ALBUM_VIEW;
  payload: {
    albumName: string;
  };
}

export type AlbumViewAction =
  | GetAlbumRequestAction
  | GetAlbumSuccessAction
  | GetAlbumFailureAction
  | UpdateAlbumAction;
