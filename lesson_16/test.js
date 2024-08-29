const {Builder, By, until} = require('selenium-webdriver');

(async function() {
  const browser = new Builder().forBrowser('chrome').build();
  await browser.get('https://www.onliner.by/');
  const enterButton = await browser.findElement(By.css('.auth-bar__item.auth-bar__item--text'));
  await enterButton.click();
  const loginField = await browser.findElement(By.css('[placeholder="Ник или e-mail"]'))
  await loginField.sendKeys('Login Name');
  const passwordField = await browser.findElement(By.css('[placeholder="Пароль"]'))
  await passwordField.sendKeys('Password');
  const loginButton = await browser.findElement(By.css('.auth-button_primary'))
  await loginButton.click();
  await browser.wait(until.elementLocated(By.css('.auth-form__description_error')));
  const errorMessage = await browser.findElement(By.css('.auth-form__description_error'))
  console.log(await errorMessage.getText());

  await browser.quit();
})();