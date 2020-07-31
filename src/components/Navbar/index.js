import { useState, useEffect } from 'react'
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
  const [isMobile, setIsMobile] = useState(true)
  const { width } = useWindowSize()

  useEffect(() => {
    setIsMobile(width < 1000)
  }, [width])

  if (isMobile)
    return (
      <Wrapper key="mobile">
        <Mobile />
      </Wrapper>
    )

  return (
    <Wrapper key="desktop">
      <Default />
    </Wrapper>
  )
}

export default Navbar
