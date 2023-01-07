import { checkValid, hideError } from "../../../../controller/modal/formHandler";
import createElement from "../../../helpers/createElemt";


const createCardlDetails = () => {

  const checkNumber = (e: Event) => {
    checkValid(e, /^\d{16}$/, numberError);

    const target = <HTMLInputElement>e.target;
    const firstDigit = target.value[0];

    if (firstDigit === '1') {
      cardImg.src = ''
    } else if (firstDigit === '2') {
      cardImg.src = '';
    } else if (firstDigit === '3') {
      cardImg.src = '';
    }
  }

  const checkDate = (e: Event) => {
    checkValid(e, /^\d{1}[0-2]{1}\/\d{2}$/, dateError);
  }

  const removeDetaError = (e: Event) => {
    const target = <HTMLInputElement>e.target;
    if (target.value.length === 2) target.value += '/';
    
    hideError(e, /^\d{1}[0-2]{1}\/\d{2}$/ , dateError)
  }

  const cardBlock = createElement('div', 'card-details');
  const cardTopRow = createElement('div', 'card-details__number');
  const cardBotttomRow = createElement('div', 'card-details__number');

  const cardImgContainer = createElement('div', 'card-details__card-img-container');
  const cardImg = <HTMLImageElement>createElement('img', 'card-img');
  const numberInput = <HTMLInputElement>createElement('input', 'card-details__number-input');
  const numberError = createElement('p', 'card-number-error');
  numberError.classList.add('error');

  const dateLabel= createElement('label', 'card-details__date-label');
  const dateInput = <HTMLInputElement>createElement('input', 'card-details__date-input');
  const dateError = createElement('p', 'card-date-error');
  dateError.classList.add('error');

  const cvvLabel= createElement('label', 'card-details__number-label');
  const cvvInput = <HTMLInputElement>createElement('input', 'card-details__cvv-input');
  const cvvError = createElement('p', 'card-cvv-error');
  cvvError.classList.add('error');

  cardImg.src = '' //placeholderImg
  numberInput.placeholder= 'Card number';
  numberError.textContent = 'number error';

  dateLabel.textContent = 'Valid:';
  dateInput.placeholder = ' MM/YY';
  dateError.textContent = 'valid error';

  cvvLabel.textContent = 'CVV:';
  cvvInput.placeholder = ' XXX';
  cvvError.textContent = 'cvv error';

  cardBlock.appendChild(cardTopRow);
  cardBlock.appendChild(cardBotttomRow);

  cardTopRow.appendChild(cardImgContainer);
  cardImgContainer.appendChild(cardImg);
  cardTopRow.appendChild(numberInput);

  cardBotttomRow.appendChild(dateLabel);
  cardBotttomRow.appendChild(dateInput);

  cardBotttomRow.appendChild(cvvLabel);
  cardBotttomRow.appendChild(cvvInput);

  cardBlock.appendChild(numberError);
  cardBlock.appendChild(dateError);
  cardBlock.appendChild(cvvError);

  numberInput.addEventListener('change', checkNumber);
  dateInput.addEventListener('change', checkDate);
  dateInput.addEventListener('input', removeDetaError);
//  cvvInput.addEventListener('change', checkCvv);

  return cardBlock;
}

export default createCardlDetails;