import React from 'react'
import './Button.css'

function Button(props) {
  const { variant = 'primary', size = 'medium', children, ...rest } = props
  return (
    <button className={`button ${variant} ${size}`} {...rest}>
      {children}
    </button>
  ) 
}

export default Button
