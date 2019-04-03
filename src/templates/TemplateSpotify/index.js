import React from 'react'
import PropTypes from 'prop-types'

const TemplateSpotify = ({
  children, ...props
}) => {
  return (
    <div className="row" {...props}>
      <div className="sidebar">
        <a href='http://localhost:8888/login'>ICON</a>
      </div>
      <div className="col">{children}</div>
    </div>
  )
}

TemplateSpotify.propTypes = {
  children: PropTypes.any.isRequired,
}

export default TemplateSpotify
