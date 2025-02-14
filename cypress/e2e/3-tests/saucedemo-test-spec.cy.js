// npx cypress run --headless --spec "cypress/e2e/3-tests/saucedemo-test-spec.cy.js"

let nomeProduto;

describe( 'Acessar o site SauceDemo', () => {
    beforeEach(() => {
        cy.viewport(1024, 768)
    });

    it('Realizar testes no site', () => {
        // Acessar a url com sucesso
        cy.visit('https://www.saucedemo.com')
        cy.url().should('include', 'https://www.saucedemo.com')

        // Erro ao realizar login com usuário inválido
        cy.get('#user-name').type('wrong_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.wait(500)
        cy.get('div').contains('error').should('exist')
        cy.wait(500)

        // Realizar login com usuário válido
        cy.reload()
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('.inventory_item').should('exist')
        cy.wait(500)

        // Adicionar produto ao carrinho
        cy.get('.inventory_item:nth-child(1) > .inventory_item_description > .pricebar > button').first().click()
        cy.get('.inventory_item_name').first().invoke('text').then(text => {
            nomeProduto = text;
        });
        console.log(nomeProduto);
        // cy.get('.inventory_item:nth-child(1) > .inventory_item_description > .pricebar > button').click()
        cy.get('#remove-sauce-labs-backpack').should('exist')
        cy.get('#shopping_cart_container').click()
        cy.then(() => {
            cy.get('.inventory_item_name').should('have.text', nomeProduto)
        })
        cy.wait(500)
    });
})