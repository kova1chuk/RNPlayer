import { AppState } from '../rootReducer';

export const getAlbumView = (state: AppState) => state.albumView;
export const getAlbumViewLoading = (state: AppState) => state.albumView.loading;
export const getAlbumViewError = (state: AppState) => state.albumView.error;
