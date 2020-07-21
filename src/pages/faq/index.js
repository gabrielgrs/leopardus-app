import { CategoriesWrapper, Category, FAQListWrapper } from './styles'

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
