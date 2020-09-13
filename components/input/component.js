import React from 'react'
import { InputElement } from './component.styles'

const Input = ({ type, change, name, label }) => (
    <InputElement
        type={type}
        name={name}
        placeholder={label}
        onChange={change}
        required
    />
)

export default Input