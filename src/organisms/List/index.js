import React from 'react'
import PropTypes from 'prop-types'
import { Card } from '../../molecules'

// const Grid = styled.div`
//   display: flex;
//   flex-flow: row wrap;
//   > * {
//     width: calc(50% - 2rem);
//     @media screen and (max-width: 640px) {
//       width: 100%;
//     }
//   }
// `

// const StyledHeading = styled(Heading)`
//   text-align: center;
// `

// const Description = styled(Paragraph)`
//   text-align: center;
//   margin: 2rem;
//   @media screen and (max-width: 640px) {
//     margin: 1rem;
//   }
// `

// const StyledFeature = styled(Feature)`
//   margin: 1rem;
//   @media screen and (max-width: 640px) {
//     margin: 0;
//   }
// `

const List = ({ cards, ...props }) => {
  const list = cards.map(card => (
    <Card key={card.id} album={card.album} artist={card.artist} image={card.image} />
  ));
  <div>
    {list}
  </div>
}

List.PropTypes = {
  cards: PropTypes.array
}

export default List
