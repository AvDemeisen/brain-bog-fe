import React, { useState } from 'react'
import Modal from '../modal/component'
import Button from '../button/component'
import { FooterElement } from './component.styles'

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleModal = () => setIsOpen(!isOpen)
  
  return (
    <FooterElement>
      <Button method={toggleModal} label={"add thought"} />
        <Modal isOpen={isOpen} onClose={toggleModal} />
    </FooterElement>
  )
}

export default Footer