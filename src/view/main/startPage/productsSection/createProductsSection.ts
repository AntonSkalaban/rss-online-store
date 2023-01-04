import createBlock from "../../../helpers/createBlock";
import createElement from "../../../helpers/createElemt";
import createSearchInput from "./sectionHeaderComponents/createSearchInput";
import createSortInput from "./sectionHeaderComponents/createSortInput";
//import createProducstViewContainerts from "./sectionHeaderComponents/createProducstViewContainer";
import "./productsSection.scss"

const createProductsSection = () => {
  const [ productsSection,  productsSectionHeader, productsSectionMain ] = createBlock('products-section');
  productsSectionMain.classList.add('products-section__main');

  const sortInput = createSortInput();
  const productsSectionTitle = createElement('h2', 'products-section__title')
  const searchInput = createSearchInput();
  //const producstViewContainer = createProducstViewContainerts();

  productsSectionHeader.classList.add('products-section__header')
  productsSectionHeader.appendChild(sortInput);
  productsSectionHeader.appendChild(productsSectionTitle);
  productsSectionHeader.appendChild(searchInput);
  //productsSectionHeader.appendChild(producstViewContainer);

  return productsSection;
}

export default createProductsSection;
