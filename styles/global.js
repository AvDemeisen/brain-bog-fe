import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

export const GlobalStyle = createGlobalStyle`
${normalize}

@font-face {
  font-family: geo;
  src: url("/geo.ttf");
  display: auto;
}

body {
  max-width: 900px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.main};
  font-family: geo;
}

a {
  color: inherit;
  text-decoration: none;
}

h1, h2, h3, span, p {
  margin: 0;
  letter-spacing: 1px;
}

* {
  box-sizing: border-box;
}
`