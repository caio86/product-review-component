import { ThemeProvider } from 'styled-components'
import { CSSReset } from '../src/components/CSSReset'
import './_app.css'

const theme = {
  colors: {
    darkCyan: 'hsl(158, 36%, 37%)',
    cream: 'hsl(30, 38%, 92%)',
    veryDarkBlue: "hsl(212, 21%, 14%)",
    darkGrayishBlue: "hsl(228, 12%, 48%)",
    white: "hsl(0, 0%, 100%)"
  },
  text: {
    fontSize: '14px',
    fontWeight: [500, 700],
    fontFamily: ['Montserrat', 'Fraunces']
  }
}

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
