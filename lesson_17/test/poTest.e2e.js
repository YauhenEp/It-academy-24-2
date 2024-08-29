const HomePage = require('../pageobjects/homePage');
const loginPage = require('../pageobjects/loginPage');
const header = require('../pageobjects/component/header');

const homePage = new HomePage();

describe('Onliner test', () => {
  it(`should be error message if login and password are wrong`, async () => {
    await homePage.navigate('https://www.onliner.by/');
    await header.pressElement(await header.enterButton());
    await loginPage.login('login', 'password');
    console.log();
    expect(await loginPage.errorMessage.getText()).toEqual('Неверный логин или пароль');
  })
});