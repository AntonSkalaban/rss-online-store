import createElement from '../../../../helpers/createElemt';
import createButton from '../../../../helpers/createButton';
import renderPage from '../../../../..';


const createFilterBtnsBlock = () => {
  const btnConteiner = createElement('div', 'filter-buttons-container');
  const resetBtn = createButton('reset-btn', 'Reset Filters');
  const copyBtn = createButton('copy-btn', 'Copy link')
  btnConteiner.appendChild(resetBtn);
  btnConteiner.appendChild(copyBtn);

  const resetUrl = () => {
    document.querySelectorAll<HTMLInputElement>('.category__checkbox').forEach((el) => el.checked = false);
    document.querySelectorAll<HTMLInputElement>('.brand__checkbox').forEach((el) => el.checked = false);
    renderPage(['']);
  }

  const copyUrl = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
    } catch (err) {
      return;
    }
  }
  resetBtn.addEventListener('click', resetUrl);
  copyBtn.addEventListener('click', copyUrl)
  return btnConteiner;
}

export default createFilterBtnsBlock;