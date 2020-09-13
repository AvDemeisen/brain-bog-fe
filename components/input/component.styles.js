import styled from 'styled-components'

export const InputElement = styled.input`
    padding: 5px;
    width: 100%;
    background: transparent;
    background-color: ${props => props.theme.highlight};
    border: none;
    border-bottom: 1px solid ${props => props.theme.main};
`