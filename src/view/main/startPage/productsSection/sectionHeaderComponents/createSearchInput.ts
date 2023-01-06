import renderPage from "../../../../..";
import createElement from "../../../../helpers/createElemt";
//import { renderSearchProducts } from "../../../../../index";

const createSearchInput = () => {
  const searchInput = createElement('input', 'search-input');

  const getNewUrl = (e: Event) => {
    // let newData = [...data];
    //   let allParams = [...params];

    const url = new URL(window.location.href);
    let allParams = url.search.substring(1).split('&');

    const target = <HTMLInputElement>e.target;
    const value = target.value.toLocaleLowerCase();

    if (window.location.href.includes('search')) {
      if (value) {
        allParams = allParams.map((params) => {
          return params.includes('search')
            ? `search=${ value }`
            : params;
        }); 
      } else {
        allParams = allParams.filter((params) => !params.includes('search'));
      }

    } else {
      allParams.push(`search=${ value }`);
      if (!allParams[0]) allParams.shift();
    }
          
    renderPage(allParams)
  }

  searchInput.addEventListener('keyup', getNewUrl);
  return searchInput;
}

export default createSearchInput;
