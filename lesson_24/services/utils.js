import { PageFactory } from "../page-objects/pageFactory.js";

class Utils {
  static async getSelector(stringSelector) {
    const arrayOfString = stringSelector.split(' > ');
    const pageName = arrayOfString[0];
    let objectPath = PageFactory[pageName];

    for (let i = 0; i < arrayOfString.length - 1; i += 1) {
      objectPath = objectPath.children[arrayOfString[i + 1]];
      if (!objectPath) {
        throw new Error(`Unable to find '${arrayOfString[i]}' in ${JSON.stringify(arrayOfString, null, ' ')}`);
      }
    }
    return objectPath;
  }

  static async getElement(selector) {
    if(typeof selector === 'object' && selector.list) {
      return $$(selector.selector)
    }
    return $(selector)
  }

  static async parseWebElement(stringSelector) {
    const selector = await this.getSelector(stringSelector);
    return this.getElement(selector);
  }
}

export { Utils }

