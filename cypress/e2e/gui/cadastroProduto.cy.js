import { faker } from '@faker-js/faker'
import 'cypress-file-upload';

describe('Cadastro de novo produto pelo administrador', () => {
 
    const user = {
        name: faker.person.fullName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        administrador: 'true', 
    }

    const product = {
        name: faker.commerce.productName(),
        price: faker.commerce.price({ min: 100, max: 200, dec: 0 }),
        description: faker.commerce.productDescription(),
        quantity: faker.number.int(100),
        file: '/box.jpg',
    }
  
    beforeEach(() => {
        cy.api_cadastraUsuario(user)
        cy.gui_login(user)
    })

    it('successfully', () => {        
        cy.gui_cadastraProduto(product)
        cy.url().should('be.equal', `${Cypress.config('baseUrl')}/admin/listarprodutos`)
        cy.get('.jumbotron').should('contain', product.name)
    })
})