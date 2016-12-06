import { START_PLAYING, STOP_PLAYING, SET_CURRENT_SONG, SET_LIST } from '../constants';
import axios from 'axios'
import AUDIO from '../audio';

const startPlaying = function () {
  return {
    type: START_PLAYING,
  };
};

// const startPlaying = function () {
//   return {
//     type: START_PLAYING,
//   };
// };

const play = function () {
  return function (dispatch, getState) {
    AUDIO.play();
    dispatch(startPlaying());
  };
};



export { startPlaying, play };