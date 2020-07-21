import styled from 'styled-components'
import { Button } from 'components'
import { useRouter } from 'next/router'

const Wrapper = styled.div`
  padding: 25% 3% 30%;
  background-image: url('https://juristecplus.com.br/wp-content/uploads/2019/10/banner-site.png?id=8061');
  background-size: 100%;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  line-height: 50px;

  @media screen and (max-width: 700px) {
    padding: 0px 3% 100px;
  }
`

function Home() {
  const { push } = useRouter()
  return (
    <Wrapper>
      <h1>Leopardus</h1>
      <h3>Resultados sem sair do conforme de casa.</h3>
      <Button onClick={() => push('/chatbot')}>Converse com o Leo</Button>
    </Wrapper>
  )
}

export default Home
