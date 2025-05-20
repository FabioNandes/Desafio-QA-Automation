import { faker } from '@faker-js/faker'

describe('Cadastra novo produto', () => {
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
    }
  
  
  
it('successfully', () => {
    cy.api_cadastraProduto(user, product)
      .then(response => {
        if (response.status == 201){
            expect(response.body).to.have.property('message', 'Cadastro realizado com sucesso')
            expect(response.body).to.have.property('_id')
            expect(response.body._id).to.be.a('string')
        } else if (response.status == 400){
            expect(response.body).to.have.property('message', 'Já existe produto com esse nome')
        } else if (response.status == 401){
            expect(response.body).to.have.property('message', 'Token de acesso ausente, inválido, expirado ou usuário do token não existe mais')
        }
      })
  })
})