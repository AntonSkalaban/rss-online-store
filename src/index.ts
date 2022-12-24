import { IProduct } from './model/dataType';
import data from './model/data';
import renderProducts from './model/productsLoader';
import createApp from "./view/app";

import './assets/styles/normalize.css';
import './styles.scss';

const root = document.querySelector('#root');
const app = createApp(data);

if (root) root.appendChild(app)

renderProducts(data);


export const renderSearchProducts = () => {
  renderPage()
}

export const renderSortProducts = () => {
  renderPage()
}

export const renderFilteredByBrand = () => {
  renderPage()
}

export const renderFilteredByCategory = () => {
  renderPage()
}

export const renderFilteredByPrice = () => {
  renderPage()
}

const renderPage = () => {
  const searchInput = document.querySelector<HTMLInputElement>('.search-input');
  const sortInput = document.querySelector<HTMLInputElement>('.sort-input');
  const categoryCheckboxes = Array.from(document.querySelectorAll<HTMLInputElement>('.category__checkbox'));
  const brandCheckboxes = Array.from(document.querySelectorAll<HTMLInputElement>('.brand__checkbox'));
  const lowerPriceSlider = document.querySelector<HTMLInputElement>('.lower-price-slider');
  const upperPriceSlider = document.querySelector<HTMLInputElement>('.upper-price-slider');
  const lowerPrice = document.querySelector<HTMLInputElement>('.lower-price-value');
  const upperPrice = document.querySelector<HTMLInputElement>('.upper-price-value');

  let newData = [...data];

  if (searchInput) {
    const searchVal = searchInput.value.toUpperCase();
    if (searchVal) {
      newData = newData.filter((el) => {
        return (
          el.title.toUpperCase().includes(searchVal) || el.description.toUpperCase().includes(searchVal)
          || el.price.toString().includes(searchVal) || el.brand.toUpperCase().includes(searchVal)
          || el.category.toUpperCase().includes(searchVal)
        )
      })
    }
  }

  if (sortInput) {
    const sortOption = sortInput.value;

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
  }

  const activeCategoryCheckboxes = categoryCheckboxes.filter((el) => el.checked) //forEach - classList.toggle()

  if (activeCategoryCheckboxes.length) {
    const  activeCategoryes = activeCategoryCheckboxes.map((el) => el.value.toUpperCase());
    newData = newData.filter((product) => activeCategoryes.includes(product.category.toUpperCase()));
  }

  const activeBrandCheckboxes = brandCheckboxes.filter((el) => el.checked) //forEach - classList.toggle()

  if (activeBrandCheckboxes.length) {
    const  activeCategoryes = activeBrandCheckboxes.map((el) => el.value.toUpperCase());
    newData = newData.filter((product) => activeCategoryes.includes(product.brand.toUpperCase()));
  }

  if(lowerPriceSlider && upperPriceSlider && lowerPrice && upperPrice) {
    const maxPrice = Math.max(+lowerPriceSlider.value, +upperPriceSlider.value);
    const minPrice = Math.min(+lowerPriceSlider.value, +upperPriceSlider.value);

    lowerPrice.textContent = `${ minPrice }$`;
    upperPrice.textContent = `${ maxPrice }$`;

    newData = newData.filter((el) => el.price >= minPrice && el.price <= maxPrice);
  }

  renderProducts(newData);
}
