import { login } from '../../support/pages/login'
const elem = require('../../support/pages/login/elements').elements

let nomeProduto;

// npx cypress run --headless --spec "cypress/e2e/3-tests/saucedemo-test-spec.cy.js"
describe( 'Acessar o site SauceDemo', () => {
    beforeEach(() => {
        cy.viewport(1024, 768)
    });

    it('Realizar testes no site', () => {
        // Acessar a url com sucesso
        login.acessarPagina

        // Erro ao realizar login com usuário inválido
        login.realizarLogin('wrong_user')
        cy.get(elem.alertErro).should('exist')

        // Realizar login com usuário válido
        cy.reload()
        login.realizarLogin('standard_user')
        cy.get('.inventory_item').should('exist')

        // Adicionar produto ao carrinho
        cy.get('.inventory_item:nth-child(1) > .inventory_item_description > .pricebar > button').first().click()
        cy.get('.inventory_item_name').first().invoke('text').then(text => {
            nomeProduto = text;
        });

        console.log(nomeProduto);
        
        cy.get('#remove-sauce-labs-backpack').should('exist')
        cy.get('#shopping_cart_container').click()
        cy.then(() => {
            cy.get('.inventory_item_name').should('have.text', nomeProduto)
        })
        cy.wait(500)
    });
})