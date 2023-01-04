//import { renderFilteredByCategory } from './../../../../../index';
import createElement from "../../../../helpers/createElemt";
import createBlockWitdthTitle from "../../../../helpers/createBlockWithTitle";
import { IProduct } from "../../../../../model/dataType";
import renderPage from "../../../../..";

const createCategoryBlock = (data: Array<IProduct>) => {
  const [categoryBlock, categoryMain ] = createBlockWitdthTitle('filter-block', 'filetr-title', 'Category');
  const list = createElement('ul', 'category__list');

  data
    .map(el => el.category)
    .filter((el, index, arr) => arr.indexOf(el) === index)
    .forEach((category) => {
      const listItem = createElement('li', 'category__list-item');
      const label = createElement('label', 'category__label');

      const checkbox = <HTMLInputElement>createElement('input', 'category__checkbox');
      checkbox.type = 'checkbox';
      checkbox.value = category.toLowerCase();

      const itemsCounter = createElement('p', 'category__items-counter');
      const totalItems = createElement('span', 'categoty__total-items');
      const avalibleItems =  createElement('span', 'categoty__avalible-items');

      totalItems.textContent = `${ data.filter((el) => category === el.category).length }`;
      avalibleItems.textContent = '0';
      avalibleItems.dataset.id = category.toLowerCase();
      
      itemsCounter.appendChild(avalibleItems);
      itemsCounter.innerHTML += '/';
      itemsCounter.appendChild(totalItems);

      list.appendChild(listItem);
      listItem.appendChild(label);
      label.appendChild(checkbox);
      label.innerHTML += category;
      listItem.appendChild(itemsCounter);

      const getNewUrl = (e: Event) => {
        const target = <HTMLInputElement>e.target;
        const value = target.value;
        const isChecked = target.checked;

        const url = new URL(window.location.href);
        let allParams = url.search.substring(1).split('&');

        if (isChecked) {
          if (window.location.href.includes('category')) {
            allParams = allParams.map((param) => {
              return param.includes('category') 
                ? `${ param }↕${ value }`
                : param;
            })
          } else {
            allParams.push(`category=${ value }`);
            if (!allParams[0]) allParams.shift();
          }

        } else {
          const categoryes = allParams.find((param) => param.includes('category'))?.split('=')[1].split('%E2%86%95');

          if (categoryes && categoryes.length > 1) {
            allParams = allParams.map((param) => {
              return param.includes('category') 
                ? `category=${ categoryes.filter((category) => category !== value ).join('↕') }`
                : param;
            });
          } else {
            allParams = allParams.filter((param) => !param.includes('category'));
          }
        }

        renderPage(allParams)
        }
    //     if (activeCategoryCheckboxes.length) {
    //       const  activeCategoryes = activeCategoryCheckboxes.map((el) => el.value.toLowerCase());
    //       newData = newData.filter((product) => activeCategoryes.includes(product.category.toLowerCase()));
        
    //       if (categoryParams) {
    //         const activeParams = categoryParams
    //           .split('=')[1]
    //           .split('%E2%86%95')
    //           .filter((category) => activeCategoryes.includes(category))
      
    //         activeCategoryes.forEach((category) => {
    //           if (!activeParams.includes(category)) activeParams.push(category)
    //         })
      
    //         allParams = allParams.map((params) => {
    //           if (params.includes('category')) {
    //             return  'category=' + activeParams.join('↕')
    //           }
    //           return params
    //         })
    //       } else {
    //         allParams.push('category=' + activeCategoryes[0]);
    //         if (!allParams[0]) allParams.shift();
            
    //       }
    //     } else if (!activeCategoryCheckboxes.length && categoryParams) {
    //       allParams = allParams.filter((params) => !params.includes('category')) 
    //     }
    //     const arr: [Array<IProduct>, Array<string> ] =  [newData, allParams]
    //     return arr;

      label.addEventListener('change', getNewUrl);
    })

  categoryMain.appendChild(list);
  return categoryBlock;
}

export default createCategoryBlock;