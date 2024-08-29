const { Base } = require('./base');

class LoginPage extends Base {
  constructor() {
    super();
  }

  get loginField() {
    return $('[placeholder="Ник или e-mail"]');
  }

  get passwordField() {
    return $('[placeholder="Пароль"]');
  }

  get loginButton() {
    return $('.auth-button_primary');
  };

  get errorMessage() {
    return $('.auth-form__description_error');
  }

  async login(loginName, password) {
    await this.loginField.setValue(loginName);
    await this.passwordField.setValue(password)
    await this.pressElement(this.loginButton);
  }
}

module.exports = new LoginPage();