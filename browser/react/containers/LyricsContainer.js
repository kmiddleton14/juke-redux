import React from 'react';
import store from '../store';
import Lyrics from '../components/Lyrics';
import { setLyrics, fetchLyrics } from '../action-creators/lyrics';

class LyricsContainer extends React.Component {

  constructor (props) {
    super(props);
    this.state = Object.assign({
      artistQuery: '',
      songQuery: ''
    }, store.getState());

    this.setArtist = this.setArtist.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setSong = this.setSong.bind(this);
  }

  handleSubmit () {
    store.dispatch(fetchLyrics(this.state.artistQuery, this.state.songQuery));
  }

  setArtist(artist) {
    this.setState({ artistQuery: artist })
  }

  setSong(song) {
    this.setState({ songQuery: song })
  }

  componentDidMount () {
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState());
    })
  }

  componentWillUnmount () {
    this.unsubscribe();
  }

  render () {
    return (
      <Lyrics 
      text={this.state.lyrics.lyric}
      artistQuery={this.state.lyrics.artistQuery}
      songQuery={this.state.lyrics.songQuery}
      setSong={this.setSong}
      setArtist={this.setArtist}
      submit={this.handleSubmit}
      />
    );
  }
}

export default LyricsContainer;
