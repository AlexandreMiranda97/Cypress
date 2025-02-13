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
const fakePassword = faker.internet.password();

describe('Login test', () => {
    beforeEach(() => { 
        cy.viewport(1024, 768)
        cy.visit('https://parabank.parasoft.com/parabank/index.htm', {timeout: 30000})
       
    })

    it('Realizar cadastro no site Parabank', () => {
        cy.get('.logo')
        cy.get('a').contains('Register').click()
        cy.get('.title').contains('Signing up is easy!')
        cy.get('#customerForm').find('[name="customer.firstName"]').type(randomFName)
        cy.get('#customerForm').find('[id="customer.lastName"]').type(randomLName)
        cy.get('#customerForm').find('[id="customer.address.street"]').type(fakeAdress)
        cy.get('#customerForm').find('[id="customer.address.city"]').type(fakeCity)
        cy.get('#customerForm').find('[id="customer.address.state"]').type(fakeState)
        cy.get('#customerForm').find('[id="customer.address.zipCode"]').type(fakeZipCode)
        cy.get('#customerForm').find('[id="customer.phoneNumber"]').type(fakeNumber)
        cy.get('#customerForm').find('[id="customer.ssn"]').type(fakeSSN)
        cy.get('#customerForm').find('[id="customer.username"]').type(fakeUsername)
        cy.get('#customerForm').find('[id="customer.password"]').type(fakePassword)
        cy.get('#customerForm').find('[id="repeatedPassword"]').type(fakePassword)
        cy.get('[colspan="2"] > .button').click()
        cy.contains('Your account was created successfully. You are now logged in.')
    })
})
