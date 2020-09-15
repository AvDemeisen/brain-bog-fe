import React from 'react';
import Button from '../button/component'
import Form from '../form/component'
import { ModalElement, ModalInner } from './component.styles'

const Modal = ({isOpen, onClose}) => {
    return (
        <>
        {isOpen ? <ModalElement>
            <ModalInner>
            <Button method={onClose} label={"close"}></Button>
            <Form />
            </ModalInner>
        </ModalElement> : null}
        </>
    )
}


export default Modal