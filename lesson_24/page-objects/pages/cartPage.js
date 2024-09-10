import {search} from "../components/search.js";
import { header } from '../components/header.js'


const cartPage = {
  name: 'Home Page',
  url: 'https://www.ebay.com/',
  children: {
    'Search Component': search,
    'Header': header,
    'Sign In Button': `button.sign-in`,
    'Continue Shopping Button': 'a.start-shop'
  }
}

export { cartPage };