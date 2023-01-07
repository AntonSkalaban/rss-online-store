import createElement from "../../../helpers/createElemt";
import createFilterBtnsBlock from './filterBtns/createFilterBtnsBlock'
import createCheckboxBlock from "./filterBlocks/createCheckboxBlock";
import { IProduct } from "../../../../model/dataType";

import './filterSection.scss'
import createSliderBlock from "./filterBlocks/createSliderBlock";

const createFilterSection = (data: Array<IProduct>) => {
  const filterSection = createElement('div', 'filter-section');

  const filterBtnsBlock = createFilterBtnsBlock();

  const filterBlock = createCheckboxBlock(data, 'category');
  const brandBlock = createCheckboxBlock(data, 'brand');
  const priceBlock = createSliderBlock(data, 'price');
  const stockBlock = createSliderBlock(data, 'stock');

  filterSection.appendChild(filterBtnsBlock)
  filterSection.appendChild(filterBlock);
  filterSection.appendChild(brandBlock);
  filterSection.appendChild(priceBlock);
  filterSection.appendChild(stockBlock);
  return filterSection;
}

export default createFilterSection;