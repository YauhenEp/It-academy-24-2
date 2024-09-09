import { Base } from '../base.js'

class Search extends Base {
  constructor() {
    super();
  }

  get 'Search Input'() {
    return '#gh-ac-box2 input.ui-autocomplete-input'
  }

  get 'Search Button'() {
    return '#gh-btn';

  }
}

export { Search };