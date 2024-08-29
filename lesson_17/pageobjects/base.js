
class Base {
  async navigate(url) {
    await browser.url(url);
  }

  async pressElement(webElement, timeout = 10000) {
    await webElement.waitForClickable({
      timeout,
      timeoutMsg: `Element ${webElement.locator} is not clickable after ${timeout}`
    })
    await webElement.click()
  }
}

module.exports = { Base }