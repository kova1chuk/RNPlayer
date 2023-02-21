import { TrackEntity } from '../../types/track';
import { TracksActionTypes } from './actionTypes';

export interface TrackState {
  loading: boolean;
  data: TrackEntity[];
  error: string | null;
}

export const initialTrackState: TrackState = {
  loading: false,
  data: (() => {
    const mockTracks: TrackEntity[] = [];

    for (let i = 1; i <= 30; i++) {
      const track: TrackEntity = {
        id: `track${i}`,
        title: `Track ${i}`,
        artist: `Artist ${i}`,
        album: `Album ${Math.ceil(i / 3)}`,
        duration: 300,
        releaseYear: 2000 + Math.floor(Math.random() * 21),
        genre: 'Pop',
      };

      mockTracks.push(track);
    }

    return mockTracks;
  })(),
  error: null,
};

interface GetTracksRequestAction {
  type: TracksActionTypes.GET_TRACKS_REQUEST;
  payload: {
    title: string;
    artist: string;
    album: string;
    releaseYear: number;
    genre: string;
  };
}

interface GetTracksSuccessAction {
  type: TracksActionTypes.GET_TRACKS_SUCCESS;
  payload: {
    tracks: TrackEntity[];
  };
}

interface GetTracksFailureAction {
  type: TracksActionTypes.GET_TRACKS_FAILURE;
  payload: {
    error: string;
  };
}

interface RemoveTracksAction {
  type: TracksActionTypes.REMOVE_TRACKS;
  payload: {
    ids: string[];
  };
}

export type TracksAction =
  | GetTracksRequestAction
  | GetTracksSuccessAction
  | GetTracksFailureAction
  | RemoveTracksAction;
