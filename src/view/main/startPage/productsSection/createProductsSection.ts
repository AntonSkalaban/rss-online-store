import createBlock from "../../../helpers/createBlock";
import createElement from "../../../helpers/createElemt";
import createSearchInput from "./sectionHeaderComponents/createSearchInput";
import createSortInput from "./sectionHeaderComponents/createSortInput";

import "./productsSection.scss"

const createProductsSection = () => {
  const [ productsSection,  productsSectionHeader, productsSectionMain ] = createBlock('products-section');
  productsSectionMain.classList.add('products-section__main');

  const sortInput = createSortInput();
  const productsSectionTitle = createElement('h2', 'products-section__title')
  const searchInput = createSearchInput();

  productsSectionHeader.classList.add('products-section__header')
  productsSectionHeader.appendChild(sortInput);
  productsSectionHeader.appendChild(productsSectionTitle);
  productsSectionHeader.appendChild(searchInput);
  console.log(productsSection)
  return productsSection;
}

export default createProductsSection;
