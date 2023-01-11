import renderPage from "../../../../..";
import { getUrlWithOneParam } from "../../../../../controller/startPage/changeUrl";
import createElement from "../../../../helpers/createElemt";

const createSearchInput = () => {
  
  const getSearchedPage = (e: Event) => {
    const allParams = getUrlWithOneParam(e, 'search');
    renderPage(allParams)
  }

  const searchInput = <HTMLInputElement>createElement('input', 'search-input');
  searchInput.placeholder = 'Search...';

  searchInput.addEventListener('keyup', getSearchedPage);
  
  return searchInput;
}

export default createSearchInput;
