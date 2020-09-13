import React from 'react'
import { HeaderElement, Logo } from './component.styles'

const Header = ({title}) => <HeaderElement>
    <Logo>{title}</Logo>
</HeaderElement>

export default Header