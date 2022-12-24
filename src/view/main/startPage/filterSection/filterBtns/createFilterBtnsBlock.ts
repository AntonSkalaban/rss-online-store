import createElement from '../../../../helpers/createElemt';
import createButton from '../../../../helpers/createButton';
import { renderResetPage } from '../../../../..';

const createFilterBtnsBlock = () => {
  const btnConteiner = createElement('div', 'filter-buttons-container');
  const resetBtn = createButton('reset-btn', 'Reset Filters');

  btnConteiner.appendChild(resetBtn);


  const resetFilters = () => {
    renderResetPage()
  }
  resetBtn.addEventListener('click', resetFilters)
  return btnConteiner;
}

export default createFilterBtnsBlock;