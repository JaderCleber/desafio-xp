import React from 'react'
import PropTypes from 'prop-types'
import styles from './style'

const Input = ({ onClick, defaultValue }) => (
    <input
        type="string"
        placeholder="Buscar"
        onClick={onClick}
    />
)

Input.propTypes = {
    onClick: PropTypes.func,
    defaultValue: PropTypes.string,
}

export default Input
