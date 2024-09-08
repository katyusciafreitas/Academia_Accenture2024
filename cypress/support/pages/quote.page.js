const IMPUT_EMAIL = '#email'

Cypress.Commands.add('validarPaginaQuote', () => { 
    cy.get(IMPUT_EMAIL).should('be.visible')
})
