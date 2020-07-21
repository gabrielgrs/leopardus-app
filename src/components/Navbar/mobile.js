import { useRouter } from 'next/router'
import styled from 'styled-components'
import Icon from 'components/Icon'
import { useState } from 'react'

const Nav = styled.nav`
  display: flex;
  z-index: 2;
  position: fixed;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  background: ${({ theme }) => theme.colors.primaryLight};
  color: ${({ theme }) => theme.colors.white};
  top: 0;
  right: ${({ isOpen }) => (isOpen ? '0px' : '-100%')};
  height: 100%;
  padding: 30% 0;
  width: 90%;
`

const Hamburger = styled.div`
  cursor: pointer;
  z-index: 3;
  color: ${({ theme }) => theme.colors.black};

  font-size: 2em;
  top: 10px;
  right: 10px;
  position: fixed;
`

const Item = styled.div`
  font-size: 2em;
`

function Link({ children, path, onClick }) {
  const { push } = useRouter()
  return (
    <Item
      onClick={() => {
        push(path)
        if (onClick) onClick()
      }}
    >
      {children}
    </Item>
  )
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Hamburger isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <Icon name={isOpen ? 'FiX' : 'FiAlignRight'} />
      </Hamburger>
      <Nav isOpen={isOpen}>
        <Link onClick={() => setIsOpen(false)} path="/">
          Início
        </Link>
        <Link onClick={() => setIsOpen(false)} path="/">
          FAQ
        </Link>
        <Link onClick={() => setIsOpen(false)} path="/">
          Blog
        </Link>
        <Link onClick={() => setIsOpen(false)} path="/consulta">
          Consulta
        </Link>
        <Link onClick={() => setIsOpen(false)} path="/chatbot">
          Chatbot
        </Link>
        <Link onClick={() => setIsOpen(false)} path="/acesso">
          Acesso
        </Link>
      </Nav>
    </>
  )
}

export default Navbar
