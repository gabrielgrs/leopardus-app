import styled from 'styled-components'
import Row from 'components/Row'
import Column from 'components/Column'

// const Wrapper = styled.div`
//   width: 100%;
//   padding: 20px 5%;
//   background: ${({ theme }) => theme.colors.black};
//   color: ${({ theme }) => theme.colors.white};
//   display: flex;
// `

const Wrapper = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.colors.silverDark};
  background: ${({ theme }) => theme.colors.blackDark};
  padding: 30px 5%;

  & img {
    width: 70%;
  }

  @media screen and (max-width: 700px) {
    width: 100%;
  }
`

function Footer() {
  return (
    <>
      {/* <Wrapper>
        <Section>Logo</Section>
        <Section>Recursos</Section>
        <Section>Compania</Section>
        <Section>Contato</Section>
      </Wrapper> */}
      <Wrapper>
        <Row>
          <Column size={4}>
            <img src="https://leopardus.app/wp-content/uploads/2020/05/LogoBranco2x.png" />
          </Column>
          <Column size={4}>Todos os direitos reservados</Column>
          <Column size={4}>
            <a href="direitos">Direitos Autorias</a> |{' '}
            <a href="termos">Termos de Uso</a> |{' '}
            <a href="/privacidade">Política de Privacidade</a>
          </Column>
        </Row>
      </Wrapper>
    </>
  )
}

export default Footer
