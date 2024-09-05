const { Base } = require('../base');

class Header extends Base {
  constructor() {
    super();
    this.enterButton = () => cy.get('.auth-bar__item.auth-bar__item--text');
  }
}

module.exports = new Header();