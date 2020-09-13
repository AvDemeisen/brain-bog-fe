import styled from 'styled-components'

export const ButtonElement = styled.button`
    color: ${props => props.theme.main};
    background-color: ${props => props.theme.background};
    border: 1px solid ${props => props.theme.main};
    transition: all 300ms ease;

    &:hover {
        color: ${props => props.theme.background};
        background-color: ${props => props.theme.main};
        border: 1px solid ${props => props.theme.main};
    }
` 