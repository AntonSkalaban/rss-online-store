import { checkValid, hideError } from "../../../../controller/modal/formHandler";
import createElement from "../../../helpers/createElemt";

const createPersonalDetails = () => {
  
  const checkNameValid = (e: Event) => {
    const value = (<HTMLInputElement>e.target)?.value.trim();

    checkValid(value, /^[A-Z]{1}[a-z]{2,}\s+[A-Z]{1}[a-z]{2,}/, nameError);
  }

  const checkNumberValid = (e: Event) => {
    const value = (<HTMLInputElement>e.target)?.value.trim();

    checkValid(value, /^\+\d{9,}$/, numberError);
  }

  const checkAdressValid = (e: Event) => {
    const value = (<HTMLInputElement>e.target)?.value.trim();

    checkValid(value, /^[A-Za-z]{5,}\s+[[A-Za-z]{5,}\s+[[A-Za-z]{5,}/, adressError);
  }

  const checkEmailValid = (e: Event) => {
    const value = (<HTMLInputElement>e.target)?.value.trim();

    checkValid(value, /^\S+@\S+\.\S+$/, emailError);
  }

  const removeNameError = (e: Event) => {
    const value = (<HTMLInputElement>e.target)?.value.trim();

    hideError(value, /^[A-Z]{1}[a-z]{2,}\s+[A-Z]{1}[a-z]{2,}/, nameError)
  }

  const removeNumberError = (e: Event) => {
    const target = <HTMLInputElement>e.target
    const value = target.value.trim();

    if (
      value[0] !== '+' || isNaN(+value.substring(2, value.length - 1))
    ) target.value = value.substring(0, value.length - 1);
 
    hideError(value, /^\+\d{9,}/, numberError);
  }

  const removeAdressError = (e: Event) => {
    const value = (<HTMLInputElement>e.target)?.value.trim();

    hideError(value, /^[A-Za-z]{5,}\s+[[A-Za-z]{5,}\s+[[A-Za-z]{5,}/, adressError);
  }

  const removeEmailError = (e: Event) => {
    const value = (<HTMLInputElement>e.target)?.value.trim();

    hideError(value, /^\S+@\S+\.\S+$/, emailError);
  }

  const block = createElement('div', 'personal-details')

  const nameRow = createElement('div', 'modal-row');
  const nameInput = <HTMLInputElement>createElement('input', 'modal-input');
  const nameError = createElement('p', 'error');
    
  const numberRow = createElement('div', 'modal-row');
  const numberInput = <HTMLInputElement>createElement('input', 'number-input');
  const numberError = createElement('p', 'error');

  const adressRow = createElement('div', 'adress-row');
  const adressInput = <HTMLInputElement>createElement('input', 'adress-input');
  const adressError = createElement('p', 'error');


  const emailRow = createElement('div', 'modal-row');
  const emailInput = <HTMLInputElement>createElement('input', 'email-input');
  const emailError = createElement('p', 'error');
 
  nameInput.placeholder = 'Name';
  nameError.textContent = 'Name error';

  numberInput.type = 'tel';
  numberInput.placeholder = 'Phone number';
  numberError.textContent = 'Number error';

  adressInput.placeholder = 'Devilery address';
  adressError.textContent = 'Adress error';

  emailInput.type = "email";
  emailInput.placeholder = 'E-mail';
  emailError.textContent = 'E-mail error';

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