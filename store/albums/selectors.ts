import { AppState } from '../rootReducer';

export const getAlbums = (state: AppState) => state.albums.data;
export const getAlbumsLoading = (state: AppState) => state.albums.loading;
export const getAlbumsError = (state: AppState) => state.albums.error;
export const getCurrentPage = (state: AppState) => state.albums.currentPage;
