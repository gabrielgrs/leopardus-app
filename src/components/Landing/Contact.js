import styled from 'styled-components'
import { Row, Column, TextField, Button, Heading } from 'components'

const Wrapper = styled.div``

function Contact() {
  return (
    <Wrapper>
      <Heading
        title="Contato"
        subtitle="Deixe sua mensagem, ficaremos feliz em ajudar"
      />
      <Row>
        <Column size={12}>
          <TextField placeholder="Nome" />
        </Column>
        <Column size={12}>
          <TextField placeholder="Telefone" />
        </Column>
        <Column size={12}>
          <TextField placeholder="E-mail" />
        </Column>
        <Column size={12}>
          <TextField placeholder="Texto" multiline />
        </Column>
        <Column size={12}>
          <Button>Submeter</Button>
        </Column>
      </Row>
    </Wrapper>
  )
}

export default Contact
