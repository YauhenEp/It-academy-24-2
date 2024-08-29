const {test, expect} = require('@playwright/test')

test.describe.skip('Onliner test', async function () {
  test('should be notification if invalid password', async ({page}) => {
    await page.goto('https://www.onliner.by/');
    const enterButton = await page.locator('.auth-bar__item.auth-bar__item--text');
    await enterButton.click();
    const loginField = await page.locator('[placeholder="Ник или e-mail"]')
    await loginField.fill('Login Name');
    const passwordField = page.locator('[placeholder="Пароль"]')
    await passwordField.fill('Password')
    const loginButton = await page.locator('.auth-button_primary')
    await loginButton.click();
    const errorMessage = await page.locator('.auth-form__description_error')
    await console.log('text ---- ', await errorMessage.textContent())
    await expect(await errorMessage.textContent()).toEqual('Неверный логин или пароль')
  })
})