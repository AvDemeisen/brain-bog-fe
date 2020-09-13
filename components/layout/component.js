import React from 'react'
import { ThemeProvider } from 'styled-components'
import Header from '../header/component'
import Footer from '../footer/component'
import { Container, Main } from './component.styles'
import { GlobalStyle, theme } from '../../styles/index'

const Layout = ({children, title }) => (
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Container>
            <Header title={title} />
            <Main>{children}</Main>
            <Footer />
        </Container>
    </ThemeProvider>
  )
  
  export default Layout