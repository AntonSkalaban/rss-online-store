import { IProduct } from './model/dataType';
import data from './model/data';
import renderProducts from './model/productsLoader';
import createApp from "./view/app";

import './assets/styles/normalize.css';
import './styles.scss';

const root = document.querySelector('#root');
const app = createApp(data);

if (root) root.appendChild(app)


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

export const renderFilteredByStock = () => {
  renderPage()
}

export const renderResetPage = () => {
  renderProducts(data);
}

const checkSearchInput = (data: Array<IProduct>, params: Array<string>) => {
  let newData = [...data];
  let allParams = [...params];
  const searchInput = document.querySelector<HTMLInputElement>('.search-input');
  if (searchInput) {
    const searchVal = searchInput.value.toLowerCase();
    if (searchVal) {
      newData = newData.filter((el) => {
        return (
          el.title.toLowerCase().includes(searchVal) || el.description.toLowerCase().includes(searchVal)
          || el.price.toString().includes(searchVal) || el.brand.toLowerCase().includes(searchVal)
          || el.category.toLowerCase().includes(searchVal)
        )
      })
      if (window.location.href.includes('search')) {
        allParams = allParams.map((params) => {
          if (params.includes('search')) {
            let val = params.split('=')[1];
            val =  searchVal;
            return 'search=' + val
          }
          return params;
        }); 
      } else {
        allParams.push('search=' + searchVal);
        if (!allParams[0]) allParams.splice(0, 1)  
      }
    } else if (!searchVal && window.location.href.includes('search')) {
      allParams =  allParams.filter((params) => !params.includes('search'));
    }
  } 
  const arr: [Array<IProduct>, Array<string> ] =  [newData, allParams]
  return arr;
}

const checkCategoryFilter = (data: Array<IProduct>, params: Array<string>) => {
  let newData = [...data];
  let allParams = [...params];

  const categoryCheckboxes = Array.from(document.querySelectorAll<HTMLInputElement>('.category__checkbox'));
  const activeCategoryCheckboxes = categoryCheckboxes.filter((el) => el.checked) //forEach - classList.toggle()
  const categoryParams = allParams.find((params) => params.includes('category'));
  
  if (activeCategoryCheckboxes.length) {
    const  activeCategoryes = activeCategoryCheckboxes.map((el) => el.value.toLowerCase());
    newData = newData.filter((product) => activeCategoryes.includes(product.category.toLowerCase()));
  
    if (categoryParams) {
      const activeParams = categoryParams
        .split('=')[1]
        .split('%E2%86%95')
        .filter((category) => activeCategoryes.includes(category))

      activeCategoryes.forEach((category) => {
        if (!activeParams.includes(category)) activeParams.push(category)
      })

      allParams = allParams.map((params) => {
        if (params.includes('category')) {
          return  'category=' + activeParams.join('↕')
        }
        return params
      })
    } else {
      allParams.push('category=' + activeCategoryes[0]);
      if (!allParams[0]) allParams.splice(0, 1)  
    }
  } else if (!activeCategoryCheckboxes.length && categoryParams) {
    allParams = allParams.filter((params) => !params.includes('category')) 
  }
  const arr: [Array<IProduct>, Array<string> ] =  [newData, allParams]
  return arr;
}

const checkBrandFilter = (data: Array<IProduct>, params: Array<string>) => {
  let newData = [...data];
  let allParams = [...params];
  const brandCheckboxes = Array.from(document.querySelectorAll<HTMLInputElement>('.brand__checkbox'));
  const activeBrandCheckboxes = brandCheckboxes.filter((el) => el.checked) //forEach - classList.toggle()
  const brandParams = allParams.find((params) => params.includes('brand')); 

  if (activeBrandCheckboxes.length) {
    const  activeBrands = activeBrandCheckboxes.map((el) => el.value.toLowerCase());
    newData = newData.filter((product) => activeBrands.includes(product.brand.toLowerCase()));
   
    if (brandParams) {
      const activeParams = brandParams
        .split('=')[1]
        .split('%E2%86%95')
        .filter((brand) => activeBrands.includes(brand))

      activeBrands.forEach((brand) => {
        if (!activeParams.includes(brand)) activeParams.push(brand)
      })

      allParams =  allParams.map((params) => {
        if (params.includes('brand')) {
          return  'brand=' + activeParams.join('↕')
        }
        return params
      })

    } else {
      allParams.push('brand=' + activeBrands[0]);
      if (!allParams[0]) allParams.splice(0, 1)  
    }
  } else if (!activeBrandCheckboxes.length && brandParams) {
    allParams = allParams.filter((params) => !params.includes('brand'))
  }
  const arr: [Array<IProduct>, Array<string> ] =  [newData, allParams]
  return arr;
}

export const renderPage = () => {
  
  const sortInput = document.querySelector<HTMLInputElement>('.sort-input');

  const lowerPriceSlider = document.querySelector<HTMLInputElement>('.lower-price-slider');
  const upperPriceSlider = document.querySelector<HTMLInputElement>('.upper-price-slider');
  const lowerPrice = document.querySelector<HTMLInputElement>('.lower-price-value');
  const upperPrice = document.querySelector<HTMLInputElement>('.upper-price-value');

  const lowerStockSlider = document.querySelector<HTMLInputElement>('.lower-stock-slider');
  const upperStockSlider = document.querySelector<HTMLInputElement>('.upper-stock-slider');
  const lowerStock = document.querySelector<HTMLInputElement>('.lower-stock-value');
  const upperStock = document.querySelector<HTMLInputElement>('.upper-stock-value');

  let newData: Array<IProduct> = [...data];
  const url = new URL(window.location.href);
  let allParams = url.search.substring(1).split('&')

  const searchState = checkSearchInput(newData, allParams)
  newData = searchState[0];
  allParams = searchState[1];



  if (sortInput) {
    const sortOption = sortInput.value;
    console.log(sortOption)
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
    } else if (sortOption.includes('DESC')) {
      newData = newData.sort((a, b) => +b[sortParam] - +a[sortParam]);
    }
  
    if (window.location.href.includes('sort') && sortInput.value) {
      allParams = allParams.map((params) => {
        if (params.includes('sort')) {
          let val = params.split('=')[1];
          val = sortParam + '-' + (sortOption.includes('ASC') ? 'ASC' : 'DESC');
          return 'sort=' + val
        }
        return params;
      }); 
    } else if (!window.location.href.includes('sort') && sortInput.value){
      const val = sortParam + '-' + (sortOption.includes('ASC') ? 'ASC' : 'DESC');
      allParams.push('sort=' + val);
      if (!allParams[0]) allParams.splice(0, 1)  
    } else {
      allParams =  allParams.filter((params) => !params.includes('sort'));
    }
  }

  const categoryState = checkCategoryFilter(newData, allParams)
  newData = categoryState[0];
  allParams = categoryState[1];

  const brandState = checkBrandFilter(newData, allParams)
  newData = brandState[0];
  allParams = brandState[1];

  
  const newurl = url.origin + ((allParams[0]) ? '/?' + allParams.join('&') : '');
  window.history.pushState({path:newurl}, '', newurl);
  

  if(lowerPriceSlider && upperPriceSlider && lowerPrice && upperPrice) {
    const minPrice = Math.min(+lowerPriceSlider.value, +upperPriceSlider.value);
    const maxPrice = Math.max(+lowerPriceSlider.value, +upperPriceSlider.value);

    lowerPrice.textContent = `${ minPrice }$`;
    upperPrice.textContent = `${ maxPrice }$`;

    newData = newData.filter((el) => el.price >= minPrice && el.price <= maxPrice);
  }

  if(lowerStockSlider && upperStockSlider && lowerStock && upperStock) {
    const maxStock = Math.max(+lowerStockSlider.value, +upperStockSlider.value);
    const minStock = Math.min(+lowerStockSlider.value, +upperStockSlider.value);

    lowerStock.textContent = `${ minStock }`;
    upperStock.textContent = `${ maxStock }`;

    newData = newData.filter((el) => el.stock >= minStock && el.stock <= maxStock);
  }
  
  renderProducts(newData);
}