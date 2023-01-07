import createElement from "../../../helpers/createElemt";


const createCardlDetails = () => {
  const cardBlock = createElement('div', 'card-details');
  const cardTopRow = createElement('div', 'card-details__number');
  const cardBotttomRow = createElement('div', 'card-details__number');

  const numberLabel = createElement('label', 'card-details__number-label');
  const numberInput = createElement('input', 'card-details__number-input');
 
  const validLabel= createElement('label', 'card-details__number-valid');
  const validInput = createElement('input', 'card-details__number-input');

  const cvvLabel= createElement('label', 'card-details__number-valid');
  const cvvInput = createElement('input', 'card-details__number-input');
  
  return cardBlock;
}

export default createCardlDetails;