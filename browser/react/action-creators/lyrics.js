import {SET_LYRICS} from '../constants';

const setLyrics = function (text) {
  return {
    type: SET_LYRICS,
    lyric: text
  };
};

export default setLyrics;