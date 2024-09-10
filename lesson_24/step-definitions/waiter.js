import {When} from "@wdio/cucumber-framework";
import {Utils} from "../services/utils.js";

When(/^I wait for (.*) seconds$/, async function (seconds) {
  await browser.pause(+seconds * 1000)
});