import React from 'react'
import PropTypes from 'prop-types'

import { Label, Input } from '../../atoms'

const Field = ({
  label, ...props
}) => {
  const { id } = props;
  return (
    <div>
      {label && <Label htmlFor={id}>{label}</Label>}
      <Input id={id} {...props} />
    </div>
  )
}

Field.propTypes = {
  label: PropTypes.string
}

export default Field
