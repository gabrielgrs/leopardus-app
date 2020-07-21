import styled from 'styled-components'

const Wrapper = styled.div`
  text-align: center;
  width: 100%;
`

const Title = styled.h1`
  padding: 10px 0;
  font-size: 2.5em;
`

const Subtitle = styled.h2`
  font-size: 1em;
  color: ${({ theme }) => theme.colors.secondary};
`

function Heading({ title, subtitle }) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
    </Wrapper>
  )
}

export default Heading
