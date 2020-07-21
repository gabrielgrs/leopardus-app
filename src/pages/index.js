import {
  Header,
  About,
  Services,
  Team,
  Calculator,
  Contact
} from 'components/Landing'
import { Footer } from 'components'

function Home() {
  return (
    <>
      <Header />
      <About />
      <Services />
      <Team />
      <Calculator />
      <Contact />
      <Footer />
    </>
  )
}

export default Home
