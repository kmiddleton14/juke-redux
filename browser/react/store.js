import { createStore, applyMiddleware, combineReducers } from 'redux';
import lyricsReducer from './reducers/lyrics-reducer';
import playerReducer from './reducers/player-reducer';
import albumsReducer from './reducers/albums-reducer';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

export default createStore(
	combineReducers({
	  lyrics: lyricsReducer,
	  player: playerReducer,
	  albums: albumsReducer
	}), 
	applyMiddleware(createLogger({collapsed: true}), thunkMiddleware)
);