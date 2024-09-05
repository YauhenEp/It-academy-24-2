describe('Onliner test', async function () {
  it('should be notification if invalid password', async () => {
    cy.visit('https://www.onliner.by/');
    cy.get('.auth-bar__item.auth-bar__item--text').click();
    cy.get('[placeholder="Ник или e-mail"]').type('Login Name')
    cy.get('[placeholder="Пароль"]').type('Password')
    cy.get('.auth-button_primary').click()
    cy.get('.auth-form__description_error').should('have.text', 'Неверный логин или пароль')
  })
})