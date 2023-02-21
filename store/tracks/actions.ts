import { TrackEntity } from '@app/types/track';
import { TracksActionTypes } from './actionTypes';
import { TracksAction } from './types';

export const getTracksRequest = (
  title: string,
  artist: string,
  album: string,
  genre: string,
  releaseYear: number,
): TracksAction => {
  return {
    type: TracksActionTypes.GET_TRACKS_REQUEST,
    payload: {
      title,
      artist,
      album,
      releaseYear,
      genre,
    },
  };
};

export const getTracksSuccess = (tracks: TrackEntity[], totalPages: number): TracksAction => {
  return {
    type: TracksActionTypes.GET_TRACKS_SUCCESS,
    payload: {
      tracks,
    },
  };
};

export const getTracksFailure = (error: string): TracksAction => {
  return {
    type: TracksActionTypes.GET_TRACKS_FAILURE,
    payload: {
      error,
    },
  };
};

export const getRemoveTracks = (trackIds: string[]): TracksAction => {
  return {
    type: TracksActionTypes.REMOVE_TRACKS,
    payload: {
      ids: trackIds,
    },
  };
};
