import { IProduct } from './model/dataType';
import data from './model/data';
import renderProducts from './model/productsLoader';
import createApp from "./view/app";

import './assets/styles/normalize.css';
import './styles.scss';

const root = document.querySelector('#root');
const app = createApp(data);

if (root) root.appendChild(app)


// export const renderSearchProducts = () => {
//   renderPage()
// }

// export const renderSortProducts = () => {
//   renderPage()
// }

// export const renderFilteredByBrand = () => {
//   renderPage()
// }

// export const renderFilteredByCategory = () => {
//   renderPage()
// }

// export const renderFilteredByPrice = () => {
//   renderPage()
// }

// export const renderFilteredByStock = () => {
//   renderPage()
// }

export const renderResetPage = () => {
  renderProducts(data);
}

// const checkSortInput = (data: Array<IProduct>, params: Array<string>)  => {
//   let newData = [...data];
//   let allParams = [...params];
//   const sortInput = document.querySelector<HTMLInputElement>('.sort-input');


//   if (sortInput) {
//     let sortOption = sortInput.value;

//     let sortParam: keyof IProduct;

//     if (sortOption.includes('price')) {
//       sortParam = 'price';
//     } else if (sortOption.includes('rating')) {
//       sortParam = 'rating';
//     } else {
//       sortParam = 'discountPercentage';
//     } 

//     if (sortOption.includes('ASC')) {
//       newData = newData.sort((a, b) => +a[sortParam] - +b[sortParam]);
//     } else if (sortOption.includes('DESC')) {
//       newData = newData.sort((a, b) => +b[sortParam] - +a[sortParam]);
//     }

//     if (!sortOption) {
//       if (window.location.href.includes('sort')) {
//         allParams = allParams.filter((params) => !params.includes('sort'));
//       }

//     } else {
//       if (window.location.href.includes('sort')) {
//         allParams = allParams.map((params) => {
//           return params.includes('sort')
//             ? `sort=$${ sortParam }-${ sortOption.includes('ASC') ? 'ASC' : 'DESC' }`
//             : params;
//         }); 
//       } else {
//         allParams.push(`sort=$${ sortParam }-${ sortOption.includes('ASC') ? 'ASC' : 'DESC' }`);
  
//         if (!allParams[0]) allParams.shift();
//     }

//   //   if (window.location.href.includes('sort') && sortOption) {
//   //     allParams = allParams.map((params) => {
//   //       if (params.includes('sort')) {
//   //         const val = `${ sortParam }-${ sortOption.includes('ASC') ? 'ASC' : 'DESC' }`;
//   //         return `sort=${ val }`;
//   //       }
//   //       return params;
//   //     }); 

//   //   } else if (!window.location.href.includes('sort') && sortOption){
//   //     const val = sortParam + '-' + (sortOption.includes('ASC') ? 'ASC' : 'DESC');
//   //     allParams.push(`sort=${ val }`);

//   //     if (!allParams[0]) allParams.shift();

//   //   } else {
//   //     allParams = allParams.filter((params) => !params.includes('sort'));
//   //   }
//   // }

//   const arr: [Array<IProduct>, Array<string> ] =  [newData, allParams]
//   return arr;
// }
//   }
// }

// const checkSearchInput = (data: Array<IProduct>, params: Array<string>) => {
//   let newData = [...data];
//   let allParams = [...params];
//   const searchInput = document.querySelector<HTMLInputElement>('.search-input');
//   if (searchInput) {
//     const searchVal = searchInput.value.toLowerCase();
//     if (searchVal) {
//       newData = newData.filter((el) => {
//         return (
//           el.title.toLowerCase().includes(searchVal) || el.description.toLowerCase().includes(searchVal)
//           || el.price.toString().includes(searchVal) || el.brand.toLowerCase().includes(searchVal)
//           || el.category.toLowerCase().includes(searchVal)
//         )
//       })

//       if (window.location.href.includes('search')) {
//         allParams = allParams.map((params) => {
//           if (params.includes('search')) {
//             let val = params.split('=')[1];
//             val =  searchVal;
//             return 'search=' + val
//           }
//           return params;
//         }); 
//       } else {
//         allParams.push('search=' + searchVal);
//         if (!allParams[0]) allParams.splice(0, 1)  
//       }
//     } else if (!searchVal && window.location.href.includes('search')) {
//       allParams =  allParams.filter((params) => !params.includes('search'));
//     }
//   } 
//   const arr: [Array<IProduct>, Array<string> ] =  [newData, allParams]
//   return arr;
// }

// const checkCategoryFilter = (data: Array<IProduct>, params: Array<string>) => {
//   let newData = [...data];
//   let allParams = [...params];

//   const categoryCheckboxes = Array.from(document.querySelectorAll<HTMLInputElement>('.category__checkbox'));
//   const activeCategoryCheckboxes = categoryCheckboxes.filter((el) => el.checked) //forEach - classList.toggle()
//   const categoryParams = allParams.find((params) => params.includes('category'));
  
//   if (activeCategoryCheckboxes.length) {
//     const  activeCategoryes = activeCategoryCheckboxes.map((el) => el.value.toLowerCase());
//     newData = newData.filter((product) => activeCategoryes.includes(product.category.toLowerCase()));
  
//     if (categoryParams) {
//       const activeParams = categoryParams
//         .split('=')[1]
//         .split('%E2%86%95')
//         .filter((category) => activeCategoryes.includes(category))

//       activeCategoryes.forEach((category) => {
//         if (!activeParams.includes(category)) activeParams.push(category)
//       })

//       allParams = allParams.map((params) => {
//         if (params.includes('category')) {
//           return  'category=' + activeParams.join('↕')
//         }
//         return params
//       })
//     } else {
//       allParams.push('category=' + activeCategoryes[0]);
//       if (!allParams[0]) allParams.shift();
      
//     }
//   } else if (!activeCategoryCheckboxes.length && categoryParams) {
//     allParams = allParams.filter((params) => !params.includes('category')) 
//   }
//   const arr: [Array<IProduct>, Array<string> ] =  [newData, allParams]
//   return arr;
// }

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
      if (!allParams[0]) allParams.shift();
    }
  } else if (!activeBrandCheckboxes.length && brandParams) {
    allParams = allParams.filter((params) => !params.includes('brand'))
  }
  const arr: [Array<IProduct>, Array<string> ] =  [newData, allParams]
  return arr;
}

const checkGridSize = (params: Array<string>) => {
  const grids = Array.from(document.querySelectorAll<HTMLElement>('.grid-size'));
  const bigGrid = grids.find((el) => el.dataset.size === 'big');
  //const smallGrid = grids.find((el) => el.dataset.size === 'small');

  let allParams = [...params];
  
  const gridSize = localStorage.getItem('gridSize');

  if (!window.location.href.includes('grid')) {

    if (gridSize) {
      allParams.push('grid=' + gridSize);
      if (!allParams[0]) allParams.shift();
    }
  } else {
    allParams = allParams.map((params) => {
      if (params.includes('grid')) {
        if (gridSize) {
          return 'grid=' + gridSize;
        } else {
          localStorage.setItem('gridSize', params.split('=')[1]);
          return params;
        }
      }
      return params;
    })
  }

  

  if (!gridSize) {
    bigGrid?.classList.add('active');
  } else {
    grids.forEach((el) => (el.dataset.size === gridSize) ? el.classList.add('active') : el.classList.remove('active'));
  }

  return allParams;
}



const renderPage = (params: Array<string>) => {
  // const lowerPriceSlider = document.querySelector<HTMLInputElement>('.lower-price-slider');
  // const upperPriceSlider = document.querySelector<HTMLInputElement>('.upper-price-slider');
  // const lowerPrice = document.querySelector<HTMLInputElement>('.lower-price-value');
  // const upperPrice = document.querySelector<HTMLInputElement>('.upper-price-value');

  // const lowerStockSlider = document.querySelector<HTMLInputElement>('.lower-stock-slider');
  // const upperStockSlider = document.querySelector<HTMLInputElement>('.upper-stock-slider');
  // const lowerStock = document.querySelector<HTMLInputElement>('.lower-stock-value');
  // const upperStock = document.querySelector<HTMLInputElement>('.upper-stock-value');

  let newData: Array<IProduct> = [...data];



  params.forEach((param) => {
    if (param.includes('sort')) {
      const sortInput = document.querySelector<HTMLInputElement>('.sort-input');
      
      let  sortParam: keyof IProduct;

      if (param.includes('price')) {
        sortParam = 'price';
      } else if (param.includes('rating')) {
        sortParam = 'rating';
      } else {
        sortParam = 'discountPercentage';
      }

      if (sortInput) {
        sortInput.value = param.split('=')[1];
      }

      if (param.includes('ASC')) {
        newData = newData.sort((a, b) => +a[sortParam] - +b[sortParam]);
      } else if (param.includes('DESC')) {
        newData = newData.sort((a, b) => +b[sortParam] - +a[sortParam]);
      }
    }

    if (param.includes('search')) {
      const searchInput = document.querySelector<HTMLInputElement>('.search-input');
      const value =  param.split('=')[1];

      if (searchInput) {
        searchInput.value = value
      }

      newData = newData.filter((el) => {
        return (
          el.title.toLowerCase().includes(value) || el.description.toLowerCase().includes(value)
            || el.price.toString().includes(value) || el.brand.toLowerCase().includes(value)
            || el.category.toLowerCase().includes(value)
        )
      })
    }

    if (param.includes('category')) {
      const categoryCheckboxes = document.querySelectorAll<HTMLInputElement>('.category__checkbox');
      categoryCheckboxes.forEach((checkbox) => checkbox.checked = param.includes(checkbox.value));

      newData = newData.filter((product) => param.includes(product.category.toLowerCase()));
    }
  })
  

  console.log(params)
  const url = new URL(window.location.href);
  const newurl = url.origin + ((params[0]) ? '/?' + params.join('&') : '');
  window.history.pushState({path:newurl}, '', newurl);

  renderProducts(newData);

  
}
  // const url = new URL(window.location.href);
  // const urlParams = url.search.substring(1).split('&');
  // const storageParams = localStorage.getItem('params'); 

  // let allParams = storageParams ? JSON.parse(storageParams) : urlParams;

  // const sortState = checkSortInput(newData, allParams)
  // newData = sortState[0];
  // allParams = sortState[1];

  // const searchState = checkSearchInput(newData, allParams)
  // newData = searchState[0];
  // allParams = searchState[1];


  //allParams = checkGridSize(allParams);
  //console.log(allParams)



  // const categoryState = checkCategoryFilter(newData, allParams)
  // newData = categoryState[0];
  // allParams = categoryState[1];

  // const brandState = checkBrandFilter(newData, allParams)
  // newData = brandState[0];
  // allParams = brandState[1];
  // console.log(allParams)
  // console.log(((allParams[0]) ? '/?' + allParams.join('&') : ''))
  
 

  // if(lowerPriceSlider && upperPriceSlider && lowerPrice && upperPrice) {
  //   const minPrice = Math.min(+lowerPriceSlider.value, +upperPriceSlider.value);
  //   const maxPrice = Math.max(+lowerPriceSlider.value, +upperPriceSlider.value);

  //   lowerPrice.textContent = `${ minPrice }$`;
  //   upperPrice.textContent = `${ maxPrice }$`;

  //   newData = newData.filter((el) => el.price >= minPrice && el.price <= maxPrice);
  // }

  // if(lowerStockSlider && upperStockSlider && lowerStock && upperStock) {
  //   const maxStock = Math.max(+lowerStockSlider.value, +upperStockSlider.value);
  //   const minStock = Math.min(+lowerStockSlider.value, +upperStockSlider.value);

  //   lowerStock.textContent = `${ minStock }`;
  //   upperStock.textContent = `${ maxStock }`;

  //   newData = newData.filter((el) => el.stock >= minStock && el.stock <= maxStock);
  // }
  
  // localStorage.setItem('params', JSON.stringify(allParams));

  // const newurl = url.origin + ((allParams[0]) ? '/?' + allParams.join('&') : '');
  // console.log(newurl)
  // window.history.pushState({path:newurl}, '', newurl);
  
  
  // console.log(storageParams);
//   renderProducts(newData);
// }

export default renderPage;