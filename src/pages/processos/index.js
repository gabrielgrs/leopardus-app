import { useState, useEffect } from 'react'
import { Row, Column, Icon } from 'components'
import ContentLoader from 'react-content-loader'
import { useRouter } from 'next/router'
import {
  Wrapper,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  StatusWrapper,
  Status
} from './styles'

const CardsLoader = () => {
  const boxList = [
    <rect key={1} x="0" y="0" rx="2" ry="2" width="120" height="20" />,
    <rect key={2} x="140" y="0" rx="2" ry="2" width="120" height="20" />,
    <rect key={3} x="280" y="0" rx="2" ry="2" width="120" height="20" />,
    <rect key={4} x="0" y="25" rx="2" ry="2" width="120" height="20" />,
    <rect key={5} x="140" y="25" rx="2" ry="2" width="120" height="20" />,
    <rect key={6} x="280" y="25" rx="2" ry="2" width="120" height="20" />,
    <rect key={7} x="0" y="50" rx="2" ry="2" width="120" height="20" />
  ]

  const randomNumber = Math.floor(Math.random() * boxList.length) + 1

  return (
    <ContentLoader backgroundColor="silver" viewBox="0 0 380 70">
      {boxList.filter((_, index) => index < randomNumber).map((i) => i)}
    </ContentLoader>
  )
}

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
    'Sentença',
    'Recurso',
    'Sentença',
    'Concluido'
  ]

  const onSelectStatus = async (status) => {
    setLoading(true)
    setActiveStatus(status)
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
                key={index}
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
          {processList.map((i, index) => (
            <Column key={index} size={4}>
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
