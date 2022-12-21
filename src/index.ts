import { IProduct } from './model/dataType';
import './styles.scss';
import data from './model/data';
import renderProducts from './model/productsLoader';
import createApp from "./view/app"

let newData = [...data];
const filteredData = [...data];

export const renderSearchProducts = (e: Event) => {
  const target = <HTMLInputElement>e.target;
  const searchVal = target.value.toUpperCase();
 
  const products = filteredData.filter((el) => {
 
    if (
      el.title.toUpperCase().includes(searchVal) || el.description.toUpperCase().includes(searchVal)
      || el.price.toString().includes(searchVal) || el.brand.toUpperCase().includes(searchVal)
      || el.category.toUpperCase().includes(searchVal)
    ) {
      return el;
    }
  })
  newData = [...products];

  renderProducts(newData);
}

export const renderSortProducts = (e: Event) => {
  const target = <HTMLInputElement>e.target;
  const sortOption = target.value;

  let sortParam: keyof IProduct;

  if (sortOption.includes('price')) {
    sortParam = 'price';
  } else if (sortOption.includes('rating')) {
    sortParam = 'rating';
  } else {
    sortParam = 'discountPercentage';
  }

  if (sortOption.includes('ASC')) {
    newData = newData.sort((a, b) => +a[sortParam] - +b[sortParam]);
  } else {
    newData = newData.sort((a, b) => +b[sortParam] - +a[sortParam]);
  }
  renderProducts(newData);
}


const root = document.querySelector('#root');
const app = createApp();

if (root) root.appendChild(app)

renderProducts(newData);