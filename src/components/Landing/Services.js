import styled from 'styled-components'
import { Icon } from 'components'
import Heading from 'components/Heading'
import { rgba } from 'polished'
import Row from 'components/Row'
import Column from 'components/Column'

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
    ,
    { title: 'Declaração de Imposto de Renda', icon: 'FiBell' },
    { title: 'Transporte Marítimo', icon: 'FiBell' },
    { title: 'Transporte Rodoviário', icon: 'FiBell' },
    { title: 'Transporte Aéreo', icon: 'FiBell' },
    { title: 'Assessoria em e-Sports', icon: 'FiBell' },
    { title: 'Alimentos impróprios para consumo', icon: 'FiBell' },
    { title: 'Inscrição indevida SPC/Serasa', icon: 'FiBell' },
    { title: 'Energia Elétrica', icon: 'FiBell' }
  ]

  return (
    <Wrapper>
      <Heading
        title="Áreas de Atuação"
        subtitle="Essas são todas as áreas as quais atuamos"
      />
      <Row>
        {list.map((i, index) => (
          <Column key={index} size={3}>
            <Card>
              <div className="flip-box-inner">
                <div className="flip-box-front">
                  <img
                    src="https://images.all-free-download.com/images/graphicthumb/aircraft_in_flight_picture_7_168555.jpg"
                    alt="Paris"
                  />
                </div>
                <div className="flip-box-back">
                  <h2>Paris</h2>
                  <p>What an amazing city</p>
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
