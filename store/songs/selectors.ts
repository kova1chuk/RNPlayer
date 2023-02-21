import { createSelector } from 'reselect';

import { AppState } from '../rootReducer';

const getPending = (state: AppState) => state.songs.pending;

const getTodos = (state: AppState) => state.songs.songs;

const getError = (state: AppState) => state.songs.error;

export const getTodosSelector = createSelector(getTodos, (songs) => songs);

export const getPendingSelector = createSelector(getPending, (pending) => pending);

export const getErrorSelector = createSelector(getError, (error) => error);
