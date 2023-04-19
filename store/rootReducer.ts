import { combineReducers } from 'redux';
import albumsReducer from './albums/reducer';
import tracksReducer from './tracks/reducer';
import albumViewReducer from './albumView/reducer';

const rootReducer = combineReducers({
  albums: albumsReducer,
  tracks: tracksReducer,
  albumView: albumViewReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
