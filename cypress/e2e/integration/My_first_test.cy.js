/// <reference types="cypress"/>

it('Google test', function(){

    cy.visit('https://www.google.com')
    cy.get('#APjFqb').type('JavaScript')
    cy.get('.FPdoLc > center > .gNO89b').click()

})