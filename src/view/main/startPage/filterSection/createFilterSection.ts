import createElement from "../../../helpers/createElemt";
import createFilterBtnsBlock from './filterBtns/createFilterBtnsBlock'
import createCategoryBlock from "./filterBlocks/createCategoryBlock";
import createBrandBlock from "./filterBlocks/createBrandBlock";
import createPriceBlock from "./filterBlocks/createPriceBlock";
import createStockBlock from "./filterBlocks/createStockBlock"
import { IProduct } from "../../../../model/dataType";

import './filterSection.scss'

const createFilterSection = (data: Array<IProduct>) => {
  const filterSection = createElement('div', 'filter-section');

  const filterBtnsBlock = createFilterBtnsBlock();

  const filterBlock = createCategoryBlock(data);
  const brandBlock = createBrandBlock(data);
  const priceBlock = createPriceBlock(data);
  const stockBlock = createStockBlock(data);

  filterSection.appendChild(filterBtnsBlock)
  filterSection.appendChild(filterBlock);
  filterSection.appendChild(brandBlock);
  filterSection.appendChild(priceBlock);
  filterSection.appendChild(stockBlock);
  return filterSection;
}

export default createFilterSection;