import 'rc-slider/assets/index.css'
import Head from 'next/head'
import GlobalStyles from 'styles/global'
import { AuthProvider } from 'hooks/useAuth'
import { ThemeProvider } from 'styled-components'
import { Navbar } from 'components'
import * as theme from 'styles/theme'

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
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <Navbar />
          <GlobalStyles theme={theme} />
          <Component {...pageProps} />
        </ThemeProvider>
      </AuthProvider>
    </>
  )
}

export default App
