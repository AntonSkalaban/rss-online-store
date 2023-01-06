import renderPage from '../../../../..';
import createElement from '../../../../helpers/createElemt'

const createProducstViewContainerts = () => {
  const cardsViews = createElement('div', 'cards-views-container');
  const bigGrid = createElement('p', 'grid-size');
  const smallGrid = createElement('p', 'grid-size');

  bigGrid.textContent = 'Big grid';
  smallGrid.textContent = 'Small grid';
  bigGrid.dataset.size = 'big';
  smallGrid.dataset.size = 'small';

  const getNewUrl = (e: Event) => {
    const url = new URL(window.location.href);
    let allParams = url.search.substring(1).split('&');

    const target = <HTMLElement>e.target;
    const value = target.dataset?.size;

    if (window.location.href.includes('grid')) {
      allParams = allParams.map((params) => {
        return params.includes('grid')
          ? `grid=${ value }`
          : params;
      }); 

    } else {
      allParams.push(`grid=${ value }`);
      if (!allParams[0]) allParams.shift();
    }

    renderPage(allParams);
  }

  bigGrid.addEventListener('click', getNewUrl );
  smallGrid.addEventListener('click', getNewUrl );

  cardsViews.appendChild(bigGrid);
  cardsViews.appendChild(smallGrid);
  return cardsViews;
}

export default createProducstViewContainerts;