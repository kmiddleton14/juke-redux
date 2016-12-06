import React from 'react';
import store from '../store';
import Lyrics from '../components/Lyrics'
import setLyrics from '../action-creators/lyrics'
import axios from 'axios'

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
    axios.get(`/api/lyrics/${this.state.artistQuery}/${this.state.songQuery}`)
    .then(res => res.data)
    .then(lyrics => {
      store.dispatch(setLyrics(lyrics.lyric))
    
    })
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
