import styled from 'styled-components'
import { Row, Column, TextField, Button } from 'components'
import { useState } from 'react'
import { useRouter } from 'next/router'

const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  & img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 10%;
  }

  @media screen and (max-width: 700px) {
    width: 100%;
  }
`

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
      <img src="https://leopardus.app/wp-content/uploads/2020/05/logo2.png" />
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
