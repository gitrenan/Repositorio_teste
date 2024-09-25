describe('Teste de Login', () => {
  it('Deve permitir que o usuário faça login com a senha correta', () => {
    cy.visit('https://the-internet.herokuapp.com/login');

    cy.get('input[name="username"]').type('tomsmith');

    cy.get('input[name="password"]').type('SuperSecretPassword!');

    cy.get('button[type="submit"]').click();

    cy.contains('Logout').click();

    cy.get('input[name="username"]').type('dgdg');

    cy.get('input[name="password"]').type('sgfsgfs');

    cy.get('button[type="submit"]').click();

  });
});
