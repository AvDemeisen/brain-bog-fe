import React from 'react'
import { ButtonElement } from './component.styles'

const Button = ({ type, label, method }) => (
  <ButtonElement type={type} onClick={method} >
      {label}
  </ButtonElement>
)

export default Button