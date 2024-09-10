import { homePage } from './pages/homePage.js'
import { searchResultPage } from './pages/searchResultPage.js'
import { cartPage } from './pages/cartPage'

class PageFactory {
  static 'Home Page' = homePage;
  static 'Search Result Page' = searchResultPage;
  static 'Cart Page' = cartPage;
}

export { PageFactory };