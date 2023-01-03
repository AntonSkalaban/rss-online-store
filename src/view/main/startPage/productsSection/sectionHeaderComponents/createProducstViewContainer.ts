
import { renderPage } from '../../../../..';
import createElement from '../../../../helpers/createElemt'

const createProducstViewContainerts = () => {
  const cardsViews = createElement('div', 'cards-views-container');
  const bigGrid = createElement('p', 'grid-size');
  const smallGrid = createElement('p', 'grid-size');

  bigGrid.textContent = 'Big grid';
  smallGrid.textContent = 'Small grid';
  bigGrid.dataset.size = 'big';
  smallGrid.dataset.size = 'small';

  bigGrid.addEventListener('click', () => {
    localStorage.setItem('gridSize', 'big')
    renderPage()
  });

  smallGrid.addEventListener('click', () => {
    localStorage.setItem('gridSize', 'small')
    renderPage()
  });

  cardsViews.appendChild(bigGrid);
  cardsViews.appendChild(smallGrid);
  return cardsViews;
}

export default createProducstViewContainerts;