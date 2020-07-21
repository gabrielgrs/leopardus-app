import { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { Icon, TextField, Row, Column } from 'components'
import Typing from './Typing'
import dialogConfig from './dialog'
import RenderWithDelay from './RenderWithDelay'

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

const Wrapper = styled.div`
  padding: 50px 0;
`

const InterationArea = styled.div`
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

const UserMessage = styled(Message)`
  animation: ${userMessageAnimation} 1s ease-in-out;
  background: ${({ fromUser, theme }) =>
    fromUser ? theme.colors.primary : theme.colors.whiteDark};
  color: ${({ theme }) => theme.colors.white};
  float: right;
  border-radius: 18px 0px 18px 18px;
`

const BotMessage = styled(Message)`
  animation-name: ${botMessageAnimation};
  animation-duration: 1s;
  animation-timing-function: ease-out;
  background: ${({ theme }) => theme.colors.whiteDark};
  color: ${({ theme }) => theme.colors.primary};
  float: left;
  border-radius: 0px 18px 18px 18px;
`

function Chatbot() {
  const [fields, setFields] = useState({})
  const [currentStep, setCurrentStep] = useState(0)

  const createdDialog = dialogConfig(fields)

  const { answer, fieldName } = createdDialog[currentStep]

  const onChangeField = ({ target }) => {
    setFields((prev) => ({ ...prev, [target.name]: target.value }))
  }

  const onAdvanceStep = () => {
    if (currentStep === createdDialog.length - 1) {
      return alert('É o último Passo')
    }
    setCurrentStep((prev) => prev + 1)
  }

  const onKeyDown = ({ keyCode }) => {
    if (keyCode === 13) return onAdvanceStep()
  }

  const renderBotMessage = (botMessages) =>
    botMessages.map((bm, index) => (
      <Row key={index}>
        <Column size={12}>
          <BotMessage>
            <RenderWithDelay
              timeout={String(bm).length * 10}
              componentWhileWaiting={<Typing color="primary" />}
            >
              <span dangerouslySetInnerHTML={{ __html: bm }} />
            </RenderWithDelay>
          </BotMessage>
        </Column>
      </Row>
    ))

  const renderUserMessage = (fieldName, isTyping) => {
    if (!fieldName) return null
    return (
      <Row>
        <Column size={12}>
          <UserMessage fromUser>
            {isTyping ? <Typing color="white" /> : fields[fieldName]}
          </UserMessage>
        </Column>
      </Row>
    )
  }

  return (
    <Wrapper>
      {createdDialog.map((dialog, index) => {
        if (currentStep < index) return null
        return (
          <>
            {renderBotMessage(dialog.botMessage)}
            {fields[dialog.fieldName] &&
              renderUserMessage(dialog.fieldName, index === currentStep)}
          </>
        )
      })}
      <InterationArea>
        <div className="input">
          <TextField
            name={fieldName}
            value={fields[fieldName]}
            onKeyDown={onKeyDown}
            onChange={onChangeField}
            placeholder="Digite sua resposta"
          />
        </div>
        <div className="action" onClick={onAdvanceStep}>
          <Icon name="FiCornerDownRight" />
        </div>
      </InterationArea>
    </Wrapper>
  )
}

export default Chatbot
