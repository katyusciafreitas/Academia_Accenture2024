const BTN_SILVER = '#selectsilver'
const BTN_NEXT_SEND_QUOTE = '#nextsendquote'

Cypress.Commands.add('selecionarPrice', () =>{
cy.get(BTN_SILVER).click({force:true}) 
cy.get(BTN_NEXT_SEND_QUOTE).click()
})