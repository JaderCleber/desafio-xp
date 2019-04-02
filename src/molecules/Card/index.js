import React from 'react'
import PropTypes from 'prop-types'

import { Label, Image } from '../../atoms'

const Card = ({
  album, artist, image
}) => {
  return (
    <div>
      <Image src={image} />
      <Label>{album}</Label>
      <Label>{artist}</Label>
    </div>
  )
}

Card.propTypes = {
  album: PropTypes.string,
  artist: PropTypes.string,
  image: PropTypes.string,
}

export default Card
