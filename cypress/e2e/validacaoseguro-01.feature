#utf-8
#language: pt

Funcionalidade: validacaoSeguro-01 - Validação da contração do seguro 

  Cenário: Preencher com sucesso formulario de contratação do seguro automotivo no site tricentis 
    Dado que o usuario esta no site vehicle insurance application
    Quando clica na opcao automobile para ser direcionado ao formulario 
    E preencho o formulario de enter vehicle data
    E preencho o formulario de enter insurant data
    E preencho o formulario de enter product data
    E seleciono a opcao de preço na select price option
    Então valido a acao ao ser exibido com sucesso a pagina send quote