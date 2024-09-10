import { Base } from '../base.js'

const search = {
  name: 'Search Component',
  selector: '.gh-tbl',
  children: {
    'Search Input': '#gh-ac-box2 input.ui-autocomplete-input',
    'Search Button': '#gh-btn',
    'Categories Options': {
      selector: '#gh-cat-box option',
      list: true
    }
  }
}

export { search };