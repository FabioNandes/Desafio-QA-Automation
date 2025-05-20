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

