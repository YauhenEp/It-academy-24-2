import { search } from '../components/search.js';
import { header } from '../components/header.js'

const searchResultPage = {
  name: 'Search Result Page',
  url: 'https://www.ebay.com/sch/',
  children: {
    'Search Count Header': 'h1.srp-controls__count-heading',
    'Search Component': search,
    'Header': header
  }
}

export { searchResultPage };