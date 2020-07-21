import styled from 'styled-components'
import Heading from 'components/Heading'
import { useRouter } from 'next/router'
import Row from 'components/Row'
import Column from 'components/Column'
import Icon from 'components/Icon'

const Wrapper = styled.div`
  padding: 20px 3%;

  h1 {
    text-align: center;
  }

  .icon {
    font-size: 3rem;
  }
`

const Card = styled.div`
  background-color: transparent;
  width: 100%;
  height: 200px;
  border: 1px solid #f1f1f1;
  perspective: 1000px;
  border-radius: 8px;

  & img {
    object-fit: cover;
    width: 100%;
    height: 200px;
    border-radius: 8px;
  }

  .flip-box-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }

  &:hover .flip-box-inner {
    transform: rotateY(180deg);
  }

  .flip-box-front,
  .flip-box-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden; /* Safari */
    backface-visibility: hidden;
  }

  .flip-box-front {
    background-color: #bbb;
    color: black;
  }

  .flip-box-back {
    padding: 10px;
    border-radius: 8px;
    background: ${({ theme }) => theme.colors.primaryLight};
    color: ${({ theme }) => theme.colors.white};
    transform: rotateY(180deg);
  }
`

function Services() {
  const list = [
    {
      title: 'Declaração de Imposto de Renda',
      description: 'Venha fazer o seu imposto de renda conosco',
      image: '/img/temp/imposto_de_renda.jpg'
    },
    {
      title: 'Transporte Marítimo',
      description: 'Problema com transporte marítimo',
      image: '/img/temp/555d28f1f4094-transporte-maritimo.jpg'
    },
    {
      title: 'Transporte Rodoviário',
      description: 'Problema com transporte rodoviário',
      image: '/img/temp/rodoviario.png'
    },
    {
      title: 'Transporte Aéreo',
      description: 'Problema com transporte aéreo',
      image: '/img/temp/aircraft_in_flight_picture_7_168555.jpg'
    },
    {
      title: 'Assessoria em e-Sports',
      description: 'Problema com e-Sports',
      image: '/img/temp/esports_vale.jpg'
    },
    {
      title: 'Alimentos impróprios para consumo',
      description: 'Problema com alimentos',
      image: '/img/temp/alimento-estragado.jpg'
    },
    {
      title: 'Inscrição indevida SPC/Serasa',
      description: 'Problema com SPC/Serasa',
      image: '/img/temp/acordo-spc-serasa-768x432.png'
    },
    {
      title: 'Energia Elétrica',
      description: 'Problema com energia elétrica',
      image: '/img/temp/01858_02.jpg'
    }
  ]

  const { push } = useRouter()

  return (
    <Wrapper>
      <Heading
        title="Áreas de Atuação"
        subtitle="Essas são todas as áreas as quais atuamos"
      />
      <Row>
        {list.map((i) => (
          <Column key={i.title} size={3}>
            <Card>
              <div className="flip-box-inner">
                <div className="flip-box-front">
                  <img src={i.image} alt={`Serviço de ${i.title}`} />
                </div>
                <div className="flip-box-back">
                  <h3>{i.title}</h3>
                  <div>{i.description}</div>
                  {/* eslint-disable-next-line */}
                  <div
                    onClick={() => push('/chatbot')}
                    style={{ paddingTop: 20, cursor: 'pointer' }}
                  >
                    <Icon name="FiArrowRight" />
                  </div>
                </div>
              </div>
            </Card>
          </Column>
        ))}
      </Row>
    </Wrapper>
  )
}

export default Services
