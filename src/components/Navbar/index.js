import styled from 'styled-components'

import useWindowSize from 'hooks/useWindowSize'
import Default from './default'
import Mobile from './mobile'

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
