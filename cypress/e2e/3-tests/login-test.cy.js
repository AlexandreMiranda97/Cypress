describe('Login test', function(){
    it('Success login', () => {
        cy.visit('/')
        cy.get('#user-name').type('standard_user')
        // cy.get('id="password"').type('secret_sauce')
        // cy.get('id="login-button"').click()
    });
})
