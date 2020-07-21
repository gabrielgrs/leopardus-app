import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: all 0.5s;
  }

  h1 {
    font-size: 3em;
  }

  h2 {
    font-size: 2em;
  }

  h3 {
    font-size: 1.5em;
  }

  h1, h2, h3 {
    font-weight: 400;
    padding-bottom: 40px;
  }

  html {
    overflow-x: hidden;
    scroll-behavior: smooth;
    background: ${({ theme }) => theme.colors.whiteLight};
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  a {
    color: ${({ theme }) => theme.colors.whiteLight};
    text-decoration: none;
  }


  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #fafafa;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: silver;
    border-radius: 100px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`

export default GlobalStyles
