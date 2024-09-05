const loginPage = require('../../page_objects/loginPage')
const homePage = require('../../page_objects/homePage')
const header = require('../../page_objects/component/header')

describe('Onliner test', function () {

  it('should be notification if invalid password', () => {
    homePage.navigate('https://www.onliner.by/');
    header.enterButton().click();
    cy.login('login', 'password');
    cy.get('.auth-form__description_error').should('have.text', 'Неверный логин или пароль')
  })
})