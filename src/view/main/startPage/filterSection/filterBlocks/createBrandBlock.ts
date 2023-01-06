//import { renderFilteredByBrand } from './../../../../../index';
import createElement from "../../../../helpers/createElemt";
import createBlockWitdthTitle from "../../../../helpers/createBlockWithTitle";
import { IProduct } from "../../../../../model/dataType";
import "../filterBlocks/filterBlock.css"
import renderPage from "../../../../..";

const createBrandBlock = (data: Array<IProduct>) => {
  const [categoryBlock, categoryMain ] = createBlockWitdthTitle('filter-block', 'filter-title', 'Brand');
  const list = createElement('ul', 'category__list');

  data
    .map(el => el.brand.toLowerCase())
    .filter((el, index, arr) => arr.indexOf(el) === index)
    .forEach((brand) => {
      const listItem = createElement('li', 'brand__list-item');
      const label = createElement('label', 'brand__label');

      const checkbox = <HTMLInputElement>createElement('input', 'brand__checkbox');
      checkbox.type = 'checkbox';
      checkbox.value = brand.toLowerCase();

      const itemsCounter = createElement('p', 'brand__items-counter');
      const totalItems = createElement('span', 'brand__total-items');
      const avalibleItems =  createElement('span', 'brand__avalible-items');

      totalItems.textContent = `${ data.filter((el) => brand.toLowerCase() === el.brand.toLowerCase()).length }`;
      avalibleItems.textContent = '0';
      avalibleItems.dataset.id = brand.toLowerCase();
      
      itemsCounter.appendChild(avalibleItems);
      itemsCounter.innerHTML += '/';
      itemsCounter.appendChild(totalItems);

      list.appendChild(listItem);
      listItem.appendChild(label);
      label.appendChild(checkbox);
      label.innerHTML += brand.replace(brand[0], brand[0].toUpperCase());
      listItem.appendChild(itemsCounter);

      const getNewUrl = (e: Event) => {
        const target = <HTMLInputElement>e.target;
        const value = target.value;
        const isChecked = target.checked;

        const url = new URL(window.location.href);
        let allParams = url.search.substring(1).split('&');

        if (isChecked) {
          if (window.location.href.includes('brand')) {
            allParams = allParams.map((param) => {
              return param.includes('brand') 
                ? `${ param }↕${ value }`
                : param;
            })
          } else {
            allParams.push(`brand=${ value }`);
            if (!allParams[0]) allParams.shift();
          }

        } else {
          const categoryes = allParams.find((param) => param.includes('brand'))?.split('=')[1].split('%E2%86%95');

          if (categoryes && categoryes.length > 1) {
            allParams = allParams.map((param) => {
              return param.includes('brand') 
                ? `brand=${ categoryes.filter((brand) => brand !== value ).join('↕') }`
                : param;
            });
          } else {
            allParams = allParams.filter((param) => !param.includes('brand'));
          }
        }

        renderPage(allParams);
      }

      label.addEventListener('change', getNewUrl);
    })

  categoryMain.appendChild(list);
  return categoryBlock;
}

export default createBrandBlock;