import styled from 'styled-components'
import { gutterSizes } from '../../styles/variables'

export const HeaderElement = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${gutterSizes['guttersm']};
    height: 60px;
    width: 100%;
    background-color: ${props => props.theme.background};
`

export const Logo = styled.h1`
    margin: 0;
    color: ${props => props.theme.main};
    text-transform: uppercase;
`