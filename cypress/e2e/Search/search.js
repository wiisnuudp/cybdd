const {Given, When, Then} = require('@badeball/cypress-cucumber-preprocessor');

Given('I open web Application', ()=> {
    cy.visit('http://zero.webappsecurity.com/index.html')
})

When('I search online', () => {
    cy.get('#searchTerm').type('online {enter}')
})

Then('I should see the result', () => {
    cy.get('h2').should('contain.text', 'Search Results:')
})