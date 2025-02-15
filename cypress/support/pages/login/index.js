const elem = require('./elements').elements;

class login {
    acessarPagina(){
        cy.visit('https://www.saucedemo.com')
        cy.get(elem.title).should('be.visible')
    }

    realizarLogin(usuario){
        cy.get(elem.username).type(usuario)
        cy.get(elem.password).type('secret_sauce')
        cy.get(elem.loginButton).click()
        cy.wait(500)
    }
}
export default new login();