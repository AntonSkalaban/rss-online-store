import createElement from "../../../helpers/createElemt";
import createCategoryBlock from "./filterBlocks/createCategoryBlock";
import createBrandBlock from "./filterBlocks/createBrandBlock";
import { IProduct } from "../../../../model/dataType";

const createFilterSection = (data: Array<IProduct>) => {
  const filterSection = createElement('div', 'filter-section');
  const filterBlock = createCategoryBlock(data);
  const brandBlock = createBrandBlock(data);

  filterSection.appendChild(filterBlock);
  filterSection.appendChild(brandBlock);
  return filterSection;
}

export default createFilterSection;