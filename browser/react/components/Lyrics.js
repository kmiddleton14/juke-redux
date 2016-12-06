import React from 'react';
import { Link } from 'react-router';

const Lyrics = (props) => {

  const artistChange = e => {
    props.setArtist(e.target.value);
  }

  const songChange = e => {
    props.setSong(e.target.value);
  }

  return (
    <div id='lyrics'>
      <div>
        <form className='form-group' style={{marginTop: '20px'}} onSubmit={props.handleSubmit}>
          <input
            type='text'
            onChange={artistChange}
            value={props.artistQuery}
            className='form-control'
            placeholder="Enter artist name"
          />
          <hr/>
          <input
            type='text'
            onChange={songChange}
            value={props.songQuery}
            className='form-control'
            placeholder="Enter song name"
          />
          <hr/>
          <button type="submit" onClick={props.handleSubmit} className="btn btn-success">Search</button>
        </form>
      </div>
      <div>
      {props.text && <pre>{props.text}</pre>}
      </div>
    </div>
  );
}

export default Lyrics;