import { faker } from '@faker-js/faker'

describe('Adição de produto à lista pelo usuário', () => {
 
    const user = {
        name: faker.person.fullName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        administrador: 'false', 
    }
  
    beforeEach(() => {
        cy.api_cadastraUsuario(user)
        cy.gui_login(user)
    })

    it('successfully', () => {
        
        cy.gui_adicionarNaLista()
        cy.url().should('be.equal', `${Cypress.config('baseUrl')}/minhaListaDeProdutos`)
        cy.get('.jumbotron > h1').should('contain', 'Lista de Compras')    
    })
})