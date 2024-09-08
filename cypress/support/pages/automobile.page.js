const BTN_AUTOMOBILE = '#nav_automobile'

Cypress.Commands.add('acessarAutomobile', () =>{
    cy.get(BTN_AUTOMOBILE).click() 
})