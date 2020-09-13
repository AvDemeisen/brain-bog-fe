import styled from 'styled-components'
import { gutterSizes } from '../../styles/variables'
import { BaseButton } from '../../styles/mixins'

export const FooterElement = styled.footer`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${gutterSizes['guttersm']};
    height: 60px;
    width: 100%;
    background-color: ${props => props.theme.background};
`
export const Button = styled.button `
    ${BaseButton}
` 

export const LinkElem = styled.a`
    font-size: 24px;
`