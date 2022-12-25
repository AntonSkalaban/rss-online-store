import createElement from "../../helpers/createElemt";
import createFilterSection from "./filterSection/createFilterSection";
import createProductsSection from "./productsSection/createProductsSection";
import { IProduct } from "../../../model/dataType";

import './startPage.scss'

const createStartPage = (data: Array<IProduct>) => {
  const startPage = createElement('div', 'start-page');
  const filterSection = createFilterSection(data);
  const productsSection = createProductsSection();

  startPage.appendChild(filterSection);
  startPage.appendChild(productsSection);

  return startPage;
}

export default createStartPage;