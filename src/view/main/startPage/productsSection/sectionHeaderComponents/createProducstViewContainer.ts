import { getGridUrl } from './../../../../../controller/startPage/changeUrl';
import createElement from '../../../../helpers/createElemt'
import renderPage from '../../../../..';

const createProducstViewContainerts = () => {
  const renderPagesGrid = (e: Event) => {
    const allParams = getGridUrl(e);
    renderPage(allParams);
  }

  const cardsViews = createElement('div', 'cards-views-container');
  const bigGrid = createElement('p', 'grid-size');
  const smallGrid = createElement('p', 'grid-size');

  bigGrid.textContent = 'Big grid';
  smallGrid.textContent = 'Small grid';
  bigGrid.dataset.size = 'big';
  smallGrid.dataset.size = 'small';

  bigGrid.addEventListener('click', renderPagesGrid );
  smallGrid.addEventListener('click', renderPagesGrid );

  cardsViews.appendChild(bigGrid);
  cardsViews.appendChild(smallGrid);
  return cardsViews;
}

export default createProducstViewContainerts;