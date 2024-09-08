const SELECT_MAKE ='#make'
const INPUT_ENGINE_PERFORMANCE = '#engineperformance'
const INPUT_DATE_OF_MANUFACTURE = '#dateofmanufacture'
const BTN_NUMBER_OF_SEATES = '#numberofseats'
const BTN_FUEL ='#fuel'
const INPUT_LIST_PRICE = '#listprice'
const INPUT_LICENSE_PLATE_NUMBER = '#licenseplatenumber'
const INPUT_ANNUAL_MILEAGE = '#annualmileage'
const BTN_NEXT = '#nextenterinsurantdata'

Cypress.Commands.add('adicionarVehicleData', () =>{
    cy.get(SELECT_MAKE).select('BMW')
    cy.get(INPUT_ENGINE_PERFORMANCE).type('1000')
    cy.get(INPUT_DATE_OF_MANUFACTURE).type('01/01/2022')
    cy.get(BTN_NUMBER_OF_SEATES).select('4')
    cy.get(BTN_FUEL).select('Petrol');
    cy.get(INPUT_LIST_PRICE).type('30000');
    cy.get(INPUT_LICENSE_PLATE_NUMBER).type('ABC1234');
    cy.get(INPUT_ANNUAL_MILEAGE).type('15000');
    cy.get(BTN_NEXT).click();   // Clica no botão Next para ir para a próxima aba
})