import { HomePage } from './homePage'
import { Search } from './components/search'
import { SearchResultPage } from './searchResultPage'

class PageFactory {
  static 'Home Page' = new HomePage();
  static 'Search Result Page' = new SearchResultPage();
}

export { PageFactory };