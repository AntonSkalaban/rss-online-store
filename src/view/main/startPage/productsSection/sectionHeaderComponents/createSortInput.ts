// import { renderSortProducts, renderPage } from './../../../../../index';
import createElement from "../../../../helpers/createElemt";
import { IProduct } from '../../../../../model/dataType';
import renderPage from "../../../../..";


const createSortInput =  () => {
  const sortInput = <HTMLSelectElement>createElement('select', 'sort-input');
  sortInput.classList.add('main-input');
  
  const placeholder =  <HTMLOptionElement>createElement('option', 'select-option');
  placeholder.disabled = true;
  placeholder.selected = true;
  placeholder.value = '';
  placeholder.textContent = 'Sort options';
  
  const sotrByPticeASC = <HTMLOptionElement>createElement('option', 'select-option');
  const sotrByPticeDESC = <HTMLOptionElement>createElement('option', 'select-option');
  const sotrByRatingASC = <HTMLOptionElement>createElement('option', 'select-option');
  const sotrByRatingDESC = <HTMLOptionElement>createElement('option', 'select-option');
  const sotrByDiscountASC = <HTMLOptionElement>createElement('option', 'select-option');
  const sotrByDiscountDESC = <HTMLOptionElement>createElement('option', 'select-option');

  sotrByPticeASC.value = 'price-ASC';
  sotrByPticeDESC.value = 'price-DESC';
  sotrByRatingASC.value = 'rating-ASC';
  sotrByRatingDESC.value = 'rating-DESC';
  sotrByDiscountASC.value = 'discountPercentage-ASC';
  sotrByDiscountDESC.value = 'discountPercentage-DESC';

  sotrByPticeASC.text = 'sort by price ASC';
  sotrByPticeDESC.text = 'sort by price DESC';
  sotrByRatingASC.text = 'sort by rating ASC';
  sotrByRatingDESC.text = 'sort by rating DESC';
  sotrByDiscountASC.text = 'sort by discount ASC';
  sotrByDiscountDESC.text = 'sort by discont DESC';

  sortInput.add(placeholder)
  sortInput.add(sotrByPticeASC);
  sortInput.add(sotrByPticeDESC);
  sortInput.add(sotrByRatingASC);
  sortInput.add(sotrByRatingDESC); 
  sortInput.add(sotrByDiscountASC);
  sortInput.add(sotrByDiscountDESC); 

  const getNewUrl = (e: Event) => {
    const sortOption = <HTMLInputElement>e.target
    const optionValue = sortOption?.value; 

    const url = new URL(window.location.href);
    let allParams = url.search.substring(1).split('&');


    if (window.location.href.includes('sort')) {
      allParams = allParams.map((params) => {
        return params.includes('sort')
          ? `sort=${ optionValue }`
          : params;
      });

    } else {
      allParams.push(`sort=${ optionValue }`);

      if (!allParams[0]) allParams.shift();
    }

    renderPage(allParams)
  };

  sortInput.addEventListener('change', getNewUrl);

  return sortInput;
}

export default createSortInput;
