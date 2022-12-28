import { renderSortProducts } from './../../../../../index';
import createElement from "../../../../helpers/createElemt";

const createSortInput =  () => {
  const sortInput = <HTMLSelectElement>createElement('select', 'sort-input');
  sortInput.classList.add('main-input');
  
  const placeholder =  <HTMLOptionElement>createElement('option', 'select-option');
  placeholder.disabled;
  placeholder.selected;
  placeholder.hidden;
  placeholder.value = '';
  placeholder.textContent = 'Sort options';
  
  const sotrByPticeASC = <HTMLOptionElement>createElement('option', 'select-option');
  const sotrByPticeDESC = <HTMLOptionElement>createElement('option', 'select-option');
  const sotrByRatingASC = <HTMLOptionElement>createElement('option', 'select-option');
  const sotrByRatingDESC = <HTMLOptionElement>createElement('option', 'select-option');
  const sotrByDiscountASC = <HTMLOptionElement>createElement('option', 'select-option');
  const sotrByDiscountDESC = <HTMLOptionElement>createElement('option', 'select-option');

  sotrByPticeASC.value = 'price ASC';
  sotrByPticeDESC.value = 'price DESC';
  sotrByRatingASC.value = 'rating ASC';
  sotrByRatingDESC.value = 'rating DESC';
  sotrByDiscountASC.value = 'discount ASC';
  sotrByDiscountDESC.value = 'discont DESC';

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

  const sortProducts = (e: Event) => renderSortProducts();

  sortInput.addEventListener('change', sortProducts);

  return sortInput;
}

export default createSortInput;