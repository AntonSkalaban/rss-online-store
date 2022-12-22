import createElement from "../../../../helpers/createElemt";
import { renderSearchProducts } from "../../../../../index";

const createSearchInput = () => {
  const searchInput = createElement('input', 'search-input');

  const searchProducts = (e: Event) => renderSearchProducts(e);

  searchInput.addEventListener('keyup', searchProducts);
  return searchInput;
}

export default createSearchInput;
