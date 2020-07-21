import { useState, useEffect, useCallback } from 'react'
import styled from 'styled-components'
import { rgba } from 'polished'
import { Row, Column, Icon, Button } from 'components'

import ContentLoader from 'react-content-loader'
import { useRouter } from 'next/router'

const Wrapper = styled.div`
  padding: 50px 5%;

  .icon {
    cursor: pointer;
    opacity: 0.5;
    font-size: 3em;

    &:hover {
      opacity: 1;
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`

const Card = styled.div`
  border: ${({ theme }) => `solid ${theme.colors.silver} 2px`};
  padding: 5px 10px;
  border-radius: 8px;
  box-shadow: ${({ theme, disabled }) =>
    !disabled && `0 0 10px ${rgba(theme.colors.primary, 0.5)}`};

  &:hover {
    border: ${({ theme }) => `solid ${theme.colors.primary} 2px`};
  }
`

const DetailsLoader = () => {
  return (
    <ContentLoader backgroundColor="silver" viewBox="0 0 380 300">
      <rect x="10" y="0" rx="2" ry="2" width="20" height="15" />
      <rect x="50" y="0" rx="2" ry="2" width="40" height="15" />
      <rect x="110" y="0" rx="2" ry="2" width="40" height="15" />
      <rect x="10" y="20" rx="2" ry="2" width="350" height="40" />
      <rect x="10" y="70" rx="2" ry="2" width="350" height="40" />
    </ContentLoader>
  )
}

function Process() {
  const { query, push } = useRouter()

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
                <strong>Nome: </strong> {processInformations.name}
              </Column>
              <Column size={3}>
                <strong>CPF: </strong> {processInformations.identity}
              </Column>
              <Column size={3}>
                <strong>Telefone: </strong> {processInformations.phone}
              </Column>
              <Column size={3}>
                <strong>E-mail: </strong> {processInformations.email}
              </Column>
              <Column size={12}>
                <strong>Endereço: </strong> {processInformations.address}
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
                <strong>Status Interno:</strong>{' '}
                {processInformations.internalStatus}
              </Column>
              <Column size={4}>
                <strong>Categoria:</strong> {processInformations.category}
              </Column>
              <Column size={4}>
                <strong>Protocolo:</strong> {processInformations.protocol}
              </Column>
              <Column size={4}>
                <strong>Informações Adicionais:</strong>{' '}
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
