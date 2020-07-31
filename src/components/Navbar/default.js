import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Button } from 'components'
import styled from 'styled-components'
import { useAuth } from 'hooks/useAuth'

const Wrapper = styled.nav`
  width: 100%;
  z-index: 999;
  position: ${({ position }) => position};
  max-height: 100%;
  top: 0;
  display: flex;
  align-items: center;
  font-size: 1.4em;
  background: ${({ scrollOnTop, theme }) =>
    scrollOnTop ? 'transparent' : theme.colors.whiteDark};
  border-bottom: ${({ scrollOnTop, theme }) =>
    !scrollOnTop && `solid ${theme.colors.silver} 1px`};
  height: ${({ scrollOnTop }) => (scrollOnTop ? '80px' : '70px')};
  transition: all 0.5s;
`

const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 33%;
`

const Item = styled.div`
  cursor: pointer;
  padding: 0 20px;
  color: ${({ theme }) => theme.colors.blackLight};
  transition: all 0.5s;

  &:hover {
    color: ${({ theme }) => theme.colors.primaryLight};
  }
`

const Brand = styled.div`
  cursor: pointer;
  font-weight: 600;
  font-size: ${({ scrollOnTop }) => (scrollOnTop ? '1.6em' : '1.3em')};
  margin-top: ${({ scrollOnTop, isHome }) =>
    isHome && scrollOnTop ? '160px' : '0px'};
  transition: all 0.5s;

  & img {
    height: 70px;
  }
`

function Link({ children, path, isButton }) {
  const { push } = useRouter()
  if (isButton) return <Button onClick={() => push(path)}>{children}</Button>
  return <Item onClick={() => push(path)}>{children}</Item>
}

function Navbar() {
  const [scrollOnTop, setScrollOnTop] = useState(true)
  const { isAuthenticated } = useAuth()

  useEffect(() => {
    const onScroll = () => setScrollOnTop(window.scrollY < 70)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const { pathname } = useRouter()
  const isHome = pathname === '/'

  return (
    <Wrapper position={isHome ? 'fixed' : 'initial'} scrollOnTop={scrollOnTop}>
      <Section>
        <Link path="/">Home</Link>
        <Link path="/faq">FAQ</Link>
        <Link path="/blog">Blog</Link>
      </Section>
      <Section>
        <Brand isHome={isHome} scrollOnTop={scrollOnTop}>
          <img src="/img/temp/leopardus-logo.png" alt="Logo" />
        </Brand>
      </Section>
      <Section>
        <Link path="/consulta">Consulta</Link>
        {!isAuthenticated && <Link path="/acesso">Acesso</Link>}
        {isAuthenticated && <Link path="/processos">Processos</Link>}
        <Link path="/chatbot" isButton>
          Converse com o Leo
        </Link>
      </Section>
    </Wrapper>
  )
}

export default Navbar
