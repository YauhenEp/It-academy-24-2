import { Base } from '../base.js';
import {search} from "../components/search.js";
import { header } from '../components/header.js'


const homePage = {
  name: 'Home Page',
  url: 'https://www.ebay.com/',
  children: {
    'Search Component': search,
    'Header': header
  }
}

export { homePage };