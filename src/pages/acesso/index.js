import { Row, Column, TextField, Button } from 'components'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { Wrapper } from './styles'

function Authentication() {
  const [fields, setFields] = useState({ email: '', password: '' })

  const { push } = useRouter()

  const onChange = ({ target }) =>
    setFields((prev) => ({ ...prev, [target.name]: target.value }))

  const onAuthenticate = () => {
    push('/processos')
  }

  return (
    <Wrapper>
      <img src="/img/temp/logo2.png" alt="Logo branco leopardus" />
      <Row>
        <Column size={12}>
          <TextField
            name="email"
            onChange={onChange}
            value={fields.email}
            placeholder="E-mail"
          />
        </Column>
        <Column size={12}>
          <TextField
            name="password"
            onChange={onChange}
            value={fields.email}
            type="password"
          />
        </Column>
        <Column size={12}>
          <Button
            disabled={!fields.email || !fields.password}
            onClick={onAuthenticate}
            width="100%"
          >
            Acesso
          </Button>
        </Column>
      </Row>
    </Wrapper>
  )
}

export default Authentication
