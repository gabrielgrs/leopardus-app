import { useState, useEffect } from 'react'
import { Row, Column, Icon } from 'components'
import { useRouter } from 'next/router'
import { CardsLoader } from 'components/Loaders'
import {
  Wrapper,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  StatusWrapper,
  Status
} from './styles'

function Process() {
  const mock = () =>
    Array.from({ length: 10 }).map((_, index) => ({
      id: index + 1,
      name: `Fulano ${index}`,
      createdAt: new Date(),
      category: 'Categoria'
    }))

  const [loading, setLoading] = useState(false)
  const [processList, setProcessList] = useState([])
  const [activeStatus, setActiveStatus] = useState(0)

  const { push } = useRouter()

  const status = [
    'Novo',
    'Verificação',
    'Acordo',
    'Audiência',
    'Recurso',
    'Sentença',
    'Concluido'
  ]

  const onSelectStatus = async (statusToSet) => {
    setLoading(true)
    setActiveStatus(statusToSet)
    setTimeout(() => {
      setProcessList(mock)
      setLoading(false)
    }, 1000)
  }

  useEffect(() => {
    onSelectStatus(0)
    // eslint-disable-next-line
  }, [])

  return (
    <Wrapper>
      <Row>
        <Column size={12}>
          <StatusWrapper>
            {status.map((s, index) => (
              <Status
                key={s}
                isActive={index === activeStatus}
                onClick={() => onSelectStatus(index)}
              >
                {s}
              </Status>
            ))}
          </StatusWrapper>
        </Column>
      </Row>
      {loading ? (
        <CardsLoader />
      ) : (
        <Row>
          {processList.map((i) => (
            <Column key={i.id} size={4}>
              <Card>
                <CardHeader>
                  <div>{i.name}</div>
                  <div>
                    <Icon
                      onClick={() => push(`/processos/detalhes/${i.id}`)}
                      name="FiEye"
                    />
                  </div>
                </CardHeader>
                <CardBody>
                  <div>{i.category}</div>
                </CardBody>
                <CardFooter>{new Date(i.createdAt).toISOString()}</CardFooter>
              </Card>
            </Column>
          ))}
        </Row>
      )}
    </Wrapper>
  )
}

export default Process
