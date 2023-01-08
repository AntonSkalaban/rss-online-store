import { checkValid, hideError } from "../../../../controller/modal/formHandler";
import createElement from "../../../helpers/createElemt";

const createPersonalDetails = () => {
  
  const checkNameValid = (e: Event) => {
    checkValid(e, /^[A-Z]{1}[a-z]{2,}\s+[A-Z]{1}[a-z]{2,}/, nameError);
  }

  const checkNumberValid = (e: Event) => {
    checkValid(e, /^\+\d{9,}$/, numberError);
  }

  const checkAdressValid = (e: Event) => {
    checkValid(e, /^[A-Za-z]{5,}\s+[[A-Za-z]{5,}\s+[[A-Za-z]{5,}/, adressError);
  }

  const checkEmailValid = (e: Event) => {
    checkValid(e, /^\S+@\S+\.\S+$/, emailError);
  }

  const removeNameError = (e: Event) => {
    hideError(e, /^[A-Z]{1}[a-z]{2,}\s+[A-Z]{1}[a-z]{2,}/, nameError)
  }

  const removeNumberError = (e: Event) => {
    hideError(e, /^\+\d{9,}/, numberError);
  }

  const removeAdressError = (e: Event) => {
    hideError(e, /^[A-Za-z]{5,}\s+[[A-Za-z]{5,}\s+[[A-Za-z]{5,}/, adressError);
  }

  const removeEmailError = (e: Event) => {
    hideError(e, /^\S+@\S+\.\S+$/, emailError);
  }

  const block = createElement('div', 'personal-details')

  const nameRow = createElement('div', 'modal-row');
  const nameInput = <HTMLInputElement>createElement('input', 'modal-input');
  const nameError = createElement('p', 'name-error');
  nameError.classList.add('error');
    
  const numberRow = createElement('div', 'modal-row');
  const numberInput = <HTMLInputElement>createElement('input', 'number-input');
  const numberError = createElement('p', 'number-error');
  numberError.classList.add('error');

  const adressRow = createElement('div', 'adress-row');
  const adressInput = <HTMLInputElement>createElement('input', 'adress-input');
  const adressError = createElement('p', 'adress-error');
  adressError.classList.add('error');


  const emailRow = createElement('div', 'modal-row');
  const emailInput = <HTMLInputElement>createElement('input', 'email-input');
  const emailError = createElement('p', 'email-error');
  emailError.classList.add('error');

  nameInput.placeholder = 'Name';
  nameError.textContent = 'Name error';
  //nameError.style.display = 'none';

  numberInput.type = 'tel';
  numberInput.placeholder = 'Phone number';
  numberError.textContent = 'Number error';
  //numberError.style.display = 'none';

  adressInput.placeholder = 'Devilery address';
  adressError.textContent = 'Adress error';
  //adressError.style.display = 'none';

  emailInput.type = "email";
  emailInput.placeholder = 'E-mail';
  emailError.textContent = 'E-mail error';
  //emailError.style.display = 'none';

  block.appendChild(nameRow);
  nameRow.appendChild(nameInput);
  nameRow.appendChild(nameError);

  block.appendChild(numberRow);
  numberRow.appendChild(numberInput);
  numberRow.appendChild(numberError); 

  block.appendChild(adressRow);
  adressRow.appendChild(adressInput);
  adressRow.appendChild(adressError);

  block.appendChild(emailRow);
  emailRow.appendChild(emailInput);
  emailRow.appendChild(emailError);

  nameInput.addEventListener('change', checkNameValid);
  nameInput.addEventListener('input', removeNameError);

  numberInput.addEventListener('change', checkNumberValid);
  numberInput.addEventListener('input', removeNumberError);

  adressInput.addEventListener('change', checkAdressValid);
  adressInput.addEventListener('input', removeAdressError);

  emailInput.addEventListener('change', checkEmailValid);
  emailInput.addEventListener('input', removeEmailError);

  return block;
}

export default createPersonalDetails;