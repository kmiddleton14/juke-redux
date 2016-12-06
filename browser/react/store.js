import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers/root-reducer';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

export default createStore(
	reducer, 
	applyMiddleware(createLogger({collapsed: true}), thunkMiddleware)
);