import { AppState } from '../rootReducer';

export const getTracks = (state: AppState) => state.tracks.data;
export const getTracksLoading = (state: AppState) => state.tracks.loading;
export const getTracksError = (state: AppState) => state.tracks.error;
