import { Base } from './base.js'
import {Search} from "./components/search.js";

class  SearchResultPage extends Base {
  constructor() {
    super();
    this['Search Component'] = new Search();
  }

  get 'Search Count Header'() {
    return 'h1.srp-controls__count-heading';
  }
}

export { SearchResultPage };