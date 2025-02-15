describe('Teste de api Sauce Demo', () => {
    cy.request('POST', 'https://www.saucedemo.com', {
        username: "standard_user",
        password: "secret_sauce",
    }).then((response) => {
        cy.log(response.body)
    })
});