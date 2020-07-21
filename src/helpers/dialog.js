const types = {
  textField: 'textField'
}

const dialog = (fields) => [
  {
    botMessage: [
      `Olá!  Eu sou o Leopardus, um aplicativo criado com o intuito de ajudar você a resolver o seu problema da forma mais rápida possível! <br />
      Antes de começar, como você gostaria de ser chamado?`
    ],
    answer: {
      fieldType: types.textField
    },
    fieldName: 'name'
  },
  {
    botMessage: [
      `
    Olá ${fields.name} <br />
    Eu posso te ajudar a resolver problemas envolvendo os seguintes assuntos: alimento impróprio para consumo, energia elétrica, e-sports, inscrição nos órgãos de restrição ao crédito e transportes aéreo, marítimo e rodoviário. <br />
    Também, eu faço a sua declaração para o imposto de renda. <br />
    Sobre o que você quer falar?
    `
    ],
    answer: { fieldType: types.textField },
    fieldName: 'subject'
  },
  {
    botMessage: [],
    answer: { fieldType: types.textField },
    fieldName: 'temp'
  },
  {
    botMessage: [],
    answer: { fieldType: types.textField },
    fieldName: 'temp'
  },
  {
    botMessage: [],
    answer: { fieldType: types.textField },
    fieldName: 'temp'
  },
  {
    botMessage: [`Preciso que você leia o contrato`],
    answer: { fieldType: types.textField },
    fieldName: 'temp'
  },
  {
    botMessage: [
      `Finalizamos. Por favor, anothe seu protocolo ${fields.protocol}.`
    ],
    answer: { fieldType: types.textField },
    fieldName: 'temp'
  }
]

export default dialog
