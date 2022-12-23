import createBlockWitdthTitle from "../../../helpers/createBlockWithTitle"
import data from "../../../../model/data"
import { IProduct } from "../../../../model/dataType"


const createProductBlock = (id: string) => {
  const product = data.find((el) => el.id === +id);
  if (!product) return;
  const [ productBlock, productMain ] = createBlockWitdthTitle('details-block', 'details-title', product.title);

}