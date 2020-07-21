import { useState } from 'react'
import { Icon, TextField, Row, Column } from 'components'
import dialogConfig from 'helpers/dialog'
import Typing from './Typing'
import RenderWithDelay from './RenderWithDelay'
import { Wrapper, UserMessage, BotMessage, InterationArea } from './styles'

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
