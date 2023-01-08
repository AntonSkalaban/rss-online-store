import createElement from "../../../../helpers/createElemt";
import createBlockWitdthTitle from "../../../../helpers/createBlockWithTitle";
import { IProduct } from "../../../../../model/dataType";
import { getFilteredUrl } from "../../../../../controller/startPage/changeUrl";

import '../filterBlocks/filterBlock.scss';

const createCheckboxBlock = (data: Array<IProduct>, key: keyof IProduct) => {
  const getNewUrl = (e: Event) => {
    getFilteredUrl(e, key);
  }

  const [categoryBlock, categoryMain ] = createBlockWitdthTitle(
    'filter-block', 'filter-title', key.replace(key[0], key[0].toUpperCase())
  )
  const list = createElement('ul', `${ key }__list`);

  data
    .map(el => String(el[key]).toLowerCase())
    .filter((el, index, arr) => arr.indexOf(String(el).toLowerCase()) === index)
    .forEach((props) => {
      const listItem = createElement('li', `${ key }__list-item`);
      const label = createElement('label', `${ key }__label`);

      const checkbox = <HTMLInputElement>createElement('input', `${ key }__checkbox`);
      checkbox.type = 'checkbox';
      checkbox.value = String(props).toLowerCase();

      const itemsCounter = createElement('p', `${ key }__items-counter`);
      const totalItems = createElement('span', `${ key }__total-items`);
      const avalibleItems =  createElement('span', `${ key }__avalible-items`);

      totalItems.textContent = `${
        data.filter((el) => String(props).toLowerCase() === String(el[key]).toLowerCase()).length
      }`;
      avalibleItems.textContent = '0';
      avalibleItems.dataset.id = String(props).toLowerCase();

      itemsCounter.appendChild(avalibleItems);
      itemsCounter.innerHTML += '/';
      itemsCounter.appendChild(totalItems);

      list.appendChild(listItem);
      listItem.appendChild(label);
      label.appendChild(checkbox);
      label.innerHTML += props;
      listItem.appendChild(itemsCounter);

      label.addEventListener('change', getNewUrl);
    })

  categoryMain.appendChild(list);
  return categoryBlock;
}

export default createCheckboxBlock;