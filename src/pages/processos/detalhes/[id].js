import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/router'
import { Row, Column, Icon, Button } from 'components'
import { DetailsLoader } from 'components/Loaders'
import { Wrapper, Card } from './styles'

function Process() {
  const { push } = useRouter()

  const mock = () => ({
    name: `Fulano`,
    createdAt: new Date(),
    category: 'Categoria'
  })

  const [loading, setLoading] = useState(false)
  const [processInformations, SetProcessInformations] = useState(undefined)

  const onGetProcessInformations = useCallback(async () => {
    // query.id
    setLoading(true)
    setTimeout(() => {
      SetProcessInformations(mock)
      setLoading(false)
    }, 1000)
  }, [])

  useEffect(() => {
    onGetProcessInformations(0)
  }, [onGetProcessInformations])

  if (loading || !processInformations)
    return (
      <Wrapper>
        <DetailsLoader />
      </Wrapper>
    )

  return (
    <Wrapper>
      <Row>
        <Column size={1}>
          <Icon onClick={() => push('/processos')} name="FiArrowLeft" />
        </Column>
        <Column size={2}>
          <Button width="100%">Editar</Button>
        </Column>
        <Column size={2}>
          <Button width="100%">Baixar procuração</Button>
        </Column>
        <Column size={12}>
          <Card>
            <h1>Dados pessoais</h1>
            <Row>
              <Column size={3}>
                <strong>Nome: </strong>
                {processInformations.name}
              </Column>
              <Column size={3}>
                <strong>CPF: </strong>
                {processInformations.identity}
              </Column>
              <Column size={3}>
                <strong>Telefone: </strong>
                {processInformations.phone}
              </Column>
              <Column size={3}>
                <strong>E-mail: </strong>
                {processInformations.email}
              </Column>
              <Column size={12}>
                <strong>Endereço: </strong>
                {processInformations.address}
              </Column>
              <Column size={12}>
                <strong>Conta Bancária: </strong>
                {processInformations.bankAccount}
              </Column>
            </Row>
          </Card>
        </Column>
        <Column size={12}>
          <Card>
            <h1>Dados do Processo</h1>
            <Row>
              <Column size={4}>
                <strong>Status Interno:</strong>
                {processInformations.internalStatus}
              </Column>
              <Column size={4}>
                <strong>Categoria:</strong>
                {processInformations.category}
              </Column>
              <Column size={4}>
                <strong>Protocolo:</strong>
                {processInformations.protocol}
              </Column>
              <Column size={4}>
                <strong>Informações Adicionais:</strong>
                {processInformations.observations}
              </Column>
            </Row>
          </Card>
        </Column>
      </Row>
      <Row>
        <Column size={12}>
          <Button float="right" backgroundColor="danger">
            Arquivar
          </Button>
        </Column>
      </Row>
    </Wrapper>
  )
}

export default Process
