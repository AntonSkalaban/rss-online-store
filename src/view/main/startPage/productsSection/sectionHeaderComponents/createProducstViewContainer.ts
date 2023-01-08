import { getGridUrl } from './../../../../../controller/startPage/changeUrl';
import createElement from '../../../../helpers/createElemt'

const createProducstViewContainerts = () => {
  const getNewUrl = (e: Event) => {
    getGridUrl(e);
  }

  const cardsViews = createElement('div', 'cards-views-container');
  const bigGrid = createElement('p', 'grid-size');
  const smallGrid = createElement('p', 'grid-size');

  bigGrid.textContent = 'Big grid';
  smallGrid.textContent = 'Small grid';
  bigGrid.dataset.size = 'big';
  smallGrid.dataset.size = 'small';

  bigGrid.addEventListener('click', getNewUrl );
  smallGrid.addEventListener('click', getNewUrl );

  cardsViews.appendChild(bigGrid);
  cardsViews.appendChild(smallGrid);
  return cardsViews;
}

export default createProducstViewContainerts;