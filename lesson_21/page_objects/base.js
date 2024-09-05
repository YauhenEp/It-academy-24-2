
class Base {

  constructor() {}
  async navigate(url) {
    await cy.visit(url);
  }
}

module.exports = { Base }