import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { getAllProcess } from 'api/process'
import { Row, Column, Icon, Select } from 'components'
import { CardsLoader } from 'components/Loaders'
import { status } from 'helpers/status'
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
  const initialStatus = Object.keys(status)[0]
  const [loading, setLoading] = useState(false)
  const [processList, setProcessList] = useState([])
  const [activeStatus, setActiveStatus] = useState(initialStatus)

  const { push } = useRouter()

  const onGetProcessList = async () => {
    setLoading(true)
    const data = await getAllProcess()
    setProcessList(data)
    setLoading(false)
  }

  useEffect(() => {
    onGetProcessList()
  }, [])

  return (
    <Wrapper>
      <Row>
        <Column size={12}>
          <StatusWrapper>
            {Object.keys(status).map((s) => (
              <Status
                key={s}
                isActive={s === activeStatus}
                onClick={() => setActiveStatus(s)}
              >
                {status[s]}
              </Status>
            ))}
          </StatusWrapper>
        </Column>
      </Row>
      {loading ? (
        <CardsLoader />
      ) : (
        <Row>
          {processList
            .filter((x) => x.status === activeStatus)
            .map((i) => (
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
                  <CardFooter>
                    <div>{new Date(i.createdAt).toISOString()}</div>
                    <div style={{ padding: '10px 20px' }}>
                      <Select
                        name="select"
                        // onChange={e => }
                        options={Object.keys(status).map((o) => ({
                          text: status[o],
                          value: o
                        }))}
                        small
                      />
                    </div>
                  </CardFooter>
                </Card>
              </Column>
            ))}
        </Row>
      )}
    </Wrapper>
  )
}

export default Process
