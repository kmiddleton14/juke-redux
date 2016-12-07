import { RECEIVE_ARTISTS, RECEIVE_ARTIST} from '../constants'


const initialState = {
	artists: [],
	selectedArtist: {}
};


export default function(state = initialState, action){

	let newState;

	switch(action.type){

		case RECEIVE_ARTISTS:
		newState = Object.assign({}, state);
		newState.artists = action.artists;
		break;

		case RECEIVE_ARTIST:
		newState = Object.assign({}, state);
		newState.selectedArtist = action.selectedArtist;
		break;


		default:
			return state
	}

	return newState;

}