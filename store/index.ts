import logger from 'redux-logger';

import rootReducer from './rootReducer';
import { rootSaga } from './rootSaga';

import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  devTools: false,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware, logger),
});

sagaMiddleware.run(rootSaga);

export default store;
export type AppDispatch = typeof store.dispatch;
