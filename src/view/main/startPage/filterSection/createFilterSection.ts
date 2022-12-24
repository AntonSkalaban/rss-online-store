import createElement from "../../../helpers/createElemt";
import createCategoryBlock from "./filterBlocks/createCategoryBlock";
import createBrandBlock from "./filterBlocks/createBrandBlock";
import createPriceBlock from "./filterBlocks/createPriceBlock";
import { IProduct } from "../../../../model/dataType";

const createFilterSection = (data: Array<IProduct>) => {
  const filterSection = createElement('div', 'filter-section');
  const filterBlock = createCategoryBlock(data);
  const brandBlock = createBrandBlock(data);
  const priceBlock = createPriceBlock(data);

  filterSection.appendChild(filterBlock);
  filterSection.appendChild(brandBlock);
  filterSection.appendChild(priceBlock);
  return filterSection;
}

export default createFilterSection;