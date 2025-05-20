import { faker } from '@faker-js/faker'

describe('Login com credenciais inválidas', () => {
 
  it('Login com email inválido sem @', () => {
    const user = {
      email: 'abc',
      password: '1234',
    }

    cy.gui_login(user)

    cy.get('[data-testid="email"]').then(($input) => {
        expect($input[0].validationMessage).to.contain('Inclua um "@" no endereço de e-mail');
    });
  })

  it('Login de usuário não cadastrado', () => {
    const user = {
        email: faker.internet.email(),
        password: faker.internet.password(),
    }

    cy.gui_login(user)

    cy.get('.form').should('contain', 'Email e/ou senha inválidos');
  })
  
})