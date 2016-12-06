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
    }, store.lyrics.getState());

    this.setArtist = this.setArtist.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setSong = this.setSong.bind(this);
  }

  handleSubmit () {
    store.lyrics.dispatch(fetchLyrics(this.state.artistQuery, this.state.songQuery));
  }

  setArtist(artist) {
    this.setState({ artistQuery: artist })
  }

  setSong(song) {
    this.setState({ songQuery: song })
  }

  componentDidMount () {
    this.unsubscribe = store.lyrics.subscribe(() => {
      this.setState(store.lyrics.getState());
    })
  }

  componentWillUnmount () {
    this.unsubscribe();
  }

  render () {
    return (
      <Lyrics 
      text={this.state.lyric}
      artistQuery={this.state.artistQuery}
      songQuery={this.state.songQuery}
      setSong={this.setSong}
      setArtist={this.setArtist}
      submit={this.handleSubmit}
      />
    );
  }
}

export default LyricsContainer;
