import Searching from "./search.page";
const {Given, When, Then} = require('@badeball/cypress-cucumber-preprocessor');

Given('I open web Application', ()=> {
    Searching.visit();
})

When('I search online', () => {
    Searching.search();
})

Then('I should see the result', () => {
    Searching.validation();
})