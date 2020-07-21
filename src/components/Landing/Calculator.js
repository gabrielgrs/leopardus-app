import styled from 'styled-components'
import Icon from 'components/Icon'
import Slider from 'rc-slider'
import { useState } from 'react'

const Wrapper = styled.div`
  display: flex;

  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`

const Section = styled.div`
  width: 50%;
  padding: 100px 15%;
  text-align: center;
  background: ${({ theme, isMain }) => (isMain ? theme.colors.primary : null)};
  color: ${({ theme, isMain }) => (isMain ? theme.colors.white : null)};
  background-image: ${({ isMain }) =>
    isMain
      ? null
      : `url(
      'https://www.lemonade.com/_next/static/images/home-left-35e4ff48b1abcefd87e665c7ae7d9945.svg'
    )`};
  background-size: 70%;
  background-repeat: no-repeat;

  @media screen and (max-width: 700px) {
    padding: 50px 15%;
    width: 100%;
  }
`

function Contact() {
  const [indenization, setIndenization] = useState(0)

  const fees = indenization * 0.3

  return (
    <Wrapper>
      <Section>
        <h1>O serviço que cabe no seu bolso</h1>
        <p>Você somente será cobrado se a causa for ganha</p>
        <Icon name="FiBell" />
      </Section>
      <Section isMain>
        <h2>Faça uma simulação</h2>
        <h3>Qual o valor da sua indenização?</h3>
        <h3>R$ {indenization},00</h3>
        <Slider
          value={indenization}
          step={100}
          min={0}
          max={10000}
          onChange={(v) => setIndenization(v)}
        />
        <div>
          {Boolean(indenization)
            ? `Os honorários serão de: R$ ${fees} e você receberá R$ ${
                indenization - fees
              }`
            : `Você não será cobrado!`}
        </div>
      </Section>
    </Wrapper>
  )
}

export default Contact
