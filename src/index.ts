import { IProduct } from './model/dataType';
import data from './model/data';
import renderProducts from './model/productsLoader';
import createApp from "./view/app";
import { filrerData, filrerSlider, searchData, sortData } from './model/changeData';
import { renderFilterValue, renderSearchValue, renderSortValue } from './controller/startPage/updateValues';
import './assets/styles/normalize.css';
import './styles.scss';


const root = document.querySelector('#root');
const app = createApp(data);

if (root) root.appendChild(app)

const renderPage = (params: Array<string>) => {
  let newData: Array<IProduct> = [...data];

  params.forEach((param) => {

    if (param.includes('sort=')) {
      newData = sortData(param, newData);
      renderSortValue(param);
    }

    if (param.includes('search=')) {
      const value = param.split('=')[1];

      newData = searchData(newData, value);
      renderSearchValue(value)
    }

    if (param.includes('category=')) {
      newData = filrerData(newData, param, 'category');
      renderFilterValue(param, 'category', '.category__checkbox');
    }

    if (param.includes('brand=')) {
      newData = filrerData(newData, param, 'brand');
      renderFilterValue(param, 'brand', '.brand__checkbox');
    }

    if (param.includes('price=')) {
      const [ minPrice, maxPrice ] = param.split('=')[1].split('%E2%86%95');
      newData = filrerSlider(newData, 'price', minPrice, maxPrice);
    }

    if (param.includes('stock=')) {
      const [ minStock, maxStock ] = param.split('=')[1].split('%E2%86%95');
      newData = filrerSlider(newData, 'stock', minStock, maxStock);
    }
  })
  
  const url = new URL(window.location.href);
  const newurl = url.origin + ((params[0]) ? '/?' + params.join('&') : '');
  window.history.pushState({path:newurl}, '', newurl);

  renderProducts(newData, params); 
}

export default renderPage;