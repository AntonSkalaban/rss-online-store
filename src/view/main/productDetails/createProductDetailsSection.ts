import createElement from "../../helpers/createElemt";
import createProductDetailsNavigator from './productDetailsComponents/createProductDetailsNavigator' 
import createProductDetailsBlock from './productDetailsComponents/createProductDetailsBlock'
import data from "../../../model/data";

const createProductDetailsSection = (cardId: number) => {
  const product = data.find((el) => el.id === cardId);
  if (!product) return;

  const productDetailsSection = createElement('div', 'product-details');

  const productDetailsNavigator = createProductDetailsNavigator(product);
  const productDetailsBlock = createProductDetailsBlock(product);

  productDetailsSection.appendChild(productDetailsNavigator);
  productDetailsSection.appendChild(productDetailsBlock);

  return productDetailsSection;
}

export default createProductDetailsSection;