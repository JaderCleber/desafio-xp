import React from 'react'
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import { actions } from '../../store/actions'

import { Card } from '../../molecules'
import { TrackList } from '../../organisms'
import TemplateSpotify from '../../templates/TemplateSpotify';

const mapStateToProps = (state) => ({
  tracks: state.tracks,
  album: state.album
})

const AlbumPage = ({ album, tracks, dispatch, match, history }) => {
  const onChange = (e) => {
    dispatch(actions.search(e.target.value))
    fetch('http://example.com/movies.json')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        dispatch(actions.getResults(data))
      });
  }

  return (<div>
    <TemplateSpotify>
      <Link to="/">Back</Link>
      <Card />
      <TrackList tracks={tracks} />
    </TemplateSpotify>
  </div>)
}

export default connect(mapStateToProps)(AlbumPage)