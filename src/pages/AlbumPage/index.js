import React from 'react'
import { connect } from 'react-redux'
import { actions } from '../../store/actions'

import { Card } from '../../molecules'
import { TrackList } from '../../organisms'

const mapStateToProps = (state) => ({
  tracks: state.tracks,
  album: state.album
})

const AlbumPage = ({ album, tracks, dispatch }) => {
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
    <Card />
    <TrackList tracks />
  </div>)
}

export default connect(mapStateToProps)(AlbumPage)