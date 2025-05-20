Cypress.Commands.add('api_cadastraUsuario', user => {
  cy.request({
    method: 'POST',
    url: `https://serverest.dev/usuarios`,
    body: {
      nome: user.name,
      email: user.email,
      password: user.password,
      administrador: user.administrador,
    },
  })
})


Cypress.Commands.add('api_login', user => {
  return cy.api_cadastraUsuario(user)
    .then(() => {
      return cy.request({
        method: 'POST',
        url: `https://serverest.dev/login`,
        body: {
          email: user.email,
          password: user.password
        }
      })
  })
})


Cypress.Commands.add('api_listaProdutos', user => {
  cy.api_login(user)
    .then(response => {
      cy.request({
        method: 'GET',
        url: `https://serverest.dev/produtos`,
        headers: { Authorization: response.authorization }
      })
  })
})


Cypress.Commands.add('api_cadastraProduto', (user, product) => { 
  return cy.api_login(user)
    .then(response => {
      return cy.request({
        method: 'POST',
        url: `https://serverest.dev/produtos`,
        headers: { Authorization: response.body.authorization },
        body: {
          nome: product.name,
          preco: product.price,
          descricao: product.description,
          quantidade: product.quantity
        }
     })
  })
});
