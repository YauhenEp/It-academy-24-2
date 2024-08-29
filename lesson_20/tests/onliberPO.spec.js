const {test, expect} = require('@playwright/test');
const LoginPage = require('../page-objects/loginPage')
const HomePage = require('../page-objects/homePage')
const Header = require('../page-objects/component/header')

test.describe('Onliner test', async function () {
  let loginPage;
  let homePage;
  let header;

  test.beforeEach(async ({page}) => {
    loginPage = new LoginPage(page)
    homePage = new HomePage(page)
    header = new Header(page)
  })

  test('should be notification if invalid password', async ({page}) => {
    await homePage.navigate('https://www.onliner.by/');
    await header.pressElement(await header.enterButton());
    await loginPage.login('login', 'password');
    await expect(await loginPage.errorMessage.textContent()).toEqual('Неверный логин или пароль')
  })
})