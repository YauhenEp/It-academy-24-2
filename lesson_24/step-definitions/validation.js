import {Then} from "@wdio/cucumber-framework";
import {Utils} from "../services/utils.js";
import {expect} from "@wdio/globals";

Then(/^I expect that element "(.*)" should contains text "(.*)"$/, async function (stringSelector, text) {
  const selector = await Utils.getSelector(stringSelector);
  const webElement = await Utils.getElement(selector);
  await webElement.waitForDisplayed();
  await expect(await webElement.getText()).toContain(text)
})

Then(/^I expect that element "(.*)" should be( not)? "(clickable|displayed|enable)"$/, async (selectorString, negative, elementState) => {
  const webElement = await Utils.parseWebElement(selectorString);

  switch (elementState) {
    case 'clickable':
      negative ? expect(await webElement.isClickable()).toBe(false) : expect(await webElement.isClickable()).toBe(true);
      break;
    case 'displayed':
      negative ? expect(await webElement.isDisplayed()).toBe(false) : expect(await webElement.isDisplayed()).toBe(true);
      break;
    case 'enable':
      negative ? expect(await webElement.isEnabled()).toBe(false) : expect(await webElement.isEnabled()).toBe(true);
      break;
  }
})