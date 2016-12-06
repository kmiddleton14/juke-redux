import {SET_LYRICS } from '../constants'

const initialState= {
	lyric: ''
};


export default function(state = initialState, action){

	let newState;

	switch(action.type){

		case SET_LYRICS:
		newState = Object.assign({}, state);
		newState.lyric = action.lyric;
		break;

		default:
			return state
	}

	return newState;

}