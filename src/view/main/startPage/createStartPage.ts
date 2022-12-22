import createElement from "../../helpers/createElemt";
import createFilterSection from "./filterSection/createFilterSection";
import createProductsSection from "./productsSection/createProductsSection";

const createStartPage = () => {
  const startPage = createElement('div', 'start-page');
  const filterSection = createFilterSection();
  const productsSection = createProductsSection();

  startPage.appendChild(filterSection);
  startPage.appendChild(productsSection);

  return startPage;
}

export default createStartPage;