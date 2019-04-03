import React from 'react'
import PropTypes from 'prop-types'
import { Card } from '../../molecules'

const List = ({ cards, ...props }) => {
  const list = cards.map(card => (
    <Card className="col" key={card.id} album={card.album} artist={card.artist} image={card.image} {...props} />
  ));
  return (<div className="row">
    {list}
  </div>)
}

List.PropTypes = {
  cards: PropTypes.array
}

export default List
