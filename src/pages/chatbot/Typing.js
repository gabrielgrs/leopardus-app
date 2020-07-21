import styled, { keyframes } from 'styled-components'

const typing = keyframes`
  0% {
    transform: scale(1);
  }
  33% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.4);
  }
  100% {
    transform: scale(1);
  }
`

const bounce = keyframes`
  0% {
    transform: translateY(0);
  }
  33% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
`

const Wrapper = styled.div`
  display: block;
  border-radius: 15px;
  display: flex;

  .circle {
    display: block;
    height: 10px;
    width: 10px;
    border-radius: 50%;
    background-color: ${({ theme, color }) => theme.colors[color || 'primary']};
    margin: 3px;
  }

  .scaling {
    animation: ${typing} 1000ms ease-in-out infinite;
    animation-delay: 3600ms;
  }

  .bouncing {
    animation: ${bounce} 1000ms ease-in-out infinite;
    animation-delay: 3600ms;
  }

  .circle:nth-child(1) {
    animation-delay: 0ms;
  }

  .circle:nth-child(2) {
    animation-delay: 333ms;
  }

  .circle:nth-child(3) {
    animation-delay: 666ms;
  }
`

function Typing({ ...rest }) {
  return (
    <Wrapper {...rest}>
      <span className="circle scaling"></span>
      <span className="circle bouncing"></span>
      <span className="circle scaling"></span>
    </Wrapper>
  )
}

export default Typing
