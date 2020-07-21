import styled from 'styled-components'

import Default from './default'
import Mobile from './mobile'

import useWindowSize from 'hooks/useWindowSize'

const Wrapper = styled.div`
  @media screen and (max-width: 700px) {
    margin-bottom: 0;
  }
`

function Navbar() {
  const { width } = useWindowSize()

  const isMobile = width < 720
  return <Wrapper>{isMobile ? <Mobile /> : <Default />}</Wrapper>
}

export default Navbar
