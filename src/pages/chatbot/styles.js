import styled, { keyframes } from 'styled-components'

const botMessageAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateX(-400px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`

const userMessageAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateX(400px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`

export const Wrapper = styled.div`
  padding: 50px 0;
`

export const InterationArea = styled.div`
  background: ${({ theme }) => theme.colors.silver};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70px;
  position: fixed;
  bottom: 0;
  width: 100%;

  .input {
    width: 100%;
    margin: 0 10px;

    & input {
      width: 100%;
      height: 50px;
      border: none;
      background: ${({ theme }) => theme.colors.white};
      border-radius: 5px;
    }
  }

  .action {
    cursor: pointer;
    position: absolute;
    bottom: 13px;
    right: 20px;
    font-size: 30px;
  }
`

const Message = styled.div`
  max-width: 40%;
  padding: 10px 20px;
  margin: 0 20%;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 2px 0px;
  box-sizing: border-box;

  @media screen and (max-width: 992px) {
    max-width: 80%;
    margin: 0 10%;
  }
  @media screen and (max-width: 768px) {
    max-width: 90%;
    margin: 0 10%;
  }
`

export const UserMessage = styled(Message)`
  animation: ${userMessageAnimation} 1s ease-in-out;
  background: ${({ fromUser, theme }) =>
    fromUser ? theme.colors.primary : theme.colors.whiteDark};
  color: ${({ theme }) => theme.colors.white};
  float: right;
  border-radius: 18px 0px 18px 18px;
`

export const BotMessage = styled(Message)`
  animation-name: ${botMessageAnimation};
  animation-duration: 1s;
  animation-timing-function: ease-out;
  background: ${({ theme }) => theme.colors.whiteDark};
  color: ${({ theme }) => theme.colors.primary};
  float: left;
  border-radius: 0px 18px 18px 18px;
`

// TODO: improve build to ignore styles.js
export default () => null
