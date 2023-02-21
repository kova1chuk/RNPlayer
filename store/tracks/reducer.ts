import { Reducer } from 'redux';
import { TracksActionTypes } from './actionTypes';
import { TrackState, initialTrackState, TracksAction } from './types';

const tracksReducer: Reducer<TrackState, TracksAction> = (state = initialTrackState, action) => {
  switch (action.type) {
    case TracksActionTypes.GET_TRACKS_REQUEST: {
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    }
    case TracksActionTypes.GET_TRACKS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        data: action.payload.tracks,
      };
    }
    case TracksActionTypes.GET_TRACKS_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };
    }
    case TracksActionTypes.REMOVE_TRACKS: {
      const newList = state.data.filter((track) => !action.payload.ids.includes(track.id));

      return {
        ...state,
        data: newList,
      };
    }
    default:
      return state;
  }
};

export default tracksReducer;
