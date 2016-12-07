import { RECEIVE_ARTISTS, RECEIVE_ARTIST} from '../constants';
import axios from 'axios'
import { convertAlbum, convertAlbums, convertSong, skip } from '../utils';




const setArtists = function (artists) {
  return {
    type: RECEIVE_ARTISTS,
    artists: artists
  };
};

const fetchArtists = function () {
  return function (dispatch, getState) {
    axios.get('/api/artists/')
      .then(res => {
        dispatch(setArtists(res.data));
      });
  };
};


const setArtist = function (artist) {

  return {
    type: RECEIVE_ARTIST,
    selectedArtist: artist
  };
};

const fetchArtist = function (artistId) {
  return function (dispatch, getState) {
      Promise
        .all([
          axios.get(`/api/artists/${artistId}`),
          axios.get(`/api/artists/${artistId}/albums`),
          axios.get(`/api/artists/${artistId}/songs`)
        ])
        .then(res => res.map(r => r.data))
        .then(data => this.onLoadArtist(...data));
    }
};

function onLoadArtist (artist, albums, songs) {
  songs = songs.map(convertSong);
  albums = convertAlbums(albums);
  artist.albums = albums;
  artist.songs = songs;
}

const selectedArtist(artistId){



}


export { fetchArtists, fetchArtist };

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
