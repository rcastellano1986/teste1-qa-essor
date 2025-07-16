import locators from '../support/locators';

Cypress.Commands.add('login', (email, password) => {
  cy.get(locators.login.INPUT_EMAIL).should('be.visible').type(email); 
  cy.get(locators.login.INPUT_PASSWORD).should('be.visible').type(password); 
  cy.get(locators.login.BUTTON_ACESSAR).should('be.visible').click(); 
  cy.wait(2000)
});

Cypress.Commands.add('validarMensagem', () => {
    cy.contains(locators.mensagens.LOGIN_INVALIDO,'Usuário ou senha inválido. Tente novamente ou verifique suas informações!', { timeout: 10000 }).should('be.visible');
    cy.get(locators.mensagens.CLOSE_MODAL).should('be.visible').click()
    cy.wait(2000)
});

Cypress.Commands.add('registrarLogin', (email, nome, senha) => {
  
    cy.get(locators.novoCliente.BUTTON_REGISTRAR, { timeout: 20000 }).should('be.visible').click({force: true});
    cy.get(locators.novoCliente.INPUT_EMAIL).should('be.enabled').type(email, {force: true}); 
    cy.get(locators.novoCliente.INPUT_NOME).should('be.enabled').type(nome, {force: true});
    cy.get(locators.novoCliente.INPUT_SENHA).should('be.enabled').type(senha, {force: true});
    cy.get(locators.novoCliente.INPUT_CONFIRMACAO_SENHA).should('be.enabled').type(senha, {force: true});
    cy.get(locators.novoCliente.BUTTON_CADASTRAR).should('be.enabled').click({force: true});
    cy.get(locators.novoCliente.BUTTON_FECHAR).should('be.visible').click();
    cy.wait(2000)
    return cy.wrap({ email, senha, nome });
});