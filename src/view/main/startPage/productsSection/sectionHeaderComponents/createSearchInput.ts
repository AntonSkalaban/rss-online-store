import renderPage from "../../../../..";
import { getSearchedUrl } from "../../../../../controller/startPage/changeUrl";
import createElement from "../../../../helpers/createElemt";

const createSearchInput = () => {
  
  const getSearchedPage = (e: Event) => {
    const allParams = getSearchedUrl(e);
    renderPage(allParams)
  }

  const searchInput = <HTMLInputElement>createElement('input', 'search-input');
  searchInput.placeholder = 'Search...';

  searchInput.addEventListener('keyup', getSearchedPage);
  
  return searchInput;
}

export default createSearchInput;
