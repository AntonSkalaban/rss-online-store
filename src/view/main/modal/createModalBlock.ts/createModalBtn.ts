import { cartController } from './../../../../controller/cartController';
import editHistory from "../../../../model/editHistory";
import createButton from "../../../helpers/createButton"

const createModalBtn = () => {
  const btn = createButton('modal-btn', 'Buy');

  const closeModal = () => {
    const errors = Array.from(document.querySelectorAll<HTMLElement>('.error'));

    if (errors.every((error) => getComputedStyle(error).display == 'none')) {
      setTimeout(() => {
        cartController.handleClearCart();
        editHistory('/');
      }, 3000);
      const modal = document.querySelector('.modal');
      if (modal) modal.innerHTML ='Order is processed';
    }
  }

  btn.addEventListener('click', closeModal)
  return btn;
}

export default createModalBtn;
