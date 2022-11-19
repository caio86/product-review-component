import { createGlobalStyle } from 'styled-components'

export const CSSReset = createGlobalStyle`
  /* Reset */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: ${({ theme }) => theme.text.fontFamily[0]};
    background-color: ${({ theme }) => theme.colors.cream};
    color: ${({ theme }) => theme.colors.veryDarkBlue};
    display: flex;
    font-weight: ${({ theme }) => theme.text.fontWeight[0]};
    font-size: ${({ theme }) => theme.text.fontSize};
  }
  /* NextJS */
  html {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }
  body {
    display: flex;
    flex: 1;
  }
  #__next {
    display: flex;
    flex: 1;
  }
`
