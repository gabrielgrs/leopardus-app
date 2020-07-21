import styled from 'styled-components'
import { Heading } from 'components'

const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.blackLight};
  color: ${({ theme }) => theme.colors.white};
  padding: 30px 10%;
  text-align: center;
`

function Contact() {
  return (
    <Wrapper>
      <Heading title="Equipe" subtitle="Chega mais e nos conheça melhor!" />
      <img src="/img/temp/ADVOGADO-TISAGORAS.png" alt="Tiságoras" />
      <h3>Tiságoras Felício Antunes Mariani</h3>
      <p>
        Advogado inscrito na OAB/RS sob o nº 110.754. O Tiságoras cursou direito
        na PUCRS em Porto Alegre – RS e se formou no 2º semestre de 2017. Foi o
        Orador de sua turma na colação de grau e foi aprovado no Exame da Ordem
        dos Advogados do Brasil antes de se formar. Está se especializando em
        Direito do Trabalho e Direito Processual do Trabalho pela PUCRS. Tem
        como hobby ler livros envolvendo tecnologia e fazer cursos de marketing
        digital.
      </p>
    </Wrapper>
  )
}

export default Contact
