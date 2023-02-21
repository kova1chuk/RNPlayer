import { AlbumEntity } from '../../types/album';
import { AlbumsActionTypes } from './actionTypes';

export interface AlbumState {
  loading: boolean;
  data: AlbumEntity[];
  error: string | null;
  currentPage: number;
  totalPages: number;
}
export const initialAlbumState: AlbumState = {
  loading: false,
  data: (() => {
    const mockAlbums: AlbumEntity[] = [];

    for (let i = 1; i <= 20; i++) {
      const album: AlbumEntity = {
        id: `album${i}`,
        title: `Album ${i}`,
        artist: `Artist ${i}`,
        releaseYear: 2000 + i,
        genre: 'Pop',
        tracks: [`Track ${i}-1`, `Track ${i}-2`, `Track ${i}-3`],
      };

      mockAlbums.push(album);
    }

    return mockAlbums;
  })(),
  // data: [
  //   {
  //     id: 'album1',
  //     title: 'Album 1',
  //     artist: 'Artist 1',
  //     releaseYear: 2000,
  //     genre: 'Pop',
  //     tracks: ['Track 1-1', 'Track 1-2', 'Track 1-3'],
  //   },
  //   {
  //     id: 'album2',
  //     title: 'Album 2',
  //     artist: 'Artist 2',
  //     releaseYear: 2001,
  //     genre: 'Rock',
  //     tracks: ['Track 2-1', 'Track 2-2', 'Track 2-3'],
  //   },
  //   {
  //     id: 'album3',
  //     title: 'Album 3',
  //     artist: 'Artist 3',
  //     releaseYear: 2002,
  //     genre: 'Pop',
  //     tracks: ['Track 3-1', 'Track 3-2', 'Track 3-3'],
  //   },
  //   {
  //     id: 'album4',
  //     title: 'Album 4',
  //     artist: 'Artist 4',
  //     releaseYear: 2003,
  //     genre: 'Electronic',
  //     tracks: ['Track 4-1', 'Track 4-2', 'Track 4-3'],
  //   },
  //   {
  //     id: 'album5',
  //     title: 'Album 5',
  //     artist: 'Artist 5',
  //     releaseYear: 2004,
  //     genre: 'Hip Hop',
  //     tracks: ['Track 5-1', 'Track 5-2', 'Track 5-3'],
  //   },
  //   {
  //     id: 'album6',
  //     title: 'Album 6',
  //     artist: 'Artist 6',
  //     releaseYear: 2005,
  //     genre: 'Pop',
  //     tracks: ['Track 6-1', 'Track 6-2', 'Track 6-3'],
  //   },
  //   {
  //     id: 'album7',
  //     title: 'Album 7',
  //     artist: 'Artist 7',
  //     releaseYear: 2006,
  //     genre: 'Rock',
  //     tracks: ['Track 7-1', 'Track 7-2', 'Track 7-3'],
  //   },
  //   {
  //     id: 'album8',
  //     title: 'Album 8',
  //     artist: 'Artist 8',
  //     releaseYear: 2007,
  //     genre: 'Pop',
  //     tracks: ['Track 8-1', 'Track 8-2', 'Track 8-3'],
  //   },
  //   {
  //     id: 'album9',
  //     title: 'Album 9',
  //     artist: 'Artist 9',
  //     releaseYear: 2008,
  //     genre: 'Electronic',
  //     tracks: ['Track 9-1', 'Track 9-2', 'Track 9-3'],
  //   },
  //   {
  //     id: 'album10',
  //     title: 'Album 10',
  //     artist: 'Artist 10',
  //     releaseYear: 2009,
  //     genre: 'Pop',
  //     tracks: ['Track 10-1', 'Track 10-2', 'Track 10-3'],
  //   },
  // ],
  error: null,
  currentPage: 1,
  totalPages: 1,
};

interface GetAlbumsRequestAction {
  type: AlbumsActionTypes.GET_ALBUMS_REQUEST;
  payload: {
    title: string;
    artist: string;
    releaseYear: number;
    genre: string;
    currentPage: number;
  };
}

interface GetAlbumsSuccessAction {
  type: AlbumsActionTypes.GET_ALBUMS_SUCCESS;
  payload: {
    albums: AlbumEntity[];
    totalPages: number;
  };
}

interface GetAlbumsFailureAction {
  type: AlbumsActionTypes.GET_ALBUMS_FAILURE;
  payload: {
    error: string;
  };
}

interface GetRemoveAlbumsAction {
  type: AlbumsActionTypes.REMOVE_ALBUMS;
  payload: {
    ids: string[];
  };
}

export type AlbumsAction =
  | GetAlbumsRequestAction
  | GetAlbumsSuccessAction
  | GetAlbumsFailureAction
  | GetRemoveAlbumsAction;
