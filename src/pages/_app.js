import Head from 'next/head'

import GlobalStyles from 'styles/global'
import { ThemeProvider } from 'styled-components'
import { Navbar } from 'components'
import * as theme from 'styles/theme'
import 'rc-slider/assets/index.css'

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Leopardus</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="Leopardus Application" />
      </Head>
      <ThemeProvider theme={theme}>
        <Navbar />
        <GlobalStyles theme={theme} />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default App
