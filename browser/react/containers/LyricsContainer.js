import React from 'react';
import store from '../store';
import Lyrics from '../components/Lyrics'

class LyricsContainer extends React.Component {

  constructor (props) {
    super(props);
    this.state = store.getState();
    this.setArtist = this.setArtist.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setSong = this.setSong.bind(this);
  }

  handleSubmit () {
    return;
  }

  setArtist() {
    return;
  }

  setSong() {
    return;
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
      text={this.state.text}
      artistQuery={this.state.text}
      songQuery={this.state.text}
      setSong={this.setSong}
      setArtist={this.setArtist}
      submit={this.handleSubmit}
      />
    );
  }
}

export default LyricsContainer;
