import { RECEIVE_ALBUMS, RECEIVE_ALBUM} from '../constants'


const initialState = {
	albums: [],
	selectedAlbum: {}
};


export default function(state = initialState, action){

	let newState;

	switch(action.type){

		case RECEIVE_ALBUMS:
		newState = Object.assign({}, state);
		newState.albums = action.albums;
		break;

		case RECEIVE_ALBUM:
		newState = Object.assign({}, state);
		newState.selectedAlbum = action.selectedAlbum;
		break;


		default:
			return state
	}

	return newState;

}