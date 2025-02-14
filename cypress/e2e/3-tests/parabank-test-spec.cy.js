import { faker } from '@faker-js/faker';

const randomFName = faker.person.firstName();
const randomLName = faker.person.lastName();
const fakeAdress = faker.location.streetAddress();
const fakeCity = faker.location.city();
const fakeState = faker.location.state();
const fakeZipCode = faker.location.zipCode();
const fakeNumber = faker.phone.number({ style: 'national' });
const fakeSSN = faker.string.numeric(9);
const fakeUsername = faker.internet.username();
const fakePassword = faker.internet.password(12);

describe('Realizar testes no site Parabank', () => {
    beforeEach(() => {
        cy.clearAllCookies
        cy.clearAllSessionStorage
        cy.viewport(1024, 768)
        cy.visit('https://parabank.parasoft.com/parabank/index.htm/', {timeout: 30000})
    })

    // npx cypress run --headless --spec "cypress/e2e/3-tests/parabank-test-spec.cy.js"
    it('Acessar o site Parabank', () => {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm', {timeout: 30000})
        cy.url().should('eq', 'https://parabank.parasoft.com/parabank/index.htm')
    });

    it('Registrar novo usuario', () => {
        cy.get('a').contains('Register').click()
        cy.get('.title').invoke('val').should('have.text', 'Signing up is easy!')
        cy.get('#customerForm[name="customer.firstName"]').type(randomFName)
        cy.get('#customerForm').invoke('val').should('have.text', randomFName)
        cy.get('#customerForm[id="customer.lastName"]').type(randomLName)
        cy.get('#customerForm[id="customer.lastName"]').invoke('val').should('have.text', randomLName)
        cy.get('#customerForm[id="customer.address.street"]').type(fakeAdress)
        cy.get('#customerForm[id="customer.address.street"]').invoke('val').should('have.text', fakeAdress)
        cy.get('#customerForm[id="customer.address.city"]').type(fakeCity)
        cy.get('#customerForm[id="customer.address.city"]').invoke('val').should('have.text', fakeCity)
        cy.get('#customerForm[id="customer.address.state"]').type(fakeState)
        cy.get('#customerForm[id="customer.address.state"]').invoke('val').should('have.text', fakeState)
        cy.get('#customerForm[id="customer.address.zipCode"]').type(fakeZipCode)
        cy.get('#customerForm[id="customer.address.zipCode"]').invoke('val').should('have.text', fakeZipCode)
        cy.get('#customerForm[id="customer.phoneNumber"]').type(fakeNumber)
        cy.get('#customerForm[id="customer.phoneNumber"]').invoke('val').should('have.text', fakeNumber)
        cy.get('#customerForm[id="customer.ssn"]').type(fakeSSN)
        cy.get('#customerForm[id="customer.ssn"]').invoke('val').should('have.text', fakeSSN)
        cy.get('#customerForm[id="customer.username"]').type(fakeUsername)
        cy.get('#customerForm[id="customer.username"]').invoke('val').should('have.text', fakeUsername)
        cy.get('#customerForm[id="customer.password"]').type(fakePassword)
        cy.get('#customerForm[id="customer.password"]').invoke('val').should('have.length', 12)
        cy.get('#customerForm[id="repeatedPassword"]').type(fakePassword)
        cy.get('#customerForm[id="repeatedPassword"]').invoke('val').should('have.length', 12)
        cy.get('[colspan="2"] > .button').click()
        cy.contains('Your account was created successfully. You are now logged in.').should('exist')
    });
})
