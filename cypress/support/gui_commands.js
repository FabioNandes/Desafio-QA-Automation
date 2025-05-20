
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

Cypress.Commands.add('gui_adicionarNaLista', () => {
    cy.url().should('be.equal', `${Cypress.config('baseUrl')}/home`)
    cy.get('[data-testid="lista-de-compras"]').should('be.visible')
    cy.get(':nth-child(3) > .card-body > div > [href="/minhaListaDeProdutos"] > [data-testid="adicionarNaLista"]').click()
})





    