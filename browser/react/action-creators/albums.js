import { RECEIVE_ALBUMS, RECEIVE_ALBUM} from '../constants';
import axios from 'axios'
import { convertAlbum, convertAlbums, convertSong, skip } from '../utils';




const setAlbums = function (albums) {
  return {
    type: RECEIVE_ALBUMS,
    albums: albums
  };
};

const fetchAlbums = function () {
  return function (dispatch, getState) {
    axios.get('/api/albums/')
      .then(res => {
        dispatch(setAlbums(convertAlbums(res.data)));
      });
  };
};


const setAlbum = function (album) {

  return {
    type: RECEIVE_ALBUM,
    selectedAlbum: album
  };
};

const fetchAlbum = function (albumId) {
  return function (dispatch, getState) {
    axios.get(`/api/albums/${albumId}`)
      .then(res => {
        dispatch(setAlbum(convertAlbum(res.data)));
      });
  };
};



export { fetchAlbums, fetchAlbum };

// const startPlaying = function () {
//   return {
// 	type: START_PLAYING,
//   };
// };

// const stopPlaying = function () {
//   return {
// 	type: STOP_PLAYING,
//   };
// };

// const play = function () {
//   return function (dispatch, getState) {
// 	AUDIO.play();
// 	dispatch(startPlaying());
//   };
// };

// const pause = function () {
//   return function (dispatch, getState) {
// 	AUDIO.pause();
// 	dispatch(stopPlaying());
//   };
// };
