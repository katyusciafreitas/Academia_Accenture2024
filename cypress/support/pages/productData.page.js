const INPUT_START_DATE ='#startdate'
const SELECT_INSURANCE_SUM = '#insurancesum'
const SELECT_MERIT_RATING = '#meritrating'
const SELECT_DAMAGE_INSURANCE= '#damageinsurance'
const BTN_EURO_PROTECTION='#EuroProtection'
const BTN_COURTESY_CAR= '#courtesycar'
const BTN_NEXT_SELECT_PRICE = '#nextselectpriceoption'


Cypress.Commands.add('adicionarProduct', () =>{
    cy.get(INPUT_START_DATE).type('10/10/2024')
    cy.get(SELECT_INSURANCE_SUM).select('3.000.000,00')
    cy.get(SELECT_MERIT_RATING).select('Bonus 1')
    cy.get(SELECT_DAMAGE_INSURANCE).select('Full Coverage')
    cy.get(BTN_EURO_PROTECTION).click({force:true}) 
    cy.get(BTN_COURTESY_CAR).select('Yes')
    cy.get(BTN_NEXT_SELECT_PRICE).click() 
})