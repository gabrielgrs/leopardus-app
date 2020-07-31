import { Row, Column, TextField, Button } from 'components'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { Wrapper } from './styles'

function Authentication() {
  const [fields, setFields] = useState({ protocol: '' })

  const { push } = useRouter()

  const onChange = ({ target }) =>
    setFields((prev) => ({ ...prev, [target.name]: target.value }))

  const onAuthenticate = () => {
    push('/processos')
  }

  return (
    <Wrapper>
      <img src="/img/temp/logo2.jpg" alt="Logo branco leopardus" />
      <Row>
        <Column size={12}>
          <TextField
            name="protocol"
            onChange={onChange}
            value={fields.protocol}
            placeholder="Digite seu protocol"
          />
        </Column>
        <Column size={12}>
          <Button
            disabled={!fields.protocol}
            onClick={onAuthenticate}
            width="100%"
          >
            Consultar
          </Button>
        </Column>
        <Column size={12}>Resultado</Column>
      </Row>
    </Wrapper>
  )
}

export default Authentication
