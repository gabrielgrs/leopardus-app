import styled from 'styled-components'

const CategoriesWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  a {
    color: black;
  }

  & > div {
    text-align: center;
  }
`

const FAQListWrapper = styled.div`
  padding: 20px 10%;
  display: flex;
  flex-direction: column;
  text-align: center;

  .section {
    margin: 20px 0;
  }
`

const Category = styled.div`
  cursor: pointer;
  text-transform: uppercase;
  width: 100%;
  padding: 40px 0;
  border-right: ${({ theme }) => `solid ${theme.colors.silverDark} 1px`};
  border-top: ${({ theme }) => `solid ${theme.colors.silverDark} 1px`};
  border-bottom: ${({ theme }) => `solid ${theme.colors.silverDark} 3px`};
  font-size: 1.3em;

  &:hover {
    border-bottom: ${({ theme }) => `solid ${theme.colors.primaryDark} 3px`};
  }

  &:after {
  }
`

const faqList = [
  {
    title: 'Section',
    questions: [
      {
        question: 'O que é Leopardus?',
        answer: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum'
      },
      {
        question: 'O que é Leopardus?',
        answer: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum'
      },
      {
        question: 'O que é Leopardus?',
        answer: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum'
      },
      {
        question: 'O que é Leopardus?',
        answer: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum'
      }
    ]
  },
  {
    title: 'Section 2',
    questions: [
      {
        question: 'O que é Leopardus?',
        answer: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum'
      },
      {
        question: 'O que é Leopardus?',
        answer: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum'
      },
      {
        question: 'O que é Leopardus?',
        answer: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum'
      },
      {
        question: 'O que é Leopardus?',
        answer: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum'
      }
    ]
  },
  {
    title: 'Section 3',
    questions: [
      {
        question: 'O que é Leopardus?',
        answer: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum'
      },
      {
        question: 'O que é Leopardus?',
        answer: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum'
      },
      {
        question: 'O que é Leopardus?',
        answer: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum'
      },
      {
        question: 'O que é Leopardus?',
        answer: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum'
      }
    ]
  },
  {
    title: 'Section 4',
    questions: [
      {
        question: 'O que é Leopardus?',
        answer: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum'
      },
      {
        question: 'O que é Leopardus?',
        answer: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum'
      },
      {
        question: 'O que é Leopardus?',
        answer: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum'
      },
      {
        question: 'O que é Leopardus?',
        answer: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum'
      }
    ]
  }
]

function FrequentlyQuestions() {
  return (
    <>
      <CategoriesWrapper>
        {faqList.map((item, index) => (
          <Category key={index}>
            <a href={`#${item.title}`}>{item.title}</a>
          </Category>
        ))}
      </CategoriesWrapper>
      <FAQListWrapper>
        {faqList.map((q) => (
          <div key={q.title} className="section" id={q.title}>
            <h1 style={{ textAlign: 'center' }}>{q.title}</h1>
            {q.questions.map((i, index) => (
              <div key={index}>
                {i.question}: {i.answer}
              </div>
            ))}
          </div>
        ))}
      </FAQListWrapper>
    </>
  )
}

export default FrequentlyQuestions
