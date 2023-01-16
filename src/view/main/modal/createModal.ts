import createElement from "../../helpers/createElemt";
import createCardlDetails from "./createModalBlock.ts/createCardDetails";
import createModalBtn from "./createModalBlock.ts/createModalBtn";
import createPersonalDetails from "./createModalBlock.ts/createPersonalDetails";

import './modal.scss';

const createModal = () => {
  const modal = createElement('div', 'modal');

  const productPersonalDetailsTitle = createElement('h4');
  const productPersonalDetails = createPersonalDetails();
  const cardTitle = createElement('h4');
  const productCard = createCardlDetails();
  const modalBtn = createModalBtn();

  cardTitle.textContent = 'Credit card details';
  productPersonalDetailsTitle.textContent = 'Personal details';

  modal.appendChild(productPersonalDetailsTitle);
  modal.appendChild(productPersonalDetails);
  modal.appendChild(cardTitle);
  modal.appendChild(productCard);
  modal.appendChild(modalBtn);

  return modal;
}

export default createModal;