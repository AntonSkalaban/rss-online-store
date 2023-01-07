import createElement from "../../helpers/createElemt";
import createCardlDetails from "./createModalBlock.ts/createCardDetails";
import createPersonalDetails from "./createModalBlock.ts/createPersonalDetails";

const createModal = () => {
  const modal = createElement('div', 'modal');

  const productPersonalDetailsTitle = createElement('h4');
  const productPersonalDetails = createPersonalDetails();
  const cardTitle = createElement('h4');
  const productCard = createCardlDetails();

  cardTitle.textContent = 'Credit card details';
  productPersonalDetailsTitle.textContent = 'Product details';

  modal.appendChild(productPersonalDetailsTitle);
  modal.appendChild(productPersonalDetails);
  modal.appendChild(cardTitle);
  modal.appendChild(productCard);


//Draft styles 
  modal.style.width = '70%';
  modal.style.height = '90%';

  modal.style.position = 'absolute';
  modal.style.bottom = '5%';

  modal.style.display = 'flex';
  modal.style.flexDirection = 'column';
  modal.style.justifyContent = 'space-between'
  modal.style.alignItems = 'center';


  return modal;
}

export default createModal;