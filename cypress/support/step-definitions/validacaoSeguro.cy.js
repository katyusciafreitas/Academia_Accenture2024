import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps'
 
Given ('que o usuario esta no site vehicle insurance application', () => {
    cy.visit('/')
})

When ('clica na opcao automobile para ser direcionado ao formulario', () => {
    cy.acessarAutomobile()
})
 
And ('preencho o formulario de enter vehicle data', () => {
    cy.adicionarVehicleData()
})

And ('preencho o formulario de enter insurant data', () => {
    cy.adicionarInsurantData()
})

And ('preencho o formulario de enter product data', () => {
    cy.adicionarProduct()
})

And ('seleciono a opcao de preço na select price option', () => {
    cy.selecionarPrice()
    
})

Then ('valido a acao ao ser exibido com sucesso a pagina send quote', () => {
    cy.validarPaginaQuote()
})