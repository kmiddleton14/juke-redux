import { START_PLAYING, STOP_PLAYING, SET_CURRENT_SONG, SET_LIST } from '../constants';
import axios from 'axios'
import AUDIO from '../audio';

const startPlaying = function () {
  return {
	type: START_PLAYING,
  };
};

const stopPlaying = function () {
  return {
	type: STOP_PLAYING,
  };
};

const play = function () {
  return function (dispatch, getState) {
	AUDIO.play();
	dispatch(startPlaying());
  };
};

const pause = function () {
  return function (dispatch, getState) {
	AUDIO.pause();
	dispatch(stopPlaying());
  };
};

const load = function(currentSong, currentSongList) {
	return function(dispatch, getState){
		AUDIO.src = currentSong.audioUrl;
		AUDIO.load();
		dispatch(setCurrentSong(currentSong))
		dispatch(setCurrentSongList(currentSongList))
	}
}

const setCurrentSong = function(currentSong){
	return{
		type: SET_CURRENT_SONG,
		currentSong: currentSong
	}
}

const setCurrentSongList = function(currentSongList){
	return{
		type: SET_LIST,
		currentSongList: currentSongList
	}
}


const startSong = function(song, list){
	return function(dispatch, getState){
		dispatch(pause());
		dispatch(load(song,list));
		dispatch(play());
	}
}

const toggle = function(){
	return function(dispatch, getState){
		const { isPlaying } = getState();
		if(isPlaying) dispatch(pause());
		else dispatch(play())
	}
}


const toggleOne = function(selectedSong, selectedSongList) {
	return function(dispatch, getState){
		const { currentSong } = getState();
		if(selectedSong.id !== currentSong.id){
			dispatch(startSong(selectedSong, selectedSongList))
		}else{
			dispatch(toggle())
		}

	}
}

const next = function(){
	return function(dispatch, getState){
		dispatch(startSong(...skip(1, getState())));
	}
}

const prev = function(){
	return function(dispatch, getState){
		dispatch(startSong(...skip(-1, getState())));
	}
}



export { play, pause, load, toggleOne, toggle, startSong, next, prev };