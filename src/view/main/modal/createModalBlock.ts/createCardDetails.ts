import { checkValid, hideError, checkLength } from "../../../../controller/modal/formHandler";
import createElement from "../../../helpers/createElemt";

import maestoImg from '../../../../assets/img/maestro.jpg';
import visaImg from '../../../../assets/img/visa.jpg';
import masterCardImg from '../../../../assets/img/master-card.jpg';
import unknownCardImg from '../../../../assets/img/no-logo.jpg';

const createCardlDetails = () => {

  // Выбор картинок для картыж
  const checkNumberValid = (e: Event) => {
    const value = (<HTMLInputElement>e.target)?.value.trim();
    const firstDigit = value[0];

    if (firstDigit === '1') {
      cardImg.src = maestoImg;
    } else if (firstDigit === '2') {
      cardImg.src = visaImg;
    } else if (firstDigit === '3') {
      cardImg.src = masterCardImg;
    }

    checkValid(value, /^\d{16}$/, numberError);
  }

  const checkDateValid = (e: Event) => {
    const value = (<HTMLInputElement>e.target)?.value.trim();

    checkValid(value, /^(0[1-9]|1[0-2])\/?([0-9]{2})$/, dateError);
  }

  const checkCvvValid = (e: Event) => {
    const value = (<HTMLInputElement>e.target)?.value.trim();

    checkValid(value, /^\d{3}$/, cvvError);
  }

  const inputNumberHandler = (e: Event) => {
    const target = <HTMLInputElement>e.target;
    const value = target.value.trim();

    checkLength(target, value, 16);
    hideError(value, /^\d{16}$/ , numberError)
  }

  const inputDateHandler = (e: Event) => {
    const target = <HTMLInputElement>e.target;
    const value = target.value.trim();

    const lastEl = value[value.length-1];
    if (
      isNaN(+lastEl) && lastEl !== '/'
    ) target.value = value.substring(0, value.length - 1);

    if (
      value.length === 2 && !isNaN(+value[0]) && !isNaN(+value[1])
    ) target.value += '/';

    checkLength(target, value, 5);
    hideError(value, /^\d{1}[0-2]{1}\/\d{2}$/, dateError)
  }

  const inputCvvHandler = (e: Event) => {
    const target = <HTMLInputElement>e.target;
    const value = target.value.trim();

    checkLength(target, value, 3);
    hideError(value, /^\d{3}/ , cvvError)
  }

  const cardBlock = createElement('div', 'card-details');

  const cardTopRow = createElement('div', 'card-details__top-row');

  const cardImgContainer = createElement('div', 'card-details__card-img-container');
  const cardImg = <HTMLImageElement>createElement('img', 'card-img');
  const numberInput = <HTMLInputElement>createElement('input', 'card-details__number-input');
  const numberError = createElement('p', 'error');


  const cardBotttomRow = createElement('div', 'card-details__bottom-row');

  const cardDateContainer = createElement('div', 'card-details__deta-container');
  const dateLabel= createElement('label', 'card-details__date-label');
  const dateInput = <HTMLInputElement>createElement('input', 'card-details__date-input');
  const dateError = createElement('p', 'error');

  const cardCvvContainer = createElement('div', 'card-details__cvv-container');
  const cvvLabel= createElement('label', 'card-details__number-label');
  const cvvInput = <HTMLInputElement>createElement('input', 'card-details__cvv-input');
  const cvvError = createElement('p', 'error');

  cardImg.src = unknownCardImg;
  numberInput.type = 'number';
  numberInput.placeholder= 'Card number';
  numberError.textContent = 'number error';

  dateInput.placeholder = ' MM/YY';
  dateError.textContent = 'valid error';

  cvvInput.type = 'number';
  cvvInput.placeholder = ' XXX';
  cvvError.textContent = 'cvv error';

  cardBlock.appendChild(cardTopRow);
  cardBlock.appendChild(cardBotttomRow);

  /* Не знаю как правильно вложить элементы в topRow из-за
    блока div(номарноли ли div класть в label?),
    так что создай контейнеры для верхней строки сама.

    Нижнюю строку предпологал сделать так:
  <bottomRow
    <cardDateContainer:                 <cardCvvContainer
      <dataLabel <input/> />              <cvvLabel <input/> />
      <dateError/>                        <cvvError/>
     />                                 />
  />
  */
  cardTopRow.appendChild(cardImgContainer);
  cardImgContainer.appendChild(cardImg);
  cardTopRow.appendChild(numberInput);
  cardBlock.appendChild(numberError);

  cardBotttomRow.appendChild(cardDateContainer);
  cardDateContainer.appendChild(dateLabel);
  cardDateContainer.appendChild(dateError);
  dateLabel.textContent = 'Valid:';
  dateLabel.appendChild(dateInput);

  cardBotttomRow.appendChild(cardCvvContainer);
  cardCvvContainer.appendChild(cvvLabel);
  cardCvvContainer.appendChild(cvvError);
  cvvLabel.textContent = 'CVV:';
  cvvLabel.appendChild(cvvInput);

  numberInput.addEventListener('change', checkNumberValid);
  numberInput.addEventListener('input', inputNumberHandler);

  dateInput.addEventListener('change', checkDateValid);
  dateInput.addEventListener('input', inputDateHandler);

  cvvInput.addEventListener('change', checkCvvValid);
  cvvInput.addEventListener('input', inputCvvHandler);

  return cardBlock;
}

export default createCardlDetails;
