import { renderFilteredByCategory } from './../../../../../index';
import createElement from "../../../../helpers/createElemt";
import createBlockWitdthTitle from "../../../../helpers/createBlockWithTitle";
import { IProduct } from "../../../../../model/dataType";

const createCategoryBlock = (data: Array<IProduct>) => {
  const [categoryBlock, categoryMain ] = createBlockWitdthTitle('filter-block', 'filetr-title', 'category');
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

      const filterByCategory = () => renderFilteredByCategory();

      label.addEventListener('change', filterByCategory);
    })

  categoryMain.appendChild(list);
  return categoryBlock;
}

export default createCategoryBlock;