import React from 'react'
import  Link from 'next/link'
import { FooterElement, Button, LinkElem} from './component.styles'

const Footer = () => (
  <FooterElement>
    <Link href="/add"><LinkElem>+</LinkElem></Link>
  </FooterElement>
)

export default Footer