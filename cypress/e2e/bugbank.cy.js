import { faker } from '@faker-js/faker';

describe('Validação da Página Inicial do BugBank', () => {

  let dadosUsuarioCadastrado;
  beforeEach(() => {
    cy.visit('/');
  });

   it('Validar login e senha inválido', () => {
    cy.login('teste@gmail.com', '123456');
    cy.validarMensagem();
});

   it('Registrar um novo login', () => {
    const emailGerado = faker.internet.email();
    const nomeGerado = faker.person.fullName();
    const senhaGerada = faker.internet.password();
    cy.registrarLogin(emailGerado, nomeGerado, senhaGerada).then(dados => {
      dadosUsuarioCadastrado = dados;
    });
  });

   it('Efetuar login', () => {
    cy.login(dadosUsuarioCadastrado.email, dadosUsuarioCadastrado.senha);
  });
});