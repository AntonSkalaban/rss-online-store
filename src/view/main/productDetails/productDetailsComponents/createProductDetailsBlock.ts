import createBlockWitdthTitle from "../../../helpers/createBlockWithTitle"
import { IProduct } from "../../../../model/dataType"
import { createProductImgsBlock, createProductDataBlock, createCartBlock } from "./blockFragmenst";


const createProductDetailsBlock = (product: IProduct) => {
  const [ productBlock, productMain ] = createBlockWitdthTitle('details-block', 'details-title', product.title);
  productMain.classList.add('product-details__block-main')
  const imgBlock = createProductImgsBlock(product);
  const datablock = createProductDataBlock(product)
  const cartBlock = createCartBlock(product)

  productMain.appendChild(imgBlock);
  productMain.appendChild(datablock);
  productMain.appendChild(cartBlock);
  return productBlock;
}

export default createProductDetailsBlock;