const { Base } = require('../base');

class Header extends Base {
  constructor(page) {
    super(page);
    this.enterButton = () => this.page.locator('.auth-bar__item.auth-bar__item--text');
  }
}

module.exports = Header;