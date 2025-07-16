// Este objeto conterá todos os seletores (locators) para diferentes páginas ou componentes.
// É uma boa prática agrupar seletores por funcionalidade ou página.
const locators = {
  // Seletores para a página de Login
  login: {
    INPUT_EMAIL: '.style__ContainerFormLogin-sc-1wbjw6k-0 > :nth-child(1) > .input__default',
    INPUT_PASSWORD: '.style__ContainerFormLogin-sc-1wbjw6k-0 > .login__password > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default',
    BUTTON_ACESSAR: '.otUnI',
    BUTTON_REGISTRAR: 'button[type="button"]',
    BUTTON_CONHECER_REQUISITOS: 'a[href="/requirements"]',
  },
  // Seletores para a página inicial (Home Page)
  home: {
    BUG_BANK_TITLE: 'h1',
  },
  // Seletores para a página de Requisitos
  requirements: {
    PAGE_TITLE: 'h2', // Assumindo que o título da página de requisitos é um h2
  },
  novoCliente:{
    BUTTON_REGISTRAR: '.ihdmxA',
    INPUT_EMAIL: ':nth-child(2) > .input__default',
    INPUT_NOME: ':nth-child(3) > .input__default',
    INPUT_SENHA: ':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default',
    INPUT_CONFIRMACAO_SENHA: ':nth-child(5) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default',
    CONTA_SALDO: '#toggleAddBalance',
    BUTTON_CADASTRAR: '.styles__ContainerFormRegister-sc-7fhc7g-0 > .style__ContainerButton-sc-1wsixal-0',
    BUTTON_FECHAR: '#btnCloseModal'
  },

  mensagens:{
    LOGIN_INVALIDO: '[id="modalText"]',
    CLOSE_MODAL: '[id="btnCloseModal"]',
  }
  // Adicione mais seções conforme seu projeto cresce
};

// Exporta o objeto 'locators' para que possa ser importado em outros arquivos.
export default locators;