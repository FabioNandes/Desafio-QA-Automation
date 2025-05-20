import { faker } from '@faker-js/faker'

describe('Listar produtos cadastrados', () => {
    const user = {
        name: faker.person.fullName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        administrador: 'true', 
    }
  
    it('successfully', () => {
    cy.api_listaProdutos(user)
      .then(response => {
        expect(response.status).to.equal(200)

        expect(response.body).to.have.property('quantidade')
        expect(response.body).to.have.property('produtos')
        expect(response.body.produtos).to.be.an('array')

        response.body.produtos.forEach((produto) => {
            expect(produto).to.include.all.keys('nome', 'preco', 'descricao', 'quantidade', '_id')
    
            expect(produto.nome).to.be.a('string')
            expect(Number.isInteger(produto.preco)).to.be.true
            expect(produto.descricao).to.be.a('string')
            expect(Number.isInteger(produto.quantidade)).to.be.true
            expect(produto._id).to.be.a('string')
        })
    })
  })
})