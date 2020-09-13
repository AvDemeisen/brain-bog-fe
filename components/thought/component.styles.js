import styled from 'styled-components'
import { BaseButton } from '../../styles/mixins'

export const Container = styled.section`
    display: grid;
    grid-template-columns: minmax(60%, 40%) 1fr;
    gap: 5px;
    padding: 10px;
    width: 100%;
    border: 1px solid ${props => props.theme.main};
    background:  ${props => props.theme.hightlight};
`

export const Main = styled.main``

export const Aside = styled.aside``

export const Tags = styled.ul`
    display: grid;
    grid-template-rows: repeat(${props => props.rows}, 1fr);
    grid-gap: 5px;
    padding: 0;
    margin: 0;
`

export const Tag = styled.li`
    list-style: none;
    margin: 0;
`



export const Title = styled.h2`
    margin: 0;
`

export const Button = styled.button`
    ${BaseButton}
    width: 100%;
`