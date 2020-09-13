import React from 'react'
import { ButtonElement } from './component.styles'

const Button = ({ type, label }) => (
  <ButtonElement type={type}>
      {label}
  </ButtonElement>
)

export default Button