import { faker } from '@faker-js/faker'

describe('Cadastro de usuário não administrador', () => {
 
  it('successfully', () => {
    const user = {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    }

    cy.gui_cadastroNormal(user)

    cy.get('.form').should('contain', 'Cadastro realizado com sucesso');
    cy.url().should('be.equal', `${Cypress.config('baseUrl')}/home`)
    cy.get('[data-testid="lista-de-compras"]').should('be.visible')
  })
})


describe('Cadastro de usuário administrador', () => {
 
  it('successfully', () => {
    const user = {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    }

    cy.gui_cadastroAdministrador(user)

    cy.get('.form').should('contain', 'Cadastro realizado com sucesso');
    cy.url().should('be.equal', `${Cypress.config('baseUrl')}/admin/home`)
    cy.get('.jumbotron > h1').should('contain', `${user.name}`)
    cy.get('[data-testid="cadastrar-produtos"]').should('be.visible')
    
  })
})