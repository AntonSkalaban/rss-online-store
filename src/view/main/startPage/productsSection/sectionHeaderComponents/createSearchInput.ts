import { getSearchedUrl } from "../../../../../controller/startPage/changeUrl";
import createElement from "../../../../helpers/createElemt";

const createSearchInput = () => {
  const getNewUrl = (e: Event) => {
    getSearchedUrl(e);
  }

  const searchInput = <HTMLInputElement>createElement('input', 'search-input');
  searchInput.placeholder = 'Search...';

  searchInput.addEventListener('keyup', getNewUrl);
  
  return searchInput;
}

export default createSearchInput;
