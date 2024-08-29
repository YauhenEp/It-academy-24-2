const { Base } = require('./base');

class LoginPage extends Base {
  constructor(page) {
    super(page);
  }

  get loginField() {
    return this.page.locator('[placeholder="Ник или e-mail"]');
  }

  get passwordField() {
    return this.page.locator('[placeholder="Пароль"]');
  }

  get loginButton() {
    return this.page.locator('.auth-button_primary');
  };

  get errorMessage() {
    return this.page.locator('.auth-form__description_error');
  }

  async login(loginName, password) {
    await this.loginField.setValue(loginName);
    await this.passwordField.setValue(password)
    await this.pressElement(this.loginButton);
  }
}

module.exports = LoginPage;