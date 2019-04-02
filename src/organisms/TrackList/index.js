import React from 'react'
import PropTypes from 'prop-types'
import { Label } from '../../atoms'

const List = ({ tracks, ...props }) => {
  const list = tracks.map((track, index) => (
    <div key={track.id}>
      <Label>{index}.</Label>
      <Label>{track.name}</Label>
      <Label>{track.duration}</Label>
    </div>
  ));
  <div {...props}>
    {list}
  </div>
}

List.PropTypes = {
  tracks: PropTypes.array
}

export default List
