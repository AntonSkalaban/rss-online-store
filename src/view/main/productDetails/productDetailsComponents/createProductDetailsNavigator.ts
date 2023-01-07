import createElement from "../../../helpers/createElemt"
import { IProduct } from "../../../../model/dataType";
import data from "../../../../model/data";

const createProductDetailsNavigator = (product: IProduct) => {

  const row = createElement('div', 'product-details__navigator');
  const arrows = createElement('p', 'product-details__arrows');
  arrows.textContent = '>>';
  const arrows1 = arrows.cloneNode(true);
  const arrows2 = arrows.cloneNode(true);
  const store = createElement('p');
  const category = createElement('p');
  const brand = createElement('p');
  const prouctName = createElement('p');

  
  store.textContent = 'store';
  category.textContent = `${product.category}`;
  brand.textContent = `${product.brand}`;
  prouctName.textContent = `${product.title}`;

  row.appendChild(store);
  row.appendChild(arrows);
  row.appendChild(category);
  row.appendChild(arrows1);
  row.appendChild(brand);
  row.appendChild(arrows2);
  row.appendChild(prouctName);

  return row;
}

export default createProductDetailsNavigator;