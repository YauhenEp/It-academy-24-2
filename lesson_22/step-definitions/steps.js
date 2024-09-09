import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'


Given(/^I navigate on (.*) page$/, async (url) => {
    await browser.url(url)
});

When('I input text {string} to component {locator}', async function (text, selector) {
    const world = this;
    world.newVariable = await $(selector).getText();
    console.log('world 1 --- ', world)
    await $(selector).waitForDisplayed();
    await $(selector).setValue(text)
});

When('I click on {locator} button', async (selector) => {
    await $(selector).waitForDisplayed();
    await $(selector).click();
});

Then('I expect that element {locator} should contains text {string}', async function (selector, text) {
    const world = this;
    console.log('world 2 --- ', world)
    await $(selector).waitForDisplayed();
    await expect(await $(selector).getText()).toContain(text)
})
