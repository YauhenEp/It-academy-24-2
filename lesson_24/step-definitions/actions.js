import { Given, When, Then } from '@wdio/cucumber-framework';
import { Utils } from "../services/utils.js";


Given(/^I go to (.*) page$/, async (url) => {
    await browser.url(url)
});

When(/^I input text "(.*)" to component "(.*)"$/, async function (text, stringSelector) {
    const selector = await Utils.getSelector(stringSelector);
    const webElement = await Utils.getElement(selector);
    await webElement.waitForDisplayed();
    await webElement.setValue(text)
});

When(/^I click on "(.*)" button$/, async (stringSelector) => {
    const selector = await Utils.getSelector(stringSelector);
    const webElement = await Utils.getElement(selector);
    await webElement.waitForDisplayed();
    await webElement.click();
});


