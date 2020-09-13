import styled from 'styled-components'
import { gutterSizes } from '../../styles/variables'

export const Container = styled.div`
  display: grid;
  grid-template-rows: 60px auto 60px;
  height: 100vh;
`

export const Main = styled.main`
  padding: ${gutterSizes['guttersm']};
  overflow-y: scroll;
`