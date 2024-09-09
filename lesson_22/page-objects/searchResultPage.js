import { Base } from './base.js'

class  SearchResultPage extends Base {
  constructor() {
    super();
  }

  get 'Search Count Header'() {
    return 'h1.srp-controls__count-heading';
  }
}

export { SearchResultPage };