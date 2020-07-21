import styled from 'styled-components'
import Row from 'components/Row'
import Column from 'components/Column'

const Wrapper = styled.div`
  text-align: center;

  & img {
    width: 100%;
  }

  & p {
    font-size: 0.8em;
  }
`

const Card = styled.div`
  font-size: 1.5em;
  margin-left: 150px;
  padding: 10%;
  border-radius: 100px 0 0 0;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => `0 0 30px ${theme.colors.primary}`};

  @media screen and (max-width: 700px) {
    margin: 0;
    border-radius: 30px 30px 0 0;
    padding: 30px 10%;
  }
`

function About() {
  return (
    <Wrapper>
      <Card>
        <Row>
          <Column size={12}>
            <h1>Agora resolver seus problemas judicias está fácil</h1>
          </Column>
        </Row>
        <Row>
          <Column size={8}>
            <h3>Converse com o Leo e faça uma análise do seu caso!</h3>
            <p>
              E não se preocupe! Esta análise inicial não possui custos e você
              só pagará honorários sobre o valor da indenização recebida. Ou
              seja, só se ganhar!
            </p>
          </Column>
          <Column size={4}>
            <img
              src="https://www.lemonade.com/_next/static/images/bg-app-sketch-6a1411234063f5ee57ef246ff974ceaf.svg"
              alt=""
            />
          </Column>
        </Row>
      </Card>
    </Wrapper>
  )
}

export default About
