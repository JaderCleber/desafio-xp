import React from 'react'
import PropTypes from 'prop-types'

const Image = (logo, ...props) => <img {...props} logo={logo} />

Image.PropTypes = {
  logo: PropTypes.string
}

// Image.defaultProps = {
//   logo: ''
// }
export default Image
