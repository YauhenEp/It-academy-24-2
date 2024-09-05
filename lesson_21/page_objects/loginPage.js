const { Base } = require('./base');

class LoginPage extends Base {
  constructor(page) {
    super(page);
  }

  get loginField() {
    return cy.get('[placeholder="Ник или e-mail"]');
  }

  get passwordField() {
    return cy.get('[placeholder="Пароль"]');
  }

  get loginButton() {
    return cy.get('.auth-button_primary');
  };

  get errorMessage() {
    return cy.get('.auth-form__description_error');
  }

  async login(loginName, password) {
    await this.loginField.type(loginName);
    await this.passwordField.type(password)
    await this.loginButton.click();
  }
}

module.exports = new LoginPage();