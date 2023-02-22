import { combineReducers } from 'redux';
import albumsReducer from './albums/reducer';
import tracksReducer from './tracks/reducer';

const rootReducer = combineReducers({
  albums: albumsReducer,
  tracks: tracksReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
