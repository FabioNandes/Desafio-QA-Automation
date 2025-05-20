
Cypress.Commands.add('gui_cadastroNormal', user => {
    cy.visit( `${Cypress.config('baseUrl')}/cadastrarusuarios`)
    
    cy.get('[data-testid="nome"]').type(user.name)
    cy.get('[data-testid="email"]').type(user.email)
    cy.get('[data-testid="password"]').type(user.password)
    cy.get('[data-testid="cadastrar"]').click()
})

Cypress.Commands.add('gui_cadastroAdministrador', user => {
    cy.visit( `${Cypress.config('baseUrl')}/cadastrarusuarios`)
    
    cy.get('[data-testid="nome"]').type(user.name)
    cy.get('[data-testid="email"]').type(user.email)
    cy.get('[data-testid="password"]').type(user.password)
    cy.get('[data-testid="checkbox"]').type(user.password)
    cy.get('[data-testid="cadastrar"]').click()
})


Cypress.Commands.add('gui_login', user => {
    cy.visit( `${Cypress.config('baseUrl')}/login`)
    
    cy.get('[data-testid="email"]').type(user.email)
    cy.get('[data-testid="senha"]').type(user.password)
    cy.get('[data-testid="entrar"]').click()
})

