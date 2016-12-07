import React from 'react';
import Songs from '../components/Songs';

class Album extends React.Component {

  componentDidMount () {
    const selectAlbum = this.props.selectAlbum;
    const albumId = this.props.routeParams.albumId;

    selectAlbum(albumId);
  }

  render () {
    const album = this.props.selectedAlbum;

    return (
      <div className="album">
        <div>
          <h3>{ album.name }</h3>
          <img src={ album.imageUrl } className="img-thumbnail" />
        </div>
        <Songs
          songs={album.songs}
          toggleOne={this.props.toggleOne}
          {...this.props.player} />
      </div>
    );
  }
}

export default Album;
